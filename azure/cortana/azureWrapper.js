import get from 'lodash.get';
import { updateContext } from './azureLogger';

export default function lambda(connector) {
  const listener = connector.listen();

  const handler = (context, req) => {
    // NOTE: The context is REQUIRED for logging lines on Azure. This isn't a very clean way to do this,
    // but it works for now.
    updateContext(context);
    // NOTE: An initial log line is somehow required to trigger logging at all
    context.log.info(`Voice Utterance received as: ${get(context, 'bindings.req.body.text')}`);
    listener(req, context.res);
  };
  return handler;
}
