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
    "google": {
     "expectUserResponse": true,
     "richResponse": {
      items: [
       {
        "carouselBrowse": {
         "items": [
          {
            "description": "Option One Description",
            "image": {
              "url": "http://imageOneUrl.com",
              "accessibilityText": "Image description for screen readers"
            },
            "optionInfo": {
              "key": "itemOne",
              "synonyms": [
                "thing one",
                "object one"
              ]
            },
            "title": "Option One Title"
          },
          {
            "description": "Option Two Description",
            "image": {
              "url": "http://imageTwoUrl.com",
              "accessibilityText": "Image description for screen readers"
            },
            "optionInfo": {
              "key": "itemTwo",
              "synonyms": [
                "thing two",
                "object two"
              ]
            },
            "title": "Option Two Title"
          }
        ],
        }
       }
      ]
     }
    }
   }
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
