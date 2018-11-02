const axios = require('axios')
require('dotenv').config()

exports.handler = async (event, context) => {
	const data = {
		api_key: process.env.GIPHY_API,
		rating: `pg-13`,
		fmt: `json`
	}
	const url = `http://api.giphy.com/v1/gifs/random`
	const res = await axios.get(url, querystring.stringify(data))
	console.log(res)

	return {
		statusCode: 200,
		body: JSON.stringify({
			fulfillmentText: `${res.data.embed_url}`
		})
	}
}
