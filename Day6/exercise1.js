/* for (let i = 0; i < 11; i++) {
  console.log(i);
} */

/* let i = 0;
while (i < 11) {
  console.log(i);
  i++;
} */

/* let i = 0;
do {
  console.log(i);
  i++;
} while (i < 11); */

/* for (let i = 10; i > -1; i--) {
  console.log(i);
} */

/* let i = 10;
while (i > -1) {
  console.log(i);
  i--;
} */

/* let i = 10;
do {
  console.log(i);
  i--;
} while (i > -1); */

/* for (let i = 0; i < 100; i++) {
  console.log(i);
} */

/* for (let i = 1; i < 8; i++) {
  let symbol = "";
  for (let j = 1; j < i; j++) {
    symbol += "#";
  }
  console.log(symbol);
} */

/* for (let i = 0; i <= 10; i++) {
  let result = i * i;
  console.log(`${i} x ${i} = ${result}`);
} */

/* for (let i = 0; i <= 10; i++) {
  let result1 = i * i;
  let result2 = i * result1;
  console.log(`${i} ${result1} ${result2} `);
} */

/* for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
} */

/* for (let i = 2; i <= 100; i++) {
  let esPrimo = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) {
    console.log(i);
  }
} */

/* let suma = 0;
for (let i = 0; i <= 100; i++) {
  suma += i;
}
console.log(`La suma de todos los números de 0 a 100 es ${suma}.`); */

/* let sumaPar = 0;
let sumaImpar = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumaPar += i;
  } else {
    sumaImpar += i;
  }
}
console.log(
  `La suma de todos los números pares es ${sumaPar} \n La suma de todos los números impares es ${sumaImpar}`
); */

/* let sumaPar = 0;
let sumaImpar = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumaPar += i;
  } else {
    sumaImpar += i;
  }
}
let arraySumas = [sumaPar, sumaImpar];
console.log(arraySumas);
 */

/* let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}
console.log(randomNumbers); */

/* let randomNumbers = [];
while (randomNumbers.length < 5) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  if (!randomNumbers.includes(randomNumber)) {
    randomNumbers.push(randomNumber);
  }
}
console.log(randomNumbers); */

/* function generarIdAleatorio() {
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
}
let idAleatorio = generarIdAleatorio();
console.log("ID aleatorio:", idAleatorio); */

/* function generateRandomId() {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 20; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}
let randomId = generateRandomId();
console.log(`ID aleatorio: ${randomId}`); */

/* function generateHex() {
  let chars = "abcdef0123456789";
  let hex = "";
  for (let i = 0; i < 6; i++) {
    hex += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return hex;
}
let randomHex = generateHex();
console.log(`Hexadecimal aleatorio generado: #${randomHex}`); */

/* function generateRgbColor() {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${rgb.join(", ")})`;
}
let rgbColor = generateRgbColor();
console.log(rgbColor); */
