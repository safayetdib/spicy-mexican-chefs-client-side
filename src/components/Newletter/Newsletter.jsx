import { Link } from 'react-router-dom';

const Newsletter = () => {
	return (
		<section className="mx-auto max-w-screen-xl py-14">
			<div className="relative mx-4 overflow-hidden  bg-red-accent px-4 py-14 md:mx-8 md:px-8">
				<div className="relative z-10 mx-auto max-w-xl sm:text-center">
					<div className="space-y-3">
						<h3 className="text-3xl font-bold text-white">
							Spice Up Your Inbox
						</h3>
						<p className="leading-relaxed text-red-100">
							Don't miss out on our latest news, events, and promotions - sign
							up for our newsletter today and stay connected with Spicy Mexican
							Chefs
						</p>
					</div>
					<div className="mt-6">
						<form
							onSubmit={(e) => e.preventDefault()}
							className="flex items-center justify-center rounded-lg bg-white p-1 sm:mx-auto sm:max-w-md">
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full p-2 text-gray-500 outline-none"
								required
							/>
							<button className="rounded-lg bg-red-accent p-2 px-3 font-medium text-white shadow-md outline-none duration-150 hover:bg-red-hover focus:shadow-none active:bg-red-active sm:px-4">
								Subscribe
							</button>
						</form>
						<p className="mt-3 max-w-lg text-[15px] text-red-200 sm:mx-auto">
							No spam ever, we care about the protection of your data. Read our{' '}
							<Link className="underline" to="/policy">
								{' '}
								Privacy Policy{' '}
							</Link>
						</p>
					</div>
				</div>
				{/* <div
					className="absolute inset-0 h-full w-full"
					style={{
						background:
							'linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)',
					}}></div> */}
			</div>
		</section>
	);
};

export default Newsletter;
