let nombre = 'Pedro';
let edad = 21;
let alumno = true;

let fruta = 'Manzana';
let frutas = ['Manzana', 'Pera', 'Platano'];

let usuario = {
    nombre: 'Juan',
    edad: 15,
    estudiante: true, 
    idiomas: {
        nativo: 'Español',
        extranjeros: {
            ingles: 'Avanzado',
            frances: 'Medio',
            aleman: 'Basico',
        }
    }
}

console.log(nombre);
console.log(edad);
console.log(alumno);

console.log(fruta);
console.log(frutas);

console.log(usuario);
console.log(usuario.estudiante);
console.log(usuario.nombre);
console.log(usuario.edad);

// Agregar al Objeto
usuario.carrera = 'Desarrollo web';
console.log(usuario);

// Eliminar
delete usuario.estudiante;
console.log(usuario);


/////////////////////////////////////////////


let estudiante1 = {
    edad: 8,
    nivel: 'Primaria',
    grado: 'Tercero',
    nombre: 'Yadira' 
}

let estudiante2 = {
    edad: 7,
    nivel: 'Primaria',
    grado: 'Segundo',
    nombre: 'Brillit'
}

let compras = {
    verdura: ['lechuga', 'brocoli'],
    fruta: 'Tomate',
    dulce: 'chocolate',
}

console.log(estudiante1);
console.log(estudiante1.edad);
console.log(estudiante1.nivel);
console.log(estudiante1.grado);
delete estudiante1.edad;

console.log(estudiante2);
console.log(estudiante2.edad);
console.log(estudiante2.nivel);
console.log(estudiante2.grado);

console.log(compras);
console.log(compras.verdura);
console.log(compras.fruta);
console.log(compras.dulce);

//**********Crear 2 Objetos********** 
let disco1 = {
    artista: 'Jesse y Joy',
    album: 'Exitos',
    año: 2012
}
console.log(disco1);

let disco2 = {
    artista: 'Bruno Mars',
    album: 'Exitos',
    año: 2020
}
console.log(disco2);

function Disco(artista, album, año){
    this._artista = artista;
    this._album = album;
    this._año = año;
}

let disco3 = new Disco('Benito', 'abc', 2022);
console.log(disco3);