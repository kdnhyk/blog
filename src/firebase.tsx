// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAybmak9RweUAJYAOSThVRuFtzFwrQpseg",
  authDomain: "blog-c7dfb.firebaseapp.com",
  projectId: "blog-c7dfb",
  storageBucket: "blog-c7dfb.appspot.com",
  messagingSenderId: "235243237520",
  appId: "1:235243237520:web:9bcad8985375c29bbca815",
  measurementId: "G-G4GBCJJ7DB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
