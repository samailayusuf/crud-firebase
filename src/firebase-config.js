import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

// import dotenv from 'dotenv/config' ;
// dotenv.config();


const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MSGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
  };


  const app = initializeApp(firebaseConfig)
  export const db = getFirestore()