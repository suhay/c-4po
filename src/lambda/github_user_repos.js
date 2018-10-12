exports.handler = async (event, context) => {
 // Only allow POST
 if (event.httpMethod !== 'POST') {
  return { statusCode: 405, body: 'Method Not Allowed' }
 }

 // When the method is POST, the name will no longer be in the event’s
 // queryStringParameters – it’ll be in the event body encoded as a query string
 const params = querystring.parse(event.body)
 const user = params.user || 'escaladesports'
 const url = `https://api.github.com/users/${user}/repos`
 const res = await fetch(url, {
  method: 'GET',
  headers: {
   Accept: `application/vnd.github.v3+json`
  }
 }).then(res => res.json())

 console.log(res)
 return {
  statusCode: 200,
  body: res.length
 }
}
