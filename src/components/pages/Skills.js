import React from 'react';
import './Pages.css';

function Skills() {
	return (
		<main>
			<div className='backgroundSkills'>
				<div className='skillsGrid'>
					{links.map((data) => {
						return (
							<div className='cardsSkills'>
								<img src={data.logo} alt={data.title} className='skillsImg'></img>
								<h4 className='cardsSkillsTitle'>{data.title}</h4>
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
}

const links = [
	{
		title: 'HTML 5',
		logo: './img/skills/html-5.svg',
	},
	{
		title: 'CSS 3',
		logo: './img/skills/css-5.svg',
	},
	{
		title: 'JavaScript',
		logo: './img/skills/javascript.svg',
	},
	{
		title: 'React',
		logo: './img/skills/react.svg',
	},
	{
		title: 'jQuery',
		logo: './img/skills/jquery-1.svg',
	},
	{
		title: 'Node.js',
		logo: './img/skills/nodejs.svg',
	},
	{
		title: 'MySQL',
		logo: './img/skills/mysql.svg',
	},
	{
		title: 'MongoDB',
		logo: './img/skills/mongodb.svg',
	},
	{
		title: 'Handlebars',
		logo: './img/skills/handlebars-1.svg',
	},
	{
		title: 'GitHub',
		logo: './img/skills/github-1.svg',
	},
	{
		title: 'Boostrap',
		logo: './img/skills/bootstrap-4.svg',
	},
	{
		title: 'Materialize',
		logo: './img/skills/materialize.svg',
	},
	{
		title: 'Material UI',
		logo: './img/skills/material-ui-1.svg',
	},
	{
		title: 'Shoelace',
		logo: './img/skills/shoelacestyle-ar21.svg',
	},
	{
		title: 'Font Awesome',
		logo: './img/skills/fontawesome-1.svg',
	},
	{
		title: 'Photoshop',
		logo: './img/skills/photoshop-cc-4.svg',
	},
	{
		title: 'Illustrator',
		logo: './img/skills/adobe-illustrator-cc.svg',
	},
	{
		title: 'Affinity Designer',
		logo: './img/skills/affinity-designer.svg',
	},
	{
		title: 'Affinity Photo',
		logo: './img/skills/affinity-photo.svg',
	},
	{
		title: 'Affinity Publisher',
		logo: './img/skills/affinity-publisher.svg',
	},
];

export default Skills;