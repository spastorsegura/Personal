import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD2nW_Sbm047ocxynvxegi36J7MbszgKuE",
    authDomain: "firestore-auth-1-32b3a.firebaseapp.com",
    projectId: "firestore-auth-1-32b3a",
    storageBucket: "firestore-auth-1-32b3a.appspot.com",
    messagingSenderId: "771652240693",
    appId: "1:771652240693:web:37f0998e2f8fe833e3b87c"
  };

  // Initialize Firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  const db= firebase.firestore()
  const auth = firebase.auth()
  const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp


  export {db,auth,marcaTiempo,firebase}