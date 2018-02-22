import * as builder from 'botbuilder';
import Request from '../Request';
import { LightStatus } from '../../../common/src/intents';
import { getPromptResponse } from '../dialogUtils';
import { azureLog } from '../azureLogger';


export default {
  name: 'LightStatus',
  intentName: 'LightStatus',
  waterfall: [
    (session, args, next) => {
      azureLog('LUIS found LightStatus');
      // Resolve entities passed from LUIS.
      const request = new Request(args, ['Light', 'Switch', 'Board']);

      session.dialogData.request = request;

      // Prompt for board
      if (!request.slots.Board) {
        builder.Prompts.text(session, 'Which board did you want?', {
          speak: 'Which board did you want?',
          retrySpeak: 'You can say the name of the board you wish to check.',
          inputHint: builder.InputHint.expectingInput
        });
      } else {
        next();
      }
    },
    (session, results) => {
      if (typeof results.response === 'string') {
        session.dialogData.request.slots.Board = getPromptResponse(results.response);
      }

      async function queryRns() {
        let intentResponse = await LightStatus(session.dialogData.request);
        if (intentResponse.speech) {
          intentResponse = intentResponse.speech;
        }

        // build an IMessage object
        const msg = new builder.Message(session)
          .text(intentResponse)
          .speak(`<speak>${intentResponse}</speak>`);

        // Send confirmation to user
        session.endDialog(msg);
      }

      // Query the renesas cloud
      queryRns();
    }
  ]
};
