/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import React from 'react';
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

const Recipe = ({ recipe }) => {
	const { recipe_name, recipe_picture, ingredients, cooking_method, rating } =
		recipe;

	return (
		<article className="mx-auto mt-4 flex h-full max-w-md flex-col justify-between rounded-md  border bg-white shadow-lg duration-300 hover:shadow-sm">
			<div>
				{/* RECIPE IMAGE */}
				<img
					src={recipe_picture}
					loading="lazy"
					alt={recipe_name}
					className="h-60 w-full rounded-t-md object-cover object-center"
				/>
				<div className="space-y-2 p-4">
					{/* TITLE */}
					<h3 className="text-xl font-semibold text-gray-900">{recipe_name}</h3>

					{/* INGREDIENTS */}
					<div>
						<h4 className="text-lg font-semibold">Ingredients:</h4>
						<ul>
							{ingredients.map((ingredient, index) => (
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
							{cooking_method.map((method, index) => (
								<li key={index} className="text-sm">
									- {method}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			{/* RATING */}
			<div className="mb-4 flex items-center gap-2 border-t px-4 pt-2">
				<Rating style={{ maxWidth: 100 }} value={rating} readOnly />
				<p>{rating}</p>
				{/* FAVORITE BUTTON */}
				<div className="ml-auto text-3xl text-red-accent">
					<MdFavorite />
				</div>
			</div>
		</article>
	);
};

export default Recipe;
