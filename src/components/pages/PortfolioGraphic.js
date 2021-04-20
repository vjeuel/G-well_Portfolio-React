import React from 'react';
import './Pages.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function PortfolioGraphic() {
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
		href: '/tonys-pizza',
		url: './img/portfolio/graphic/tonys/box_top.png',
		title: "Tony's Pizza and Pasta",
		about: 'Flyers, Logo, Facebook banners, Banners, Pizza Box Topper, Business Card...',
	},
	{
		href: '/carmines-pizza',
		url: './img/portfolio/graphic/carmines/menu_latest.png',
		title: "Carmine's Pizzeria",
		about: 'Flyers, Menus, Banners, Business Cards...',
	},
	{
		href: '/bliss-bites',
		url: './img/portfolio/graphic/bliss_bites/bliss_letterhead.png',
		title: 'Bliss Bites',
		about: 'Logo, Letterhead and Packaging',
	},
	{
		href: '/real-garden',
		url: './img/portfolio/graphic/real_garden/flyer.png',
		title: 'Real Garden',
		about: 'Logo, Flyer and Business Card',
	},
	{
		href: '/logos',
		url: './img/portfolio/graphic/logos/save-on1.png',
		title: 'Logos',
		about: 'A few logos that I have designed in the past few years',
	},
	{
		href: '/miscellaneous',
		url: './img/portfolio/graphic/miscellaneous/friday13th_poster.png',
		title: 'Miscellaneous',
		about: 'Poster and Restaurant Menu',
	},
];

export default PortfolioGraphic;
