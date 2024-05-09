// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVxEOa6F-pkjK4YepPe2rymc2gY3DbK0A",
  authDomain: "my-todo-react-9d206.firebaseapp.com",
  projectId: "my-todo-react-9d206",
  storageBucket: "my-todo-react-9d206.appspot.com",
  messagingSenderId: "345779920868",
  appId: "1:345779920868:web:2bd6c360d575799b0ab1f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)