// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.1/firebase-firestore.js"
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"

//====================================================
//REEMPLAZAR POR TUS PROPIAR CREDENCIALES DE FIREBASE
//====================================================
const firebaseConfig = {
    apiKey: "AIzaSyDDaikwzv9DT-ed61YjIlS-u1BXypwf9Nc",
    authDomain: "miniso-4af5e.firebaseapp.com",
    projectId: "miniso-4af5e",
    storageBucket: "miniso-4af5e.appspot.com",
    messagingSenderId: "728490442088",
    appId: "1:728490442088:web:ee305648259d660f7feadd",
    measurementId: "G-22NMTJNP46"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig); //recordar export es para poder importar app en otros archivos
//console.log(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
//export const db = getFirestore(app);

//INICIAR CRUD
const db = getFirestore(app);

// FUNCION PARA GUARDAR DATOS
const saveTask = (title, description, userMail) => {
    addDoc(collection(db, "task"));
};
// FUNCION PARA PODER TRAER VARIOS DATOS DE FIREBASE
const getTasks = () => getDocs(collection(db, "task"));
// FUNCION PARA TRAER DATOS A TIEMPO REAL
const OngetTask = (callback) => onSnapshot(collection(db, "task"), (callback));
//FUNCION PARA ELIMINAR
const deleteTask = (id) => onSnapshot(doc(db, "task", id));
// FUNCION PARA TRAER UN SOLO DATO
const getTask = (id) => getDoc(doc(db, "task", id));
//FUNCION PARA ACTUALIZAR 
export const updateTask = (id, newFields) => updateDoc(doc(db, "task", id), newFields);