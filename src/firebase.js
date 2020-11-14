// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3g-rpmadh_58bDsHRJRx7qvtnnbIyrnY",
    authDomain: "facebook-messenger-clone-bc457.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-bc457.firebaseio.com",
    projectId: "facebook-messenger-clone-bc457",
    storageBucket: "facebook-messenger-clone-bc457.appspot.com",
    messagingSenderId: "619937780320",
    appId: "1:619937780320:web:8531b886830888efff2905",
    measurementId: "G-NSZLKESYJ1"
  });

  const db = firebaseApp.firestore()

  export default db;