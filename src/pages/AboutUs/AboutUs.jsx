import React from 'react';

const AboutUs = () => {
	const contactMethods = [
		{
			icon: (
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
						d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
					/>
				</svg>
			),
			title: 'Join our community',
			desc: 'At Spicy Mexican Chefs, we believe in the power of community and connection.',
			link: {
				name: 'Join our Discord',
				href: 'https://discord.com/',
			},
		},
		{
			icon: (
				<svg
					className="h-6 w-6"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_17_80)">
						<path
							d="M15.1003 43.5C33.2091 43.5 43.1166 28.4935 43.1166 15.4838C43.1166 15.0619 43.1072 14.6307 43.0884 14.2088C45.0158 12.815 46.679 11.0886 48 9.11066C46.205 9.90926 44.2993 10.4308 42.3478 10.6575C44.4026 9.42588 45.9411 7.491 46.6781 5.21159C44.7451 6.35718 42.6312 7.16528 40.4269 7.60128C38.9417 6.02318 36.978 4.97829 34.8394 4.62816C32.7008 4.27803 30.5064 4.64216 28.5955 5.66425C26.6846 6.68635 25.1636 8.30947 24.2677 10.2827C23.3718 12.2559 23.1509 14.4693 23.6391 16.5807C19.725 16.3842 15.8959 15.3675 12.4 13.5963C8.90405 11.825 5.81939 9.33893 3.34594 6.29909C2.0888 8.46655 1.70411 11.0314 2.27006 13.4722C2.83601 15.9131 4.31013 18.047 6.39281 19.44C4.82926 19.3904 3.29995 18.9694 1.93125 18.2119V18.3338C1.92985 20.6084 2.7162 22.8132 4.15662 24.5736C5.59704 26.334 7.60265 27.5412 9.8325 27.99C8.38411 28.3863 6.86396 28.4441 5.38969 28.1588C6.01891 30.1149 7.24315 31.8258 8.89154 33.0527C10.5399 34.2796 12.5302 34.9613 14.5847 35.0025C11.0968 37.7423 6.78835 39.2283 2.35313 39.2213C1.56657 39.2201 0.780798 39.1719 0 39.0769C4.50571 41.9676 9.74706 43.5028 15.1003 43.5Z"
							fill="currentColor"
						/>
					</g>
					<defs>
						<clipPath id="clip0_17_80">
							<rect width="48" height="48" fill="white" />
						</clipPath>
					</defs>
				</svg>
			),

			title: 'Follow us on Twitter',
			desc: `let's connect over our shared love of great food!`,
			link: {
				name: 'Send us DMs',
				href: 'https://twitter.com/home',
			},
		},
	];

	return (
		<main>
			<section className="mx-auto bg-red-100 p-5 text-gray-100 sm:p-10 md:p-16">
				<div className="mx-auto flex max-w-7xl flex-col items-center justify-center overflow-hidden rounded">
					<img
						src="https://img.freepik.com/free-vector/mexican-traditional-culture-icon-cartoon_18591-52744.jpg?w=1380&t=st=1683279357~exp=1683279957~hmac=9289338dddf02c628c0a119ba578528f08a6a50659d16315accbaa244d22b119"
						alt=""
						className="h-60 w-full bg-gray-500 object-cover object-bottom sm:h-96"
					/>
					<div className="m-4 mx-auto -mt-6 space-y-6 bg-red-accent p-6 pb-12 sm:mx-12 sm:-mt-24 sm:px-10 lg:max-w-5xl lg:rounded-md">
						<div className="space-y-2">
							<a
								rel="noopener noreferrer"
								href="#"
								className="inline-block text-xl font-semibold sm:text-2xl">
								Welcome to Spicy Mexican Chefs, the ultimate online destination
								for authentic Mexican cuisine and recipes!
							</a>
						</div>
						<div className="text-sm text-gray-100">
							<p>
								Our website is home to a team of talented Mexican chefs who are
								passionate about sharing their culinary skills with the world.
							</p>
						</div>
					</div>
				</div>

				<div className="mx-auto mt-6 max-w-4xl space-y-4 text-justify text-base text-gray-700">
					<p>
						At Spicy Mexican Chefs, we believe that food is an expression of
						culture and history. That&apos;s why we are dedicated to bringing
						the flavors and traditions of Mexico to your kitchen. Our team of
						chefs has spent years perfecting their craft, and they are excited
						to share their knowledge and expertise with you.
					</p>
					<p>
						Whether you&apos;re a seasoned cook or just starting out,
						you&apos;ll find plenty of inspiration on our website. From classic
						dishes like tacos and enchiladas to more adventurous recipes like
						chiles en nogada and mole poblano, our chefs have curated a
						collection of recipes that showcase the best of Mexican cuisine.
					</p>
					<p>
						But our website is more than just a recipe collection. We also offer
						tips and tricks for mastering the techniques and ingredients that
						make Mexican cuisine so unique. And if you&apos;re looking for a
						specific recipe or ingredient, our team of chefs is always happy to
						help.
					</p>
					<p>
						At Spicy Mexican Chefs, we are committed to providing our readers
						with the highest quality content. We use only the freshest
						ingredients in our recipes, and we never compromise on taste or
						authenticity. Our goal is to make Mexican cuisine accessible to
						everyone, no matter where you are in the world.
					</p>
					<p>
						Thank you for visiting Spicy Mexican Chefs. We hope you enjoy
						exploring our website and trying out our recipes. If you have any
						questions or comments, please don&apos;t hesitate to reach out to
						us. We&apos;d love to hear from you!
					</p>
				</div>
			</section>

			<section className="bg-red-accent py-14">
				<div className="mx-auto max-w-screen-xl gap-12 px-4 text-gray-100 md:px-12 lg:flex">
					<div className="max-w-md">
						<h3 className="text-3xl font-semibold text-gray-50 sm:text-4xl">
							Let&apos;s connect
						</h3>
						<p className="mt-3">
							Whether you have a question about one of our recipes, a suggestion
							for a new dish, or just want to share your love for Mexican
							cuisine, we would love to hear from you.
						</p>
					</div>
					<div>
						<ul className="mt-12 items-center gap-x-12 gap-y-6 md:flex lg:mt-0 lg:gap-x-0">
							{contactMethods.map((item, idx) => (
								<li
									key={idx}
									className="space-y-3 border-t py-6 md:max-w-sm md:border-t-0 md:py-0 lg:max-w-none lg:border-l lg:px-12">
									<div className="flex h-12 w-12 items-center justify-center rounded-full border text-gray-100">
										{item.icon}
									</div>
									<h4 className="text-lg font-medium text-gray-50 xl:text-xl">
										{item.title}
									</h4>
									<p>{item.desc}</p>
									<a
										href={item.link.href}
										target="_blank"
										className="flex items-center gap-1 text-sm font-medium text-white duration-150 hover:underline"
										rel="noreferrer">
										{item.link.name}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="h-5 w-5">
											<path
												fillRule="evenodd"
												d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</main>
	);
};

export default AboutUs;
