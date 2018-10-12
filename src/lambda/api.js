const fetch = require('isomorphic-fetch')

exports.handler = async (event, context) => {
 const params = JSON.parse(event.body)
 const func = params.queryResult.intent.displayName || 'hello_name'

 const url = `https://c-4po.netlify.com/.netlify/functions/${func}`
 const res = await fetch(url, {
  method: 'POST',
  body: params
 }).then(res => res.json())
 console.log(Date.now(), `API CALLED`)
 return {
  statusCode: 200,
  body: res
 }
}
