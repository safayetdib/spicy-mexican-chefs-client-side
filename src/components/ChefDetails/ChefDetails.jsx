/* eslint-disable react/prop-types */
import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { GiCook, GiCampCookingPot } from 'react-icons/gi';
import LazyLoad from 'react-lazy-load';

const ChefDetails = ({ chefsRecipeData }) => {
	const { chef_name, chef_picture, short_bio, experience, likes, num_recipes } =
		chefsRecipeData;

	return (
		<section className="mx-auto max-w-screen-xl px-4 py-4  md:px-8">
			<div
				className="gap-8 space-y-6 rounded border-2
			 bg-red-50 p-4 md:flex">
				<div className="md:w-1/2">
					{/* PICTURE */}
					<LazyLoad height={`100%`} width={`100%`} threshold={0.95}>
						<img
							src={chef_picture}
							className="h-96 w-full rounded object-cover object-center"
							alt={chef_name}
						/>
					</LazyLoad>
				</div>
				<div className="space-y-4 md:w-1/2">
					{/* NAME */}
					<h4 className="text-4xl font-semibold text-gray-700">{chef_name}</h4>
					{/* BIO */}
					<p className="text-gray-600">{short_bio}</p>

					{/* EXPERIENCE */}
					<p className="flex items-center gap-2 text-lg text-gray-700">
						<GiCook className="text-2xl" /> Experience: {experience} Years
					</p>

					{/* NUMBER OF RECIPES */}
					<p className="flex items-center gap-2 text-lg text-gray-700">
						<GiCampCookingPot className="text-2xl" /> Recipes: {num_recipes}
					</p>
					{/* LIKES */}
					<p className="flex items-center gap-2 text-lg text-gray-700">
						<AiFillLike className="text-2xl" /> Likes: {likes}
					</p>
				</div>
			</div>
		</section>
	);
};

export default ChefDetails;
