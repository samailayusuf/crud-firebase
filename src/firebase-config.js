import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDoe-3303AoH9dD9KxirzKNeLLqNgJE5rQ",
    authDomain: "crud-app-a9568.firebaseapp.com",
    projectId: "crud-app-a9568",
    storageBucket: "crud-app-a9568.appspot.com",
    messagingSenderId: "65304769253",
    appId: "1:65304769253:web:3f17aa1f2996a582429a0c",
    measurementId: "G-8M92R7RHTL"
  };


  const app = initializeApp(firebaseConfig)
  export const db = getFirestore()