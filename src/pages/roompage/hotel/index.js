import './styles.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'

const Infopage = lazy(() => import('../../infopage'))
const value = 2

const hotel = (props) => {
	return (
		<Link className='link' to={`/info/${props.id}`}>
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
				<button className='discovery-hotel'>Discover More</button>
			</div>
		</Link>
	)
}

export default hotel
