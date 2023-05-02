/* eslint-disable react/prop-types */
import ChefCard from './ChefCard';

const Chefs = ({ chefsData }) => {
	return (
		<section className="py-14">
			<div className="mx-auto max-w-screen-xl px-4 text-center md:px-8">
				<div className="mx-auto max-w-xl">
					<h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
						Meet Our Chefs
					</h3>
					<p className="mt-3 text-gray-600">
						Meet Our Talented and Experienced Chefs, Whose Expertise Guarantees
						a Memorable Culinary Experience.
					</p>
				</div>
				<div className="mt-12">
					<ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
						{chefsData.map((data, index) => (
							<ChefCard key={index} data={data} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Chefs;
