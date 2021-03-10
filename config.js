import firebase from 'firebase'
require('firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBGhmtzRHGrPnIQ-5ojzyYWXDTgBJHQQ2Y",
    authDomain: "moviereviewapp-6d3c5.firebaseapp.com",
    projectId: "moviereviewapp-6d3c5",
    storageBucket: "moviereviewapp-6d3c5.appspot.com",
    messagingSenderId: "129486518235",
    appId: "1:129486518235:web:1e7ca9971df23c2ef8d9fe",
    measurementId: "G-862LD5Q1RM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();