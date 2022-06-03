import react from 'react'
import './styles.css'

import test_room from '../../../assets/roompage/room_1.png'

const History_room = () => {
	return (
		<div>
			<section id='History_room'>Your booked rooms</section>
			<section id='History_rooms_area'>
				<div className='History_room'>
					<img className='History_room_img' src={test_room} />
					<div className='History_room_name'>Room 10228 - Levalla Ovilaasd</div>
					<div className='History_room_time'>Check-in day: 10:40 am - 19/10/2022</div>
					<div className='History_room_time'>Check-out day: 12:30 am - 21/10/2022</div>
				</div>
			</section>
		</div>
	)
}

export default History_room
