import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP2yxghmCyTT20gLFCQiJLsXWP5PCMWzI",
  authDomain: "fir-421c1.firebaseapp.com",
  projectId: "fir-421c1",
  storageBucket: "fir-421c1.appspot.com",
  messagingSenderId: "959638682801",
  appId: "1:959638682801:web:b77b3659b777b292413690",
  measurementId: "G-KV6YMFRYS8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
