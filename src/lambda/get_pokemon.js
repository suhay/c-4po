const axios = require('axios')

exports.handler = async (event, context) => {
 const params = JSON.parse(event.body)
 const pokemon = params.queryResult.parameters.pokemon || '1'
 const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
 const res = await axios({
  method: 'GET',
  url
 })

 console.log(res)
 return {
  statusCode: 200,
  body: JSON.stringify({
   fulfillmentText: `${pokemon} caught!`
  })
 }
}
