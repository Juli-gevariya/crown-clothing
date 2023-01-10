// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import 'firebase/firestore';
import 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBjezvt9IXqzK9ek6uSCTCYpIVxItNIjI0",
    authDomain: "crwn-clothing-practice.firebaseapp.com",
    projectId: "crwn-clothing-practice",
    storageBucket: "crwn-clothing-practice.appspot.com",
    messagingSenderId: "102149611641",
    appId: "1:102149611641:web:5e439baed81db2438574a8",
    measurementId: "G-YRG71GZT9S"
  };

  const firebaseApp = initializeApp(firebaseConfig);


  export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
//   provider.setCustomParams({prompt:'select_account'});
googleProvider.setCustomParameters({
    prompt: "select_account"
});
//   export const signInWithGoogle = () =>signInWithPopup(auth, googleProvider);
  export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
  
//   export default firebase; 