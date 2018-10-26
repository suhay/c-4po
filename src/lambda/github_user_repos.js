const fetch = require('isomorphic-fetch')
const axios = require('axios')

exports.handler = async (event, context) => {
 const params = event.body
 console.log(params)
 // const user = params.queryResult.parameters.user || 'escaladesports'
 const url = `https://api.github.com/users/tbaustin/repos`
 const res = await axios({
  method: 'GET',
  url,
  headers: {
   Accept: `application/vnd.github.v3+json`
  }
 })

 console.log(res.data.length)
 return {
  statusCode: 200,
  body: JSON.stringify(res.data.length)
 }
}
