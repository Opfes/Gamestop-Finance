import firebase from 'firebase/app'
import 'firebase/auth';
import "firebase/firestore";

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
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, dropdown_select, userinput_val) => {
  if (!user) return;
  const userRef = firestore.doc(`Users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName} = user;
    try {
      /* TODO add a try to convert the values to a double, to make sure the user
      actually input a number and not a string */
      await userRef.set({
        displayName,
        email,
        valuesavings,
        valueequity,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`Users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};