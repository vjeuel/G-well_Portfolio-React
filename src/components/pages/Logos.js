import React from 'react';
import './Pages.css';
import './GraphicPages.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Logos() {
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
					{LogosLinks.map((data) => {
						return (
							<div>
								<img className='graphicImagesLogos' src={data.url} alt={data.alt} />
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

const LogosLinks = [
	{
		url: './img/portfolio/graphic/logos/apice1.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/apice2.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/apice3.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/arrow1.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/arrow2.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/carmines_logos.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/grfk1.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/logo2014.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/prism.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/raad1.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/raad2.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/real_garden.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/save-on1.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/save-on2.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/telemed1.png',
		alt: '',
	},
	{
		url: './img/portfolio/graphic/logos/telemed2.png',
		alt: '',
	},
];

export default Logos;
