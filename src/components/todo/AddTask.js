import React from 'react'
import Button from '../buttons/Button'

export default class AddTask extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value: '' }
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		this.setState({ value: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault()
		this.state.value.replace(/\s/g, '') && this.props.createTask(this.state.value)
		this.props.filter === 'Completed' && this.props.setFilter('All')
		this.setState({ value: '' })
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
						placeholder='Create a new todo...'
						className='
						pl-14 pt-5 pb-4
                        bg-white dark:bg-[#25273D]
						text-[#494C6B] dark:text-[#C8CBE7]
                        border border-gray-300 dark:border-[#393A4B] rounded-md w-full
						focus:outline-none
						focus:outline-offset-2
						focus:outline-accent
						focus:outline-2
						caret-accent
						transition-colors duration-500
						'
					/>
				</label>
				<Button
					ariaLabel='Add task'
					className={`block absolute
					 top-1/2 translate-y-[-50%]`}
					disabled={this.state.value.replace(/\s/g, '') === ''}
					type='submit'
				/>
			</form>
		)
	}
}
