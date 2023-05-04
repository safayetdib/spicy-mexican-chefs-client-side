import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiChefToque } from 'react-icons/gi';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
	const { user, logout } = useContext(AuthContext);

	const [state, setState] = useState(false);

	const navigation = [
		{ title: 'Home', path: '/' },
		{ title: 'About Us', path: '/about' },
		{ title: 'Gallery', path: '/gallery' },
		{ title: 'Blogs', path: '/blogs' },
	];

	return (
		<nav className="w-full border-b border-red-100 bg-white md:static md:border-none md:text-sm">
			<div className="mx-auto max-w-screen-xl items-center px-4 py-5 md:flex md:px-8">
				<div className="flex items-center justify-between py-3 md:block md:py-5">
					{/* LOGO */}
					<Link
						to="/"
						className="flex items-center gap-2 font-caveat text-2xl text-red-accent hover:text-red-hover sm:text-3xl">
						<GiChefToque />
						<span>Spicy Mexican Chefs</span>
					</Link>
					{/* HAMBURGER */}
					<div className="h-6 md:hidden">
						<button className="text-gray-700 " onClick={() => setState(!state)}>
							{state ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									viewBox="0 0 20 20"
									fill="currentColor">
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="h-6 w-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
				<div
					className={`mt-8 flex-1 pb-3 md:mt-0 md:block md:pb-0 ${
						state ? 'block' : 'hidden'
					}`}>
					{/* NAVIGATION */}
					<ul className="items-center justify-end space-y-6 md:flex md:space-x-6 md:space-y-0">
						{navigation.map((item, idx) => {
							return (
								<li key={idx} className="text-gray-700 hover:text-red-hover">
									<NavLink
										to={item.path}
										className={({ isActive }) =>
											isActive ? 'text-red-accent' : ''
										}>
										{item.title}
									</NavLink>
								</li>
							);
						})}
						<span className="hidden h-6 w-px bg-gray-300 md:block"></span>
						<div className="items-center gap-x-6 space-y-3 md:flex md:space-y-0">
							{!user ? (
								<>
									{/* LOGIN BUTTON */}
									<li>
										<Link
											to="/login"
											className="block border py-3 text-center text-gray-700 hover:text-red-hover md:border-none">
											Log in
										</Link>
									</li>
									{/* REGISTER BUTTON */}
									<li>
										<Link
											to="/register"
											className="block bg-red-accent px-4 py-3 text-center font-medium text-white shadow hover:bg-red-hover active:bg-red-active active:shadow-none md:inline">
											Register
										</Link>
									</li>
								</>
							) : (
								<>
									{/* USER AVATAR */}
									<div className="group relative my-6 h-12 w-12 md:my-0">
										<span className="absolute -bottom-0.5 right-1 h-3 w-3 rounded-full border border-white bg-green-500"></span>
										{user.photoURL ? (
											<img
												src={user.photoURL}
												className="h-full w-full rounded-full bg-red-300"
											/>
										) : (
											<span>
												<FaUserCircle className="h-full w-full rounded-full text-gray-700" />
											</span>
										)}

										{user.displayName && (
											<span className="absolute left-14 top-1 h-fit min-w-max scale-0 rounded bg-red-100 p-2 text-center text-base text-gray-800 group-hover:scale-100 md:left-0 md:top-14">
												{user.displayName}
											</span>
										)}
									</div>
									{/* LOGOUT BUTTON */}
									<li>
										<button
											onClick={logout}
											className="block bg-red-accent px-4 py-3 text-center font-medium text-white shadow hover:bg-red-hover active:bg-red-active active:shadow-none md:inline">
											Logout
										</button>
									</li>
								</>
							)}
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
