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

 const link = res.headers[`link`]
 const links = {}
 link.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, (m, uri, type) => {
  links[type] = uri
 })
 console.log(links)
 return {
  statusCode: 200,
  body: JSON.stringify({
   fulfillmentText: `${user} has ${res.data.length} public repos`
  })
 }
}
