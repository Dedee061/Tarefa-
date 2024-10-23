
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyDEvdk4v8GMd_H2OSkLRC3x7NPsIsZ-8Y0",
  authDomain: "tarefasplus-61e4a.firebaseapp.com",
  projectId: "tarefasplus-61e4a",
  storageBucket: "tarefasplus-61e4a.appspot.com",
  messagingSenderId: "1076407547085",
  appId: "1:1076407547085:web:710a8a704f54fac9c52584"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export {db}

 