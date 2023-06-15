import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjWA8GDjMrGf2fnjogqGLwSZDMpmpERZM",
  authDomain: "react-notes-68188.firebaseapp.com",
  projectId: "react-notes-68188",
  storageBucket: "react-notes-68188.appspot.com",
  messagingSenderId: "630764317476",
  appId: "1:630764317476:web:8315a1dd686ad6bf42e1b1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const notesCollection = collection(db, "notes");