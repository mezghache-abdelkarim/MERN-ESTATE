// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6db7d.firebaseapp.com",
  projectId: "mern-estate-6db7d",
  storageBucket: "mern-estate-6db7d.appspot.com",
  messagingSenderId: "244904628929",
  appId: "1:244904628929:web:eb7bb51bd0c578de793a40",
  measurementId: "G-3B3LSR5F9Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
