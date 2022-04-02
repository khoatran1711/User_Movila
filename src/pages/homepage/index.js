import React from 'react'
import { Suspense, lazy } from 'react'
import './styles.css'

import Hotel_room_img_1 from '../homepage/hotels/hotel_pic/hotel_room.png'
import Hotel_room_img_2 from '../homepage/hotels/hotel_pic/hotel_room_2.png'
import Hotel_room_img_3 from '../homepage/hotels/hotel_pic/hotel_room_3.png'
import home_banner from '../../assets/home_banner.png'
import content2_pic from '../../assets/content2_pic.jpg'
import content_3_img from '../../assets/content_3_img.jpg'
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
					<h4>A remote part of the world to deeply switch off and unwind</h4>
				</section>
				<div className='content'>
					LeCrans is an Alpine haven of exceptionally refined warmth, restorative tranquillity and
					discerning care. Located above Crans-Montana mountain resort on the edge of a peaceful
					Alpine forest, this is the ultimate setting to spoil yourself within lush green
					surroundings that allow you to absorb and engage in the comforts of nature.
					<br />
					<br />
					Explore a remote and beautiful part of the world surrounded by exhilarating scenery and
					striking landscapes. Indulge in sleek and luxurious interiors that will far surpass your
					expectations. Enjoy impeccable service, gourmet cuisine, delectable delights and a
					world-class spa that all combine to create an unforgettable experience that’s guaranteed
					to leave a footprint on your heart.
					<br />
					<br />
					Each suite’s design harnesses all there is to love about Switzerland’s breath-taking
					natural landscape. Rooms features rustic designs and unique architecture, as well as
					balconies and terraces where you can watch the sunset over the mountains.
				</div>
			</section>
			<section id='content-2'>
				<div id='img-content-2'>
					<img src={content2_pic} />
				</div>
				<section id='header-content-2'>
					<h4>Seeking a truly peaceful experience? Indulge, escape and relax at LeCrans</h4>
				</section>
			</section>

			<section id='content-3'>
				<div id='content-3-block1'>
					<div id='header-content-3'>A region steeped in geological and human history</div>
					<div id='content-3-block1-img'>
						<img src={content_3_img} />
					</div>
					<div id='content-3-block1-content'>
						<h5>Indulge in a prestigious resort steeped in luxury and magnificence</h5>
						<h6>
							Immerse yourself in a world that is truly representative of Switzerland. LeCrans
							offers a unique glimpse into nature’s rich tapestry, where you can relish in
							other-worldly scenery and dramatic landscapes. Once the day’s explorations and
							indulgences are complete, enjoy sumptuous architecture and splendid amenities, all of
							which are in perfect harmony with the distinctive surroundings and scenery. Blending
							sight, smell, sound, taste and touch, everything about LeCrans is intricately executed
							for a truly immersive experience. Our Michelin-starred restaurant, fine wine cellar
							and bar, cigar lounge and world-class spa complete this unforgettable experience.
						</h6>
					</div>
				</div>
				<div id='content-3-block2'>
					<div id='content-3-block2-img'>
						<img src={content_3_img_2} />
					</div>
					<div id='content-3-block2-content'>
						<h6>
							Immerse yourself in a world that is truly representative of Switzerland. LeCrans
							offers a unique glimpse into nature’s rich tapestry, where you can relish in
							other-worldly scenery and dramatic landscapes. Once the day’s explorations and
							indulgences are complete, enjoy sumptuous architecture and splendid amenities, all of
							which are in perfect harmony with the distinctive surroundings and scenery. Blending
							sight, smell, sound, taste and touch, everything about LeCrans is intricately executed
							for a truly immersive experience. Our Michelin-starred restaurant, fine wine cellar
							and bar, cigar lounge and world-class spa complete this unforgettable experience.
						</h6>
						<button className='discovery-hotel'>Discover More</button>
					</div>
				</div>
			</section>
			<section id='content-4'>
				<div id='content-4-header'>
					Each themed room and suite takes you to a different region or mountain of the world, from
					the Himalayas to the Kilimanjaro.
				</div>
				<button id='content-4-btn'>Discover Room</button>
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
