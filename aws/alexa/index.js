import Alexa from 'alexa-sdk'
import Request from './Request'
import * as intents from '../../common/src/intents'

export default (event, context, callback) => {
  const alexa = Alexa.handler(event, context, callback);
  const handlerNames = ['GetStatus', 'SetStatus', 'LightStatus', 'Unhandled']
  const handlers = {}

  handlerNames.forEach((handlerName) => {
    handlers[handlerName] = async function () {
      // NOTE: 'this' here, is provided by alexa-sdk
      const request = new Request(this)
      console.log('Parsed for ', handlerName)

      if (this.event.request.dialogState !== 'COMPLETED') {
        console.log('DialogState: Not complete')
        this.emit(':delegate')
      } else {
        console.log('DialogState: Complete')
        const intentOptions = {
          nextAi: 'google'
        };
        const response = await intents[handlerName](request, intentOptions)
        console.log('response.speech is:', response.speech)

        const speech = this.response.speak(response.speech)
        if (response.reprompt) {
          console.log('reprompt with:', response.reprompt)
          speech.listen(response.reprompt)
        }
        this.emit(':responseReady')
      }
    }
  })

  alexa.registerHandlers(handlers);
  alexa.execute();
}
