const axios = require('axios')

exports.handler = async (event, context) => {
 const params = JSON.parse(event.body)
 const url = `https://pokeapi.co/api/v2/pokemon/`
 const res = await axios({
  method: 'GET',
  url
 })

 const pokemon = Math.random() * (res.data.count - 1) + 1
 console.log(pokemon)
 const pokemonRes = await axios({
  method: `GET`,
  url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`
 })

 return {
  statusCode: 200,
  body: JSON.stringify({
   fulfillmentMessages: [
    {
     card: {
      title: `YOUR POKEMON IS ${pokemonRes.data.name}`,
      subtitle: ':)',
      imageUri: pokemonRes.data.sprites.front_default
     }
    }
   ]
  })
 }
}
