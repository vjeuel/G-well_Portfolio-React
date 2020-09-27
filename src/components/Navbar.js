import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import jeuel from './img/jeuel.png';

function Navbar() {
	return (
		<nav className='navGrid'>
			<div className='mainGrid'>
				<div className='logoBox'>
					<hp className='g'>g</hp>
					<p className='well'>well</p>
					<p className='webDeveloper'>web developer</p>
				</div>
				<div className='jeuelBox'>
					<img src={jeuel} alt='Logo' className='jeuel' />
					<div className='jeuelCircle'></div>
				</div>
				<div className='navLinkBox'>
					<NavLink to='/' exact className='navLink' activeClassName='activeNavLink'>
						<span className='navLittleCircles' activeClassName='activeLittleCircles'></span>
						<span>about</span>
						<span className='navLittleCircles'></span>
						<div className='navUnderlineAbout'></div>
					</NavLink>
					<div></div>
					<NavLink to='/portfolio' className='navLink' activeClassName='activeNavLink'>
						<span className='navLittleCircles'></span>
						portfolio
						<span className='navLittleCircles'></span>
						<div className='navUnderlinePortfolio'></div>
					</NavLink>
					<div></div>
					<NavLink to='/contact' className='navLink' activeClassName='activeNavLink'>
						<span className='navLittleCircles'></span>
						contact
						<span className='navLittleCircles'></span>
						<div className='navUnderlineContact'></div>
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
