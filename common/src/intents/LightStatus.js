import { LIGHTS } from '../lib/constants'
import { Api, Response } from '../lib'

const commaAnd = (a) => [a.slice(0, -1).join(', '), a.slice(-1)[0]].join(a.length < 2 ? '' : ' and ')

export default async (request) => {
  const api = new Api()
  const { slots } = request
  const status = await api.getStatus(slots.Board)
  let speech

  if (status == null) {
    speech = `Sorry, I could not find a board named ${slots.Board}.`
  } else {
    const { properties } = status
    console.log('Props: ', properties, slots)

    if (slots.Light) {
      // If a light was specified by user, respond with status of that light
      const value = properties[slots.Light.toLowerCase()]
      speech = `For ${slots.Board}, the ${slots.Light} light is ${value}.`
    } else if (slots.Switch) {
      // No light specified by user, respond with status of all lights for ${Switch}
      const lightsMatching = LIGHTS.filter((light) => properties[light] === slots.Switch.toLowerCase())
      if (lightsMatching.length === 1) {
        speech = `For ${slots.Board}, the ${lightsMatching[0]} light is ${slots.Switch}.`
      } else if (lightsMatching.length > 1) {
        speech = `For ${slots.Board}, the ${commaAnd(lightsMatching)} lights are ${slots.Switch}.`
      } else {
        speech = `For ${slots.Board}, there are no lights ${slots.Switch}.`
      }
    }
  }

  return new Response(speech)
}
