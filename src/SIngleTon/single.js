import React, { Component } from 'react'
let instance

class API extends Component {
	constructor(initValue) {
		super()
		if (instance) {
			throw new Error('You can only create one instance!')
		}
		this.instance = initValue
	}

	getInstance() {
		return this.instance
	}
}

const singletonCounter = Object.freeze(new API('http://localhost:8083/'))
export default singletonCounter
