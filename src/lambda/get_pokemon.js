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
   fulfillmentText: 'This is a text response',
   fulfillmentMessages: [
    {
     card: {
      title: 'card title',
      subtitle: 'card text',
      imageUri:
       'https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png',
      buttons: [
       {
        text: 'button text',
        postback: 'https://assistant.google.com/'
       }
      ]
     }
    },
    {
     image: {
      imageUri: `https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png`
     }
    }
   ]
  })
 }
}

// {
//  card: {
//   title: res.data.name,
//   subtitle: 'stats',
//   imageUri: res.data.sprites.front_default,
//   buttons: [
//    {
//     text: 'Check stats on Bulbapedia',
//     postback: `https://bulbapedia.bulbagarden.net/wiki/${
//      res.data.name
//     }_(Pok%C3%A9mon)`
//    }
//   ]
//  }
// },
