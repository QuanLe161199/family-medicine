// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKF_zKp8ixt_K3TLjWtlFeNJCcBKYptmQ",
    authDomain: "family-doctor-d57cc.firebaseapp.com",
    projectId: "family-doctor-d57cc",
    storageBucket: "family-doctor-d57cc.appspot.com",
    messagingSenderId: "550063059723",
    appId: "1:550063059723:web:0f1dd4811d1c78ab58e80e",
    measurementId: "G-DZTD0YL3LW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
export default firestore;
