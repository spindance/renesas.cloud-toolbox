import * as builder from 'botbuilder';
import { Request as BaseRequest } from '../../common/src/lib';

export default class Request extends BaseRequest {
  constructor(args, entityNames = []) {
    const parsedSlots = {};

    const intentObj = args.intent;

    entityNames.forEach((entityName) => {
      const foundEntity = builder.EntityRecognizer.findEntity(intentObj.entities, entityName);
      parsedSlots[entityName] = foundEntity ? foundEntity.entity : null;
    });

    super(parsedSlots, intentObj);
  }
}
