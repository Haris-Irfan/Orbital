// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeCSeXYaca7mePdvhhxy5znt9yHo8RE8g",
  authDomain: "vi-sg-it.firebaseapp.com",
  projectId: "vi-sg-it",
  storageBucket: "vi-sg-it.appspot.com",
  messagingSenderId: "8194907932",
  appId: "1:8194907932:web:16e7ba67e7efc35604a4d9",
  measurementId: "G-KEJ470W6DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };