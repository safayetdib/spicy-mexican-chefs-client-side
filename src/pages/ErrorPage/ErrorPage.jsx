import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const { error, status } = useRouteError();

	return (
		<main>
			<div className="mx-auto flex h-screen max-w-screen-xl items-center justify-start px-4 md:px-8">
				<div className="mx-auto max-w-lg space-y-3 text-center">
					<img src="/src/assets/error.jpg" alt="error" className="h-80" />
					<h3 className="font-caveat text-4xl font-semibold text-red-accent sm:text-5xl">
						Oops!
					</h3>
					<h4 className="text-2xl font-thin text-red-800">
						Error: {status || 404}
					</h4>
					<p className="font-thin text-red-900">{error?.message}</p>
					<Link
						to="/"
						className="inline-flex items-center gap-x-1 bg-red-accent px-4 py-3 font-medium text-white duration-150 hover:bg-red-hover">
						Go back
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
				</div>
			</div>
		</main>
	);
};

export default ErrorPage;
