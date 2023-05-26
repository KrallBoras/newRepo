// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { database } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAES8Jmsk9HVBZz-vp_sVGMEMjfOnRoGkI",
  authDomain: "krallborasyh.firebaseapp.com",
  databaseURL:"https://krallborasyh-default-rtdb.europe-west1.firebasedatabase.app/" ,
  projectId: "krallborasyh",
  storageBucket: "krallborasyh.appspot.com",
  messagingSenderId: "1091552051069",
  appId: "1:1091552051069:web:8aa39c3fbcd60813ad5614",
  measurementId: "G-FVLG870VV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function greet()
    {
        var name = document.getElementById("nameinput").value
        var string = document.getElementById("greeting")
        string.innerHTML = `Hello ${name}!`
        
    }


