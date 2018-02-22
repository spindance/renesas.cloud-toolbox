import { Response as BaseResponse } from '../../common/src/lib'

export default class Response extends BaseResponse {
  build() {
    return {
      speech: `<speak>${this.speech}</speak>`, // ensure valid SSML
      displayText: this.speech,
      data: {
        expect_user_response: Boolean(this.reprompt),
        is_ssml: false
      }
    }
  }
}
