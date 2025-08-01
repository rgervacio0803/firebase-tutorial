// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfJIjzQdlgGNRdmtmy8IZUX7JEXFvo9MQ",
  authDomain: "fir-tutorial-9cbaa.firebaseapp.com",
  projectId: "fir-tutorial-9cbaa",
  storageBucket: "fir-tutorial-9cbaa.firebasestorage.app",
  messagingSenderId: "256370353273",
  appId: "1:256370353273:web:ac5e0f882ecc4c2dbd20a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();