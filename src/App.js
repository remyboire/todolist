import React from 'react'
import Todo from './components/todo/Todo'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { motion, MotionConfig } from 'framer-motion'
import Message from './components/buttons/Message'
// @ts-ignore
import prefersColorSchemeInit from 'css-prefers-color-scheme/browser'

export default function App() {
	const colorMode = prefersColorSchemeInit()
	const darkModeVariable = 'Todo-App-DarkMode'
	const [isDarkMode, setDarkMode] = React.useState(
		// @ts-ignore
		localStorage.getItem(darkModeVariable) ? JSON.parse(localStorage.getItem(darkModeVariable)) : colorMode.scheme === 'dark' ? true : false
	)
	React.useEffect(() => {
		localStorage.setItem(darkModeVariable, JSON.stringify(isDarkMode))
	}, [isDarkMode])

	const toggleDarkMode = (checked) => {
		setDarkMode(checked)
	}
	const container = {
		show: {
			transition: {
				staggerChildren: 0.05,
				delayChildren: 0.55,
			},
		},
	}
	const item = {
		hide: { opacity: 0, rotateX: 100, y: 50 },
		show: { opacity: 1, rotateX: 0, y: 0 },
	}

	return (
		<MotionConfig reducedMotion='user'>
			<motion.div
				variants={container}
				initial='hide'
				animate='show'
				className={`App min-h-screen text-[#494C6B] dark:text-[#C8CBE7] ${isDarkMode ? 'dark' : 'light'}`}
			>
				<div className='max-w-lg m-auto px-6 pt-3 sm:pt-20 flex flex-col min-h-screen'>
					<header className='flex mb-5 items-center'>
						<div className='overflow-hidden mr-auto'>
							<motion.h1 className='text-4xl font-bold  pt-3  text-accent dark:text-white transition-colors duration-500 inline-flex'>
								<motion.span variants={item} className='mr-2'>
									T
								</motion.span>
								<motion.span variants={item} className='mr-2'>
									O
								</motion.span>
								<motion.span variants={item} className='mr-2'>
									D
								</motion.span>
								<motion.span variants={item}>O</motion.span>
							</motion.h1>
						</div>
						<motion.div variants={item} className='text-4xl font-bold  pt-1  text-accent dark:text-white transition-colors duration-500'>
							<DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={40} className='m-0' sunColor={'#7c6df3'} />
						</motion.div>
					</header>
					<div>
						<Todo />
						<motion.div variants={item}>
							<Message message='Dismiss'>Drag and drop to reorder the list</Message>
						</motion.div>
					</div>
					<motion.div variants={item} className='mt-auto mb-5 text-center pt-10 text-sm'>
						Challenge by{' '}
						<a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
							Frontend Mentor
						</a>
						. Coded by{' '}
						<a
							href='https://remy.boire.dev/?mtm_campaign=todo-list'
							target='_blank'
							rel='noreferrer'
							className='text-accent border-2 border-accent p-1 rounded-md hover:bg-accent hover:text-white'
						>
							Rémy Boiré
						</a>
					</motion.div>
				</div>
				<div className='background-wrapper bg-[#e0ecff] dark:bg-[#171823]'>
					<div className='background'></div>
				</div>
			</motion.div>
		</MotionConfig>
	)
}
