let Persona = {
    nombre: 'Lirio',
    edad: 24,
    carrera: 'Desarrollo de Software',
}

console.log(Persona);

let person = new Object('Nombre');
console.log(person);

//============================
//       Crear Objetos
//============================
//Forma1 de crear un objeto 
let persona1 ={};
//Forma2 de crear un objeto
let persona2 = new Object();

//=============================
//      Añadir Atributos
//=============================
//Forma1
persona1.nombre = 'Pepito';
persona1.apellido = 'Reyes',
//Forma2
persona1["edad"] = 12;
console.log(persona1);

//=============================
//       Mostrar Datos
//=============================
//Forma1
console.log(persona1.nombre);
//Forma2
console.log(persona1["nombre"]);

//=============================
//      Actualizar Datos
//=============================
//Forma1
persona1.nombre = 'lirio';
console.log(persona1);
//Forma2
persona1["nombre"] = 'Maria';
console.log(persona1);

//PERSONA 2
persona2.nombre = 'Yosyuk';
persona2.apellido = 'Shin';
persona2["edad"] = 24;
console.log(persona2);

persona2.nombre = 'Jungkook';
persona2.apellido = 'Jeon';
console.log(persona2);


console.log(persona2.apellido);