
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
    apiKey: "AIzaSyB8lyNH4bKAhztCcjQMs9c-ioqswWvlMew",
    authDomain: "auth-cd2d0.firebaseapp.com",
    projectId: "auth-cd2d0",
    storageBucket: "auth-cd2d0.appspot.com",
    messagingSenderId: "your_firebase_messaging_sender_id",
    appId: "858369089570",
    measurementId: "1:858369089570:web:647b7b726d419864c12a7b",
};



const app = initializeApp(firebaseConfig);