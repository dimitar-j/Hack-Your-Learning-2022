import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBp8Xc5z49rIOI2hRU9IzZUCWqLspORiJ8",
  authDomain: "hack-your-learning-2022.firebaseapp.com",
  projectId: "hack-your-learning-2022",
  storageBucket: "hack-your-learning-2022.appspot.com",
  messagingSenderId: "1011629502155",
  appId: "1:1011629502155:web:444283a0fdf0df63adb54e",
  measurementId: "G-ER4SGSLBPX"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const db = getDatabase(app);
export default app;