import React from 'react';
import Banner from '../../components/Banner/Banner';
import Chefs from '../../components/Chefs/Chefs';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newletter/Newsletter';
import Trusted from '../../components/Trusted/Trusted';

const Home = () => {
	return (
		<main>
			<Banner />
			<Chefs />
			<Testimonials />
			<Trusted />
			<Newsletter />
		</main>
	);
};

export default Home;
