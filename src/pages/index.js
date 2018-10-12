import React from "react"

// import PubSub from "@google-cloud/pubsub"

// const projectId = `c-4po-219217`

export default class HomePage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			topic: ``,
		}

		this.createTopic = this.createTopic.bind(this)
	}

	createTopic() {
		console.log(this.state.topic)
	}

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.topic}
					onChange={e => this.setState({ topic: e.target.value })}
				/>
				<button onClick={() => this.createTopic()}>Create Topic</button>
			</div>
		)
	}
}
