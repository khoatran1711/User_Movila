import React from 'react'
import { Suspense, lazy } from 'react'
import './styles.css'

import Hotel_room_img_1 from '../../assets/homepage/hotel_pic/hotel_room.png'
import Hotel_room_img_2 from '../../assets/homepage/hotel_pic/hotel_room_2.png'
import Hotel_room_img_3 from '../../assets/homepage/hotel_pic/hotel_room_3.png'
import home_banner from '../../assets/home_banner.png'
import content2_pic from '../../assets/content2_pic.jpg'
import content_3_img from '../../assets/content_3_img2.jpg'
import content_3_img_2 from '../../assets/content_3_img_2.jpg'

const Hotels = lazy(() => import('./hotels'))

const hotels = [
	{
		id: 1,
		type: 'Classic Room',
		image: Hotel_room_img_1,
		property: '25m / No specific view / 2 Adults',
		description:
			'The dark wood panelling and elegant furnishings evoke the charm of a secluded Sierra Nevada getaway.',
	},
	{
		id: 2,
		type: 'Superior Room',
		image: Hotel_room_img_2,
		property: '25m / Partial Mountain View / 2 Adults, 1 Children ',
		description:
			'The superior double rooms offer a cosy, rustic atmosphere, and are the ultimate setting to escape from the stresses of daily life.',
	},
	{
		id: 3,
		type: 'Deluxe Room',
		image: Hotel_room_img_3,
		property: '28 - 36m/ Mountain View/ 2 Adults ',
		description:
			'Each impressive deluxe room is inspired by a different mountain region of the world, from the Swiss Alps to Mount Kilimanjaro.',
	},
]

const homepage = () => {
	return (
		<div className='homepage'>
			<section id='main_banner'>
				<div id='img_banner_cointainer'>
					<img id='banner_img' src={home_banner} />
				</div>
			</section>
			<section id='content-1'>
				<section id='header-content-1'>
					<h4>Welcome to MoVila </h4>
				</section>
				<div className='content'>
					Today, our country is undergoing a period of industrialization and modernization. The
					strong growth of technology is the driving force behind that growth, and the information
					technology industry is a key factor in that growth.
					<br />
					<br />
					Currently, the demand for human travel is increasing, when going to a new place. I'll be
					interested in booking a hotel to stay.
					<br />
					<br />
					However, due to communication issues and the epidemic, people will have difficulty in
					booking hotels, price issues and funding to maintain the epidemic of the hotel side.
					Understanding those difficulties, our team worked together to make an online hotel booking
					software on our phones.
					<br />
					<br />
					With Movila that our team has built, customers can look up the information of the hotel
					they want to find the right hotel in terms of geography, room price, and the hotel side
					will rent more rooms.
				</div>
			</section>
			<section id='content-2'>
				<div id='img-content-2'>
					<img src={content2_pic} />
				</div>
				<section id='header-content-2'>
					<h4>Seeking a truly peaceful experience? Find MoVila.</h4>
				</section>
			</section>

			<section id='content-3'>
				<div id='content-3-block1'>
					<div id='header-content-3'>Great experiences when you choose MoVila</div>
					<div id='content-3-block1-img'>
						<img src={content_3_img} />
					</div>
					<div id='content-3-block1-content'>
						<h6>There are many hotels and comfortable rooms with beautiful views</h6>
					</div>
				</div>
				<div id='content-3-block2'>
					<div id='content-3-block2-img'>
						<img src={content_3_img_2} />
					</div>
					<div id='content-3-block2-content'>
						<h6>MoVila's partners will bring you the space closest to nature</h6>
					</div>
				</div>
			</section>
			<section id='content-4'>
				<div id='content-4-header'>Each themed room and suite takes you to a different view.</div>
			</section>
			<section id='selection-banner'>
				<section id='selection-place'>
					{hotels.map((item) => (
						<Hotels
							type={item.type}
							image={item.image}
							property={item.property}
							description={item.description}
						/>
					))}
				</section>
			</section>
		</div>
	)
}

export default homepage
