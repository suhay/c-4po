exports.handler = async (event, context) => {
	const params = event.body
	const func = params.parameters.intent.displayName || 'hello_name'
	console.log(params)
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
 