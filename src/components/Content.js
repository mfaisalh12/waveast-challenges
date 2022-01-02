import React from 'react';

import Food1 from '../assets/img/food1.png';
import Food2 from '../assets/img/food2.png';
import Food3 from '../assets/img/food3.png';
import Food4 from '../assets/img/food4.png';
import Food5 from '../assets/img/food5.png';
import Food6 from '../assets/img/food6.png';

export default function Content() {
	const foodsImg = [
		{
			imgSrc: Food1,
			imgAlt: 'Food 1',
		},
		{
			imgSrc: Food2,
			imgAlt: 'Food 2',
		},
		{
			imgSrc: Food3,
			imgAlt: 'Food 3',
		},
		{
			imgSrc: Food4,
			imgAlt: 'Food 4',
		},
		{
			imgSrc: Food5,
			imgAlt: 'Food 5',
		},
		{
			imgSrc: Food6,
			imgAlt: 'Food 6',
		},
	];
	return (
		<section className="container mt-3 mx-auto">
			<div className="grid md:grid-cols-3 grid-rows-2 max-w-5xl mx-auto">
				{foodsImg.map((img, index) => (
					<div className="col-span-1 row-span-1 p-2" key={index}>
						<img
							src={img.imgSrc}
							alt={img.imgAlt}
							className="w-full hover:scale-105 transition duration-300"
						/>
					</div>
				))}
			</div>
		</section>
	);
}
