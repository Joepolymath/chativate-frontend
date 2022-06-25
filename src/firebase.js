// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChQAq6saIL3OaoltU7Hq5X1YF1HcqcYzU",
  authDomain: "chativate-9bba5.firebaseapp.com",
  projectId: "chativate-9bba5",
  storageBucket: "chativate-9bba5.appspot.com",
  messagingSenderId: "658946142937",
  appId: "1:658946142937:web:b0ad4036b9689b699044c8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
