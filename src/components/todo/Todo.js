import React from 'react'
import AddTask from './AddTask'
import List from './List'
import Footer from './Footer'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'

export default function Todo() {
	const initialTasks = [
		{ id: nanoid(), title: 'Complete online JavaScript course', completed: true },
		{ id: nanoid(), title: 'Jog around the park 3x', completed: false },
		{ id: nanoid(), title: '10 minutes meditation', completed: false },
		{ id: nanoid(), title: 'Read for 1 hour', completed: false },
		{ id: nanoid(), title: 'Pick up groceries', completed: false },
		{ id: nanoid(), title: 'Complete Todo App on Frontend Mentor', completed: true },
	]

	// @ts-ignore
	const [tasks, setTasks] = React.useState(localStorage.getItem('Todo-App-Tasks') ? JSON.parse(localStorage.getItem('Todo-App-Tasks')) : initialTasks)

	const save = (item) => {
		console.log('saving')
		setTasks(item ? item : tasks)
		localStorage.setItem('Todo-App-Tasks', JSON.stringify(item ? item : tasks))
	}

	// @ts-ignore
	const [filter, setFilter] = React.useState(localStorage.getItem('Todo-App-Filter') ? JSON.parse(localStorage.getItem('Todo-App-Filter')) : 'All')
	React.useEffect(() => {
		localStorage.setItem('Todo-App-Filter', JSON.stringify(filter))
	}, [filter])

	const createTask = (/** @type {any} */ title) => {
		const newTasks = [{ id: nanoid(), title: title, completed: false }, ...tasks]
		save(newTasks)
	}
	const removeTask = (/** @type {string} */ id) => {
		const newTasks = tasks.filter((task) => task.id !== id)
		save(newTasks)
	}
	const toggleTask = (/** @type {string} */ id) => {
		const newTasks = tasks.map((task) => {
			if (task.id === id) {
				task.completed = !task.completed
			}
			return task
		})
		save(newTasks)
	}
	const removeAll = () => {
		const newTasks = tasks.filter((task) => !task.completed)
		save(newTasks)
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
				<List tasks={tasks} toggle={toggleTask} remove={removeTask} setTasks={setTasks} filter={filter} save={save} />
				<Footer tasks={tasks} removeAll={removeAll} filter={filter} setFilter={setFilter} />
			</motion.div>
		</>
	)
}
