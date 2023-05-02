/* eslint-disable no-unused-vars */
import React from 'react';
import ChefDetails from '../../components/ChefDetails/ChefDetails';
import Recipe from '../../components/Recipe/Recipe';
import { useLoaderData } from 'react-router-dom';

const ChefsRecipe = () => {
	const chefsRecipeData = useLoaderData();

	const { recipes } = chefsRecipeData;

	return (
		<main>
			<ChefDetails chefsRecipeData={chefsRecipeData} />
			<section className="my-10 bg-red-500 px-4 pb-14 pt-10">
				<div className="mx-auto max-w-screen-xl px-4 md:px-8">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{recipes.map((recipe, index) => (
							<Recipe key={index} recipe={recipe} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default ChefsRecipe;
