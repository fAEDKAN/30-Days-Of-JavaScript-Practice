let userAge = prompt("Ingresa tu edad: ");
userAge = parseInt(userAge);
let remainingYears = 18 - userAge;
if (userAge > 18) {
  alert("Tenes edad suficiente para conducir");
} else {
  alert(`Te faltan ${remainingYears} años para conducir`);
}

let myAge = prompt("Ingresa mi edad: ");
myAge = parseInt(myAge);
let yourAge = prompt("Ingresa tu edad: ");
yourAge = parseInt(yourAge);
if (myAge > yourAge) {
  alert(`Soy mayor que vos por ${myAge - yourAge} años`);
} else {
  alert(`Sos mayor que yo por ${yourAge - myAge} años`);
}

/* let a = prompt("Ingresa el valor de A");
a = parseInt(a);
let b = prompt("Ingresa el valor de B");
b = parseInt(b);
if (a > b) {
  alert(`${a} es mayor que ${b}`);
} else {
  alert(`${a} es menor que ${b}`);
}
a > b ? alert(`${a} es mayor que ${b}`) : alert(`${a} es menor que ${b}`); */

let numeroUsuario = prompt("Introduzca un número: ");
numeroUsuario = parseInt(numeroUsuario);
let esPar = numeroUsuario % 2;
if (esPar == 0) {
  alert(`${numeroUsuario} es un número par`);
} else {
  alert(`${numeroUsuario} no es un número par`);
}
