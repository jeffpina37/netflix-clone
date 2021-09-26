import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOvev-s0VHxCupw5IVrXdiX9v-dTgAXGc",
  authDomain: "netflix-clone-3b469.firebaseapp.com",
  projectId: "netflix-clone-3b469",
  storageBucket: "netflix-clone-3b469.appspot.com",
  messagingSenderId: "1046716323187",
  appId: "1:1046716323187:web:4f2c7c2035f74e4da22106"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;