/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ data }) => {
	const { id, chef_name, chef_picture, experience, likes, num_recipes } = data;

	return (
		<li className="space-y-4 border px-4 py-6 shadow">
			<div className="mx-auto h-24 w-24">
				{/* PICTURE */}
				<LazyLoad height={`100%`} width={`100%`} threshold={0.95}>
					<img
						src={chef_picture}
						className="h-full w-full rounded-full object-cover object-center"
						alt="Chef Photo"
					/>
				</LazyLoad>
			</div>
			<div className="space-y-2">
				{/* NAME */}
				<h4 className="text-2xl font-semibold text-gray-700">{chef_name}</h4>
				{/* EXPERIENCE */}
				<p className=" text-red-500">{experience} Year Experience</p>
				{/* NUMBER OF RECIPES */}
				<p className="text-gray-700">Recipes: {num_recipes}</p>
				{/* LIKES */}
				<p
					className="flex items-center justify-center gap-2  text-gray-700"
					title="Likes">
					<AiFillLike className="text-lg" /> {likes}
				</p>
			</div>
			{/* VIEW RECIPES */}
			<Link
				to={`/chef/${id}`}
				className="inline-flex items-center gap-x-1 bg-red-accent px-4 py-2 text-sm font-medium text-white duration-150 hover:bg-red-hover">
				View Recipes
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="h-7 w-7">
					<path
						fillRule="evenodd"
						d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
						clipRule="evenodd"
					/>
				</svg>
			</Link>
		</li>
	);
};

export default ChefCard;
