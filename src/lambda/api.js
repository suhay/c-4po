const axios = require('axios')
require('dotenv').config()

exports.handler = async (event, context) => {
 const params = JSON.parse(event.body)

 if (params.token && params.challenge && params.token === process.env.SLACK_TOKEN) {
  return {
    statusCode: 200,
    body: params.challenge
  }
 }

 const func = params.queryResult.intent.displayName || 'hello_name'
 const url = `https://c-4po.netlify.com/.netlify/functions/${func}`
 console.log(`URL`, url)

 const res = await axios({
  method: `post`,
  url,
  data: event.body
 })
 console.log(res.data)
 return {
  statusCode: 200,
  body: JSON.stringify(res.data)
 }
}
