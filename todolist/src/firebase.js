import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDD25xIBAh5NOUwFg9sVUXd2BQFiJQb2-8",
    authDomain: "todolist371.firebaseapp.com",
    databaseURL: "https://todolist371.firebaseio.com",
    projectId: "todolist371",
    storageBucket: "todolist371.appspot.com",
    messagingSenderId: "1021449007544",
    appId: "1:1021449007544:web:1513cbe720ed8b0149df4d"
});

export { firebaseConfig as firebase };