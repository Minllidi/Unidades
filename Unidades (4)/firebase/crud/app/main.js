// import {hola} from "./firebase.js"
// hola();

import {agregarTarea, listarTareas} from "./firebase.js"

window.addEventListener("DOMContentLoaded", async ()=>{
    let lista = await listarTareas();
    console.log(lista);
    lista.forEach((doc) => {
        console.log(doc);
    });
});

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault(); //evita que cargue la pagina
    let titulo = formulario["titulo"];
    let descripcion = formulario["descripcion"];

    // console.log(titulo.value,descripcion.value);

    agregarTarea(titulo.value,descripcion.value);

    formulario.reset();
})