// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD19lnGZXYIKvGEVWPUPYsuxOkwPyMu5Pk",
  authDomain: "netflixgpt-9b162.firebaseapp.com",
  projectId: "netflixgpt-9b162",
  storageBucket: "netflixgpt-9b162.appspot.com",
  messagingSenderId: "352342966494",
  appId: "1:352342966494:web:c3284c69354f07e879424f",
  measurementId: "G-5H04HD8YLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);