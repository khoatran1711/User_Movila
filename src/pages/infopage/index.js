import react from 'react'
import './styles.css'
import { UsePostBookRoom } from '../../DataQuery/Query.queries'

const Infopage = (props) => {
	console.log('hello')
	var full_property = props.description.split(',')
	console.log(full_property)
	return (
		<div>
			<section id='info_banner'>
				<div id='info_banner_cointainer'>
					<img id='banner_img' src={props.imageURL} />
				</div>
			</section>
			<section className='info_container'>
				<div className='info_name'>{props.name}</div>
				<div className='info_title'>{props.cat} room</div>
				<div className='info_description'>{props.description}</div>
				<div className='info_details_book'>
					<div className='info_details'>
						<div className='all_details'>
							{full_property.map((item) => (
								<div className='detail'>{item}</div>
							))}
						</div>
					</div>
					<div className='book_now_container'>
						<div className='book_price'>From {props.price} $</div>
						{UsePostBookRoom(window.name, props.id)}
						<div className='book_btn'>Location</div>
					</div>
				</div>
				<div className='Gallary_place'>
					<div className='Gallary_title'>Gallary</div>
					<div className='Gallary_picture'>
						<div className='pictures'>
							<div className='picture_container'>
								<img src={props.hotel_imageURL}></img>
							</div>
							<div className='picture_container'>
								<img src={props.hotel_imageURL}></img>
							</div>
							<div className='picture_container'>
								<img src={props.imageURL}></img>
							</div>
							<div className='picture_container'>
								<img src={props.imageURL}></img>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Infopage
