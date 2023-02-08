class Player {
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    }
    saltar(){

    }
    correr(){

    }
    saludar(){
        return `Hola mi nombre es ${this.nombre} y mi sombrero en de color ${this.color}`;
    }
}

let player1 = new Player('Mario', 'rojo');
console.log(player1);

let player2 = new Player('Luigi', 'Verde');
console.log(player2);

console.log(player1.saludar());
console.log(player2.saludar());



// let nombre = "Saul";
// let edad = 20;

// //Hola tu nombre es ____ y tienes ____ años.

// console.log('Hola tu nombre es '+ nombre + ' y tienes ' + edad + ' años');

// console.log(`Hola tu nombre es ${nombre} y tienes ${edad} años`);


// let names = "Suri"
// let tv = "Disney"

// console.log(`Hola soy ${names} y estas viendo ${tv} Chanel :D`);