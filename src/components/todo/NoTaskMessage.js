import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function NoTaskMessage(props) {
	const { tasks, filter } = props

	const filteredTasks = tasks.filter((task) => {
		if (filter === 'Active') {
			return !task.completed
		}
		if (filter === 'Completed') {
			return task.completed
		}
		return true
	})

	const item = {
		hide: {
			height: 0,
			rotateX: '90deg',
		},
		shown: (custom) => ({
			height: !custom ? 'auto' : 0,
			rotateX: !custom ? '0deg' : '90deg',
			transition: {
				duration: 1,
			},
		}),
	}


	return (
		<motion.li
			key={'no-tasks'}
			variants={item}
			initial='hide'
			animate='shown'
			custom={filteredTasks.length !== 0}
			exit='hide'
			style={{
				originY: 'bottom',
				transformPerspective: 500,
			}}
		>
			<div
				className={`list-items p-3 
					bg-white dark:bg-[#25273D] 
					transition-all duration-500
					text-sm justify-center flex content-center items-center`}
			>
				<div className={`px-1 mt-3 mb-2 text-sm pb-5`}>
					<AnimatePresence>
						{filteredTasks.length === 0 && filter === 'Active' && (
							<motion.div
								className='text-center relative  -mb-[20px]'
								key='Active'
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={{ duration: 0.3 }}
							>
								No active todo
							</motion.div>
						)}
						{filteredTasks.length === 0 && filter === 'Completed' && (
							<motion.div
								className='text-center relative  -mb-[20px]'
								key='Completed'
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={{ duration: 0.3 }}
							>
								No completed todo
							</motion.div>
						)}
						{filteredTasks.length === 0 && filter === 'All' && (
							<motion.div
								className='text-center relative  -mb-[20px]'
								key='All'
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={{ duration: 0.3 }}
							>
								No todo yet
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</motion.li>
	)
}
