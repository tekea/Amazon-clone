// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH_-BKQGbceaaaiCHqIXG2zhb_8Ixq3ic",
  authDomain: "project-c630a.firebaseapp.com",
  projectId: "project-c630a",
  storageBucket: "project-c630a.appspot.com",
  messagingSenderId: "747043910753",
  appId: "1:747043910753:web:b5e06b014addb92029e620",
  measurementId: "G-E7C2HDT6V1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };