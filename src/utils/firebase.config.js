// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4sUHqgbaTH0GC5TOb3qJRj6M9bNNcFpw",
  authDomain: "jobtask-8f5ab.firebaseapp.com",
  projectId: "jobtask-8f5ab",
  storageBucket: "jobtask-8f5ab.appspot.com",
  messagingSenderId: "330472172193",
  appId: "1:330472172193:web:513b55b6f630312a11dee0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
