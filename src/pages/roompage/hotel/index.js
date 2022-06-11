import './styles.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'

const Infopage = lazy(() => import('../../infopage'))
const value = 2

const hotel = (props) => {
	return (
		<Link className='link' to={`/rooms/${props.id}`}>
			<div className='hotel'>
				<div className='img-hotel'>
					<img src={props.imageURL} />
				</div>
				<div className='content-hotel'>
					<div className='header-content-hotel'>
						{props.name}
						<div className='hotel-content-line'></div>
					</div>
					<div className='property-content-hotel'>
						{props.cat} room - {props.price}${' '}
					</div>
					<div className='description-content-hotel'>{props.description}</div>
				</div>
			</div>
		</Link>
	)
}

export default hotel
