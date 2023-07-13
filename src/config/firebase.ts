// // Import the functions you need from the SDKs you need
// // import {useRef} from 'react'
import { initializeApp, } from "firebase/app";
import { getAuth ,RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8zrM0DKuayFHJRfkGm9bpwtMR7xGeGB0",
  authDomain: "tezo-32b7a.firebaseapp.com",
  projectId: "tezo-32b7a",
  storageBucket: "tezo-32b7a.appspot.com",
  messagingSenderId: "665223217403",
  appId: "1:665223217403:web:329ca5de8e4208745b705e",
  measurementId: "G-V4F2Q0WSK1"
};

// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
// const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBjbKcEOosVJXnodnuE0DLdQBETW46Sjww",
//   authDomain: "nd-project-227c1.firebaseapp.com",
//   projectId: "nd-project-227c1",
//   storageBucket: "nd-project-227c1.appspot.com",
//   messagingSenderId: "657304163502",
//   appId: "1:657304163502:web:6be64c5a2c9949a173893f",
//   measurementId: "G-WHX65T7C0Q"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export const auth=getAuth(app)