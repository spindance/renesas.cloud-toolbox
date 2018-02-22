/**
 * @file Azure Functions does not show console.log when streaming logs.
 * You must log via context.log. Since context comes in through the Azure Functions call
 * and does not go through to the Dialog, we need to store the context here.
 * Any log calls prior to the first context will not be logged.
 *
 * This is a bit of a workaround, and could probably use some tuning, but it is showing logs.
 */

let context; // Used to store the current context

/**
 * Log an info line to Azure. This will be seen when streaming logs.
 */
export function azureLog(...logs) {
  if (context) {
    context.log.info(...logs);
  }
}

/**
 * Update the context when a new request comes in. Only called by azureWrapper.js.
 */
export function updateContext(newContext) {
  context = newContext;
}
