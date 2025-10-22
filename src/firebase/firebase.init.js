// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6idqlhTC2os3kjbr-7E9PV0sgdXs-M3c",
  authDomain: "assignment-nine-d4857.firebaseapp.com",
  projectId: "assignment-nine-d4857",
  storageBucket: "assignment-nine-d4857.firebasestorage.app",
  messagingSenderId: "590714531025",
  appId: "1:590714531025:web:9bf685e190c1ea0fa329f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);