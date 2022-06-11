import react from 'react'
import './styles.css'
import React from 'react'

import test_room from '../../../assets/roompage/room_1.png'
import { UseGetBookingByID } from '../../../DataQuery/Query.queries'
import { UseDeleteBooking } from '../../../DataQuery/Query.queries'

const Booking_room = () => {
	const my_booking_room = UseGetBookingByID(window.name)

	return (
		<div>
			<section id='Booking_room'>Your booking rooms</section>
			<section id='Booking_rooms_area'>
				{my_booking_room[0]
					? my_booking_room.map((item) => (
							<div className='Booking_room'>
								<input id={'booking_' + item.id} type={'hidden'}></input>
								<img className='Booking_room_img' src={item.booked_room.imageURL} />
								<div className='Booking_room_name'>
									Room {item.booked_room.name} - {item.booked_room.hotel.name}
								</div>
								<div className='Booking_room_time'>{item.checkinDate}</div>
								{UseDeleteBooking(item.id)}
							</div>
					  ))
					: ''}
			</section>
		</div>
	)
}

export default Booking_room
