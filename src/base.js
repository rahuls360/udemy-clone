import firebase from "firebase";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: "udemy-clone-6a28e",
  storageBucket: "",
  messagingSenderId: "439557186407"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
