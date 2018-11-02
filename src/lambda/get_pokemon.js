const axios = require('axios')

exports.handler = async (event, context) => {
 const params = JSON.parse(event.body)
 const pokemon = params.queryResult.parameters.pokemon || '1'
 const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
 const res = await axios({
  method: 'GET',
  url
 })

 console.log(Object.keys(res.data))
 return {
  statusCode: 200,
  body: JSON.stringify({
   fulfillmentText: `${pokemon} caught!`,
   fulfillmentMessages: [
    {
     card: {
      title: 'Stats for: ',
      subtitle: res.data.name,
      imageUri: res.data.sprites.front_default,
      buttons: [
       {
        text: 'Bulbapedia',
        postback: `https://bulbapedia.bulbagarden.net/wiki/${
         res.data.name
        }_(Pok%C3%A9mon)`
       }
      ]
     }
    }
   ]
  })
 }
}
