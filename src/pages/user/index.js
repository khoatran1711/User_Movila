import react from 'react'
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './styles.css'
import { Suspense, lazy } from 'react'
import { render } from 'react-dom'
import React, { useState } from 'react'
import { Alert } from '@mui/material'
import { UseGetUser } from '../../DataQuery/Query.queries'
import { UseGetAccountByID } from '../../DataQuery/Query.queries'

const General_setting = lazy(() => import('./user_general_setting'))
const Security_Login = lazy(() => import('./security_login'))
const Booking_room = lazy(() => import('./booking_room'))
const History_room = lazy(() => import('./History_room'))

const User = () => {
	console.log(window.name)
	var user_id = window.name
	var userList = UseGetUser()
	var userAccount = UseGetAccountByID(window.name)
	let my_user = []
	if (userList.length > 0) {
		for (let i = 0; i < userList.length; i++) {
			if (userList[i].id == user_id) {
				my_user.push(userList[i])
			}
		}
	}
	console.log(userAccount)
	const [count, setCount] = useState(0)
	function myfuntion() {
		setCount(0)
	}
	function myfuntion1() {
		setCount(1)
	}
	function myfuntion2() {
		setCount(2)
	}
	function myfuntion3() {
		setCount(3)
	}
	function logout() {
		if (window.confirm('Are you sure you want to log out?')) {
			window.name = -3
			window.location = 'http://localhost:3000/'
		}
	}

	return (
		<div id='user_background'>
			<section id='user_area'>
				<section id='user_option'>
					<div id='user_name'>
						{my_user[0] ? my_user[0].firstName : ''} {my_user[0] ? my_user[0].lastName : ''}
					</div>
					<div className='option' onClick={myfuntion}>
						<div className='option_logo'></div>
						<div className='option_selection'> General Setting</div>
					</div>
					<div className='option' onClick={myfuntion1}>
						<div className='option_logo'></div>
						<div className='option_selection'> Security & Login</div>
					</div>
					<div className='option' onClick={myfuntion2}>
						<div className='option_logo'></div>
						<div className='option_selection'> Your booking room</div>
					</div>
					<div className='option' onClick={myfuntion3}>
						<div className='option_logo'></div>
						<div className='option_selection'> Your booking history</div>
					</div>
					<div className='option' onClick={logout}>
						<div className='option_logo'></div>
						<div className='option_selection'> Log out</div>
					</div>
				</section>
				<section id='user_content'>
					{' '}
					{(() => {
						if (count === 0) {
							return my_user[0] ? (
								<General_setting
									lastName={my_user[0].lastName}
									mail={my_user[0].mail}
									phone={my_user[0].phone}
									firstName={my_user[0].firstName}
								/>
							) : (
								<General_setting />
							)
						} else if (count === 1) {
							return my_user[0] && userAccount[0] ? (
								<Security_Login
									mail={my_user[0].mail}
									password={userAccount[0].password}
									id={userAccount[0].id}
								/>
							) : (
								<Security_Login />
							)
						} else if (count === 2) {
							return <Booking_room />
						} else if (count === 3) {
							return <History_room />
						}
					})()}{' '}
				</section>
			</section>
		</div>
	)
}

export default User
