import React from 'react';
import './Pages.css';
import './GraphicPages.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function CarminesPizza() {
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
				<div className='portfolioGraphicGrid'>
					{carminesLinks.map((data) => {
						return (
							<div>
								<img className='graphicImages' src={data.url} alt={data.id} />
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
}

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

const carminesLinks = [
	{
		url: './img/portfolio/graphic/carmines/carmines_logo.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/carmines/business_cards.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/carmines/windows_signs.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/carmines/menu_latest.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/carmines/carmines_door1.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/carmines/carmines_door2.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/carmines/banner_menu_latest.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/carmines/banner_pizza_sizes_latest.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/carmines/banner_menu_past.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/carmines/banner_pizza_sizes_past.png',
		alt: '',
	},
];

export default CarminesPizza;
