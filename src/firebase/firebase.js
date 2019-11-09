import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCLTAfohQx60rmf8nCOAt6yIP9CYmBfJHk",
    authDomain: "crown-db-65833.firebaseapp.com",
    databaseURL: "https://crown-db-65833.firebaseio.com",
    projectId: "crown-db-65833",
    storageBucket: "crown-db-65833.appspot.com",
    messagingSenderId: "637575889857",
    appId: "1:637575889857:web:070add8a30b12b9986a540",
    measurementId: "G-SXX6GCS7E5"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;