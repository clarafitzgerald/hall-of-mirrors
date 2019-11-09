import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ71l4tlltc5zr2VIFN3a92qU_qgbBvRE",
  authDomain: "hall-of-mirrors-4ea96.firebaseapp.com",
  databaseURL: "https://hall-of-mirrors-4ea96.firebaseio.com",
  projectId: "hall-of-mirrors-4ea96",
  storageBucket: "hall-of-mirrors-4ea96.appspot.com",
  messagingSenderId: "554567970977",
  appId: "1:554567970977:web:8a15a6f2b9fb3e3e8c00e0",
  measurementId: "G-MPEPWF91N4"
};

// Initialising firebase
firebase.initializeApp(firebaseConfig);

// Exporting connection to database as a variable
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
