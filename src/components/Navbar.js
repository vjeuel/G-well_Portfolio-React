import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import jeuel from './img/jeuel.png';

function Navbar() {
	return (
		<nav className='navGrid'>
			<div className='mainGrid'>
				<img src={logo} alt='Logo' className='logo' />
				<img src={jeuel} alt='Logo' className='jeuel' />
				<Link to='/' className='navLink'>
					<button>about</button>
				</Link>
				<Link to='/portfolio' className='navLink'>
					<button>portfolio</button>
				</Link>
				<Link to='/contact' className='navLink'>
					<button>contact</button>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
