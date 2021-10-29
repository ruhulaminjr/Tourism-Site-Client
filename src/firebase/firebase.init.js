import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import firebaseConfig from "./firebase.config";
const FirebaseInit = () => {
  initializeApp(firebaseConfig);
};

export default FirebaseInit;
