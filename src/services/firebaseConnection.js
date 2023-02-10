import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA7nx21OUIWtkrO77t5scpeFNRoed0TZcY",
  authDomain: "attendance-510ab.firebaseapp.com",
  projectId: "attendance-510ab",
  storageBucket: "attendance-510ab.appspot.com",
  messagingSenderId: "318716470167",
  appId: "1:318716470167:web:8123489bf8edd107e25ad2",
  measurementId: "G-5BSTLQGD0Z"
};

if(firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;