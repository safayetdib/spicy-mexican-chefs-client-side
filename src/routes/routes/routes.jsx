import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import ChefsRecipe from '../../pages/ChefsRecipe/ChefsRecipe';
import Blogs from '../../pages/Blogs/Blogs';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () =>
					fetch('https://assignment-10-server-side-alpha.vercel.app/data'),
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/chef/:id',
				element: <ChefsRecipe />,
				loader: ({ params }) =>
					fetch(
						`https://assignment-10-server-side-alpha.vercel.app/data/${params.id}`
					),
			},
			{
				path: '/blogs',
				element: <Blogs />,
			},
		],
	},
]);

export default router;
