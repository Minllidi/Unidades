// import {hola} from "./firebase.js"
// hola();

import { agregarTarea, listarTareas, OnListarTareas } from "./firebase.js";

let contenedor = document.getElementById("hi");

window.addEventListener("DOMContentLoaded", async () => {
    // let lista = await listarTareas();
    // console.log(lista);
    OnListarTareas((lista) => {
        let html = "";
        lista.forEach((doc) => {
            console.log(doc.data()._titulo);
            console.log(doc.data()._descripcion);
            let tarea = doc.data();
            html += `
        <div>
        <h3 class="text-primary mt-3">${tarea._titulo}</h3>
        <p>${tarea._descripcion}</p>
        </div>
        `;
            contenedor.innerHTML = html;

        });
    });

});

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //evita que cargue la pagina
    let titulo = formulario["titulo"];
    let descripcion = formulario["descripcion"];

    // console.log(titulo.value,descripcion.value);

    agregarTarea(titulo.value, descripcion.value);

    formulario.reset();
})