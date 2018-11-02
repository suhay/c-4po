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
   payload: {
    google: {
     expectUserResponse: true,
     richResponse: {
      items: [
       {
        carouselBrowse: {
         items: [
          {
           title: 'Title of item 1',
           openUrlAction: {
            url: 'https://google.com'
           },
           description: 'Description of item 1',
           footer: 'Item 1 footer',
           image: {
            url: 'https://developers.google.com/actions/assistant.png',
            accessibilityText: 'Google Assistant Bubbles'
           }
          },
          {
           title: 'Title of item 2',
           openUrlAction: {
            url: 'https://google.com'
           },
           description: 'Description of item 2',
           footer: 'Item 2 footer',
           image: {
            url: 'https://developers.google.com/actions/assistant.png',
            accessibilityText: 'Google Assistant Bubbles'
           }
          }
         ]
        }
       }
      ]
     },
     userStorage: '{"data":{}}'
    }
   },
   outputContexts: [
    {
     name:
      'projects/temperatureconvertersample/agent/sessions/518488a5-09f6-4a36-8950-942f595b70b8/contexts/_actions_on_google',
     lifespanCount: 99,
     parameters: {
      data: '{}'
     }
    }
   ]
  })
 }
}
// fulfillmentMessages: [
// {
//  card: {
//   title: 'Stats for: ',
//   subtitle: res.data.name,
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
// }
// ]
