import React from 'react';
import Header from '../components/Shared/Header/Header';
import Footer from '../components/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
	return (
		<main className=" font-main">
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
};

export default Main;
