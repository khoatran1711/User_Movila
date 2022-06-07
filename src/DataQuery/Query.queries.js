import { API_KEY } from '../API/API'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const UseGetUser = () => {
	const [data, setData] = useState([])
	var url_key = API_KEY + 'users'
	useEffect(() => {
		axios.get(url_key).then((response) => setData(response.data))
	}, [])
	var return_data = []
	if (data.length > 0) {
		return data
	}
	return return_data
}

export const UseGetAccountLogin = (username, password) => {
	const [data, setData] = useState([])
	var url_key = API_KEY + 'accounts/login'
	var account1 = {
		username: 'username',
		password: 'password',
		role: 'user',
	}
	useEffect(() => {
		axios
			.get(url_key, {
				params: {
					username: 'vietanh',
					password: '123321',
					role: 'user',
				},
			})
			.then((response) => {
				setData(response.data)
			})
	}, [])
	function count() {
		var acc = document.getElementById('login_acc').value
		var pass = document.getElementById('login_pass').value
		//window.location = 'http://localhost:3000/rooms'
		return axios
			.get(url_key, {
				params: {
					username: acc,
					password: pass,
					role: 'user',
				},
			})
			.then((response) => {
				setData(response.data)
				if (response.data[0]) {
					console.log(data[0])
					window.name = data[0].id
					console.log(window.name)
					window.location = 'http://localhost:3000/'
				}
			})
	}

	return (
		<div>
			<button id='submit_btn' onClick={count}>
				Log in
			</button>
		</div>
	)
}

export const UsePostRoom = () => {
	const [articleId, setArticleId] = useState(null)
	useEffect(() => {
		// POST request using axios inside useEffect React hook
		const article = {
			name: '1080',
			cid: 1,
			price: 19000,
			numberOfGuest: 2,
			floor: 1,
			area: 300,
			wifi: true,
			view: 'seaview',
			description: 'not so much',
			hotel: null,
		}

		axios.post('http://localhost:8083/rooms', article).then((response) => {
			setArticleId(response.data)
			//console.log(response.data)
		})

		// empty dependency array means this effect will only run once (like componentDidMount in classes)
	}, [])
}

export const UseDeleteRoom = (id) => {
	const [status, setStatus] = useState(null)

	useEffect(() => {
		// DELETE request using axios with async/await
		async function deletePost() {
			await axios.delete('http://localhost:8083/rooms/' + id)
			setStatus('Delete successful')
		}

		deletePost()
	}, [])
}

export const UsePutRoom = (id) => {
	const [articleId, setUpdatedAt] = useState(null)
	useEffect(() => {
		// POST request using axios inside useEffect React hook
		const article = {
			name: '107',
			cid: 1,
			price: 25000000,
			numberOfGuest: 2,
			floor: 1,
			area: 300,
			wifi: true,
			view: 'seaview',
			description: 'not so much',
			hotel: null,
		}

		axios.put('http://localhost:8083/rooms/' + id, article).then((response) => {
			setUpdatedAt(response.data.updatedAt)
			//console.log(response.data)
		})

		// empty dependency array means this effect will only run once (like componentDidMount in classes)
	}, [])
}
