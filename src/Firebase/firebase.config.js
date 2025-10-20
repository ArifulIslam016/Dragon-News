// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlZKuIH014l3C_uZ-sx0zOfmRzJiC8upQ",
  authDomain: "dragonnews-12df3.firebaseapp.com",
  projectId: "dragonnews-12df3",
  storageBucket: "dragonnews-12df3.firebasestorage.app",
  messagingSenderId: "595383853613",
  appId: "1:595383853613:web:241fa2da3bafb0cf77cea4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app)