exports.handler = async (event, context) => {
	const params = JSON.parse(event.body)
	console.log(params)

	const func = params.parameters.intent.displayName || 'hello_name'
	const url = `/.netlify/functions/${func}`
	const res = await fetch(url, {
	 method: 'POST',
	}).then(res => res.json())
 
	console.log(res)
	return {
	 statusCode: 200,
	 body: res.length
	}
 }
 