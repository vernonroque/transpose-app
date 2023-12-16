// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKjh_XpjbkT--GHY3Ht110VzvT1EKO59g",
  authDomain: "transpose-app-52b89.firebaseapp.com",
  projectId: "transpose-app-52b89",
  storageBucket: "transpose-app-52b89.appspot.com",
  messagingSenderId: "471703890247",
  appId: "1:471703890247:web:1284930f9921841da30462",
  measurementId: "G-EVBXWJYQKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);