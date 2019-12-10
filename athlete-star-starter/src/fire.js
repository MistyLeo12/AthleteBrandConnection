import firebase from "firebase";
firebase.initializeApp({
  apiKey: "AIzaSyDy1LlgOmltOLOjfsisTBWuKH9XrCfWMa4",
  authDomain: "athlete-market.firebaseapp.com",
  databaseURL: "https://athlete-market.firebaseio.com",
  projectId: "athlete-market",
  storageBucket: "athlete-market.appspot.com",
  messagingSenderId: "370761758459",
  appId: "1:370761758459:web:7e7a74d2d292b61ac6a25e",
  measurementId: "G-QWJLD6YH8F"
});

const db = firebase.firestore();

export { db };
