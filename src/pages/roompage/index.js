import react from 'react'
import { Suspense, lazy } from 'react'
import React, { useState } from 'react'
import './styles.css'

import room_banner from '../../assets/room_banner.png'
import { UseGetRoom } from '../../DataQuery/Query.queries'
import { UseGetAvailbableRoom } from '../../DataQuery/Query.queries'

const Hotel = lazy(() => import('./hotel'))

const Roompage = () => {
	const hotel_list = UseGetAvailbableRoom()

	let show_hotel_list = []
	if (hotel_list.length > 0) {
		console.log(hotel_list)
		for (let i = 0; i < hotel_list.length; i++) {
			var one_room = {
				name: hotel_list[i].name + ' - ' + hotel_list[i].hotel.name,
				id: hotel_list[i].id,
				imageURL: hotel_list[i].imageURL,
				price: hotel_list[i].price,
				cat: hotel_list[i].cat,
				description: hotel_list[i].description,
				numberOfGuest: hotel_list[i].numberOfGuest,
			}

			show_hotel_list.push(one_room)
		}
	}

	const [data, setData] = useState([])

	if (show_hotel_list.length > 0 && data.length === 0) {
		setData(show_hotel_list)
	}
	function Search() {
		var val = document.getElementById('input_search').value
		var new_data = []
		for (let i = 0; i < show_hotel_list.length; i++) {
			let text = show_hotel_list[i].name
			if (text.includes(val)) {
				new_data.push(show_hotel_list[i])
			}
		}
		setData(new_data)
	}

	function Filter_single(cate1, cate2) {
		var val = document.getElementById('input_search').value
		var new_data_search = []
		for (let i = 0; i < show_hotel_list.length; i++) {
			let text = show_hotel_list[i].name
			if (text.includes(val)) {
				new_data_search.push(show_hotel_list[i])
			}
		}
		var new_data = []
		var my_search_result = new_data_search

		for (let i = 0; i < my_search_result.length; i++) {
			let text = my_search_result[i].cat
			if (text === cate1 || text === cate2) {
				new_data.push(my_search_result[i])
			}
		}
		if (!new_data[0]) {
			setData([[]])
			console.log(data[0])
		} else {
			setData(new_data)
		}
	}

	function Filter_guests(num1) {
		var val = document.getElementById('input_search').value
		var new_data_search = []
		for (let i = 0; i < show_hotel_list.length; i++) {
			let text = show_hotel_list[i].name
			if (text.includes(val)) {
				new_data_search.push(show_hotel_list[i])
			}
		}
		var new_data = []
		var my_search_result = new_data_search

		for (let i = 0; i < my_search_result.length; i++) {
			let text = my_search_result[i].numberOfGuest
			if (text === num1) {
				new_data.push(my_search_result[i])
			}
		}
		if (!new_data[0]) {
			setData([[]])
			console.log(data[0])
		} else {
			setData(new_data)
		}
	}
	return (
		<div>
			<section id='room_banner'>
				<div id='room_banner_cointainer'>
					<img id='banner_img' src={room_banner} />
				</div>
			</section>
			<section id='finding_filter_area'>
				<input id='input_search' type='text' placeholder='Type your room name'></input>
				<button id='find_search_btn' onClick={Search}>
					Find
				</button>
				<section id='filter_area'>
					<div className='dropdown'>
						<div className='type'>Type</div>
						<div className='dropdown-content'>
							<a href='#' onClick={Search}>
								All
							</a>
							<a href='#' onClick={() => Filter_single('Single', 'single')}>
								Single
							</a>
							<a href='#' onClick={() => Filter_single('Double', 'double')}>
								Double
							</a>
							<a href='#' onClick={() => Filter_single('Special', 'special')}>
								Special
							</a>
						</div>
					</div>
					<div className='dropdown'>
						<div className='type'>Guests</div>
						<div className='dropdown-content'>
							<a href='#' onClick={Search}>
								All
							</a>
							<a href='#' onClick={() => Filter_guests(1)}>
								1
							</a>
							<a href='#' onClick={() => Filter_guests(2)}>
								2
							</a>
							<a href='#' onClick={() => Filter_guests(3)}>
								3
							</a>
							<a href='#' onClick={() => Filter_guests(4)}>
								4
							</a>
						</div>
					</div>
				</section>
			</section>
			<section id='menu-selection'>
				{data[0]
					? data.map((item) => (
							<Hotel
								id={item.id}
								name={item.name}
								cat={item.cat}
								price={item.price}
								description={item.description}
								imageURL={item.imageURL}
							/>
					  ))
					: ''}
			</section>
		</div>
	)
}
export default Roompage
