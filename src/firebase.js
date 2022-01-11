import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDljXMsiY012FH7YJuEQRXTZWYo6lVb0s",
  authDomain: "whatsapp-clone-8cf62.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-8cf62.firebaseio.com",
  projectId: "whatsapp-clone-8cf62",
  storageBucket: "whatsapp-clone-8cf62.appspot.com",
  messagingSenderId: "1078646122388",
  appId: "1:1078646122388:web:f21f9558634a9a75c19181"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;