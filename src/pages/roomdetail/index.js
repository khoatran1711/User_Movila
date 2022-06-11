import react from 'react'
import React from 'react'
import './styles.css'
import { Suspense, lazy } from 'react'

import { useParams } from 'react-router-dom'
import { UseGetRoomByID } from '../../DataQuery/Query.queries'
import { useState } from 'react'
import { UseGetRoom } from '../../DataQuery/Query.queries'

const Infopage = lazy(() => import('../infopage'))

const Each_info_page = () => {
	const params = useParams()
	console.log(params.id)
	const id = params.id

	const hotels = UseGetRoom()
	console.log(hotels)
	let hotel = []
	if (hotels.length > 0) {
		for (let i = 0; i < hotels.length; i++) {
			var my_id = hotels[i].id
			if (my_id == id) {
				hotel.push(hotels[i])
				console.log(i)
			}
		}
	}
	console.log(hotel)
	return (
		<div>
			{hotel.length > 0 ? (
				<Infopage
					id={hotel[0].id}
					name={hotel[0].name}
					cat={hotel[0].cat}
					price={hotel[0].price}
					numberOfGuest={hotel[0].numberOfGuest}
					floor={hotel[0].floor}
					area={hotel[0].area}
					wifi={hotel[0].wifi}
					view={hotel[0].view}
					description={hotel[0].description}
					imageURL={hotel[0].imageURL}
					hotel_name={hotel[0].hotel.name}
					hotel_imageURL={hotel[0].hotel.imageURL}
				/>
			) : (
				''
			)}
		</div>
	)
}
export default Each_info_page
