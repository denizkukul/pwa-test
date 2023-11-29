import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDx5CTtxV_zZAmFn9qfMTEBtDdbk8_YEbM",
    authDomain: "pwa-test-59a03.firebaseapp.com",
    databaseURL: "https://pwa-test-59a03-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pwa-test-59a03",
    storageBucket: "pwa-test-59a03.appspot.com",
    messagingSenderId: "935487399834",
    appId: "1:935487399834:web:d78a87dd32015aa3b53c23"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };