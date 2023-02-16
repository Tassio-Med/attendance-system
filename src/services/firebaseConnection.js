import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyBdUr8d5tNViKKB0ETcyc4a1eBN_mLZvRs",
  authDomain: "system-812f3.firebaseapp.com",
  projectId: "system-812f3",
  storageBucket: "system-812f3.appspot.com",
  messagingSenderId: "857791844749",
  appId: "1:857791844749:web:2721fddf329df81b386dc4",
  measurementId: "G-X2FL50MH26"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;