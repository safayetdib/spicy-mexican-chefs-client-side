import React from 'react';
import Banner from '../../components/Banner/Banner';
import Chefs from '../../components/Chefs/Chefs';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newletter/Newsletter';
import Trusted from '../../components/Trusted/Trusted';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
	const chefsData = useLoaderData();

	return (
		<main>
			<Banner />
			<Chefs chefsData={chefsData} />
			<Testimonials />
			<Trusted />
			<Newsletter />
		</main>
	);
};

export default Home;
