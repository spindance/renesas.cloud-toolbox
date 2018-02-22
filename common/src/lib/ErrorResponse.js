import Response from './Response'

export default class ErrorResponse extends Response {
  constructor(error) {
    super(error.message)
  }
}
