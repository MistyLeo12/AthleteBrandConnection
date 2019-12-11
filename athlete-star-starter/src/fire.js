import firebase from "firebase";
import firebasekey from "./keys";

var firebaseConfig = {
    apiKey: firebasekey,
    authDomain: "athlete-market.firebaseapp.com",
    databaseURL: "https://athlete-market.firebaseio.com",
    projectId: "athlete-market",
    storageBucket: "athlete-market.appspot.com",
    messagingSenderId: "370761758459",
    appId: "1:370761758459:web:7e7a74d2d292b61ac6a25e",
    measurementId: "G-QWJLD6YH8F"
  };


  firebase.initializeApp(firebaseConfig);

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();
  const db = firebase.firestore();
  var storageRef = storage.ref();

  export { db };
  export {storageRef}
