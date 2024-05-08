/* function generateRandomId() {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i <= 20; i++) {
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
