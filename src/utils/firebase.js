// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgc2UiCNgajB-ILnxDafkdxmbMdzLbPOc",
  authDomain: "netflix-gpt-deb07.firebaseapp.com",
  projectId: "netflix-gpt-deb07",
  storageBucket: "netflix-gpt-deb07.appspot.com",
  messagingSenderId: "706509855844",
  appId: "1:706509855844:web:0a29bb6f6c4a1b7b9bd371",
  measurementId: "G-JEYT8MQ2PV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();