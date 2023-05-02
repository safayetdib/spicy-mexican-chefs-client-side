const Trusted = () => {
	return (
		<div className="bg-red-50 py-14">
			<div className="mx-auto max-w-screen-xl px-4 md:px-8">
				<h3 className="text-center text-lg font-semibold text-gray-600">
					TRUSTED BY FOODIES FROM AROUND THE WORLD
				</h3>
				<div className="mt-6">
					<ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
						{/* LOGO 1 */}
						<li>
							<img
								src="https://www.bonappetit.com/verso/static/bon-appetit/assets/logo.svg"
								alt="logo"
								className="w-60 bg-black p-3"
							/>
						</li>

						{/* LOGO 2 */}
						<li>
							<img
								src="https://joythebaker.com/wp-content/uploads/2022/08/cropped-JoytheBaker-logo.png"
								alt="logo"
								className="w-60"
							/>
						</li>

						{/* LOGO 3 */}
						<li>
							<img
								src="https://ohsheglows.com/wp-content/uploads/2023/01/newheader2017090311.png"
								alt="logo"
								className="w-60"
							/>
						</li>

						{/* LOGO 4 */}
						<li>
							<img
								src="https://minimalistbaker.com/wp-content/themes/mb-2020/assets/images/logo.png"
								alt="logo"
								className="w-60"
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Trusted;
