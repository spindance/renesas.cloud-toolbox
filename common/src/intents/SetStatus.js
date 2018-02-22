import { Api, Response } from '../lib'

export default async (request) => {
  const api = new Api()
  const { slots } = request
  const responseCode = await api.putStatus(slots.Board, {
    [`${slots.Light.toLowerCase()}`]: slots.Switch
  });

  let speech;

  if (responseCode === null || responseCode === undefined) {
    speech = `Sorry, I could not find a board named ${slots.Board}.`
  } else if (responseCode === 200) {
    speech = `Okay, I turned the ${slots.Light} light ${slots.Switch} for ${slots.Board}.`
  } else {
    // Response code, not 200
    speech = `Sorry, something went wrong when trying to turn the ${slots.Light} light ${slots.Switch} for ${slots.Board}`
  }

  return new Response(speech)
}
