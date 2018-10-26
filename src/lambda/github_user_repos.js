const fetch = require('isomorphic-fetch')
const axios = require('axios')

exports.handler = async (event, context) => {
 const params = JSON.parse(event.body)
 const user = params.queryResult.parameters.user || 'escaladesports'
 const url = `https://api.github.com/users/${user}/repos`
 const res = await axios({
  method: 'GET',
  url,
  headers: {
   Accept: `application/vnd.github.v3+json`
  }
 })
 console.log(Object.keys(res.headers[`link`]))
 return {
  statusCode: 200,
  body: JSON.stringify({
   fulfillmentText: `${user} has ${res.data.length} public repos`
  })
 }
}
