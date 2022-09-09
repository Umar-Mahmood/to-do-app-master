import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var fbconfig = {
  apiKey: "AIzaSyAhGR28W-iie2C-fYPRjkK-EQVY5qUBYd8",
  authDomain: "first-bf72b.firebaseapp.com",
  projectId: "first-bf72b",
  storageBucket: "first-bf72b.appspot.com",
  messagingSenderId: "250810747451",
  appId: "1:250810747451:web:0fb9b3f03d712c3a5faa1e",
  measurementId: "G-Y9RS6NNX1F",
};
firebase.initializeApp(fbconfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
