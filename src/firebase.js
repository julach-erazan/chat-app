import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrspbYWg-1alE1IT3K6_5CseV_q0ANEC4",
  authDomain: "chatapp-fa25b.firebaseapp.com",
  projectId: "chatapp-fa25b",
  storageBucket: "chatapp-fa25b.appspot.com",
  messagingSenderId: "907832943928",
  appId: "1:907832943928:web:cb6b63309a4750fe6a8dcd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
