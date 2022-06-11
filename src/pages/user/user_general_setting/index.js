import react from 'react'
import './styles.css'
import { UsePutUserInfo } from '../../../DataQuery/Query.queries'

const user_general_setting = (props) => {
	const editButoon = UsePutUserInfo(window.name)
	return (
		<div>
			<form>
				<div className='title_general'>Your first name: </div>
				<input
					type='text'
					id='edit_first_name'
					className='text'
					defaultValue={props.firstName ? props.firstName : ''}
				/>
				<div className='title_general'>Your phone: </div>
				<input
					type='text'
					id='edit_phone'
					className='text'
					defaultValue={props.phone ? props.phone : ''}
				/>
				<div className='title_general'>Your email: </div>
				<input
					type='text'
					id='edit_mail'
					className='text'
					defaultValue={props.mail ? props.mail : ''}
				/>
				<div className='title_general'>Your last name: </div>
				<input
					type='text'
					id='edit_last_name'
					className='text'
					defaultValue={props.lastName ? props.lastName : ''}
				/>

				<br />
				{props ? editButoon : ''}
			</form>
		</div>
	)
}

export default user_general_setting
