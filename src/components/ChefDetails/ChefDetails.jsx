import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { GiCook, GiCampCookingPot } from 'react-icons/gi';

const ChefDetails = () => {
	return (
		<section className="mx-auto max-w-screen-xl px-4 py-4  md:px-8">
			<div
				className="gap-8 space-y-6 rounded border-2
			 bg-red-50 p-4 md:flex">
				<div className="md:w-1/2">
					{/* PICTURE */}
					<img
						src="https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						className="h-96 w-full rounded object-cover object-center"
						alt="Chef Photo"
					/>
				</div>
				<div className="space-y-4 md:w-1/2">
					{/* NAME */}
					<h4 className="text-4xl font-semibold text-gray-700">
						Martiana Carlos
					</h4>
					{/* BIO */}
					<p className="text-gray-600">
						Meet Carlos, our head chef at Spicy Mexican Chefs. With over 20
						years of experience in the culinary industry, Carlos is a master of
						traditional Mexican cuisine. Born and raised in Mexico City, he
						developed a passion for cooking at a young age and honed his skills
						working in some of the city's top restaurants.
					</p>

					{/* EXPERIENCE */}
					<p className="flex items-center gap-2 text-lg text-gray-700">
						<GiCook className="text-2xl" /> Experience: 20+ Years
					</p>

					{/* NUMBER OF RECIPES */}
					<p className="flex items-center gap-2 text-lg text-gray-700">
						<GiCampCookingPot className="text-2xl" /> Recipes: 25
					</p>
					{/* LIKES */}
					<p className="flex items-center gap-2 text-lg text-gray-700">
						<AiFillLike className="text-2xl" /> Likes: 16
					</p>
				</div>
			</div>
		</section>
	);
};

export default ChefDetails;
