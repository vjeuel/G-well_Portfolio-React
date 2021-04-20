import React from 'react';
import './Pages.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Portfolio() {
	return (
		<main>
			<div className='backgroundPortfolioMain'>
				<div className='portfolioGridMain'>
					{menuLinks.map((data) => {
						return (
							<motion.div>
								<NavLink to={data.link} activeClassName='activeNavLink'>
									<motion.a
										target='_blank'
										rel='noopener noreferrer'
										className='PortfolioButtons'
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

export default Portfolio;
