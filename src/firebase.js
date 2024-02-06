import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDe-x9jx02Hxcy4K9SP2mx08Hw_cBqDdwU",
  authDomain: "test-firebase-92bf9.firebaseapp.com",
  projectId: "test-firebase-92bf9",
  storageBucket: "test-firebase-92bf9.appspot.com",
  messagingSenderId: "491307426921",
  appId: "1:491307426921:web:39fbea691fc35a7f666ef8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);