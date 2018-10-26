const fetch = require('isomorphic-fetch')
const axios = require('axios')

exports.handler = async (event, context) => {
 const params = JSON.parse(event.body)
 const func = params.queryResult.intent.displayName || 'hello_name'
 const url = `https://c-4po.netlify.com/.netlify/functions/${func}`
 console.log(`URL`, url)

 const res = await axios({
  method: `post`,
  url,
  data: event.body
 })
 console.log(res)
 return {
  statusCode: 200,
  body: JSON.stringify(res)
 }
}
