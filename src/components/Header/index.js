import react from 'react'
import './styles.css'
import Movi from '../../assets/Movila.png'

const Header = () => {
	return (
		<div>
			<div id='header_background'></div>
			<section id='header_1'>
				<section id='category'>
					<div id='category_icon'>
						<div className='rec'></div>
						<div className='rec'></div>
						<div className='rec'></div>
					</div>
					<script src='category.js'></script>
					<ul>
						<li>
							<a className='cat' href='#'>
								{' '}
								MoVila{' '}
							</a>
						</li>

						<li>
							<a className='cat' href='#'>
								{' '}
								Accommodation{' '}
							</a>
						</li>

						<li>
							<a className='cat' href='#'>
								{' '}
								Story{' '}
							</a>
						</li>

						<li>
							<a className='cat' href='#'>
								{' '}
								Contact{' '}
							</a>
						</li>
					</ul>
				</section>
				<section id='logo_web'>
					<img id='logo' src={Movi} />
				</section>
				<section id='book_now'>
					<button id='book_btn'>Login</button>
				</section>
			</section>
		</div>
	)
}

export default Header
