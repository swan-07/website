import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyCeNfF4cqGV27BUQmKVEw8iYzKqKLEFB5I",
  authDomain: "art-gallery-479d1.firebaseapp.com",
  databaseURL: "https://art-gallery-479d1-default-rtdb.firebaseio.com",
  projectId: "art-gallery-479d1",
  storageBucket: "art-gallery-479d1.appspot.com",
  messagingSenderId: "296307722354",
  appId: "1:296307722354:web:500998900fa98416a99aeb",
  measurementId: "G-KBSVV7S8E6"
};



  // Get a reference to the database service
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      //console.error("Firebase initialization error", err.stack);
    }
  }

  export default firebase;