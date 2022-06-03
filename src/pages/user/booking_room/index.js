import react from 'react'
import './styles.css'

import test_room from '../../../assets/roompage/room_1.png'

const Booking_room = () => {
	return (
		<div>
			<section id='Booking_room'>Your booking rooms</section>
			<section id='Booking_rooms_area'>
				<div className='Booking_room'>
					<img className='Booking_room_img' src={test_room} />
					<div className='Booking_room_name'>Room 10228 - Levalla Ovilaasd</div>
					<div className='Booking_room_time'>10:40 am - 19/10/2022</div>
					<div className='Cancel_booking'>Cancel this booking</div>
				</div>
			</section>
		</div>
	)
}

export default Booking_room
