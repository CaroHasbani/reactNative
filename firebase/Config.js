// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA4eb-BW9bcrU3SMHOmdmT0MU6D3kgC5A",
  authDomain: "disneyshop-27ae0.firebaseapp.com",
  projectId: "disneyshop-27ae0",
  storageBucket: "disneyshop-27ae0.appspot.com",
  messagingSenderId: "182944364467",
  appId: "1:182944364467:web:431069cfd2011f5610bdc6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)