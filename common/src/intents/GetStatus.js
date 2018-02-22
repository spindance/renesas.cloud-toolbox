import get from 'lodash.get'
import { Api, Response } from '../lib'


const PROPERTY_CONVERSIONS = {
  weather: 'temperature',
  'barometer reading': 'pressure',
  'moisture reading': 'humidity'
};

const NEXT_PROPERTY = {
  weather: 'barometer reading',
  'barometer reading': 'moisture reading',
  'moisture reading': null
};

const WAKE_WORDS = {
  alexa: 'Alexa',
  cortana: 'Hey Cortana',
  google: 'Ok Google'
};

const INVOCATION_NAME = 'Cloud Toolbox';

/**
 * Helper method to build out the resulting speech based on passed variables.
 *
 * @param  {String} property - Property requested by the user
 * @param  {*} value - Reading from the board
 * @param  {String} unit - Unit of measurement for the property
 * @param  {String} board - Name of the board
 * @param  {String} nextAi - (Optional) Pass to trigger a daisy-chain. Must be one of the Keys in WAKE_WORDS
 * @return {String} - The speech response that the AI should say
 */
function buildSpeech(property, value, unit, board, nextAi = null) {
  let convertedProp = PROPERTY_CONVERSIONS[property];
  let speech;
  let wakeWord;
  let nextProperty;

  convertedProp = convertedProp || property;

  speech = `The ${convertedProp} is ${value} ${unit} on ${board}.`;

  if (nextAi) {
    wakeWord = WAKE_WORDS[nextAi];
    nextProperty = NEXT_PROPERTY[property];
    if (nextProperty) {
      // NOTE: the leading space is important to chain the sentences together.
      speech += ` ${wakeWord} <break time="1200ms"/> ask ${INVOCATION_NAME} for the ${nextProperty} ` +
        `<break time="100ms"/> on the ${board} <break time="100ms"/> board`;
    }
  }

  return speech;
}


/**
 * Main Intent method
 */
export default async (request, options = {}) => {
  const api = new Api()
  const { slots } = request
  const property = get(slots, 'Property').toLowerCase()
  const status = await api.getStatus(slots.Board)
  const { nextAi } = options
  let speech

  console.log('status: ', status)

  if (status == null) {
    speech = `Sorry, I could not find a board named ${slots.Board}.`
  } else {
    const { properties } = status
    switch (property) {
      case 'temperature':
        speech = buildSpeech(property, properties.temperature, 'degrees fahrenheit', slots.Board);
        break;
      case 'pressure':
        speech = buildSpeech(property, properties.pressure, 'millibars', slots.Board);
        break;
      case 'humidity':
        speech = buildSpeech(property, properties.humidity, 'percent', slots.Board);
        break;
      // These 3 are special cases for the daisy-chain responses
      case 'weather':
        speech = buildSpeech(property, properties.temperature, 'degrees fahrenheit', slots.Board, nextAi);
        break;
      case 'barometer reading':
        speech = buildSpeech(property, properties.pressure, 'millibars', slots.Board, nextAi);
        break;
      case 'moisture reading':
        speech = buildSpeech(property, properties.humidity, 'percent', slots.Board, nextAi);
        break;
      // default case
      default:
        speech = `Sorry, I couldn't find any information for ${property}.`
        break;
    }
  }

  return new Response(speech)
}
