import React from 'react'

function Footer(props) {
	const { tasks, removeAll, filter, setFilter } = props

	const itemsLeft = tasks.filter((task) => !task.completed).length
	const options = ['All', 'Active', 'Completed']
	return (
		<div
			className='flex p-2 text-xs bg-white dark:bg-[#25273D]  transition-all duration-500
					border-t border-1 border-[#E3E4F1] dark:border-[#393A4B]
					text-[#9495A5] dark:text-[#5B5E7E]
'
		>
			<span className='flex-1 flex pt-1.5 pb-1 px-1.5'>
				{itemsLeft} item{itemsLeft > 1 && 's'} left
			</span>

			<span className='flex-1 text-center flex justify-center gap-3 '>
				{options.map((option, i) => (
					<button
						key={i}
						className={`
						font-bold pt-1.5 pb-1 px-1.5 
						rounded-sm
						focus:outline-none
						focus:outline-offset-2
						focus:outline-accent
						focus:outline-2
						${filter !== option && 'hover:text-[#494C6B] focus:text-[#494C6B] dark:hover:text-[#E3E4F1] dark:focus:text-[#E3E4F1]'}
						${filter === option ? ' text-accent' : 'text-[#9495A5] dark:text-[#5B5E7E] cursor-pointer'}`}
						onClick={() => setFilter(option)}
					>
						{option}
					</button>
				))}
			</span>

			<span className='flex-1 text-right cursor-pointer'>
				<button
					className='pt-1.5 pb-1 px-1.5 						
					rounded-sm
					focus:outline-none
					focus:outline-offset-2
					focus:outline-accent
					focus:outline-2
					text-[#9495A5] dark:text-[#5B5E7E]
					hover:text-[#494C6B] focus:text-[#494C6B] dark:hover:text-[#E3E4F1] dark:focus:text-[#E3E4F1]
'
					onClick={removeAll}
				>
					Clear Completed
				</button>
			</span>
		</div>
	)
}
export default Footer
