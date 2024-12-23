// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs83pvi20jr8OK7b5xkWKSgUraN2LdEJ4",
  authDomain: "netflix-clone-9a4ff.firebaseapp.com",
  projectId: "netflix-clone-9a4ff",
  storageBucket: "netflix-clone-9a4ff.firebasestorage.app",
  messagingSenderId: "498232315712",
  appId: "1:498232315712:web:06b8cf0498feb37a42f4a5",
  measurementId: "G-YV0205TD9J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
