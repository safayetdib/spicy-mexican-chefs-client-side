import React from 'react';
import ChefDetails from '../../components/ChefDetails/ChefDetails';
import Recipe from '../../components/Recipe/Recipe';

const ChefsRecipe = () => {
	return (
		<main>
			<ChefDetails />
			<section className="my-10 bg-red-500 px-4 py-10">
				<div className="mx-auto max-w-screen-xl px-4 md:px-8">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<Recipe />
						<Recipe />
						<Recipe />
					</div>
				</div>
			</section>
		</main>
	);
};

export default ChefsRecipe;
