// Import the functions you need from the SDKs you need
// import {useRef} from 'react'
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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
// const analytics = getAnalytics(app);
// declare const window: any;

// export function onCaptchVerify(phone:string) {
//   if (!window.recaptchaVerifier) {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       'recaptcha-container',
//       {
//         size: "invisible",
//         callback: () => {
//           sendVerificationCode(phone);
//         },
//         "expired-callback": () => {
//           // Response expired. Ask user to solve reCAPTCHA again.
//           // ...
//         },
//       },
//       auth
//     );
//   }
// }

// export function sendVerificationCode(phoneNumber) {
//   const formatPhone = "+" + phoneNumber;
//   const appVerifier = window.recaptchaVerifier
//   return new Promise((resolve, reject) => {
//     signInWithPhoneNumber(auth, formatPhone, appVerifier)
//       .then((confirmationResult) => {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         window.confirmationResult = confirmationResult;
//         resolve()
//       })
//       .catch((err) => {
//         reject(err)
//     })
//   })
// }