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
						animate={{ opacity: 0.25, scale: 1.09 }}
						transition={{
							duration: 5,
							repeat: Infinity,
							repeatType: 'reverse',
							delay: 5,
						}}></motion.div>
				</div>
				<motion.div className='navLinkBox' variants={navLinkBoxVariants} initial='hidden' animate='visible'>
					<NavLink to='/' exact className='navLink' activeClassName='activeNavLink'>
						<motion.div variants={navLinkVariants}>
							<span className='navLittleCircles' activeClassName='activeLittleCircles'></span>
							<span className='navLinkMenu'>about</span>
							<motion.span
								className='navLittleCircles'
								variants={hoverVariants}
								whileHover='hover'></motion.span>
							<div className='navUnderlineAbout'></div>
						</motion.div>
					</NavLink>

					<NavLink to='/portfolio' className='navLink' activeClassName='activeNavLink'>
						<motion.div variants={navLinkVariants}>
							<span className='navLittleCircles'></span>
							<span className='navLinkMenu'>portfolio</span>
							<span className='navLittleCircles'></span>
							<div className='navUnderlinePortfolio'></div>
						</motion.div>
					</NavLink>

					<NavLink to='/contact' className='navLink' activeClassName='activeNavLink'>
						<motion.div variants={navLinkVariants}>
							<span className='navLittleCircles'></span>
							<span className='navLinkMenu'>contact</span>
							<span className='navLittleCircles'></span>
							<div className='navUnderlineContact'></div>
						</motion.div>
					</NavLink>
				</motion.div>
			</div>
		</nav>
	);
}

const navLinkBoxVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			delay: 3,
			staggerChildren: 0.5,
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
		whileHover: {
			scale: 1.1,
		},
	},
};

export default Navbar;
