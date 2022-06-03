import react from 'react'
import './styles.css'

const user_general_setting = () => {
	return (
		<div>
			<form>
				<div className='title_general'>Your name: </div>
				<input type='text' className='text' name='old_pass' />
				<div className='title_general'>Your phone: </div>
				<input type='text' className='text' name='old_pass' />
				<div className='title_general'>Your email: </div>
				<input type='text' className='text' name='new_pass' />
				<div className='title_general'>Your address: </div>
				<input type='text' className='text' name='confirm_new_pass' />
				<br />
				<input type='submit' value='Change your information' />
			</form>
		</div>
	)
}

export default user_general_setting
