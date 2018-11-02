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
   fulfillmentMessages: [
    {
     card: {
      title: 'Stats for: ',
      subtitle: res.data.name,
      imageUri: res.data.sprites.front_default,
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
     image: {
      imageUri: res.data.sprites.back_default
     }
    },
    {
     carouselSelect: {
      items: res.data.moves.map(m => ({
       info: {
        key: `name`
       },
       title: m.move.name,
       description: m.version_group_details[0].level_learned_at
      }))
     }
    },
    {
     payload: {
      google: {
       expectUserResponse: true,
       richResponse: {
        items: [
         {
          simpleResponse: {
           textToSpeech: 'this is a simple response',
           displayText: 'string here'
          }
         }
        ]
       }
      }
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
