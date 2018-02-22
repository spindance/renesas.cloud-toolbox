export default async (request, response) => {
  console.log('Hello good function')
  response.status(200).send('Good')
}
