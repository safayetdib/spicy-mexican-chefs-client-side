// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD5UijENL9Egr_8EyUC1uDsmjUEp0BsF4E',
	authDomain: 'spicy-mexican-chefs.firebaseapp.com',
	projectId: 'spicy-mexican-chefs',
	storageBucket: 'spicy-mexican-chefs.appspot.com',
	messagingSenderId: '533465142780',
	appId: '1:533465142780:web:88834fe96b65605f8d0e79',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
