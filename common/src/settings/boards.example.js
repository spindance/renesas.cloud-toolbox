/**
 * @file This is a config file that tells the voice code where to find your boards.
 * Copy this file as 'boards.js' and fill in the data as described below.
 *
 * NOTE: In this example, we are hardcoding the boards here.
 * It may be possible to expand this codebase to support querying a user for boards, but that is not part
 * of this example code.
 *
 * 'names' is an array that includes (lowercase) aliases for this board. These will be the board names that you can say
 *   in a voice command (e.g. "the 'california' board"). For best results, you should train your NLU to match these
 *   names. Change these names to whatever works best for you. It's recommended to use simple, unique, one-word names
 *   that will be easy for the NLU to distinguish.
 * 'id' is a String ID for this board that you populate from your Synergy dashboard, after provisioning the board.
 * 'baseUrl' is a URL for the Synergy server this board can be found on. If you have additional servers (such as a
 *   local or testing server), you can populate those in the SERVERS object and reference them from there. This will
 *   make it easy to transition a board between servers.
 */

const SERVERS = {
  production: 'https://cloud.renesassynergy.com'
};

const boards = [
  {
    names: ['california', 'cali'],
    id: '00000000aaaaaaaa00000000aaaaaaaa',
    baseUrl: SERVERS.production
  },
  {
    names: ['delaware'],
    id: '00000000bbbbbbbb00000000bbbbbbbb',
    baseUrl: SERVERS.production
  },
  {
    names: ['hawaii', 'honolulu', 'maui'],
    id: '00000000cccccccc00000000cccccccc',
    baseUrl: SERVERS.production
  },
  {
    names: ['kansas'],
    id: '00000000dddddddd00000000dddddddd',
    baseUrl: SERVERS.production
  },
  {
    names: ['maryland'],
    id: '00000000eeeeeeee00000000eeeeeeee',
    baseUrl: SERVERS.production
  },
  {
    names: ['washington'],
    id: '00000000ffffffff00000000ffffffff',
    baseUrl: SERVERS.production
  }
];

export default boards;
