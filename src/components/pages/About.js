import React from 'react';
import { NavLink } from 'react-router-dom';
import './Pages.css';
import jeuel from '../img/jeuel.png';

function About() {
	return (
		<div className='pagesGrid about'>
			<h1>Hi! I'm Jeuel</h1>
			<img src={jeuel} alt='Logo' className='jeuelMobile' />
			<h2>
				Graphic Designer, <br />
				Full Stack Web Developer
				<br /> with focus on Front-End
				<br /> in Dallas, TX.
			</h2>
			<h3>
				Avid learner, Yoga enthusiast, Seasonal cyclist, <br /> Trilingual{' '}
				<span style={{ color: 'var(--tb)' }}>(English, Portuguese and Spanish)</span>
				,
				<br />
				Freelancer and{' '}
				<span style={{ color: 'var(--rd)' }}>
					<NavLink to='/contact'>READY</NavLink>
				</span>{' '}
				to be hired by your company.
			</h3>
		</div>
	);
}

export default About;
