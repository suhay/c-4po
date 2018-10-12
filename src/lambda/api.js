const querystring = require("querystring")

exports.handler = async (event, context) => {
console.log(event)
console.log(context)
	const params = querystring.parse(event.body)
	const func = params.intent_name || 'hello_name'

	const url = `/.netlify/functions/${func}`
	const res = await fetch(url, {
		method: 'POST',
		body: event.body,
	}).then(res => res.json())
 
	console.log(res)
	return {
	 statusCode: 200,
	 body: res
	}
}