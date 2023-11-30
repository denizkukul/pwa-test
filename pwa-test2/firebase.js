
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js';
// import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js';
// import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyDyq4SPpXn4shK6jcZG1AJVUpsWwFCTqU8",
    authDomain: "pwachat-491b1.firebaseapp.com",
    projectId: "pwachat-491b1",
    databaseURL: "https://pwachat-491b1-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "pwachat-491b1.appspot.com",
    messagingSenderId: "267963133784",
    appId: "1:267963133784:web:f3a62e9b66e9ca04c6ff2d"
};


const app = firebase.initializeApp(firebaseConfig);
// const db = firebase.database().getDatabase(app);
const auth = firebase.auth();

export { auth };
