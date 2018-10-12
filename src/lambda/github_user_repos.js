exports.handler = async (event, context) => {
 const params = event.body
 const user = params.user || 'escaladesports'
 const url = `https://api.github.com/users/${user}/repos`
 const res = await fetch(url, {
  method: 'GET',
  headers: {
   Accept: `application/vnd.github.v3+json`
  }
 }).then(res => res.json())

 console.log(res)
 return {
  statusCode: 200,
  body: res.length
 }
}
