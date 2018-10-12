exports.handler = async (event, context) => {
	const params = JSON.parse(event.body)
	const func = params.queryResult.intent.displayName|| 'hello_name'

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
 