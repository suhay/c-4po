const fetch = require('isomorphic-fetch')

exports.handler = async (event, context) => {
 const params = JSON.parse(event.body)
 const func = params.queryResult.intent.displayName || 'hello_name'
 const url = `https://c-4po.netlify.com/.netlify/functions/${func}`
 console.log(`URL`, url)
 const res = await fetch(url, {
  method: 'POST',
  body: event.body
 }).then(res => res.json())

 return {
  statusCode: 200,
  body: res
 }
}
