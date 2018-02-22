import { Response } from '../lib'

export default async () => new Response(
  'Welcome to the Renesas Cloud demo. You can ask for the temperature, humidity, or pressure.' +
  ' Or turn lights on and off. ',
  'What would you like to do?' // reprompt text
)
