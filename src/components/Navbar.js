import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import jeuel from './img/jeuel.png';
import { motion } from 'framer-motion';

function Navbar() {
	return (
		<nav className='navGrid'>
			<div className='mainGrid'>
				<div className='logoBox'>
					<motion.p className='g' initial={{ y: '-100vh' }} animate={{ y: 0 }} transition={{ type: 'spring' }}>
						g
					</motion.p>
					<motion.p
						className='well'
						initial={{ y: '-100vh' }}
						animate={{ y: 0 }}
						transition={{ delay: 1, duration: 1, type: 'spring' }}>
						well
					</motion.p>
					<motion.p
						className='webDeveloper'
						initial={{ x: '-100vw' }}
						animate={{ x: 0 }}
						transition={{ delay: 1.5, type: 'spring', stiffness: 150, damping: 10, mass: 1.5 }}>
						web developer
					</motion.p>
				</div>
				<div className='jeuelBox'>
					<motion.img
						src={jeuel}
						alt="Jeuel's Pic"
						className='jeuel'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{ duration: 2, type: 'spring', stiffness: 300 }}
					/>
					<motion.div
						className='jeuelCircle'
						animate={{ opacity: 0.25, scale: [1, 1, 1.08, 1, 1, 1.05, 1] }}
						transition={{
							duration: 5,
							yoyo: Infinity,
							delay: 5,
						}}></motion.div>
				</div>

				<motion.div className='navLinkBox' variants={navLinkBoxVariants} initial='hidden' animate='visible'>
					{links.map((data) => {
						return (
							<NavLink to={data.link} exact className='navLink' activeClassName='activeNavLink'>
								<motion.div variants={(navLinkVariants, hoverVariants)} whileHover='hover'>
									<motion.span
										className='navLittleCircles'
										variants={hoverLittleCirclesVariants}></motion.span>
									<span className='navLinkMenu' activeClassName='activeNavLink'>
										{data.menu}
									</span>
									<motion.span
										className='navLittleCircles'
										variants={hoverLittleCirclesVariants}></motion.span>
									<motion.div className='navUnderlineAbout'></motion.div>
								</motion.div>
							</NavLink>
						);
					})}
				</motion.div>
			</div>
		</nav>
	);
}

const links = [
	{
		menu: 'about',
		link: '/',
	},
	{
		menu: 'portfolio',
		link: '/portfolio',
	},
	{
		menu: 'skills',
		link: '/skills',
	},
	{
		menu: 'contact',
		link: '/contact',
	},
];

const navLinkBoxVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 2,
			delay: 2,
			when: 'beforeChildren',
			staggerChildren: 0.4,
		},
	},
};

const navLinkVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { duration: 1 },
	},
};

const hoverVariants = {
	hover: {
		scale: 1.1,
		color: '#26a8ff',
		transition: { duration: 0.5 },
	},
};

const hoverLittleCirclesVariants = {
	hover: {
		borderColor: '#ff1e08',
		opacity: [0, 1],
		scale: [1, 1.5, 1],
		transition: { duration: 0.5, yoyo: 2 },
	},
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 1,
	},
};

export default Navbar;
