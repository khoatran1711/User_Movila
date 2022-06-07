import React from 'react'

import './styles.css'

import fb from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'

import the_leading_hotel from '../../assets/the_leading_hotel.png'
import clean_and_safe from '../../assets/clean-and-safe-stamp-white.png'
import swi from '../../assets/swi.png'
import { Link } from 'react-router-dom'

const Footer = () => {
	function toInsta() {
		window.open('https://www.instagram.com/blue.petunia_/', '_blank')
	}
	function toFacebook() {
		window.open('https://m.facebook.com/106452165429017/', '_blank')
	}
	function toPolicy() {
		window.open(
			'https://firebasestorage.googleapis.com/v0/b/algebraic-fin-332903.appspot.com/o/Company%20Policy%20Template.pdf?alt=media&token=dd6be6be-0933-4fe3-b965-fb5b7cdfcfea',
			'_blank'
		)
	}
	function toCondition() {
		window.open('http://fitnik.tech/public/docs/terms.pdf', '_blank')
	}
	return (
		<div>
			<section id='footer'>
				<div id='footer-place-1'>
					<div id='contact'>
						<div className='footer-place-header'>Contact</div>
						<div className='footer-place-contact'>
							+84 (0) 779 604 768 <br />
							movila@gmail.com
						</div>
						<div className='footer-place-contact'>
							Movila
							<br />
							Ho Chi Minh University Of Technology and Education <br />
							No. 1, Vo Van Ngan <br />
							Ho Chi Minh City, Viet Nam
						</div>
						<div id='contact-icon'>
							<img src={fb} onClick={toFacebook} />
							<img src={insta} onClick={toInsta} />
						</div>
					</div>
					<div id='explore'>
						<div className='footer-place-header'>Explore</div>
						<div className='footer-place-category'>
							<ul>
								<li>
									<Link to='/'>
										MoVila
										<div className='footer-line'></div>
									</Link>
								</li>
								<li>
									<Link to='/rooms'>
										Accommodation
										<div className='footer-line'></div>
									</Link>
								</li>
								<li>
									<Link to='/story'>
										Our Story
										<div className='footer-line'></div>
									</Link>
								</li>
								<li>
									<Link to='/contact'>
										Contact
										<div className='footer-line'></div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div id='news'>
						<div className='footer-place-header'>News</div>
						<div className='footer-place-category'>
							<ul>
								<li>
									<Link onClick={toFacebook}>
										Blog
										<div className='footer-line'></div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div id='legal-notice'>
						<div className='footer-place-header'>Legal Notices</div>

						<div className='footer-place-category'>
							<ul>
								<li>
									<Link onClick={toCondition}>
										Terms and Conditions
										<div className='footer-line'></div>
									</Link>
								</li>

								<li>
									<Link onClick={toPolicy}>
										Privacy Policies
										<div className='footer-line'></div>
									</Link>
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
					<p>Designed by SRUM.TEAM.101</p>
				</div>
			</section>
		</div>
	)
}

export default Footer
