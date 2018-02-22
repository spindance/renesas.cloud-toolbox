import gcpEnv from '../settings/gcpEnv'; // eslint-disable-line no-unused-vars
import Request from './Request'
import Response from './Response'
import * as intents from '../../common/src/intents'


export default async (httpRequest, httpResponse) => {
  console.log(JSON.stringify(httpRequest.body))
  const request = new Request(httpRequest.body)

  console.log('request intent', request.intent, request.slots)

  const intent = intents[request.intent] || intents.Unhandled
  console.log('intent determined as:', intent)

  const intentOptions = {
    nextAi: 'cortana'
  };
  const response = await intent(request, intentOptions)
  const googleResponse = new Response(response.speech).build()
  console.log('google response will be:', googleResponse)

  httpResponse.status(200).send(googleResponse)
}
