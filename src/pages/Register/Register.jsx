import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import {
	AiOutlineWarning,
	AiFillEye,
	AiFillEyeInvisible,
} from 'react-icons/ai';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
	const {
		createUser,
		signIn,
		updateUserData,
		signInWithGoogle,
		signInWithGithub,
		logout,
	} = useContext(AuthContext);

	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const [showPassword, setShowPassword] = useState(false);
	// ERRORS
	const [error, setError] = useState('');
	const [passError, setPassError] = useState('');

	const notify = () =>
		toast.success('Registered Successfully', {
			style: {
				border: '1px solid #f40000',
				padding: '16px',
				color: '#f40000',
			},
			iconTheme: {
				primary: '#f40000',
				secondary: '#FFFAEE',
			},
		});

	// HANDLE REGISTER
	const handleRegister = (e) => {
		e.preventDefault();
		setIsLoading(true);

		const form = e.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;

		setError('');
		setPassError('');

		if (password && password.length < 6) {
			setPassError('Password must be 6 (six) characters long');
			return;
		}

		createUser(email, password)
			.then(() => {
				updateNameAndPhoto(name, photo);
				logout();
				signIn(email, password);

				form.reset();
				setError('');
				setIsLoading(false);
				notify();
				navigate(from, { replace: true });
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});
	};

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then(() => {
				setError('');
				notify();
				navigate(from, { replace: true });
			})
			.catch((err) => setError(err.message));
	};

	const handleGithubSignIn = () => {
		signInWithGithub()
			.then(() => {
				setError('');
				notify();
				navigate(from, { replace: true });
			})
			.catch((err) => setError(err.message));
	};

	const updateNameAndPhoto = (name, url) => {
		updateUserData(name, url).then(() => {
			navigate('/');
		});
	};

	return (
		<main className="flex w-full flex-col items-center justify-center px-4">
			<div className="mb-20 mt-10 w-full max-w-md space-y-8 rounded border px-8 pb-10 pt-6 text-gray-600 shadow">
				<div className="text-center">
					<div className="mt-5 space-y-2">
						<h3 className="text-2xl font-bold text-gray-700 sm:text-3xl">
							Please Register
						</h3>
						<p className="mt-4">
							Already have an account?{' '}
							<Link
								to="/login"
								className="font-medium text-red-accent hover:text-red-hover">
								Login
							</Link>
						</p>
					</div>
				</div>

				<form onSubmit={handleRegister}>
					{/* NAME */}
					<div>
						<label className="font-medium">Name</label>
						<input
							type="text"
							name="name"
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-red-accent"
						/>
					</div>
					{/* EMAIL */}
					<div className="mt-4">
						<label className="font-medium">
							Email <span>*</span>
						</label>
						<input
							type="email"
							name="email"
							required
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-red-accent"
						/>
					</div>
					{/* PASSWORD */}
					<div className="relative mt-4">
						<label className="font-medium">
							Password <span>*</span>
						</label>
						<input
							type={!showPassword ? 'password' : 'text'}
							name="password"
							required
							className=" mt-2 w-full rounded-lg border bg-transparent py-2 pl-3 pr-10 text-gray-500 shadow-sm outline-none focus:border-red-accent"
						/>

						<button
							onClick={() => setShowPassword(!showPassword)}
							type="button"
							className="absolute bottom-3 right-3 text-xl text-gray-500 hover:text-gray-700">
							{showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
						</button>
					</div>

					{/* PASSWORD ERROR MESSAGE */}
					{passError && (
						<p className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-red-300 bg-red-100 p-2 text-center text-red-accent">
							<AiOutlineWarning className="text-lg" /> {passError}
						</p>
					)}

					{/* PHOTO URL */}
					<div className="mt-4">
						<label className="font-medium">Photo URL</label>
						<input
							type="text"
							name="photo"
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-red-accent"
						/>
					</div>

					{/* ERROR MESSAGE */}
					{error && (
						<p className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-red-300 bg-red-100 p-2 text-center text-red-accent">
							<AiOutlineWarning className="text-lg" /> {error}
						</p>
					)}

					{/* SUBMIT BUTTON */}
					<button
						type="submit"
						className={`mt-8 w-full rounded-lg bg-red-accent px-4 py-2 font-medium text-white duration-150 hover:bg-red-hover active:bg-red-active `}>
						{!isLoading ? (
							'Submit'
						) : (
							<div className="mx-auto h-6 w-6 animate-spin rounded-full border-4 border-dashed border-gray-50"></div>
						)}
					</button>
					<Toaster />
				</form>

				<div className="relative">
					<span className="block h-px w-full bg-gray-300"></span>
					<p className="absolute inset-x-0 -top-2 mx-auto inline-block w-fit bg-white px-2 text-sm">
						Or continue with
					</p>
				</div>
				<div className="space-y-4 py-3 text-sm font-medium">
					{/* GOOGLE SIGN IN */}
					<button
						onClick={handleGoogleSignIn}
						className="flex w-full items-center justify-center gap-x-3 rounded-lg border py-2.5 duration-150 hover:bg-gray-50 active:bg-gray-100">
						<svg
							className="h-5 w-5"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_17_40)">
								<path
									d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
									fill="#4285F4"
								/>
								<path
									d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
									fill="#34A853"
								/>
								<path
									d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
									fill="#FBBC04"
								/>
								<path
									d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
									fill="#EA4335"
								/>
							</g>
							<defs>
								<clipPath id="clip0_17_40">
									<rect width="48" height="48" fill="white" />
								</clipPath>
							</defs>
						</svg>
						Continue with Google
					</button>
					{/* GITHUB SIGN IN */}
					<button
						onClick={handleGithubSignIn}
						className="flex w-full items-center justify-center gap-x-3 rounded-lg border py-2.5 duration-150 hover:bg-gray-50 active:bg-gray-100">
						<svg
							className="h-5 w-5"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_910_21)">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M24.0005 1C18.303 1.00296 12.7923 3.02092 8.45374 6.69305C4.11521 10.3652 1.23181 15.452 0.319089 21.044C-0.593628 26.636 0.523853 32.3684 3.47174 37.2164C6.41963 42.0643 11.0057 45.7115 16.4099 47.5059C17.6021 47.7272 18.0512 46.9883 18.0512 46.36C18.0512 45.7317 18.0273 43.91 18.0194 41.9184C11.3428 43.3608 9.93197 39.101 9.93197 39.101C8.84305 36.3349 7.26927 35.6078 7.26927 35.6078C5.09143 34.1299 7.43223 34.1576 7.43223 34.1576C9.84455 34.3275 11.1123 36.6194 11.1123 36.6194C13.2504 40.2667 16.7278 39.2116 18.0949 38.5952C18.3095 37.0501 18.9335 35.999 19.621 35.4023C14.2877 34.8017 8.68408 32.7548 8.68408 23.6108C8.65102 21.2394 9.53605 18.9461 11.156 17.2054C10.9096 16.6047 10.087 14.1785 11.3905 10.8829C11.3905 10.8829 13.4054 10.2427 17.9916 13.3289C21.9253 12.2592 26.0757 12.2592 30.0095 13.3289C34.5917 10.2427 36.6026 10.8829 36.6026 10.8829C37.9101 14.1706 37.0875 16.5968 36.8411 17.2054C38.4662 18.9464 39.353 21.2437 39.317 23.6187C39.317 32.7824 33.7015 34.8017 28.3602 35.3905C29.2186 36.1334 29.9856 37.5836 29.9856 39.8122C29.9856 43.0051 29.9578 45.5736 29.9578 46.36C29.9578 46.9962 30.391 47.7391 31.6071 47.5059C37.0119 45.7113 41.5984 42.0634 44.5462 37.2147C47.4941 32.3659 48.611 26.6326 47.6972 21.0401C46.7835 15.4476 43.8986 10.3607 39.5587 6.68921C35.2187 3.01771 29.7067 1.00108 24.0085 1H24.0005Z"
									fill="#191717"
								/>
								<path
									d="M9.08887 35.264C9.03721 35.3826 8.84645 35.4181 8.69146 35.3351C8.53646 35.2522 8.42122 35.098 8.47686 34.9755C8.5325 34.853 8.71928 34.8214 8.87428 34.9044C9.02927 34.9874 9.14848 35.1455 9.08887 35.264Z"
									fill="#191717"
								/>
								<path
									d="M10.0626 36.3428C9.98028 36.384 9.88612 36.3955 9.79622 36.3753C9.70632 36.3551 9.62629 36.3045 9.56979 36.2321C9.41479 36.0662 9.38298 35.837 9.50221 35.7342C9.62143 35.6315 9.83606 35.6789 9.99105 35.8449C10.146 36.0108 10.1818 36.24 10.0626 36.3428Z"
									fill="#191717"
								/>
								<path
									d="M11.0085 37.714C10.8614 37.8167 10.6111 37.714 10.472 37.5085C10.4335 37.4716 10.4029 37.4274 10.382 37.3785C10.3611 37.3297 10.3503 37.2771 10.3503 37.224C10.3503 37.1709 10.3611 37.1183 10.382 37.0694C10.4029 37.0205 10.4335 36.9763 10.472 36.9395C10.619 36.8407 10.8694 36.9395 11.0085 37.141C11.1476 37.3425 11.1516 37.6112 11.0085 37.714Z"
									fill="#191717"
								/>
								<path
									d="M12.2921 39.0417C12.161 39.1879 11.8947 39.1484 11.6761 38.9508C11.4575 38.7532 11.4059 38.4845 11.537 38.3423C11.6682 38.2 11.9344 38.2395 12.161 38.4331C12.3875 38.6268 12.4312 38.8994 12.2921 39.0417Z"
									fill="#191717"
								/>
								<path
									d="M14.0923 39.8162C14.0327 40.0019 13.7625 40.0849 13.4922 40.0059C13.222 39.9268 13.0432 39.7055 13.0948 39.5159C13.1465 39.3262 13.4207 39.2393 13.6949 39.3262C13.9691 39.4131 14.144 39.6226 14.0923 39.8162Z"
									fill="#191717"
								/>
								<path
									d="M16.0557 39.9505C16.0557 40.1442 15.8331 40.3101 15.547 40.3141C15.2608 40.318 15.0264 40.16 15.0264 39.9663C15.0264 39.7727 15.2489 39.6067 15.535 39.6028C15.8212 39.5988 16.0557 39.753 16.0557 39.9505Z"
									fill="#191717"
								/>
								<path
									d="M17.8838 39.6463C17.9196 39.8399 17.7208 40.0414 17.4347 40.0888C17.1486 40.1363 16.8982 40.0217 16.8624 39.832C16.8267 39.6423 17.0333 39.4368 17.3115 39.3855C17.5897 39.3341 17.848 39.4526 17.8838 39.6463Z"
									fill="#191717"
								/>
							</g>
							<defs>
								<clipPath id="clip0_910_21">
									<rect width="48" height="48" fill="white" />
								</clipPath>
							</defs>
						</svg>
						Continue with Github
					</button>
				</div>
			</div>
		</main>
	);
};

export default Register;
