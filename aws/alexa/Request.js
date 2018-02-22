import get from 'lodash.get'
import { Request as BaseRequest } from '../../common/src/lib'

export default class Request extends BaseRequest {
  constructor(alexa) {
    const slots = get(alexa, 'event.request.intent.slots')
    const parsed = {}
    Object.keys(slots).forEach((slot) => { parsed[slot] = slots[slot].value })
    console.log(parsed)
    super(parsed)
  }
}
