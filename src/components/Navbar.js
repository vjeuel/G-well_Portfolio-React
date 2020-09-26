import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
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
				{/* <img src={logo} alt='Logo' className='logo' /> */}
				<div className='jeuelBox'>
					<img src={jeuel} alt='Logo' className='jeuel' />
					<div className='jeuelCircle'></div>
				</div>
				<Link to='/' className='navLink'>
					<button>
						<span className='navLittleCircles'></span>
						about
						<span className='navLittleCircles'></span>
						<div className='navUnderlineAbout'></div>
					</button>
				</Link>
				<Link to='/portfolio' className='navLink'>
					<button>
						<span className='navLittleCircles'></span>
						portfolio
						<span className='navLittleCircles'></span>
						<div className='navUnderlinePortfolio'></div>
					</button>
				</Link>
				<Link to='/contact' className='navLink'>
					<button>
						<span className='navLittleCircles'></span>
						contact
						<span className='navLittleCircles'></span>
						<div className='navUnderlineContact'></div>
					</button>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
