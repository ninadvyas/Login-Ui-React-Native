// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSPN9_28Ummf5TlA8XojaPhSjmm58YfgY",
  authDomain: "native-e89c4.firebaseapp.com",
  projectId: "native-e89c4",
  storageBucket: "native-e89c4.appspot.com",
  messagingSenderId: "725221543897",
  appId: "1:725221543897:web:a32f282d94bf00876b13c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);