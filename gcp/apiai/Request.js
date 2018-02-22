import get from 'lodash.get'
import { Request as BaseRequest } from '../../common/src/lib'

export default class Request extends BaseRequest {
  constructor(event) {
    const slots = get(event, 'result.parameters')
    const intent = get(event, 'result.metadata.intentName')
    super(slots, intent)
  }
}
