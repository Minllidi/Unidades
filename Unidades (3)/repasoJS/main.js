// let numero1 = 12;
// let numero2 = 11;
// let numero3 = 0;
// let edad = prompt("dime tu edad");
// edad = parseInt(edad);

// if (edad > 18) {
//     alert("puedes ingresar");
// }else{
//     alert("no puedes ingresar");
// }

// 1.- En un evento de Influencers, solamente se acepta canje de influencers con mas de 500 000 de seguidores en cualquier red SpeechRecognitionAlternative, preguntar el numero de seguidores al influencers y si tienen los seguidores nesarios, dejarlo pasar, en caso que no cumpla lo necesario que no pueda ingresar. 

// let seguidores = prompt("¿Cuantos seguidores tienes?");
// // seguidores = parseInt(seguidores);

// if (seguidores > 500000){
//     alert("Puedes ingresar");
// }else{
//     alert("No ingresas");
// }



// 2.- Los mismo influencers tienen que sumar 5 millones de seguidores en total para que les den un canje de un viaje todo pagado a MediaStreamAudioDestinationNode, son 7 influencers, determinar si estas aptos para el viaje o no

// let influ1 = prompt("Dime tu número de seguidores");
// influ1 = parseInt(influ1);
// let influ2 = prompt("Dime tu número de seguidores");
// influ2 = parseInt(influ2);
// let influ3 = prompt("Dime tu número de seguidores");
// influ3 = parseInt(influ3);
// let influ4 = prompt("Dime tu número de seguidores");
// influ4 = parseInt(influ4);  
// let influ5 = prompt("Dime tu número de seguidores");
// influ5 = parseInt(influ5);
// let influ6 = prompt("Dime tu número de seguidores");
// influ6 = parseInt(influ6);
// let influ7 = prompt("Dime tu número de seguidores");
// influ7 = parseInt(influ7);

// let total = influ1 + influ2 + influ3 + influ4 + influ5 + influ6;

// if (total > 5000000){
//     alert("ingresa");
// }else{
//     alert("no ingresa");
// }




// 3.- Salieron todos los influencer a comprar comida  y tienen un total de S/20 000 para poder gastar en comida, hacen 3 compras distintas y necesitan ver cuanto les va quedando al final de realizar todas las compras

let compra1 = prompt("¿Cuanto costo?");
compra1 = parseInt(compra1);
let total1 = 20000 - compra1;
alert(total1);

let compra2 = prompt("¿Cuánto costo?");
compra2 = parseInt(compra2)
let total2 = total1 - compra2;
alert(total2);

let compra3 = prompt("¿Cuánto costo?");
compra3 = parseInt(compra3)
let total3 = total2 - compra3;
alert(total3);