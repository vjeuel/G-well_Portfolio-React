import React from 'react';
import './Pages.css';
import Resume from '../img/ResumeJeuel.pdf';

function Contact() {
	return (
		<div className='pagesGrid contact'>
			<h1>My name is Jeuel Viveros</h1>
			<h2>Let's create good things together.</h2>
			<h3>I am a Boot Camp graduate at SMU, Dallas, TX.</h3>
			{links.map((data) => {
				return (
					<h3>
						Got a few projects in my{' '}
						<a href={data.github} target='_blank' rel='noopener noreferrer'>
							GitHub
						</a>
						, check out my{' '}
						<a href={data.linkedIn} target='_blank' rel='noopener noreferrer'>
							LinkedIn
						</a>{' '}
						profile
						<br /> and feel free to reach out by{' '}
						<a href={data.email} target='_blank' rel='noopener noreferrer'>
							e-mail
						</a>{' '}
						or <a href={data.phone}>phone</a>.
					</h3>
				);
			})}
			<h3>
				Ahhh, make sure to check my{' '}
				<a href={Resume} target='_blank' rel='noopener noreferrer'>
					resume
				</a>{' '}
				too!
			</h3>
		</div>
	);
}

const links = [
	{
		github: 'https://github.com/vjeuel',
		linkedIn: 'https://www.linkedin.com/in/vjeuel/',
		email: 'mailto:vjeuel@gmail.com',
		phone: 'tel:2147837757',
	},
];

export default Contact;
