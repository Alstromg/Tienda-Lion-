// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0vyoX4i8FSuC54Yg2KVi_N706HXnejQw",
  authDomain: "lion-sport-tienda.firebaseapp.com",
  projectId: "lion-sport-tienda",
  storageBucket: "lion-sport-tienda.appspot.com",
  messagingSenderId: "16747479342",
  appId: "1:16747479342:web:12fbac528c2f0438d53abf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)