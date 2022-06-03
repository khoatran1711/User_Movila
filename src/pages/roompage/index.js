import react from 'react'
import { Suspense, lazy } from 'react'
import './styles.css'

import Hotel_room_img_1 from '../../assets/roompage/room_1.png'
import Hotel_room_img_2 from '../../assets/roompage/room_2.png'
import Hotel_room_img_3 from '../../assets/roompage/room_3.png'
import Hotel_room_img_4 from '../../assets/roompage/room_4.png'
import Hotel_room_img_5 from '../../assets/roompage/room_5.png'
import Hotel_room_img_6 from '../../assets/roompage/room_6.png'
import Hotel_room_img_7 from '../../assets/roompage/room_7.png'
import Hotel_room_img_8 from '../../assets/roompage/room_8.png'

import room_banner from '../../assets/room_banner.png'

const Hotel = lazy(() => import('./hotel'))

const hotels = [
	{
		id: 1,
		type: 'Classic Room - Sierra Nevada',
		image: Hotel_room_img_1,
		property: '25 m / No specific view / 2 Guests',
		description:
			'The dark wood panelling and elegant furnishings evoke the charm of a secluded Sierra Nevada getaway.',
		title:
			'A deeply alluring space that invites you to truly switch off from the realities of everyday life',
		full_description:
			'The dark wood panelling and furnishings, deluxe red-draped four-poster bed, and magnificent black stone bathroom evoke the charm of a secluded Sierra Nevada getaway. The intimate scale and finish give the room a distinctly personal feel.',
		full_property: [
			'25 m2',
			'2 Guests',
			'Bedroom with king size bed',
			'Wi-Fi / internet access',
			'Cable / satellite TV / Netflix access',
			'Radio',
			'Minibar / Nespresso machine / Kettlef',
			'Disabled access',
			'Seating area',
			'One floor',
			'No specific view',
			'Bathroom / jacuzzi bath / shower',
			'Newspaper service',
			'Bathroom with flatscreen TV',
			'Alarm clock / wake-up service',
			'Safebox',
			'Balcony',
		],
		price: '1.100 $',
	},
	{
		id: 2,
		type: 'Superior Room - Chamois',
		image: Hotel_room_img_2,
		property: '35 m/ Partial mountain view / 2 Guests ',
		description:
			'With elegantly rustic furniture and an ochre stone fireplace, the Chamois Superior Room evokes the simple yet comfortable atmosphere of a c...',
		title: 'Rest and relax in this peaceful room that evokes feelings of abundance and refreshment',
		full_description:
			'The blonde wooden panelling and ceilings, ochre stone fireplace, and elegantly rustic furniture give the Chamois Superior Room the simple, comfortable atmosphere of a contemporary mountain retreat. Can form a private suite when combined with the Marmotte and Ours Superior rooms.',
		full_property: [
			'35 m2',
			'2 Guests',
			'Bedroom with king size bed',
			'Wi-Fi / internet access',
			'Cable / satellite TV / Netflix access',
			'Radio',
			'Minibar / Nespresso machine / Kettlef',
			'Disabled access',
			'Seating area, work desk',
			'One floor',
			'Partial mountain view',
			'Bathroom / jacuzzi bath / shower',
			'Newspaper service',
			'Bathroom with flatscreen TV',
			'Alarm clock / wake-up service',
			'Safebox',
			'Terrace',
			'Possibility of adding an extra bed',
			'Fireplace',
		],
		price: '1.600 $',
	},
	{
		id: 3,
		type: 'Superior Room - Marmotte',
		image: Hotel_room_img_3,
		property: '35 m / Partial mountain view / 2 Guests ',
		description:
			'With homely architecture and interiors, the Marmotte Superior Room offers the simple yet comfortable atmosphere of a contemporary mountain ...',
		title:
			'The marmotte ground squirrel is emblematic of the Swiss Alps, and is well-known for its warm fur and extended hibernation periods',
		full_description:
			'Blonde wooden panelling, ceilings and furniture, and an ochre stone fireplace give the Marmotte Superior Room the simple yet comfortable atmosphere of a contemporary mountain retreat. It can form a private suite when combined with the Chamois and Ours Superior Rooms',
		full_property: [
			'35 m2',
			'2 Guests',
			'Bedroom with king size bed',
			'Wi-Fi / internet access',
			'Cable / satellite TV / Netflix access',
			'Radio',
			'Minibar / Nespresso machine / Kettlef',
			'Fireplace',
			'Possibility of adding an extra bed',
			'Seating area, work desk',
			'One floor',
			'Partial mountain view',
			'Bathroom / jacuzzi bath / shower',
			'Newspaper service',
			'Bathroom with flatscreen TV',
			'Alarm clock / wake-up service',
			'Safebox',
		],
		price: '1.600 $',
	},
	{
		id: 4,
		type: 'Superior Room - Ours',
		image: Hotel_room_img_4,
		property: '35 m / Partial mountain view / 2 Guests ',
		description:
			'Skilful use of space, texture and pattern give the Ours Superior Room the simple yet comfortable atmosphere of a contemporary mountain retr...',
		title:
			'This room is inspired by the Ours brown bear, the largest animal in the Alps, which lives a peaceful and solitary life',
		full_description:
			'The blonde wooden panelling, ceilings and furniture, and the ochre stone fireplace and lamps give the Ours Superior Room the simple yet comfortable atmosphere of a contemporary mountain retreat. It can form a private suite with the Chamois and Marmotte Superior Rooms.',
		full_property: [
			'35 m2',
			'Partial mountain view',
			'2 Guests',
			'One floor',
			'Bedroom with king size bed',
			'Bathroom / jacuzzi bath / shower',
			'Terrace',
			'Seating area, work desk',
			'Wi-Fi / internet access',
			'Fireplace',
			'Cable / satellite TV / Netflix access',
			'Newspaper service',
			'Radio',
			'Bathroom with flatscreen TV',
			'Minibar / Nespresso machine / Kettle',
			'Alarm clock / wake-up service',
			'Safebox',
		],
		price: '1.600 $',
	},
	{
		id: 5,
		type: 'Deluxe Room – Anatolie',
		image: Hotel_room_img_5,
		property: '35 m / Mountain view/ 2 Guests ',
		description:
			'Restore your equilibrium in the deluxe Anatolie room, where the décor conjures up visions of the Silk Road, Anatolian mountain range and Mi...',
		title: 'A harmonious, ambient room designed to help you rediscover your best self.',
		full_description:
			'Restore your equilibrium in the deluxe Anatolie room, where the illuminated, scalloped niches, intricate Iznik ceramic tiles and elaborate textiles conjure up visions of the Silk Road, Anatolian mountain range and Middle Eastern architecture.',
		full_property: [
			'35 m2',
			'Mountain view',
			'2 Guests',
			'One floor',
			'Bedroom with king size bed',
			'Bathroom / jacuzzi bath / shower',
			'Terrace',
			'Seating area, work desk',
			'Wi-Fi / internet access',
			'Fireplace',
			'Cable / satellite TV / Netflix access',
			'Newspaper service',
			'Radio',
			'Bathroom with flatscreen TV',
			'Minibar / Nespresso machine / Kettle',
			'Alarm clock / wake-up service',
			'Safebox',
			'Disabled access',
		],
		price: '1.800 $',
	},
	{
		id: 6,
		type: 'Deluxe Room – Kilimanjaro',
		image: Hotel_room_img_6,
		property: '36 m / Mountain view / 2 Guests ',
		description:
			'A humble design with meticulous attention-to-detail designed to evoke the comfort of a lodge set in the great wilderness of the East Africa...',
		title: 'Enjoy elevated, uninhibited mountain views from the privacy of the terrace.',
		full_description:
			'The frames of embroidered Kasai fabric embedded in the wooden panelling, an assemblage of branches inlaid in the ceiling above the bed, and a set of authentic tribal headdresses evoke the comfort of a lodge set in the great wilderness of the East African plateaus.',
		full_property: [
			'36 m2',
			'Mountain view',
			'2 Guests',
			'One floor',
			'Bedroom with king size bed',
			'Bathroom / jacuzzi bath / shower',
			'Terrace',
			'Seating area, work desk',
			'Dressing room',
			'Fireplace',
			'Wi-Fi / internet access',
			'Newspaper service',
			'Cable / satellite TV / Netflix access',
			'Bathroom with flatscreen TV',
			'Radio',
			'Alarm clock / wake-up service',
			'Minibar / Nespresso machine / Kettle',
			'Possibility of adding an extra bed',
			'Safebox',
			'Disabled access',
		],
		price: '1.800 $',
	},
	{
		id: 7,
		type: 'Deluxe Room – Oural',
		image: Hotel_room_img_7,
		property: '28 m / Mountain view / 2 Guests ',
		description:
			'Enjoy stunning panoramic views from the comfort of this distinctive, characterful hideaway that evokes the protective warmth and soul of a ...',
		title:
			'Enjoy stunning panoramic views from the comfort of this distinctive, characterful hideaway.',
		full_description:
			'The warm wooden panelling and ceilings, intricate Russian tapestries and stone fireplace evoke the protective warmth and soul of a dacha nestled amidst the remote pine taiga forests of the ancient Ural Mountains. The room has unparalleled views of some of the highest summits of the Swiss Alps.',
		full_property: [
			'28 m2',
			'Mountain view',
			'2 Guests',
			'Ground floor (GF) and mezzanine (MF)',
			'Bedroom with king size bed',
			'Bathroom / jacuzzi bath / shower',
			'Seating area, work desk',
			'Fireplace',
			'Terrace',
			'Newspaper service',
			'Wi-Fi / internet access',
			'Bathroom with flatscreen TV',
			'Cable / satellite TV / Netflix access',
			'Alarm clock / wake-up service',
			'Radio',
			'Safebox',
			'Minibar / Nespresso machine / Kettle',
			'Disabled access',
		],
		price: '1.800 $',
	},
	{
		id: 8,
		type: 'Deluxe Suite – Les Alpes',
		image: Hotel_room_img_8,
		property: '70 m / Mountain view / 3 Guests ',
		description:
			'Featuring 150-year-old pinewood panelling and slanted beamed ceilings, the Deluxe Suite has the snug ambience of a traditional handcrafted ...',
		title:
			'Every element of the Deluxe Suite Les Alpes has been carefully designed to create a feeling of equilibrium.',
		full_description:
			'With its 150-year-old pinewood panelling, slanted beamed ceiling, and red, cream and green textiles, this suite’s mezzanine bedroom has the snug ambiance of a traditional handcrafted Swiss chalet. Guests benefit from a sublime view of the Swiss Alps.',
		full_property: [
			'70 m2',
			'Mountain view',
			'3 Guests',
			'Ground floor (GF) and mezzanine (MF)',
			'GF: living room with sofa bed',
			'MF: bedroom with king size bed',
			'MF: bathroom / jacuzzi bath',
			'Seating area and work desk',
			'Fireplace',
			'Terrace',
			'Newspaper service',
			'Wi-Fi / internet access',
			'Bathroom with flatscreen TV',
			'Cable / satellite TV / Netflix access',
			'Alarm clock / wake-up service',
			'Radio',
			'Safebox',
			'Minibar / Nespresso machine / Kettle',
		],
		price: '3.400 $',
	},
]

const roompage = () => {
	return (
		<div>
			<section id='room_banner'>
				<div id='room_banner_cointainer'>
					<img id='banner_img' src={room_banner} />
				</div>
			</section>
			<section id='finding_filter_area'>
				<input id='input_search' type='text' placeholder='Type your room name'></input>
				<button id='find_search_btn'>Find</button>
				<section id='filter_area'>
					<div class='dropdown'>
						<div class='type'>Type</div>
						<div class='dropdown-content'>
							<a href='#'>All</a>
							<a href='#'>Normal</a>
							<a href='#'>Special</a>
						</div>
					</div>
					<div class='dropdown'>
						<div class='type'>Guests</div>
						<div class='dropdown-content'>
							<a href='#'>All</a>
							<a href='#'>1</a>
							<a href='#'>2</a>
							<a href='#'>3</a>
							<a href='#'>4</a>
						</div>
					</div>
				</section>
			</section>
			<section id='menu-selection'>
				{hotels.map((item) => (
					<Hotel
						id={item.id}
						type={item.type}
						image={item.image}
						property={item.property}
						description={item.description}
						title={item.title}
						full_description={item.full_description}
						full_property={item.full_property}
						price={item.price}
					/>
				))}
			</section>
		</div>
	)
}
export default roompage
