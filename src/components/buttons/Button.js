import React from 'react'
import { motion } from 'framer-motion'

export default function Button(props) {
	const { onClick, disabled, type, className, ariaLabel, cross } = props
	return (
		<button
			aria-label={ariaLabel}
			type={type}
			disabled={disabled}
			className={`block w-[24px] h-[24px] border
                        border-gray-300 dark:border-[#393A4B]
                        text-gray-300  dark:text-[#393A4B]
                        rounded-full ml-5
                        focus:outline-none focus:outline-offset-2 focus:outline-2 focus:outline-accent focus:border-accent focus:text-accent enabled:hover:border-accent enabled:hover:text-accent
                        dark:focus:border-accent dark:focus:text-accent 
                        transition-all duration-500 hover:duration-200 focus:duration-200 
                        ${!disabled && 'cursor-pointer'}
                        ${className}
                        `}
			onClick={onClick}
		>
			<motion.span
				initial={{
					rotate: cross ? '-45deg' : '-90deg',
					scale: 1,
				}}
				animate={{
					rotate: cross ? '45deg' : '0deg',
					scale: 1,
					transition: { duration: 0.3, ease: 'easeInOut' },
				}}
				whileHover={{
					rotate: !disabled ? (cross ? '135deg' : '90deg') : cross ? '45deg' : '0deg',
					scale: !disabled ? 1.3 : 1,
					transition: { duration: 0.3, ease: 'easeInOut' },
				}}
				className='block w-full h-full rounded-full hover:border-accent'
			>
				<div className='text-3xl font-light leading-[21px] align-middle text-center'>+</div>
			</motion.span>
		</button>
	)
}
