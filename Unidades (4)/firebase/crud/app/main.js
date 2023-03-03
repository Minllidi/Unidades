// import {hola} from "./firebase.js"
// hola();

import {guardarTarea} from "./firebase.js"

window.addEventListener('DOMContentLoaded', ()=>{

})

let form = document.getElementById('formulario');

form.addEventListener('submit', ()=>{
    let titulo = document.getElementById('titulo');
    let descripcion = document.getElementById('descripcion');

    // console.log(titulo.value,descripcion.value);

    guardarTarea(titulo.value,descripcion.value)
})