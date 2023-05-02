import React from 'react';
import Banner from '../../components/Banner/Banner';
import Chefs from '../../components/Chefs/Chefs';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
	return (
		<main>
			<Banner />
			<Chefs />
			<Testimonials />
		</main>
	);
};

export default Home;
