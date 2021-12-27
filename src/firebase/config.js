import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQplW59N8PPTNtyBPJsFl-8WWrXcnV2wA",
  authDomain: "eavni-bd.firebaseapp.com",
  databaseURL: "https://eavni-bd-default-rtdb.firebaseio.com",
  projectId: "eavni-bd",
  storageBucket: "eavni-bd.appspot.com",
  messagingSenderId: "550740773122",
  appId: "1:550740773122:web:141b82007a19b9499a5a1b",
  measurementId: "G-F3VX06MVT7"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };