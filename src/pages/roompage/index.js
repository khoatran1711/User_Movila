import react from 'react'
import './styles.css'

import room_banner from '../../assets/room_banner.png'

const roompage = () => {
	return (
		<div>
			<section id='room_banner'>
				<div id='room_banner_cointainer'>
					<img id='banner_img' src={room_banner} />
				</div>
			</section>
		</div>
	)
}
export default roompage
