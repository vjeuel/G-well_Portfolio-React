import React from 'react';
import './Pages.css';
import './GraphicPages.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function TonysPizza() {
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
					{tonysLinks.map((data) => {
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

const tonysLinks = [
	{
		url: './img/portfolio/graphic/tonys/logo2014.png',
		alt: 'Restaurant Logo',
	},
	{
		url: './img/portfolio/graphic/tonys/NY2014.png',
		alt: 'New York Style Logo',
	},
	{
		url: './img/portfolio/graphic/tonys/uniform.png',
		alt: "Restaurant's Uniforms",
	},
	{
		url: './img/portfolio/graphic/tonys/box_top.png',
		alt: 'Add to be placed on top of pizza boxes',
	},
	{
		url: './img/portfolio/graphic/tonys/menu1_front.png',
		alt: "Full restaurant's menu",
	},
	{
		url: './img/portfolio/graphic/tonys/menu1_back.png',
		alt: "Full restaurant's menu",
	},
	{
		url: './img/portfolio/graphic/tonys/menu2_front.png',
		alt: "Full restaurant's menu",
	},
	{
		url: './img/portfolio/graphic/tonys/menu2_back.png',
		alt: "Full restaurant's menu",
	},
	{
		url: './img/portfolio/graphic/tonys/menu3_front.png',
		alt: "Full restaurant's menu",
	},
	{
		url: './img/portfolio/graphic/tonys/menu3_back.png',
		alt: "Full restaurant's menu",
	},
	{
		url: './img/portfolio/graphic/tonys/parking_sign.png',
		alt: 'Parking sign for Customers Only',
	},
	{
		url: './img/portfolio/graphic/tonys/facebook_cover.png',
		alt: 'Facebook Banners',
	},
	{
		url: './img/portfolio/graphic/tonys/business_cards_tonys.png',
		alt: 'Business Card',
	},
	{
		url: './img/portfolio/graphic/tonys/counter_menu.png',
		alt: 'Menu to be placed on the counter of the restaurant',
	},
];

export default TonysPizza;
