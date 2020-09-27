import React from 'react';
import './Pages.css';

function Contact() {
	return (
		<div className='portfolioGrid'>
			{links.map((data) => {
				return (
					<div className='cards'>
						<a href={data.href} target='_blank' rel='noopener noreferrer' className='projectLinks'>
							<img style={{ backgroundImage: 'url(' + data.url + ')' }} className='projectImg' alt='' />
							<h4>{data.title}</h4>
							<h5>{data.about}</h5>
						</a>
					</div>
				);
			})}
		</div>
	);
}

const links = [
	{
		id: 'inventory management system',
		href: 'https://lit-meadow-59526.herokuapp.com',
		url: './img/portfolio/chief.png',
		title: 'Inventory Management System',
		about: 'React app, Full Stack Development',
	},
	{
		id: 'employee directory',
		href: 'https://vjeuel.github.io/employee_directory/',
		url: './img/portfolio/employee_directory.png',
		title: 'Employee Directory',
		about: 'React app with Search and Sort capabilities',
	},
	{
		id: 'budget tracker',
		href: 'https://protected-spire-02687.herokuapp.com/',
		url: './img/portfolio/budget_tracker.png',
		title: 'Budget Tracker',
		about: 'Uses MongoDB and IndexedDB for offline use',
	},
	{
		id: 'fitness tracker',
		href: 'https://guarded-stream-70696.herokuapp.com',
		url: './img/portfolio/fitness_tracker.png',
		title: 'Fitness Tracker',
		about: 'Uses MongoDB and npm dependencies',
	},
	{
		id: 'restaurant user interface',
		href: 'https://digital-menu-project.herokuapp.com/ ',
		url: './img/portfolio/druid.png',
		title: 'Restaurant User Interface',
		about: 'Uses MySQL, Express and Sequelize',
	},
	{
		id: 'hungry-at-home',
		href: 'https://vjeuel.github.io/food_api_app/ ',
		url: './img/portfolio/hungry_at_home_api_connection.png',
		title: 'Hungry at Home',
		about: 'API connected website',
	},
	{
		id: 'weather-app',
		href: 'https://vjeuel.github.io/weather_app/ ',
		url: './img/portfolio/weather_api.png',
		title: 'Weather|APP',
		about: 'API connected website',
	},
	{
		id: 'the burger joint',
		href: 'https://morning-savannah-57705.herokuapp.com/ ',
		url: './img/portfolio/the_burger_joint.png',
		title: 'The Burger Joint',
		about: 'Application that uses Node.js, MySQL...',
	},
	{
		id: 'crazy team',
		href: 'https://vjeuel.github.io/TeamProfileGenerator/Develop/output/team.html ',
		url: './img/portfolio/crazy_team.png',
		title: 'Crazy Team | Team Generator',
		about: 'Terminal Node.js team profile generator',
	},
	{
		id: 'work-day-scheduler',
		href: 'https://vjeuel.github.io/work_day_scheduler/ ',
		url: './img/portfolio/work_day_scheduler.png',
		title: 'Work Day Scheduler',
		about: 'Website that uses Local Storage',
	},
	{
		id: 'password-generator',
		href: 'https://vjeuel.github.io/Homework-3/ ',
		url: './img/portfolio/password_generator.png',
		title: 'Password Generator',
		about: 'App',
	},
	{
		id: 'carmines-pizzeria',
		href: 'https://vjeuel.github.io/carmines-pizzeria-grid/ ',
		url: './img/portfolio/carmines_pizzeria.png',
		title: "Carmine's Pizzeria",
		about: 'Static website',
	},
	{
		id: 'tonys-pizza',
		href: 'https://vjeuel.github.io/tonys-pizza/ ',
		url: './img/portfolio/tonys_pizza.png',
		title: "Tony's Pizza and Pasta",
		about: 'Static website',
	},
	{
		id: 'tip-calculator',
		href: 'https://vjeuel.github.io/TipCalculator/ ',
		url: './img/portfolio/tip_calculator.png',
		title: 'Tip Calculator',
		about: 'App',
	},
	{
		id: 'white-rock-yoga',
		href: 'https://vjeuel.github.io/white-rock-yoga/ ',
		url: './img/portfolio/white_rock_yoga.png',
		title: 'White Rock Yoga',
		about: 'Static website - under construction',
	},
	{
		id: 'neumorphism-form',
		href: 'https://vjeuel.github.io/neomorphism-form/ ',
		url: './img/portfolio/neomorphism_form.png',
		title: 'Neumorphism Form',
		about: 'Form',
	},
	{
		id: 'code-quiz',
		href: 'https://vjeuel.github.io/JavaScript_Quizz/ ',
		url: './img/portfolio/code_quiz.png',
		title: 'Code Quiz Challenge',
		about: 'Game',
	},
	{
		id: 'favorite-animal',
		href: 'https://vjeuel.github.io/favorite-animal/ ',
		url: './img/portfolio/favorite_animal.png',
		title: 'Favorite Animal',
		about: 'Static website',
	},
	{
		id: 'workout-app',
		href: 'https://vjeuel.github.io/workout-program/ ',
		url: './img/portfolio/workout_app.png',
		title: 'Workout App',
		about: 'App / Website - Under development',
	},
];

export default Contact;
