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
						transition={{ delay: 1.5, duration: 1, type: 'spring' }}>
						web developer
					</motion.p>
				</div>
				<div className='jeuelBox'>
					<motion.img
						src={jeuel}
						alt="Jeuel's Pic"
						className='jeuel'
						whileHover={{ scale: 1.1, duration: 1 }}
						whileTap={{ scale: 0.9 }}
					/>
					<motion.div
						className='jeuelCircle'
						animate={{ opacity: 0.25, scale: 1.1 }}
						transition={{
							duration: 5,
							repeat: Infinity,
							repeatType: 'reverse',
							delay: 3,
						}}></motion.div>
				</div>
				<div className='navLinkBox'>
					<NavLink to='/' exact className='navLink' activeClassName='activeNavLink'>
						<span className='navLittleCircles' activeClassName='activeLittleCircles'></span>
						<span className='navLinkMenu'>about</span>
						<span className='navLittleCircles'></span>
						<div className='navUnderlineAbout'></div>
					</NavLink>
					<div className='navLinkDivision'></div>
					<NavLink to='/portfolio' className='navLink' activeClassName='activeNavLink'>
						<span className='navLittleCircles'></span>
						<span className='navLinkMenu'>portfolio</span>
						<span className='navLittleCircles'></span>
						<div className='navUnderlinePortfolio'></div>
					</NavLink>
					<div className='navLinkDivision'></div>
					<NavLink to='/contact' className='navLink' activeClassName='activeNavLink'>
						<span className='navLittleCircles'></span>
						<span className='navLinkMenu'>contact</span>
						<span className='navLittleCircles'></span>
						<div className='navUnderlineContact'></div>
					</NavLink>
					<NavLink
						to='/'
						exact
						className='navLink'
						isActive={(match, location) => {
							if (!match) {
								return false;
							}

							// only consider an event active if its event id is an odd number
							const eventID = parseInt(match.params.eventID);
							return !isNaN(eventID) && eventID % 2 === 1;
						}}>
						Event 123
						<div className='navUnderlineContact' isActive style={{ borderBottom: 'solid 2px red' }}></div>
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
