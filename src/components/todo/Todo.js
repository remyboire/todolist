import React from 'react'
import AddTask from './AddTask'
import List from './List'
import Footer from './Footer'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'

export default function Todo() {
	console.log('render Todo')

	const [canSave, setCanSave] = React.useState(true)
	const [tasks, setTasks] = React.useState(localStorage.getItem('Todo-App-Tasks') ? JSON.parse(localStorage.getItem('Todo-App-Tasks')) : [])
	React.useEffect(() => {
		if (canSave) {
			setCanSave(false)
			setTimeout(() => {
				localStorage.setItem('Todo-App-Tasks', JSON.stringify(tasks))
				setCanSave(true)
			}, 1000)
		}
	}, [tasks])

	const [filter, setFilter] = React.useState(localStorage.getItem('Todo-App-Filter') ? JSON.parse(localStorage.getItem('Todo-App-Filter')) : 'All')
	React.useEffect(() => {
		localStorage.setItem('Todo-App-Filter', JSON.stringify(filter))
	}, [filter])

	const createTask = (/** @type {any} */ title) => {
		setTasks([{ id: nanoid(), title: title, completed: false }, ...tasks])
	}
	const removeTask = (/** @type {string} */ id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}
	const toggleTask = (/** @type {string} */ id) => {
		setTasks(
			tasks.map((task) => {
				if (task.id === id) {
					task.completed = !task.completed
				}
				return task
			})
		)
	}
	const removeAll = () => {
		setTasks(tasks.filter((task) => !task.completed))
	}
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				className='mb-10 rounded-md relative 
					shadow-custom dark:shadow-customdark
					transition-all duration-500'
			>
				<AddTask createTask={createTask} filter={filter} setFilter={setFilter} />
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className=' rounded-md overflow-hidden relative
					bg-[#f0f6ff] dark:bg-[#181A25]
					shadow-custom dark:shadow-customdark 
					transition-all duration-500
					border border-1 border-[#E3E4F1] dark:border-[#393A4B] '
			>
				<List tasks={tasks} toggle={toggleTask} remove={removeTask} setTasks={setTasks} filter={filter} />
				<Footer tasks={tasks} removeAll={removeAll} filter={filter} setFilter={setFilter} />
			</motion.div>
		</>
	)
}
