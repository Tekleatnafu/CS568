// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC4XFjkGZjnZWMZf6iWOf2wyfB98oBO604",
  authDomain: "react-project-a1dfb.firebaseapp.com",
  projectId: "react-project-a1dfb",
  storageBucket: "react-project-a1dfb.appspot.com",
  messagingSenderId: "933838770542",
  appId: "1:933838770542:web:faf8d8e7e9980ddc40317f",
  measurementId: "G-GEX136HVVX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
