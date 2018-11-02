const axios = require('axios')

exports.handler = async (event, context) => {
 const params = JSON.parse(event.body)
 const url = `https://pokeapi.co/api/v2/pokemon/`
 const res = await axios({
  method: 'GET',
  url
 })
 const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
 }

 const pokemon = getRandomIntInclusive(0, res.data.count - 1)

 console.log(pokemon)
 const pokemonRes = await axios({
  method: `GET`,
  url: res.data.results[pokemon].url
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
