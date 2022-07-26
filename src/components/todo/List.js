import React from 'react'
import { Reorder, AnimatePresence } from 'framer-motion'
import { ListItem } from './ListItem'
import NoTaskMessage from './NoTaskMessage'

function List(props) {
	const { tasks, toggle, remove, setTasks, filter, save } = props

	function doWeShowIf(completed) {
		if (filter === 'Active' && completed) {
			return true
		}
		if (filter === 'Completed' && !completed) {
			return true
		}
		return false
	}
	return (
		<>
			<Reorder.Group
				axis='y'
				onReorder={(tasks) => {
					setTasks(tasks)
				}}
				values={tasks}
				className='overflow-hidden'
			>
				<AnimatePresence>
					{tasks.map((task) => {
						return <ListItem value={task} key={'item' + task.id} toggle={toggle} remove={remove} show={doWeShowIf(task.completed)} save={save} />
					})}
					<NoTaskMessage tasks={tasks} filter={filter} />
				</AnimatePresence>
			</Reorder.Group>
		</>
	)
}
export default List
