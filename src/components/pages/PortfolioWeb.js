import React from 'react';
import './Pages.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function PortfolioWeb() {
	return (
		<main>
			<div className='backgroundPortfolio'>
				<div className='webGraphicButtonsBox'>
					{menuLinks.map((data) => {
						return (
							<motion.div>
								<NavLink to={data.link} activeClassName='activeNavLink'>
									<motion.a
										target='_blank'
										rel='noopener noreferrer'
										className='webGraphicButtons'
										initial={{
											boxShadow: '0 6px 12px #a6a6a6, 0 -6px 12px #fff',
										}}
										whileHover={{
											backgroundColor: '#ff1e08',
											color: '#f2f2f2',
											scale: 1.025,
											boxShadow: 'inset 0 2px 5px #400702, inset 0 -3px 5px #f2f2f2',
											transition: { duration: 0 },
										}}>
										{data.buttons}
									</motion.a>
								</NavLink>
							</motion.div>
						);
					})}
				</div>
				<div className='portfolioGrid'>
					{links.map((data) => {
						return (
							<motion.div className='cards' variants={cardsVariants} initial='initial' whileHover='hover'>
								<a href={data.href} target='_blank' rel='noopener noreferrer' className='projectLinks'>
									<motion.h4>{data.title}</motion.h4>
									<motion.a
										href={data.github}
										target='_blank'
										rel='noopener noreferrer'
										className='gitHub'
										initial={{
											boxShadow: '0 6px 12px #a6a6a6, 0 -6px 12px #fff',
										}}
										whileHover={{
											backgroundColor: '#ff1e08',
											color: '#f2f2f2',
											scale: 1.025,
											boxShadow: 'inset 0 2px 5px #400702, inset 0 -3px 5px #f2f2f2',
											transition: { duration: 0 },
										}}>
										GitHub Repo
									</motion.a>
									<h5 className='cardsInfoTech'>{data.technology}</h5>
									<motion.div
										className='projectImgBox'
										variants={projectImgBoxVariants}
										initial='initial'
										whileHover='hover'>
										<motion.img
											src={data.url}
											alt={data.id}
											className='projectImg'
											variants={projectImgVariants}
										/>
										<motion.h5 variants={h5Variants} initial='initial' whileHover='hover'>
											{data.about}
										</motion.h5>
									</motion.div>
								</a>
							</motion.div>
						);
					})}
				</div>
			</div>
		</main>
	);
}

const cardsVariants = {
	hover: {
		scale: 1.025,
		transition: { duration: 0.5, yoyo: 1, when: 'beforeChildren' },
	},
};

const projectImgBoxVariants = {
	initial: {
		boxShadow: '0 8px 12px #a6a6a6, 0 -8px 12px #ffffff',
	},
	hover: {
		transition: { duration: 0 },
		boxShadow: 'inset 0 5px 5px #a6a6a6, inset 0 -4px 5px #ffffff',
	},
};

const projectImgVariants = {
	hover: {
		opacity: 0,
	},
};

const h5Variants = {
	initial: {
		opacity: 0,
	},
	hover: {
		opacity: 1,
		transition: { delay: 0.4 },
	},
};

const menuLinks = [
	{
		buttons: 'web development',
		link: '/portfolio-web',
	},
	{
		buttons: 'graphic design',
		link: '/portfolio-graphic',
	},
];

const links = [
	{
		id: 'inventory management system',
		href: 'https://lit-meadow-59526.herokuapp.com',
		url: './img/portfolio/web/chief.png',
		github: 'https://github.com/vjeuel/Inventory-Manager',
		title: 'Inventory Management System',
		about: 'a Full-Stack React app where small business owners can manage their inventory',
		technology: 'React, MongoDB, Material UI, JWT and Heroku',
	},
	{
		id: 'healthcare telemed',
		href: 'https://healthcaretelemed.us/',
		url: './img/portfolio/web/healthcare_telemed.png',
		github: 'https://github.com/vjeuel/healthcare_telemed',
		title: 'Healthcare Telemed',
		about: 'a Front-End React app where medical providers and patients can get connected',
		technology: 'React, SASS, EmailJs, Firebase',
	},
	{
		id: 'employee directory',
		href: 'https://vjeuel.github.io/employee_directory/',
		github: 'https://github.com/vjeuel/employee_directory',
		url: './img/portfolio/web/employee_directory.png',
		title: 'Employee Directory',
		about: 'List of employees that can be searched by name and sorted by phone number, name and email',
		technology: 'React and Github',
	},
	{
		id: 'budget tracker',
		href: 'https://protected-spire-02687.herokuapp.com',
		github: 'https://github.com/vjeuel/Budget-Tracker',
		url: './img/portfolio/web/budget_tracker.png',
		title: 'Budget Tracker',
		about: 'Designed to keep track of a budget and works offline thanks to IndexedDB',
		technology: 'MongoDB,IndexedDB for offline use and Heroku',
	},
	{
		id: 'fitness tracker',
		href: 'https://guarded-stream-70696.herokuapp.com',
		github: 'https://github.com/vjeuel/Fitness_Tracker',
		url: './img/portfolio/web/fitness_tracker.png',
		title: 'Fitness Tracker',
		about: 'Using asynchronous operations to get information from the database, the user can add and update workouts',
		technology: 'Express, Mongoose, Morgan and Heroku',
	},
	{
		id: 'restaurant user interface',
		href: 'https://digital-menu-project.herokuapp.com',
		github: 'https://github.com/vjeuel/Digital-Menu-Project',
		url: './img/portfolio/web/druid.png',
		title: 'Restaurant User Interface',
		about: 'App that allows restaurants to create, update and delete items on their menus, and uses a login system to protect the data and users',
		technology: 'MySQL, Express, Sequelize, Shoelace CSS Library and Bcrypt.js',
	},
	{
		id: 'hungry-at-home',
		href: 'https://vjeuel.github.io/food_api_app/ ',
		github: 'https://github.com/vjeuel/food_api_app',
		url: './img/portfolio/web/hungry_at_home_api_connection.png',
		title: 'Hungry at Home',
		about: 'App for searching recipes and drinks while staying informed on the latest Covid-19 news. Uses 3 API from different sources',
		technology: 'Materialize CSS, 3 APIs and jQuery',
	},
	{
		id: 'weather-app',
		href: 'https://vjeuel.github.io/weather_app/ ',
		github: 'https://github.com/vjeuel/weather_app',
		url: './img/portfolio/web/weather_api.png',
		title: 'Weather|APP',
		about: 'A live weather forecast for any location in the world, where you type a location and shows you the next 5 days forecast and the current weather',
		technology: 'Moment.js, jQuery, FontAwesome and Weather API',
	},
	{
		id: 'the burger joint',
		href: 'https://morning-savannah-57705.herokuapp.com/',
		github: 'https://github.com/vjeuel/Burger_App',
		url: './img/portfolio/web/the_burger_joint.png',
		title: 'The Burger Joint',
		about: 'App that let you create, devour and trash burgers, uses MySQL database.',
		technology: 'Node.js, MySQL, Express, Handlebars and Heroku',
	},
	{
		id: 'crazy team',
		href: 'https://vjeuel.github.io/TeamProfileGenerator/Develop/output/team.html ',
		github: 'https://github.com/vjeuel/TeamProfileGenerator',
		url: './img/portfolio/web/crazy_team.png',
		title: 'Crazy Team | Team Generator',
		about: 'This app generates profile on several individuals in an organization by asking question on terminal using Node.js and renders a web page once all the data has been added',
		technology: 'Node.js, Inquirer and Jest',
	},
	{
		id: 'work-day-scheduler',
		href: 'https://vjeuel.github.io/work_day_scheduler/ ',
		github: 'https://github.com/vjeuel/work_day_scheduler',
		url: './img/portfolio/web/work_day_scheduler.png',
		title: 'Work Day Scheduler',
		about: 'In this app you can type your daily activities and it will be saved on local storage, so even if you refresh the page you are not losing the typed information',
		technology: 'Moment.js, jQuery and Bootstrap',
	},
	{
		id: 'password-generator',
		href: 'https://vjeuel.github.io/Password_Generator/',
		github: 'https://github.com/vjeuel/Password_Generator',
		url: './img/portfolio/web/password_generator.png',
		title: 'Password Generator',
		about: 'Application designed to generate a password by number of characters, numbers, lowercase, uppercase and special characters',
		technology: 'HTML, CSS and JavaScript',
	},
	{
		id: 'carmines-pizzeria',
		href: 'https://vjeuel.github.io/carmines-pizzeria-grid/ ',
		github: 'https://github.com/vjeuel/carmines-pizzeria-grid',
		url: './img/portfolio/web/carmines_pizzeria.png',
		title: "Carmine's Pizzeria",
		about: 'Static website that takes full advantage of CSS Grids',
		technology: 'HTML, CSS and FontAwesome',
	},
	{
		id: 'tonys-pizza',
		href: 'https://vjeuel.github.io/tonys-pizza/ ',
		github: 'https://github.com/vjeuel/tonys-pizza',
		url: './img/portfolio/web/tonys_pizza.png',
		title: "Tony's Pizza and Pasta",
		about: 'Static website that takes full advantage of CSS Grids',
		technology: 'HTML, CSS and FontAwesome',
	},
	{
		id: 'tip-calculator',
		href: 'https://vjeuel.github.io/TipCalculator/ ',
		github: 'https://github.com/vjeuel/TipCalculator',
		url: './img/portfolio/web/tip_calculator.png',
		title: 'Tip Calculator',
		about: 'Written using Neumorphism Design',
		technology: 'HTML, CSS and JavaScript',
	},
	{
		id: 'white-rock-yoga',
		href: 'https://vjeuel.github.io/white-rock-yoga/ ',
		github: 'https://github.com/vjeuel/white-rock-yoga',
		url: './img/portfolio/web/white_rock_yoga.png',
		title: 'White Rock Yoga',
		about: 'Static website that uses a mix of CSS Grid and FlexBox - under construction',
		technology: 'HTML, CSS and FontAwesome',
	},
	{
		id: 'neumorphism-form',
		href: 'https://vjeuel.github.io/neomorphism-form/ ',
		github: 'https://github.com/vjeuel/neomorphism-form',
		url: './img/portfolio/web/neomorphism_form.png',
		title: 'Neumorphism Form',
		about: 'Form created using Neumorphism Design',
		technology: 'HTML, CSS and FontAwesome',
	},
	{
		id: 'code-quiz',
		href: 'https://vjeuel.github.io/JavaScript_Quizz/ ',
		github: 'https://github.com/vjeuel/JavaScript_Quizz',
		url: './img/portfolio/web/code_quiz.png',
		title: 'Code Quiz Challenge',
		about: 'Series of questions that runs in a loop, where if you get the answers to be correct it moves to the next question, but if you get it wrong, it deducts 10 seconds from your time and than moves to the next question',
		technology: 'HTML, CSS and JavaScript',
	},
];

export default PortfolioWeb;
