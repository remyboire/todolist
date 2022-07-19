import React from 'react'
import './checkbox.css'

export default function Checkbox(props) {
	const { checked, onChange, disabled } = props
	return (
		<div className='ml-2 mr-3'>
			<input
				type='checkbox'
				checked={checked}
				onChange={onChange}
				className='
			cursor-pointer checkbox		
			before:bg-white dark:before:bg-[#25273D]
			bg-[#E3E4F1] dark:bg-[#393A4B]
			focus:outline-none
			focus:outline-offset-2
			focus:outline-accent
			focus:outline-2
			transition-colors duration-500
			before:transition-colors before:duration-500

			'
				disabled={disabled}
			/>
		</div>
	)
}
