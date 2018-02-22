/**
 * @file Google Cloud Functions does not currently support environment variables. So we must use
 * this config file to set them.
 *
 * Copy this file as 'gcpEnv.js' and fill in the values accordingly.
 *
 * When writing a function handler that uses these env vars, you should import this file as high up in the
 * handler file as possible (see apiai/index.js for example).
 */

process.env.CTB_SYNERGY_USERNAME = '';
process.env.CTB_SYNERGY_PASSWORD = '';
