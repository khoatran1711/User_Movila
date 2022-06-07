import react from 'react'
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './styles.css'
import { Suspense, lazy } from 'react'
import { render } from 'react-dom'
import React, { useState } from 'react'
import { Alert } from '@mui/material'

const General_setting = lazy(() => import('./user_general_setting'))
const Security_Login = lazy(() => import('./security_login'))
const Booking_room = lazy(() => import('./booking_room'))
const History_room = lazy(() => import('./History_room'))

const User = () => {
	console.log(window.name)
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

	return (
		<div id='user_background'>
			<section id='user_area'>
				<section id='user_option'>
					<div id='user_name'>Tran Dang Khoa</div>
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
					<div className='option'>
						<div className='option_logo'></div>
						<div className='option_selection'> Log out</div>
					</div>
				</section>
				<section id='user_content'>
					{' '}
					{(() => {
						if (count === 0) {
							return <General_setting />
						} else if (count === 1) {
							return <Security_Login />
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
