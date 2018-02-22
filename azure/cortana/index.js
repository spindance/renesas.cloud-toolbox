import * as builder from 'botbuilder';
import { GetStatusDialog, LightStatusDialog, SetStatusDialog } from './Dialogs';
import { Unhandled } from '../../common/src/intents';
import { buildDialog } from './dialogUtils';
import azureWrapper from './azureWrapper';
import { azureLog } from './azureLogger';


// --------- Main logic ----------------

// Create a chat connector for communicating with Microsoft's Bot Framework Service
const connector = new builder.ChatConnector({
  appId: process.env.CTB_CORTANA_BOT_APP_ID,
  appPassword: process.env.CTB_CORTANA_BOT_APP_PASSWORD
});

// Wrap the connector so it can be called as an Azure Function.
const handler = azureWrapper(connector);

// export as the method for serverless to call
export { handler };

const bot = new builder.UniversalBot(connector, async (session) => {
  // If we get here, it's because LUIS did not handle the Intent
  azureLog('We hit the unhandled area.');
  const intentResponse = await Unhandled();

  const msg = new builder.Message(session)
    .text(intentResponse.speech)
    .speak(`<speak>${intentResponse.speech}</speak>`);

  session.send(msg);
});

// Add global LUIS recognizer to the bot
const luisAppUrl = process.env.CTB_LUIS_APP_URL;
bot.recognizer(new builder.LuisRecognizer(luisAppUrl));

// Register dialogs with LUIS
buildDialog(bot, GetStatusDialog);
buildDialog(bot, SetStatusDialog);
buildDialog(bot, LightStatusDialog);
