import React from 'react';

import ImgPapaya from '../assets/img/papaya.png';
import ImgCherry from '../assets/img/cherry.png';
import ImgDragon from '../assets/img/dragon-fruit.png';
import ImgOrange1 from '../assets/img/orange-1.png';
import ImgOrange2 from '../assets/img/orange-2.png';
import ImgPineapple from '../assets/img/pineapple.png';

export default function Content() {
	return (
		<section className="container p-4 text-white">
			<div className="grid md:grid-flow-col grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-6 max-w-5xl mx-auto">
				<div className="col-2 bg-teal-600 drop-shadow-md p-8">
					<h4 className="font-bold text-xl">Raw Fruits</h4>
					<p className="font-normal mt-5">
						Raw fruits are those which are not ripe properly. But it
						also contains many different nutrition. The raw food
						diet encourages people to eat only raw (never heated),
						unprocessed foods. While eating more produce is
						advantageous, experts say there’s no reason to avoid
						cooking it.
					</p>
				</div>
				<div className="col-2">
					<img src={ImgPapaya} alt="Papaya" className="wh-full" />
				</div>
				<div className="col-2">
					<img src={ImgCherry} alt="Cherry" className="wh-full" />
				</div>
				<div className="col-3">
					<img src={ImgOrange1} alt="orange" className="wh-full" />
				</div>
				<div className="col-3">
					<img
						src={ImgDragon}
						alt="Dragon Fruit"
						className="wh-full"
					/>
				</div>
				<div className="col-2 bg-blue-600 p-8">
					<h4 className="font-bold text-xl">Fruit Diet</h4>
					<p className="font-normal mt-5">
						The fruitarian, or fruit, diet is a highly restrictive
						vegan diet. It excludes all animal products, including
						dairy. People following this program eat a diet
						consisting primarily of raw fruits. Vegetables, dried
						fruits, nuts, and seeds can also be eaten in moderation.
					</p>
				</div>
				<div className="col-2">
					<img src={ImgPineapple} alt="Cherry" className="wh-full" />
				</div>
				<div className="col-2">
					<img src={ImgOrange2} alt="Orange-2" className="wh-full" />
				</div>
			</div>
		</section>
	);
}
