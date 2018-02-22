
/**
 * @file Helper functions for building LUIS-style Dialogs.
 * See https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-recognize-intent-luis
 */

function addDefaultActions(dialog, intentName) {
  dialog.triggerAction({
    matches: intentName,
    confirmPrompt: 'This will cancel the action you started. Are you sure?'
  }).cancelAction('cancelAction', 'Ok, action canceled.', {
    matches: /^(cancel|nevermind)/i,
    confirmPrompt: 'Are you sure?'
  });
}

/**
 * Adds a with the given name to the given bot.
 * @param  {Object} bot MS UniversalBot to add Dialog to.
 * @param  {Object} def Definition of dialog to add. Imported Object from Dialogs folder.
 * @return {Object} MS Bot Framework Dialog Object
 */
export function buildDialog(bot, def) {
  const dialog = bot.dialog(def.name, def.waterfall);

  addDefaultActions(dialog, def.intentName);

  return dialog;
}

export function getPromptResponse(response) {
  if (typeof response === 'string') {
    // For some reason, Cortana likes to put a . at the end of Prompt responses. Strip it.
    return response.split('.').join(' ');
  }

  return null;
}
