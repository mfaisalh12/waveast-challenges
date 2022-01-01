import React from 'react';
import { Card, Carousel } from 'react-bootstrap';

import Food1 from '../assets/food1.png';
import Food2 from '../assets/food2.png';
import Food3 from '../assets/food3.png';

export default function Content() {
	const products = [
		{
			imgSrc: Food1,
			imgAlt: 'Food 1',
			title: 'Sample Headline',
			description:
				'Sample text. Click to select the text box. Click again or double click to start editing the text.',
			price: 30,
			currencySymbol: '$',
		},
		{
			imgSrc: Food2,
			imgAlt: 'Food 2',
			title: 'Sample Headline',
			description:
				'Sample text. Click to select the text box. Click again or double click to start editing the text.',
			price: 23,
			currencySymbol: '$',
		},
		{
			imgSrc: Food3,
			imgAlt: 'Food 3',
			title: 'Sample Headline',
			description:
				'Sample text. Click to select the text box. Click again or double click to start editing the text.',
			price: 20,
			currencySymbol: '$',
		},
	];
	return (
		<main>
			<Carousel>
				{products.map((product, index) => (
					<Carousel.Item>
						<Card className="text-center">
							<Card.Img
								className="mx-auto"
								src={product.imgSrc}
								alt={product.imgAlt}
							/>
							<Card.Body>
								<Card.Title>{product.title}</Card.Title>
								<Card.Body>
									<p className="description">
										{product.description}
									</p>
									<p className="price">
										{product.currencySymbol} {product.price}
									</p>
								</Card.Body>
							</Card.Body>
						</Card>
					</Carousel.Item>
				))}
			</Carousel>
		</main>
	);
}
