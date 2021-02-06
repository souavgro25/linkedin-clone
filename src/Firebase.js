// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase" 
const firebaseConfig = {
    apiKey: "AIzaSyDm0XEbb-jAvOHwJzJMwXaVRE-cPlNkZq8",
    authDomain: "linkdin-clone-88749.firebaseapp.com",
    projectId: "linkdin-clone-88749",
    storageBucket: "linkdin-clone-88749.appspot.com",
    messagingSenderId: "244454518960",
    appId: "1:244454518960:web:3f1bc29ebea242c6448b75",
    measurementId: "G-TERHT703J7"
  };

const  firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};