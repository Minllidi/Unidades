// APLICANDO LO APRENDIDO 1
//=====IndexOf=====

// let array = [2, 9, 5, 2];

// console.log(array.indexOf(5)); //Devuelve la posicion
// console.log(array.indexOf(0)); //Cuando no se encuentra el valor devuelve -1


//APLICANDO LO APRENDIDO 2
//=====LastIndexOf=====
// let array = [2, 5, 9, 2];

// console.log(array.lastIndexOf(2, 2));
// console.log(array.lastIndexOf(2, 3));
// console.log(array.lastIndexOf(2, -1));



//APLICANDO LO APRENDIDO 3
//=====Includes=====

// console.log([1, 2, 3].includes(2));
// console.log([1, 2, 3].includes(4));
// console.log([1, 2, 3].includes(3, 3));
// console.log([1, 2, 3].includes(4, -1));
// console.log([1, 2, NaN].includes(NaN));


// //APLICANDO LO APRENDIDO 4
// //=====Find=====
// let array = [5, 8, 13, 21, 34];

// function buscar(item) {
//     return item > 2;
// }
// let item = array.find(a => a>20)

// console.log(item);



//APLICANDO LO APRENDIDO 5
//=====Filter=====

function grande(a) {
    return a >= 10;
}
let filtrado = [12, 5, 8, 130, 44].filter(grande);
console.log(filtrado); 