import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD3fhhPS6hymBFKTFIuqlFrAgk0VaLQkJ0",
    authDomain: "usuarios-registro-react.firebaseapp.com",
    projectId: "usuarios-registro-react",
    storageBucket: "usuarios-registro-react.appspot.com",
    messagingSenderId: "173671994238",
    appId: "1:173671994238:web:3691249a61728957a3592f",
    measurementId: "G-5KP8L6S7HY"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = fire.auth();

export {auth};