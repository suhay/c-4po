const axios = require('axios')
require('dotenv').config()

exports.handler = async (event, context) => {
	console.log(process.env.GIPHY_API)
	const url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API}&rating=pg-13&fmt=json`
	const res = await axios({
		method: 'GET',
		url,
		headers: {
			Accept: `application/json`,
		}
	})

	return {
		statusCode: 200,
		body: JSON.stringify({
			fulfillmentText: `${res.data.embed_url}`
		})
	}
}
