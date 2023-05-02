import { useState } from 'react';

const Testimonials = () => {
	const testimonials = [
		{
			avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
			name: 'John Smith',
			title: 'Food Critic',
			quote:
				"The recipes on Spicy Mexican Chefs are some of the best I've ever tasted! The flavors are bold and authentic, and the instructions are easy to follow.",
		},
		{
			avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
			name: 'Maria Gonzalez',
			title: 'Home Cook',
			quote:
				"I've been looking for a website that has traditional Mexican recipes, and Spicy Mexican Chefs is the perfect place! The recipes are delicious and remind me of the meals my abuela used to make.",
		},
		{
			avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
			name: 'Juan Rodriguez',
			title: 'Chef',
			quote:
				"As a professional chef, I'm always looking for new and interesting recipes to try. Spicy Mexican Chefs has a great selection of unique and flavorful dishes that are sure to impress your dinner guests!",
		},
	];

	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	return (
		<section className="py-14 text-gray-600 ">
			<div className="mx-auto max-w-screen-xl px-4 md:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<h3 className="pb-6 text-xl font-semibold">What people are saying</h3>
					<ul>
						{testimonials.map((item, idx) =>
							currentTestimonial == idx ? (
								<li key={idx}>
									<figure>
										{/* QUOTE */}
										<blockquote>
											<p className="text-xl font-semibold  sm:text-2xl">
												“{item.quote}“
											</p>
										</blockquote>
										<div className="mt-6">
											{/* IMAGE */}
											<img
												src={item.avatar}
												className="mx-auto h-16 w-16 rounded-full"
											/>
											<div className="mt-3">
												{/* NAME */}
												<span className="block font-semibold ">
													{item.name}
												</span>
												{/* TITLE */}
												<span className="mt-0.5 block text-sm">
													{item.title}
												</span>
											</div>
										</div>
									</figure>
								</li>
							) : (
								''
							)
						)}
					</ul>
				</div>
				<div className="mt-6">
					<ul className="flex justify-center gap-x-3">
						{testimonials.map((item, idx) => (
							<li key={idx}>
								<button
									className={`h-2.5 w-2.5 rounded-full ring-red-500 ring-offset-2 duration-150 focus:ring ${
										currentTestimonial == idx ? 'bg-red-400' : 'bg-gray-300'
									}`}
									onClick={() => setCurrentTestimonial(idx)}></button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
