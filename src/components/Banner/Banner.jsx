import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<section className="bg-red-700 bg-[url(https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat bg-blend-multiply">
			<div className="mx-auto max-w-screen-xl gap-12 overflow-hidden px-4 py-28 text-gray-600 md:flex md:px-8">
				<div className="max-w-xl flex-none space-y-5">
					{/* Join */}
					<Link
						to="/register"
						className="inline-flex items-center gap-x-4 rounded-full border bg-white p-1 pr-4 text-sm font-medium duration-150 hover:border-gray-500">
						<span className="inline-block rounded-full bg-red-accent px-3 py-1 text-white">
							New
						</span>
						<p className="flex items-center">
							Join the Fiesta
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="h-5 w-5">
								<path
									fillRule="evenodd"
									d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
									clipRule="evenodd"
								/>
							</svg>
						</p>
					</Link>
					<h1 className="text-4xl font-extrabold text-white sm:text-5xl">
						Experience the Authentic Flavors of Mexico
					</h1>
					<p className="text-white">
						From Traditional Favorites to Modern Twists, We&apos;ve Got You
						Covered. Discover the Secrets Behind the Best Salsas, Guacamoles,
						and More.
					</p>
					<div className="flex items-center gap-x-3 sm:text-sm">
						{/* GET STARTED BUTTON */}
						<Link
							to="/login"
							className="flex items-center justify-center gap-x-1 border border-white bg-white px-4 py-2 font-medium text-black duration-150 hover:border-gray-500 md:inline-flex">
							Get started
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="h-5 w-5">
								<path
									fillRule="evenodd"
									d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
									clipRule="evenodd"
								/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
