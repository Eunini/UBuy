// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCyTywMrHtCi_lG95S6D9dKkIbVL8eQS5k",
  authDomain: "emart-81eff.firebaseapp.com",
  projectId: "emart-81eff",
  storageBucket: "emart-81eff.appspot.com",
  messagingSenderId: "84453431445",
  appId: "1:84453431445:web:68ae480de20898f2c6239c",
  measurementId: "G-QFP6LR6W62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export { app, auth};