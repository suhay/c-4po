const axios = require('axios')

exports.handler = async (event, context) => {
 const url = `https://icanhazdadjoke.com/`
 const res = await axios({
  method: 'GET',
  url,
  headers: {
	 Accept: `application/json`,
	 'User-Agent': 'Escalade Sports Chat Bot (https://github.com/escaladesports/c-4po) msuhay@escaladesports.com'
  }
 })

 return {
  statusCode: 200,
  body: JSON.stringify({
   fulfillmentText: `${res.data.joke}`
  })
 }
}
