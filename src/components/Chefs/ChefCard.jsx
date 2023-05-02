import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';

const ChefCard = () => {
	return (
		<li className="space-y-4 border px-4 py-6 shadow">
			<div className="mx-auto h-24 w-24">
				{/* PICTURE */}
				<img
					src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
					className="h-full w-full rounded-full"
					alt="Chef Photo"
				/>
			</div>
			<div className="space-y-2">
				{/* NAME */}
				<h4 className="text-2xl font-semibold text-gray-700">
					Martiana dialan
				</h4>
				{/* EXPERIENCE */}
				<p className=" text-red-500">5+ Year Experience</p>
				{/* NUMBER OF RECIPES */}
				<p className="text-gray-700">Recipes: 05</p>
				{/* LIKES */}
				<p
					className="flex items-center justify-center gap-2 text-xl text-gray-700"
					title="Likes">
					<AiFillLike /> 16
				</p>
			</div>
			{/* VIEW RECIPES */}
			<Link
				to="/"
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
