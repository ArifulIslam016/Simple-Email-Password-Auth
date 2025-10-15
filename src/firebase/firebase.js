// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUNxRp64OKnaKSYKClOIjco9AlLJHrgH8",
  authDomain: "email-passwor-auth-e8696.firebaseapp.com",
  projectId: "email-passwor-auth-e8696",
  storageBucket: "email-passwor-auth-e8696.firebasestorage.app",
  messagingSenderId: "932915824539",
  appId: "1:932915824539:web:bb8dd7b4c799f240b1833e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)