import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import React from 'react';
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

const Recipe = () => {
	const chickenEnchiladas = {
		name: 'Chicken Enchiladas',
		ingredients: [
			'1 lb boneless, skinless chicken breast, cooked and shredded',
			'1 can black beans, drained and rinsed',
			'1 can diced tomatoes with green chilies',
			'1/2 cup corn kernels',
			'1/4 cup chopped fresh cilantro',
			'8-10 corn tortillas',
			'1 cup enchilada sauce',
			'1 cup shredded Mexican blend cheese',
			'Salt and pepper to taste',
		],
		cookingMethod: [
			'Preheat oven to 350°F (175°C).',
			'In a mixing bowl, combine the shredded chicken, black beans, diced tomatoes with green chilies, corn kernels, cilantro, salt, and pepper.',
			'Heat the tortillas in a skillet until soft and pliable.',
			'Spoon the chicken mixture into each tortilla and roll up tightly.',
			'Arrange the enchiladas in a baking dish and pour the enchilada sauce over the top.',
			'Sprinkle the shredded cheese over the enchiladas.',
			'Bake in the oven for 20-25 minutes or until the cheese is melted and bubbly.',
			'Garnish with additional cilantro and serve hot.',
		],
		ratings: {
			difficulty: 'Easy',
			rating: '3.5',
		},
	};

	return (
		<article className="mx-auto mt-4 max-w-md rounded-md border bg-white shadow-lg duration-300 hover:shadow-sm">
			<div>
				{/* RECIPE IMAGE */}
				<img
					src="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
					loading="lazy"
					alt="Food"
					className="h-60 w-full rounded-t-md object-cover object-center"
				/>

				<div className="mb-3 ml-4 mr-2 mt-4 space-y-4 pt-3">
					{/* TITLE */}
					<h3 className="text-xl font-semibold text-gray-900">
						Chicken Enchiladas
					</h3>
					{/* INGREDIENTS */}
					<div>
						<h4 className="text-lg font-semibold">Ingredients:</h4>
						<ul>
							{chickenEnchiladas.ingredients.map((ingredient, index) => (
								<li key={index} className="text-sm">
									- {ingredient}
								</li>
							))}
						</ul>
					</div>
					{/* COOKING METHOD */}
					<div>
						<h4 className="text-lg font-semibold">Cooking Method:</h4>
						<ul>
							{chickenEnchiladas.cookingMethod.map((method, index) => (
								<li key={index} className="text-sm">
									- {method}
								</li>
							))}
						</ul>
					</div>

					{/* RATING */}
					<div className="flex items-center gap-2">
						<Rating
							style={{ maxWidth: 100 }}
							value={chickenEnchiladas.ratings.rating}
							readOnly
						/>
						<p>{chickenEnchiladas.ratings.rating}</p>
						{/* FAVORITE BUTTON */}
						<div className="ml-auto mr-4 text-2xl text-red-accent">
							<MdFavorite />
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Recipe;
