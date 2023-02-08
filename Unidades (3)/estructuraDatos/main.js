//Ejemplo Pila
class Pila{
    //Creamos  constructor
    constructor(){
        this.Pila = [];
    }
    //agregamos un elemento al final del array
    push(item){
        this.Pila.push(item);
        return this.Pila;
    }
    //Metodo para eliminar elemento
    pop(){
        return this.Pila.pop();
    }
    //Metodo para que retorne el ultimo valor ingresado
    ultimoValor(){
        return this.Pila[this.Pila.length -1];
    }
    //Metodo que retorna la cantidad de elementos del array
    longitud(){
        return this.Pila.length; 
    }
    //Muestre el contenido del array en la consola
    mostrar(){
        console.log(this.Pila);
    }
}

// let abc = new Pila();
// console.log(abc);
// console.log(abc.longitud());
// console.log(abc.push('Naranja'));
// console.log(abc.push('Manzana'));
// console.log(abc.longitud());
// abc.mostrar();
// console.log(abc.ultimoValor());
// abc.mostrar();
// abc.pop();
// abc.mostrar();
// console.log(abc.ultimoValor());


class ydm{
    constructor(){
        this.ydm = [];
    }
    push(item){
        this.ydm.push(item);
        return this.ydm;
    }
    ultimoValor(){
        return this.ydm[this.ydm.length -2];
    }
    pop(){
        return this.ydm.pop();
    }
    mostrar(){
        console.log(this.ydm);
    }
}

// let tm = new ydm();
// console.log(tm);
// console.log(tm.push('pikachu'));
// console.log(tm.push('solar'));
// console.log(tm.ultimoValor());
// console.log(tm.pop('solar'));
// tm.push('solar');
// tm.mostrar();

// let array = ['pedro', 'juan', 'maria', 'jhoselyn'];
// console.log(array.length);


//=========================
//       Ejemplo Cola
//=========================

class Cola{
    constructor(){
        this.Cola = [];
    }
    agregar(){
        this.Cola.push(valor);
        return this.Cola;
    }
    eliminar(){
        return this.Cola.pop();
    }
    longitud(){
        return this.Cola.length;
    }
    vacio(){
        return this.Cola.length == 0;
    }
    mostrar(){
        return (this.Cola); ['rojo', 'verde', 'azul', 'amarillo', 'negro']
    }
}

// let prueba = new Cola(); 
// prueba.agregar('rojo'); 
// prueba.agregar('verde');
// prueba.agregar('azul');
// prueba.agregar('amarillo');
// prueba.agregar('negro');
// prueba.agregar();

// prueba.eliminar();
// prueba.mostrar();

// console.log(prueba.longitud()); 4
// console.log(prueba.vacio()); false

//===========================
//     Ejemplo Matrices
//===========================
// let test = [20, 'okay', 1, 2, ""];
// console.log (test[1]);
// console.log(test.length);
// test.push('origami');
// console.log(test);
// test.pop();
// console.log(test);


// let error = [666, 34, 'demon', 23];
// error.pop();
// console.log(error);
// error.push('slayer');
// console.log(error);
// console.log(error[1]);
// console.log(error.length);


// let myo = ['siru', 'suchi', 'titi'];
// myo.push('minni');
// console.log(myo);
// myo.push('siri');
// console.log(myo);
// myo.pop();
// console.log(myo);
// console.log(myo.length);

//=======================
//    Ejemplo Arbol
//=======================

class Arbol{
    constructor (node){
        this._node = node;
        this._array = [];
    }
}

let a = new Arbol(1000000);
let b = new Arbol(99);
let c = new Arbol(100);
let d = new Arbol(676);
let e = new Arbol(2); 

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

a._array.push('pitskard');
b._array.push('loru');
c._array.push('shin');
d._array.push('wolf');
e._array.push('atelea');