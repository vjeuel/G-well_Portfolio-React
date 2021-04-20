import React from 'react';
import './Pages.css';
import './GraphicPages.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Miscellaneous() {
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
					{MiscellaneousLinks.map((data) => {
						return (
							<div>
								<img className='graphicImages' src={data.url} alt={data.alt} />
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

const MiscellaneousLinks = [
	{
		url: './img/portfolio/graphic/miscellaneous/friday13th_poster.png',
		alt: 'Poster for a tattoo shop with Friday the 13th specials',
	},
	{
		url: './img/portfolio/graphic/Miscellaneous/mexican.png',
		alt: 'Menu of a Mexican restaurant',
	},
];

export default Miscellaneous;
