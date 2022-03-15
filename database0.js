// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getFireStore, collection, getDocs } from "firebase/firestore/lite";
import { getDatabase, onDisconnect, push, ref, set, update } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0ACKYz6CovM3yRIgoonh-3iztDq3gFRg",
  authDomain: "paxcounter-7b526.firebaseapp.com",
  projectId: "paxcounter-7b526",
  storageBucket: "paxcounter-7b526.appspot.com",
  messagingSenderId: "38327586179",
  appId: "1:38327586179:web:95b407d47ea9514e16bab6",
  measurementId: "G-N4FWD59FRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();



await writeData()

async function writeData() {
    update(ref(db, "2022-03-15"), {
      "0600": {
        "value": 4
      }
    }).then(
      console.log("KLAR")
    )
}