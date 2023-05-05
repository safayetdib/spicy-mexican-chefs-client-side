import React from 'react';
import Header from '../components/Shared/Header/Header';
import Footer from '../components/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const Main = () => {
	return (
		<main className="font-main">
			<ScrollToTop />
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
};

export default Main;
