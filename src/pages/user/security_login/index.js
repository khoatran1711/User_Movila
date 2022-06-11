import react from 'react'
import './styles.css'
import { UsePutAccountPass } from '../../../DataQuery/Query.queries'

const security_login = (props) => {
	const Edit_btn = UsePutAccountPass(props.id, props.password)
	console.log(props.id)
	return (
		<div>
			<form>
				<div className='title_security'>Your email: </div>
				<div id='email'>{props.mail}</div>
				<div className='title_security'>Your passwords: </div>
				<input id='old_pass' type='password' className='password' />
				<div className='title_security'>Your new passwords: </div>
				<input id='new_pass' type='password' className='password' name='new_pass' />
				<div className='title_security'>Confirm your passwords: </div>
				<input id='new_pass_confirm' type='password' className='password' name='confirm_new_pass' />
				<br />
				{Edit_btn}
			</form>
		</div>
	)
}

export default security_login
