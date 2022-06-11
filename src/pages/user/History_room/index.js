import react from 'react'
import './styles.css'

import test_room from '../../../assets/roompage/room_1.png'
import { UseGetBillByID } from '../../../DataQuery/Query.queries'

const History_room = () => {
	const my_bill = UseGetBillByID(window.name)
	return (
		<div>
			<section id='History_room'>Your booked rooms</section>
			<section id='History_rooms_area'>
				{my_bill[0]
					? my_bill.map((item) => (
							<div className='History_room'>
								<img className='History_room_img' src={item.room_billing.imageURL} />
								<div className='History_room_name'>
									Room {item.room_billing.name} - {item.room_billing.hotel.name}
								</div>
								<div className='History_room_time'>Check-in day: {item.checkinDate}</div>
								<div className='History_room_time'>Check-out day: {item.checkoutDate}</div>
							</div>
					  ))
					: ''}
			</section>
		</div>
	)
}

export default History_room
