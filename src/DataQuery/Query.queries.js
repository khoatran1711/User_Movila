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

export const UseGetAccountByID = (id) => {
	const [data, setData] = useState([])
	var url_key = API_KEY + 'users/' + id + '/getaccount'
	useEffect(() => {
		axios.get(url_key).then((response) => setData(response.data))
	}, [])
	var return_data = []
	if (data.length > 0) {
		return data
	}
	return return_data
}

export const UseGetRoom = () => {
	const [data, setData] = useState([])
	var url_key = API_KEY + 'rooms'
	useEffect(() => {
		axios.get(url_key).then((response) => setData(response.data))
	}, [])
	var return_data = []
	if (data.length > 0) {
		return data
	}
	return return_data
}

export const UseGetAvailbableRoom = () => {
	const [data, setData] = useState([])
	var url_key = API_KEY + 'bookings/notbooked'
	useEffect(() => {
		axios.get(url_key).then((response) => setData(response.data))
	}, [])
	var return_data = []
	if (data.length > 0) {
		return data
	}
	return return_data
}

export const UseGetRoomByID = (id) => {
	const [valueA, setValueA] = useState(null)
	const [errorA, setErrorA] = useState(null)
	const [loadingA, setLoadingA] = useState(true)
	async function getA() {
		try {
			setLoadingA(true)
			const valueA = await axios.get(API_KEY + 'rooms/' + id)
			console.log(API_KEY + 'rooms/' + id)
			setValueA(valueA)
		} catch (e) {
			setErrorA(e)
		} finally {
			setLoadingA(false)
		}
	}
	useEffect(() => {
		getA()
	}, [])
	console.log('await ' + valueA)
	if (errorA) return 'Failed to load resource A'
	return loadingA ? 'Loading...' : valueA
}

export const UseGetAccountLogin = (username, password) => {
	const [data, setData] = useState([])
	var url_key = API_KEY + 'accounts/login'
	var account1 = {
		username: 'username',
		password: 'password',
		role: 'user',
	}

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
					window.name = data[0].user.id
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

export const UsePutRoom = () => {
	const [articleId, setUpdatedAt] = useState(null)
	useEffect(() => {
		// POST request using axios inside useEffect React hook
		const article = {
			name: '107',
			cid: 1,
			price: 25000000,
			numberOfGuest: 2,
			floor: 1,
			area: 9000,
			wifi: true,
			view: 'riverview',
			description: 'not so much',
			hotel: null,
		}

		axios.put('http://localhost:8083/rooms/' + 3, article).then((response) => {
			setUpdatedAt(response.data.updatedAt)
			//console.log(response.data)
		})

		// empty dependency array means this effect will only run once (like componentDidMount in classes)
	}, [])
}

export const UsePutUserInfo = (id) => {
	const [updatedAt, setUpdatedAt] = useState(null)

	function Edit() {
		var ufirstName = document.getElementById('edit_first_name').value
		var ulastName = document.getElementById('edit_last_name').value
		var uphone = document.getElementById('edit_phone').value
		var umail = document.getElementById('edit_mail').value
		console.log(ufirstName + ulastName + uphone + umail)
		const article = {
			firstName: ufirstName,
			lastName: ulastName,
			phone: uphone,
			mail: umail,
		}
		window.location.reload()
		return axios.put(API_KEY + 'users/update/' + id, article).then((response) => {
			setUpdatedAt(response.data.updatedAt)
			window.location.reload()
		})
	}
	return <input type='submit' value='Change your information' onClick={Edit} />
}

export const UsePutAccountPass = (id, password) => {
	const [updatedAt, setUpdatedAt] = useState(null)

	function Edit() {
		var accId = id
		var pass = password

		var new_pass = document.getElementById('new_pass').value
		var confirm_new_pass = document.getElementById('new_pass_confirm').value

		var flag = true

		if (new_pass != confirm_new_pass) {
			alert('Your new password not match!')
			flag = false
		}

		if (flag) {
			const article = {
				password: new_pass,
			}
			return axios.put(API_KEY + 'accounts/update/' + accId, article).then((response) => {
				setUpdatedAt(response.data.updatedAt)
			})
		}
	}
	return <input type='submit' value='Change your password' onClick={Edit} />
}

export const UseGetBookingByID = (id) => {
	const [data, setData] = useState([])
	var url_key = API_KEY + 'bookings/users/' + id
	useEffect(() => {
		axios.get(url_key).then((response) => setData(response.data))
	}, [])
	var return_data = []
	if (data.length > 0) {
		return data
	}
	return return_data
}

export const UseDeleteBooking = (id) => {
	//const [status, setStatus] = useState(null)
	function buttonClick() {
		var myID = id
		return window.confirm('Do you want cancel this booking ?')
			? axios.delete(API_KEY + 'bookings/cancel/' + myID).then((response) => {
					//setStatus(response.data)
					alert('Delete booking successfully!')
					window.location = 'http://localhost:3000/user'
			  })
			: ''
	}
	return (
		<div className='Cancel_booking' onClick={buttonClick}>
			Cancel this booking
		</div>
	)
}

export const UsePostBookRoom = (id_user, id_room) => {
	//const [articleId, setArticleId] = useState(null)
	console.log(id_user + ' ' + id_room)

	function Add() {
		const article = {}

		if (window.name < 0 || !window.name) {
			window.alert('Please login to book room!')
			return ''
		}
		return window.confirm('Do you want to book this room? ')
			? axios
					.post(API_KEY + 'bookings/rooms/' + id_room + '/users/' + id_user, article)
					.then((response) => {
						//setArticleId(response.data)
						alert('Booking room successfully!')
						window.location = 'http://localhost:3000/rooms'
					})
			: ''
	}

	return (
		<div className='book_btn' onClick={Add}>
			Book Now
		</div>
	)
}

export const UseGetBillByID = (id) => {
	const [data, setData] = useState([])
	var url_key = API_KEY + 'bills/users/' + id
	useEffect(() => {
		axios.get(url_key).then((response) => setData(response.data))
	}, [])
	var return_data = []
	if (data.length > 0) {
		return data
	}
	return return_data
}

export const UsePostAccount = () => {
	class register_info {
		constructor(name, acc, pass, pass_confirm, my_mail, my_phone) {
			this.name = name
			this.acc = acc
			this.pass = pass
			this.pass_confirm = pass_confirm
			this.my_mail = my_mail
			this.my_phone = my_phone
		}

		checkPass() {
			if (this.pass === this.pass_confirm) {
				return true
			}
			return false
		}
	}

	class HandingData {
		constructor(naccount, ninfo) {
			this.data = {
				account: naccount,
				info: ninfo,
			}
		}

		getData() {
			return this.data
		}
	}

	class HandingDataAdapter extends HandingData {
		// input register_info
		constructor(inputClass) {
			super()
			this.inputClass = inputClass
		}

		getfirstName() {
			var my_name = this.inputClass.name.split(' ')
			let firstName = ''
			for (let i = 0; i < my_name.length - 1; i++) {
				firstName += my_name[i] + ' '
			}
			return firstName
		}

		getlastName() {
			var my_name = this.inputClass.name.split(' ')
			let lastName = ''
			if (my_name[my_name.length - 1]) {
				lastName = my_name[my_name.length - 1]
				return lastName
			}
		}

		getData() {
			return {
				account: {
					username: this.inputClass.acc,
					password: this.inputClass.pass,
					role: 'user',
				},
				user: {
					firstName: this.getfirstName(),
					lastName: this.getlastName(),
					phone: this.inputClass.my_phone,
					mail: this.inputClass.my_mail,
				},
			}
		}
	}

	const [articleId, setArticleId] = useState(null)

	function Register() {
		var name = document.getElementById('sign_up_name').value
		var acc = document.getElementById('sign_up_acc').value
		var pass = document.getElementById('sign_up_pass').value
		var pass_confirm = document.getElementById('sign_up_pass_confirm').value
		var my_mail = document.getElementById('sign_up_mail').value
		var my_phone = document.getElementById('sign_up_phone').value

		let info_input = new register_info(name, acc, pass, pass_confirm, my_mail, my_phone)

		if (!info_input.checkPass()) {
			window.alert('Your password and confirm password not match!')
			return ''
		}

		let send_data = new HandingDataAdapter(info_input)

		const article = send_data.getData()

		return axios.post(API_KEY + 'accounts/register/user', article).then((response) => {
			setArticleId(response.data)
			alert('Register successfully!')
			window.location = 'http://localhost:3000/'
		})
	}

	return <input type='submit' value='Sign up' onClick={Register} />
}
export const UsePostContact = () => {
	const [articleId, setArticleId] = useState(null)

	function Add() {
		var cname = document.getElementById('standard-basic_name').value
		var csurname = document.getElementById('standard-basic_sur_name').value
		var cphone = document.getElementById('standard-basic_phone').value
		var cemail = document.getElementById('standard-basic_email').value
		var csubject = document.getElementById('standard-basic_subject').value
		var cmessage = document.getElementById('standard-basic_message').value

		const article = {
			name: cname,
			surName: csurname,
			phone: cphone,
			email: cemail,
			subject: csubject,
			message: cmessage,
		}

		return axios.post(API_KEY + 'contacts', article).then((response) => {
			setArticleId(response.data)
			alert('We have received your contact! Thank for your contact!')
		})
	}

	return (
		<button className='discovery-hotel' onClick={Add}>
			<a href='#'>Submit</a>
		</button>
	)
}
