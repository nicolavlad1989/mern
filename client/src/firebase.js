// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "mern-43e58.firebaseapp.com",
//   projectId: "mern-43e58",
//   storageBucket: "mern-43e58.appspot.com",
//   messagingSenderId: "797643205809",
//   appId: "1:797643205809:web:a002a4a0db9d9cd3a14690"
// };


const firebaseConfig = {
  apiKey: "AIzaSyAqpJ9PZ4SHQUwgfB_cqfzFA2aSYd-aeWM",
  authDomain: "mern-43e58.firebaseapp.com",
  projectId: "mern-43e58",
  storageBucket: "mern-43e58.appspot.com",
  messagingSenderId: "797643205809",
  appId: "1:797643205809:web:17364727444dbc49a14690"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);