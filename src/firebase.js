import firebase from 'firebase/app'
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBVyweb4QBraCJI5D8dHwqKeRKtWJXBUQY",
    authDomain: "gamestopfinance.firebaseapp.com",
    projectId: "gamestopfinance",
    storageBucket: "gamestopfinance.appspot.com",
    messagingSenderId: "1074133483110",
    appId: "1:1074133483110:web:99ecca6e20d461794e77a7",
    measurementId: "G-P80RG0KSJF"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
auth.signInWithPopup(provider);
};