import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRgmAFRvwtc2GLbzOI6kThdUs7CsoBxTE",
  authDomain: "linkedin-clone-31062.firebaseapp.com",
  projectId: "linkedin-clone-31062",
  storageBucket: "linkedin-clone-31062.appspot.com",
  messagingSenderId: "1061110876161",
  appId: "1:1061110876161:web:428ec75153aaf38fe9d800"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)