import React from 'react'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'
import TextField from '@mui/material/TextField'
import ContactImg from '../../assets/Contact/contact.jpg'
import { MyMap } from '../../components'
import './styles.css'
import { UsePostContact } from '../../DataQuery/Query.queries'

const Contact = () => {
	const contact_btn = UsePostContact()
	return (
		<div className='contact'>
			<section id='about_banner'>
				<div id='about_banner_cointainer'>
					<img src={ContactImg} alt='Contact Us' />
				</div>
			</section>
			<span className='head'>Get in touch</span>
			<span className='text'>We hope to welcome you to world-class alpine haven soon</span>
			<div className='contact__container'>
				<div className='contact'>
					<div className='contact__info'>
						<div className='infomation'>
							<span className='title'>Contact Infomation</span>
							<div className='sub__title'>
								<span className='text'>Address</span>
								<span className='text w-20'>MovIla 01 Vo Van Ngan, Thu Duc City, Viet Nam</span>
							</div>
							<div className='sub__title'>
								<span className='text'>GPS</span>
								<span className='text'>46.315197, 7.462376</span>
							</div>
							<div className='sub__title'>
								<span className='text'>Phone</span>
								<span className='text'>+84 79 467 6336</span>
							</div>
							<div className='sub__title'>
								<span className='text'>Fax</span>
								<span className='text'>+84 79 467 6336</span>
							</div>
							<div className='sub__title'>
								<span className='text'>Email</span>
								<span className='text'>info@movila.com</span>
							</div>
						</div>
					</div>
					<div className='contact__info'>
						<div className='infomation'>
							<span className='title'>Concierge</span>
							<div className='sub__title'>
								<div className='phone__holder'>
									<span className='text r-10'>Phone</span>
									<LocalPhoneRoundedIcon className='r-10' />
									<TelegramIcon className='r-10' />
									<InstagramIcon />
								</div>
								<span className='text'>+84 79 467 6336</span>
							</div>
							<div className='sub__title'>
								<span className='text'>Email</span>
								<span className='text'>info@movila.com</span>
							</div>
						</div>
					</div>
					<div className='contact__info'>
						<div className='infomation'>
							<span className='title'>Restaurant</span>
							<div className='sub__title'>
								<span className='text'>Phone</span>
								<span className='text'>+84 79 467 6336</span>
							</div>
							<div className='sub__title'>
								<span className='text'>Email</span>
								<span className='text'>info@movila.com</span>
							</div>
						</div>
					</div>
					<div className='contact__info'>
						<div className='infomation'>
							<span className='title'>Wellness</span>
							<div className='sub__title'>
								<span className='text'>Phone</span>
								<span className='text'>+84 79 467 6336</span>
							</div>
							<div className='sub__title'>
								<span className='text'>Email</span>
								<span className='text'>info@movila.com</span>
							</div>
						</div>
					</div>
				</div>
				<div className='contact__map'>
					<MyMap />
				</div>
			</div>
			<span className='head'>Contact us to get more details</span>
			<div className='contact__form'>
				<div className='form__left'>
					<div className='form__input'>
						<TextField
							className='standard-basic'
							id='standard-basic_name'
							label='Name *'
							variant='standard'
						/>
					</div>
					<div className='form__input'>
						<TextField
							className='standard-basic'
							id='standard-basic_sur_name'
							label='Surname *'
							variant='standard'
						/>
					</div>
					<div className='form__input'>
						<TextField
							className='standard-basic'
							id='standard-basic_phone'
							label='Phone *'
							variant='standard'
						/>
					</div>
					<div className='form__input'>
						<TextField
							className='standard-basic'
							id='standard-basic_email'
							label='Email *'
							variant='standard'
						/>
					</div>
				</div>
				<div className='form__right'>
					<div className='form__input'>
						<TextField
							className='standard-basic'
							id='standard-basic_subject'
							label='Subject *'
							variant='standard'
						/>
					</div>
					<div className='form__input'>
						<TextField
							className='standard-basic'
							id='standard-basic_message'
							label='Message'
							variant='standard'
							multiline
							rows={6}
						/>
					</div>
				</div>
			</div>
			{contact_btn}
		</div>
	)
}

export default Contact
