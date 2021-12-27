import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

require('dotenv').config();
console.log(process.env);

const firebaseConfig = {
  //apiKey: "AIzaSyAQplW59N8PPTNtyBPJsFl-8WWrXcnV2wA",
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "eavni-bd.firebaseapp.com",
  databaseURL: "https://eavni-bd-default-rtdb.firebaseio.com",
  projectId: "eavni-bd",
  storageBucket: "eavni-bd.appspot.com",
  messagingSenderId: "550740773122",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-F3VX06MVT7"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };