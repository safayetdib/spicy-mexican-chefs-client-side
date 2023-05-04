/* eslint-disable react/prop-types */
const BlogCard = ({ blog, idx }) => {
	return (
		<article className="mb-8 rounded-xl bg-gray-100 p-4 text-gray-800 shadow-md md:p-10">
			<h5 className="mb-3 text-xl font-bold">
				Q{idx + 1}. {blog.q}
			</h5>
			<p style={{ whiteSpace: 'pre-line' }}>{blog.a}</p>
		</article>
	);
};

export default BlogCard;
