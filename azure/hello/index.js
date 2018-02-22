import message from '../../common/src/hello/message';

export async function handler(context) {
  context.log.info('Hello Azure context logging.');

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: JSON.stringify({
      message: `Go Serverless v1.0! ${(await message({ time: 1, copy: 'Your function executed successfully!' }))}`,
    }),
  };
}
