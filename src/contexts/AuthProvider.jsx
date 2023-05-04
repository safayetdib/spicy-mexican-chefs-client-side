/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
} from 'firebase/auth';
import app from '../utils/firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// GOOGLE
	const signInWithGoogle = () => {
		return signInWithPopup(auth, googleAuthProvider);
	};

	// GITHUB
	const signInWithGithub = () => {
		return signInWithPopup(auth, githubAuthProvider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
			setUser(loggedUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const updateUserData = (userName, photoUrl) => {
		return updateProfile(auth.currentUser, {
			displayName: userName,
			photoURL: photoUrl,
		});
	};

	const logout = () => {
		setLoading(true);
		return signOut(auth);
	};

	const authInfo = {
		user,
		setUser,
		createUser,
		signIn,
		signInWithGoogle,
		signInWithGithub,
		updateUserData,
		logout,
		loading,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
