import React from 'react';
import './Pages.css';
import { motion } from 'framer-motion';

function PortfolioGraphic() {
	return (
		<main>
			<div className='backgroundPortfolio'>
				<div className='portfolioGrid'>
					{links.map((data) => {
						return (
							<motion.div className='cards' variants={cardsVariants} initial='initial' whileHover='hover'>
								<a href={data.href} target='_blank' rel='noopener noreferrer' className='projectLinks'>
									<motion.h4>{data.title}</motion.h4>
									<h5>{data.about}</h5>
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

const links = [
	{
		id: 'Tonys Pizza and Pasta',
		href: 'https://lit-meadow-59526.herokuapp.com',
		url: './img/portfolio/chief.png',
		// github: 'https://github.com/vjeuel/Inventory-Manager',
		title: "Tony's Pizza and Pasta",
		about: 'a Full-Stack React app where small business owners can manage their inventory',
		technology: 'Illustrator and Photoshop',
	},
];

export default PortfolioGraphic;
