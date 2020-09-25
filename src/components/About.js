import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import jeuel from './img/jeuel.png';

function About() {
	return (
		<div className='pagesGrid about'>
			<h1>Hi! I'm Jeuel</h1>
			<img src={jeuel} alt='Logo' className='jeuelMobile' />
			<h2>
				Graphic Designer, <br />
				Full Stack Web Developer
				<br /> in Dallas, TX.
			</h2>
			<h3>
				Avid learner, Yoga enthusiast, Seasonal cyclist, <br /> Trilingual{' '}
				<span style={{ color: 'var(--sb)' }}>(English, Portuguese and Spanish)</span>
				,
				<br />
				Freelancer and{' '}
				<span style={{ color: 'var(--rd)' }}>
					<Link to='/contact'>READY</Link>
				</span>{' '}
				to be hired by your company.
			</h3>
		</div>
	);
}

export default About;
