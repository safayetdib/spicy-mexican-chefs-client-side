import BlogCard from '../../components/BlogCard/BlogCard';
import React from 'react';

import { AiFillFilePdf } from 'react-icons/ai';
import Pdf from 'react-to-pdf';

const Blogs = () => {
	const blogList = [
		{
			q: 'Tell the differences between uncontrolled and controlled components.',
			a: `In React, controlled components are referred to components that have their state, and their behavior is controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. In a controlled component, the components state is the source of truth. Controlled components can make it easier to implement complex form behaviors, such as validation and error messages, because all of the form state is managed in one place.  \n In contrast, uncontrolled components are referred to components that manage their own state internally. They use a ref to access the DOM elements current value and update the state accordingly. In an uncontrolled component, the DOM is the source of truth. Uncontrolled components can be simpler to use in some cases, because sometimes we don't need to manage as much state ourself.`,
		},
		{
			q: 'How to validate React props using PropTypes?',
			a: `In React, a parent component passes props down to child components and child components receive them. We can pass any data as props. Therefore, we need a way to validate their data type so that the child component gets what they expect. React PropTypes is a built-in library that enables developers to validate the types of props that are being passed down to components. It can help catch bugs early in development and make your code more robust. \n At first, we have to install 'prop-types' package and import the 'Prop-Type' object. Then define the propTypes for the component by adding a propTypes property to the it. This property should be an object where the keys are the names of the props, and the values are the PropTypes that we want to validate for each prop. When a prop is passed to the component that doesn't match the defined PropTypes, it will give a warning message in the console. This makes component prop data type validation easy by providing us with ways to validate any prop types.`,
		},

		{
			q: 'Tell the difference between nodejs and express js.',
			a: `NodeJS is an extension of JavaScript. It is an open-source and cross-platform server-side runtime environment for executing JavaScript code outside of a browser. It is a single-threaded platform that has non-blocking architecture and event loop. It uses Google Chrome's V8 Javascript engine for code execution. \n ExpressJS is a framework for developing web applications with NodeJS. It is used to build web-apps using approaches and principles of Node.js. Unlike NodeJS, ExpressJS requires less coding time. This platform offers some powerful features and it is easy to use`,
		},
		{
			q: 'What is a custom hook, and why will you create a custom hook?',
			a: `A custom hook is a special JavaScript function whose name starts with 'use', shares logic between other JavaScript functions and uses the built-in React Hooks. Custom hooks allow us to abstract complex logic from components and reuse it throughout the application. Custom hooks are a powerful tool for building reusable and maintainable code in React. By writing complex logic in a custom hook, we can improve the readability, reusability, and testability of our codebase.`,
		},
	];

	const ref = React.createRef();

	return (
		<section className="mx-auto mb-28 leading-relaxed">
			<div className="space-y-6 bg-red-50 py-12 text-center">
				<h1 className="text-5xl font-semibold text-gray-700">Q & A</h1>
				<p className="mx-auto max-w-xl font-main text-lg font-thin text-gray-500">
					Answered all the asked questions. Still confused? feel free to contact
					us.
				</p>

				<Pdf targetRef={ref} filename="blogs.pdf" scale={0.6}>
					{({ toPdf }) => (
						<button
							onClick={toPdf}
							className="bg-red-accent px-4 py-3 text-center font-medium text-white shadow hover:bg-red-hover active:bg-red-active active:shadow-none md:inline">
							<AiFillFilePdf className="inline text-2xl text-white" />{' '}
							<span>Download PDF</span>
						</button>
					)}
				</Pdf>
			</div>
			<div ref={ref} className="mx-auto mt-12 max-w-screen-xl px-12">
				{blogList.map((item, idx) => (
					<BlogCard key={idx} blog={item} idx={idx} />
				))}
			</div>
		</section>
	);
};

export default Blogs;
