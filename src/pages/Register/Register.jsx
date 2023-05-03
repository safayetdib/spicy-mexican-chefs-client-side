import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
	const { createUser, updateUserData } = useContext(AuthContext);

	const [accepted, setAccepted] = useState(false);
	const handleCheckbox = (e) => {
		setAccepted(e.target.checked);
	};

	const navigate = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();

		const form = e.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;

		createUser(email, password)
			.then((res) => {
				const createdUser = res.user;
				console.log(createdUser);

				updateUserData(name, photo)
					.then()
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));

		form.reset();
		navigate('/');
	};

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

				<form onSubmit={handleRegister}>
					{/* NAME */}
					<div>
						<label className="font-medium">Name</label>
						<input
							type="text"
							name="name"
							required
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-red-accent"
						/>
					</div>
					{/* EMAIL */}
					<div className="mt-4">
						<label className="font-medium">Email</label>
						<input
							type="email"
							name="email"
							required
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-red-accent"
						/>
					</div>
					{/* PASSWORD */}
					<div className="mt-4">
						<label className="font-medium">Password</label>
						<input
							type="password"
							name="password"
							required
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-red-accent"
						/>
					</div>
					{/* PHOTO URL */}
					<div className="mt-4">
						<label className="font-medium">Photo URL</label>
						<input
							type="text"
							name="photo"
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-red-accent"
						/>
					</div>
					{/* CHECKBOX */}
					<div className="mt-8 flex items-center gap-x-3">
						<input
							onClick={handleCheckbox}
							type="checkbox"
							name="terms"
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

					{/* SUBMIT BUTTON */}
					<button
						type="submit"
						disabled={!accepted}
						className={`mt-8 w-full rounded-lg ${
							!accepted
								? 'bg-red-500'
								: 'bg-red-accent hover:bg-red-hover active:bg-red-active'
						} px-4 py-2 font-medium text-white duration-150 `}>
						Submit
					</button>
				</form>
			</div>
		</main>
	);
};

export default Register;
