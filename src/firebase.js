// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWqhbl6RAhCyg9-if_qZ5eAjhZ4CmKub4",
  authDomain: "login-auth-30f51.firebaseapp.com",
  projectId: "login-auth-30f51",
  storageBucket: "login-auth-30f51.firebasestorage.app",
  messagingSenderId: "667504961066",
  appId: "1:667504961066:web:731f5feb3edf2b9c128553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();