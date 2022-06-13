import React from 'react'
import { Suspense, lazy } from 'react'
import './styles.css'

import Hotel_room_img_1 from '../../assets/homepage/hotel_pic/social_media.jpg'
import Hotel_room_img_2 from '../../assets/homepage/hotel_pic/family.jpg'
import Hotel_room_img_3 from '../../assets/homepage/hotel_pic/explore.jpg'
import home_banner from '../../assets/home_banner.png'
import content2_pic from '../../assets/content2_pic.jpg'
import content_3_img from '../../assets/content_3_img.jpg'
import content_3_img_2 from '../../assets/content_3_img_2.jpg'
import Counter from '../../SIngleTon/single'

const Hotels = lazy(() => import('./hotels'))

const hotels = [
	{
		id: 1,
		type: 'Social Media',
		image: Hotel_room_img_1,
		property: 'Instagram / Facebook / Twitter',
		description:
			'We are always waitting for your reply about your experience. You can send any comments to us whenever there is something that brings you bad experience ',
	},
	{
		id: 2,
		type: 'Family',
		image: Hotel_room_img_2,
		property: 'Family Trip',
		description:
			'Not only you but we also want to bring the best experience to the persons that you love. We hope you can share your perfect time with your family with us',
	},
	{
		id: 3,
		type: 'Exploring',
		image: Hotel_room_img_3,
		property: 'Always be your side ',
		description:
			'Always be with you in your exploration, no matter how hard the jouney is, we are alway there next to you in your exploration.',
	},
]

const homepage = () => {
	//var ne = Counter(3)
	console.log('get ' + Counter.getInstance())
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
						<h6>
							At Movila, earth, air, fire and water combine to enhance your closeness with nature
							and bring you an authentic, once-in-a-lifetime travel experience that values the
							traditions of Switzerland. This superior resort was carefully thought out and
							developed to take you on a journey of self-discovery, combining the five senses for
							the experience of a lifetime.
						</h6>
					</div>
				</div>
				<div id='content-3-block2'>
					<div id='content-3-block2-img'>
						<img src={content_3_img_2} />
					</div>
					<div id='content-3-block2-content'>
						<h6>
							Immerse yourself in a world that is truly representative of Switzerland. Movila offers
							a unique glimpse into nature’s rich tapestry, where you can relish in other-worldly
							scenery and dramatic landscapes. Once the day’s explorations and indulgences are
							complete, enjoy sumptuous architecture and splendid amenities, all of which are in
							perfect harmony with the distinctive surroundings and scenery. Blending sight, smell,
							sound, taste and touch, everything about Movila is intricately executed for a truly
							immersive experience. Our Michelin-starred restaurant, fine wine cellar and bar, cigar
							lounge and world-class spa complete this unforgettable experience.
						</h6>
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
