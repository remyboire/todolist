import * as React from 'react'
import { useMotionValue, Reorder, motion } from 'framer-motion'
import { useRaisedShadow } from './../../utils/use-raised-shadow'
import Checkbox from './../checkbox/checkbox'
import Button from '../buttons/Button'

export const ListItem = (props) => {
	console.log('render ListItem')

	const { remove, toggle, value, show } = props
	const { id, title, completed } = value

	const y = useMotionValue(0)
	const boxShadow = useRaisedShadow(y)

	const item = {
		hide: {
			height: 0,
			rotateX: '-90deg',
		},
		shown: (custom) => ({
			height: !custom ? 'auto' : 0,
			rotateX: !custom ? '0deg' : '-90deg',
		}),
	}

	return (
		<Reorder.Item value={value} id={id} style={{ boxShadow, y }} className='relative first:rounded-t-sm'>
			<motion.div
				variants={item}
				custom={show}
				initial={'hide'}
				exit={'hide'}
				animate={'shown'}
				whileHover={'hover'}
				whileFocus={'focus'}
				style={{
					originY: 'top',
					transformPerspective: 500,
				}}
				className='backface-hidden block'
				transition={{ ease: 'easeInOut', duration: 0.75, height: { ease: [0.7, 0, 0.4, 1], duration: 0.75 } }}
			>
				<div
					className={`list-items p-3 
					outline outline-1 outline-[#E3E4F1] dark:outline-[#393A4B]
					bg-white dark:bg-[#25273D]	
					cursor-move flex content-center items-center overflow-hidden
					transition-colors duration-500
					`}
				>
					<Checkbox checked={completed} onChange={() => toggle(id)} disabled={show} />
					<p
						className={`
					${completed ? `text-[#d1d2da] dark:text-[#4D5067] after:bg-[#d1d2da] dark:after:bg-[#4D5067] after:w-full` : `after:w-0 dark:after:bg-[#C8CBE7]`} 
					px-1 mt-3 mb-2 text-sm relative	dark:text-[#C8CBE7]		
					after:absolute after:top-1/2 after:left-0 after:h-[1px]
					after:transition-all after:duration-300 after:ease-out
					transition-all duration-300 ease-out
					`}
					>
						{title}
					</p>
					<motion.span
						className='ml-auto mr-2'
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
						transition={{ duration: 0 }}
					>
						<Button cross={true} onClick={() => remove(id)} ariaLabel={'Delete'} />
					</motion.span>
				</div>
			</motion.div>
		</Reorder.Item>
	)
}
