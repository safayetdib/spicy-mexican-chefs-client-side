/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import React, { useState } from 'react';
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';

const Recipe = ({ recipe }) => {
	const { recipe_name, recipe_picture, ingredients, cooking_method, rating } =
		recipe;

	const [favorite, setFavorite] = useState(false);

	const handleFavorite = () => {
		setFavorite(true);
		notify();
	};

	const notify = () =>
		toast.success('Successfully added to your favorites', {
			style: {
				border: '1px solid #f40000',
				padding: '16px',
				color: '#f40000',
			},
			iconTheme: {
				primary: '#f40000',
				secondary: '#FFFAEE',
			},
		});

	return (
		<article className="mx-auto mt-4 flex h-full flex-col justify-between rounded-md  border bg-white shadow-lg duration-300 hover:shadow-sm">
			<div>
				{/* RECIPE IMAGE */}
				<img
					src={recipe_picture}
					loading="lazy"
					alt={recipe_name}
					className="h-96 w-full rounded-t-md object-cover object-center"
				/>
				<div className="space-y-3 p-4 text-gray-900">
					{/* TITLE */}
					<h3 className="border-b pb-3 text-xl font-bold">{recipe_name}</h3>

					{/* INGREDIENTS */}
					<div>
						<h4 className="text-lg font-semibold">Ingredients:</h4>
						<ul>
							{ingredients.map((ingredient, index) => (
								<li key={index} className="text-base">
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
								<li key={index} className="text-base">
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
				<button
					onClick={handleFavorite}
					className={`ml-auto text-3xl ${
						favorite ? 'text-red-accent' : 'text-red-300'
					}`}
					disabled={favorite}>
					<MdFavorite />
				</button>
				<Toaster />
			</div>
		</article>
	);
};

export default Recipe;
