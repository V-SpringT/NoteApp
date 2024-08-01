/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD59QuLcfrWOK2NhuCAB3wOlJ8_EBaxZyY",
  authDomain: "note-app-961cf.firebaseapp.com",
  projectId: "note-app-961cf",
  storageBucket: "note-app-961cf.appspot.com",
  messagingSenderId: "227936947861",
  appId: "1:227936947861:web:447cae702fd3ed44ab559c",
  measurementId: "G-DLDBLK38N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);