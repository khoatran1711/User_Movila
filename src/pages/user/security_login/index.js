import react from 'react'
import './styles.css'

const security_login = () => {
	return (
		<div>
			<form>
				<div className='title_security'>Your email: </div>
				<div id='email'>khoatran@mail.com</div>
				<div className='title_security'>Your passwords: </div>
				<input type='password' className='password' name='old_pass' />
				<div className='title_security'>Your new passwords: </div>
				<input type='password' className='password' name='new_pass' />
				<div className='title_security'>Confirm your passwords: </div>
				<input type='password' className='password' name='confirm_new_pass' />
				<br />
				<input type='submit' value='Change your password' />
			</form>
		</div>
	)
}

export default security_login
