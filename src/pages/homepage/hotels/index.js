import react from 'react'

import './styles.css'

const hotels = (props) => {
	return (
		<div className='hotel'>
			<div className='img-hotel'>
				<img src={props.image} />
			</div>
			<div className='content-hotel'>
				<div className='header-content-hotel'>
					{props.type}
					<div className='hotel-content-line'></div>
				</div>
				<div className='property-content-hotel'>{props.property}</div>
				<div className='description-content-hotel'>{props.description}</div>
			</div>
			<button className='discovery-hotel'>
				<a href='#'>Discover More</a>
			</button>
		</div>
	)
}

export default hotels
