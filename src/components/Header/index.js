import react from 'react'
import './styles.css'
import Movi from '../../assets/Movila.png'
import { Link } from 'react-router-dom'

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
							<Link to='/'>
								<a className='cat' href='#'>
									{' '}
									MoVila{' '}
								</a>
							</Link>
						</li>

						<li>
							<Link to='/rooms'>
								<a className='cat' href='#'>
									{' '}
									Reservation{' '}
								</a>
							</Link>
						</li>

						<li>
							<Link to='/story'>
								<a className='cat' href='#'>
									{' '}
									Story{' '}
								</a>
							</Link>
						</li>

						<li>
							<Link to='/contact'>
								<a className='cat' href='#'>
									{' '}
									Contact{' '}
								</a>
							</Link>
						</li>
					</ul>
				</section>
				<section id='logo_web'>
					<img id='logo' src={Movi} />
				</section>

				<section id='book_now'>
					{window.name < 0 || !window.name ? (
						<Link to={`/login`}>
							<button id='book_btn'>Login</button>
						</Link>
					) : (
						<Link to={`/user`}>
							<button id='book_btn'>My account</button>
						</Link>
					)}
				</section>
			</section>
		</div>
	)
}

export default Header
