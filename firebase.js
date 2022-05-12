import firebase from "firebase";
// import firebaseConfig from './firebaseAPI';

const firebaseConfig = {
  apiKey: "AIzaSyCCSVI3MF5VWJpEOjJezQZlHxDSuaPUzyI",
  authDomain: "com-mishra.firebaseapp.com",
  projectId: "com-mishra",
  storageBucket: "com-mishra.appspot.com",
  messagingSenderId: "134218583501",
  appId: "1:134218583501:web:92ca676de3f9437ab08884",
  measurementId: "G-YP00E1NF6Q",
};

// cheach app is already initialized or not
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
