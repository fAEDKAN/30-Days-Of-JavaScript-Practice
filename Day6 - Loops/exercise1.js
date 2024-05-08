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

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

/* for (const country of countries) {
  console.log(country.toUpperCase());
} */

/* let lengths = [];
for (const country of countries) {
  lengths.push(country.length);
}
console.log(lengths); */

/* let countryInfoArray = [];
for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const firstThreeLetters = country.slice(0, 3).toUpperCase();
  countryInfoArray.push([country, firstThreeLetters, country.length]);
}
console.log(countryInfoArray); */

/* let countryLand = [];
for (const country of countries) {
  country.includes("land") ? countryLand.push(country) : null;
}
countryLand.length > 0
  ? console.log(countryLand)
  : console.log("Ninguno de estos países contiene 'land'."); */

/* let countryIa = [];
for (const country of countries) {
  country.endsWith("ia") ? countryIa.push(country) : null;
}
countryIa.length > 0
  ? console.log(countryIa)
  : console.log("Estos países no terminan con ia."); */

/* let longestCountry = countries[0];
for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}
console.log(`El país con mayor caracteres es: ${longestCountry}`); */

/* let fiveCharCountry = countries.filter((country) => country.length === 5);
console.log(fiveCharCountry); */

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

/* let longestWord = webTechs[0];
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > longestWord.length) {
    longestWord = webTechs[i];
  }
}
console.log(`La palabra más larga es: ${longestWord}`); */

/* let techInfoArray = [];
for (let i = 0; i < webTechs.length; i++) {
  let webTech = webTechs[i];
  techInfoArray.push([webTech, webTech.length]);
}
console.log(techInfoArray); */

/* const mernStack = ["MongoDB", "Express", "React", "Node"]; */

/* let mern = "";
for (let i = 0; i < mernStack.length; i++) {
  let stack = mernStack[i];
  mern += stack.slice(0, 1);
}
console.log(mern); */

/* const stacks = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (const stack of stacks) {
  console.log(stack);
} */

/* let fruits = ["banana", "orange", "mango", "lemon"];
let reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}
console.log(reversedFruits); */

/* const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
console.log(fullStack.flatMap(stack => stack).join('; ').toUpperCase()); */

