import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyB73KMJnnt0-bNvvtpfzQAPzcky0kJTc8o",
    authDomain: "blooddonar-c58cb.firebaseapp.com",
    projectId: "blooddonar-c58cb",
    storageBucket: "blooddonar-c58cb.appspot.com",
    messagingSenderId: "1084221705463",
    appId: "1:1084221705463:web:5e3b23b9ab79649aa697f2",
    measurementId: "G-SEG80MBQC3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();