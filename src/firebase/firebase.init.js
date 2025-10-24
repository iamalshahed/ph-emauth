// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq0EfQAk_GcKpRxAFC4tubs_Fly626ypc",
  authDomain: "gai-f2450.firebaseapp.com",
  projectId: "gai-f2450",
  storageBucket: "gai-f2450.firebasestorage.app",
  messagingSenderId: "639763172093",
  appId: "1:639763172093:web:d501243285a2985b1b4c94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
