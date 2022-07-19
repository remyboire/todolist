import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Message(props) {
	const { message, children } = props

	const [notice, setNotice] = React.useState(localStorage.getItem(`Todo-App-Message-${children}`) === 'false' ? false : true)
	const handleClick = () => {
		setNotice(false)
		localStorage.setItem(`Todo-App-Message-${children}`, 'false')
	}

	const item = {
		hide: { opacity: 0, rotateX: 100, y: 50 },
		show: { opacity: 1, rotateX: 0, y: 0 },
	}

	return (
		<AnimatePresence>
			{notice && (
				<motion.div
					variants={item}
					initial='hide'
					animate='show'
					exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
					whileHover={'hover'}
					className='relative text-center mt-12 text-[#494C6B] dark:text-[#5B5E7E] text-sm '
				>
					{children}
					<motion.div
						className='absolute right-1/2 top-3 translate-x-1/2 px-3 py-2 mt-4  rounded-md bg-accent text-white
									before:bg-accent before:w-3 before:h-3  before:absolute before:-top-1 before:right-1/2 before:translate-x-1/2 
									before:rotate-45 cursor-pointer hover:underline
									'
						onClick={() => handleClick()}
						initial={{ opacity: 0 }}
						animate={{ opacity: 0 }}
						variants={{
							hover: {
								opacity: 1,
							},
							focus: {
								opacity: 1,
							},
						}}
						transition={{ duration: 0.3 }}
					>
						{message}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
