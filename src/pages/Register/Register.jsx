import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<main className="flex w-full flex-col items-center justify-center px-4">
			<div className="mb-20 mt-10 w-full max-w-md space-y-8 rounded border px-8 pb-10 pt-6 text-gray-600 shadow">
				<div className="text-center">
					<div className="mt-5 space-y-2">
						<h3 className="text-2xl font-bold text-gray-700 sm:text-3xl">
							Please Register
						</h3>
						<p className="mt-4">
							Already have an account?{' '}
							<Link
								to="/login"
								className="font-medium text-red-accent hover:text-red-hover">
								Login
							</Link>
						</p>
					</div>
				</div>
				<form onSubmit={(e) => e.preventDefault()}>
					<div>
						<label className="font-medium">Name</label>
						<input
							type="text"
							required
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-red-accent"
						/>
					</div>
					<div className="mt-4">
						<label className="font-medium">Email</label>
						<input
							type="email"
							required
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-red-accent"
						/>
					</div>
					<div className="mt-4">
						<label className="font-medium">Password</label>
						<input
							type="password"
							required
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-red-accent"
						/>
					</div>
					<div className="mt-4">
						<label className="font-medium">Photo URL</label>
						<input
							type="text"
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-red-accent"
						/>
					</div>

					<div className="mt-8 flex items-center gap-x-3">
						<input
							type="checkbox"
							id="remember-me-checkbox"
							className="checkbox-item peer hidden"
							required
						/>
						<label
							htmlFor="remember-me-checkbox"
							className="relative flex h-5 w-5 cursor-pointer rounded-md border bg-white ring-red-accent ring-offset-2 duration-150 after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-white peer-checked:bg-red-accent peer-active:ring"></label>
						<span>
							Accept{' '}
							<Link className="text-red-accent hover:underline">
								Terms & Conditions
							</Link>
						</span>
					</div>

					<button className="mt-8 w-full rounded-lg bg-red-accent px-4 py-2 font-medium text-white duration-150 hover:bg-red-hover active:bg-red-active">
						Submit
					</button>
				</form>
			</div>
		</main>
	);
};

export default Register;
