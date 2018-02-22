
export default class Response {
  constructor(speech, reprompt = null) {
    this.speech = speech
    this.reprompt = reprompt
  }

  build() {
    return {}
  }
}
