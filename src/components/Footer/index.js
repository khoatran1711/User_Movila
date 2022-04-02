import React from 'react'

import './styles.css'

import fb from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'

import the_leading_hotel from '../../assets/the_leading_hotel.png'
import clean_and_safe from '../../assets/clean-and-safe-stamp-white.png'
import swi from '../../assets/swi.png'

const Footer = () => {
	return (
		<div>
			<section id='footer'>
				<div id='footer-place-1'>
					<div id='contact'>
						<div className='footer-place-header'>Contact</div>
						<div className='footer-place-contact'>
							+41 (0) 27 486 60 60 <br />
							info@lecrans.com
						</div>
						<div className='footer-place-contact'>
							LeCrans
							<br />
							Chemin du Mont-Blanc 1 <br />
							CP - 179, Plans-Mayens 3963 Crans-Montana <br />
							Switzerland
						</div>
						<div id='contact-icon'>
							<img src={fb} />
							<img src={insta} />
						</div>
					</div>
					<div id='explore'>
						<div className='footer-place-header'>Explore</div>
						<div className='footer-place-category'>
							<ul>
								<li>
									Safety
									<div className='footer-line'></div>
								</li>
								<li>
									Webcam
									<div className='footer-line'></div>
								</li>
								<li>
									Gallery
									<div className='footer-line'></div>
								</li>
								<li>
									Careers
									<div className='footer-line'></div>
								</li>
							</ul>
						</div>
					</div>
					<div id='news'>
						<div className='footer-place-header'>News</div>
						<div className='footer-place-category'>
							<ul>
								<li>
									Press
									<div className='footer-line'></div>
								</li>
								<li>
									Blog
									<div className='footer-line'></div>
								</li>
							</ul>
						</div>
					</div>
					<div id='legal-notice'>
						<div className='footer-place-header'>News</div>
						<div className='footer-place-category'>
							<ul>
								<li>
									Terms and conditions
									<div className='footer-line'></div>
								</li>
								<li>
									Privacy Policy
									<div className='footer-line'></div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div id='footer-place-2'>
					<img src={the_leading_hotel} />
					<img src={swi} />
					<img src={clean_and_safe} />
				</div>
				<div id='footer-place-3'>
					<p>&copy Copyright . LeCrans</p>
					<p>2022. All rights reserved.</p>
					<p>Designed by EWM.SWISS.</p>
				</div>
			</section>
		</div>
	)
}

export default Footer
