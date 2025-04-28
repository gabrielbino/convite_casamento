import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyD_-UC718DVG5_XQ6A7bCM_XoHXgmwC2ug",

  authDomain: "convite-casamento-52dea.firebaseapp.com",

  projectId: "convite-casamento-52dea",

  storageBucket: "convite-casamento-52dea.firebasestorage.app",

  messagingSenderId: "465958068873",

  appId: "1:465958068873:web:963bd52fdbdbb097cf9c58"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);