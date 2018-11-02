exports.handler = async (event, context) => {
	const replies = [
		"It is certain.",
		"I've decided that it is decidedly so.",
		"Without a doubt.",
		"Yes - definitely.",
		"You may rely on it.",
		"As I see it, yes.",
		"Most likely.",
		"Outlook good.",
		"Yes.",
		"Signs point to yes and for one ways.",
		"Reply hazy, try again.",
		"Ask again later.",
		"Better not tell you now.",
		"Cannot predict now.",
		"Concentrate and ask again.",
		"Maybe with magic?",
		"I swiped left.",
		"My sources say no.",
		"Outlook is not so good. It also sucks at email.",
		"Very doubtful.",
		"Yes, but do it drunk.",
		"Yes, in due time.",
		"The internet says no.",
		"Definitely not.",
		"Yes.",
		"You will have to wait.",
		"I have my doubts.",
		"Outlook so so.",
		"Looks good to me!",
		"Who knows?",
		"Looking good!",
		"Probably.",
		"Are you kidding?",
		"Go for it!",
		"Don't bet on it.",
		"Forget about it."
	]

	const res = replies[Math.floor((Math.random() * replies.length))]

	return {
		statusCode: 200,
		body: JSON.stringify({
			fulfillmentText: `${res}`
		})
	}
}