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
 const height = `${res.data.height * 0.328084} feet`
 const weight = `${res.data.weight * 0.220462} pounds`
 return {
  statusCode: 200,
  body: JSON.stringify({
   fulfillmentMessages: [
    {
     image: {
      imageUri: res.data.sprites.front_default
     }
    },
    {
     card: {
      title: `${res.data.name}`,
      subtitle: `${height} and ${weight}`,
      imageUri: res.data.sprites.back_default,
      buttons: [
       {
        text: 'Check stats on Bulbapedia',
        postback: `https://bulbapedia.bulbagarden.net/wiki/${
         res.data.name
        }_(Pok%C3%A9mon)`
       }
      ]
     }
    },
    {
     text: ['text response']
    }
   ]
  })
 }
}
