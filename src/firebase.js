// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; //this is for web modular api way
//import { getDatabase } from "firebase/database";  //this is for web modular api way
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey= process.env.REACT_APP_FIREBASE_API_KEY;
const firebaseApp = initializeApp({
  apiKey: apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
});
// Initialize Firebase
// this is the old way of initializing app
//const app = firebase.initializeApp(firebaseConfig); 
const storage = getStorage(firebaseApp);

//const db = firestore(firebaseApp); //this is web modular api way

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

//const analytics = getAnalytics(app);

export {auth, storage};