const axios = require('axios')
require('dotenv').config()

exports.handler = async (event, context) => {
	const url = `http://api.giphy.com/v1/gifs/random`
	const res = await axios.get(url, {
		params: {
			api_key: process.env.GIPHY_API,
			rating: `pg-13`,
			fmt: `json`
		}
	})
	console.log(res)

	return {
		statusCode: 200,
		body: JSON.stringify({
			"fulfillmentMessages": [
				{
					"card": {
						"title": "I don't understand...",
						"subtitle": "Random image from Giphy",
						"imageUri": res.data.data.embed_url,
					}
				}
			],
		})
	}
}
