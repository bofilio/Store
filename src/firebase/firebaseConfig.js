import firebase from "firebase/app";
import 'firebase/analytics'

const firebaseConfig = {

    apiKey: "AIzaSyCkvG6oOZCBiCNlJX952pr6si3FNuV0_rM",
  
    authDomain: "auth-backend-b2fd8.firebaseapp.com",
  
    projectId: "auth-backend-b2fd8",
  
    storageBucket: "auth-backend-b2fd8.appspot.com",
  
    messagingSenderId: "943128664651",
  
    appId: "1:943128664651:web:7f5664001d20fd62eacbce",
  
    measurementId: "G-6BD41DZ85D"
  
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();