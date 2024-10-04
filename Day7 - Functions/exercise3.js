const countries = require("../Day5 - Arrays/countries.js");

/* function userIdGeneratedByUser() {
  const numChars = parseInt(prompt("Ingrese la cantidad de caracteres para los IDs:"), 10);
  const numIds = parseInt(prompt("Ingrese la cantidad de IDs a generar:"), 10);
  if (isNaN(numChars) || isNaN(numIds) || numChars <= 0 || numIds <= 0) {
      console.log("Por favor ingrese valores válidos.");
      return;
  }
  function userIdGenerator(length) {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let id = "";
      for (let i = 0; i < length; i++) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }
  const ids = [];
  for (let i = 0; i < numIds; i++) {
      ids.push(userIdGenerator(numChars));
  }
  console.log(`IDs aleatorios generados:`);
  ids.forEach(id => console.log(id));
}
userIdGeneratedByUser(); */

/* function rgbColorGenerator() {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${rgb.join(", ")})`;
}
let rgbColor = rgbColorGenerator();
console.log(rgbColor); */

/* function arrayOfHexColors(numColors) {
  let chars = "abcdef0123456789";
  let colors = [];
  for (let i = 0; i < numColors; i++) {
    let hex = "#";
    for (let j = 0; j < 6; j++) {
      hex += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    colors += hex;
    if (i < numColors - 1) {
      colors += ", ";
    }
  }
  return colors;
}
let numColors = 5;
let randomHex = arrayOfHexColors(numColors);
console.log(`Hexadecimal aleatorio generado: ${randomHex}`); */

/* function arrayOfRgbColors(numColors) {
  let colors = [];
  for (let i = 0; i < numColors; i++) {
    let rgb = [];
    for (let j = 0; j < 3; j++) {
      rgb.push(Math.floor(Math.random() * 256));
    }
    colors.push(`rgb(${rgb.join(", ")})`);
  }
  return colors;
}
let numColors = 5;
let randomRgb = arrayOfRgbColors(numColors);
console.log(`Colores RGB generados: ${randomRgb}`); */

/* function convertHexToRgb(hex) {
  hex = hex.replace("#", "");
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
}
let hexColors = ["#DAF7A6", "#FFC300", "#C70039", "#900C3F", "#581845"];
hexColors.forEach((hexColor) => {
  let rgbColor = convertHexToRgb(hexColor);
  console.log(`Hexadecimal: ${hexColor} -> RGB: ${rgbColor}`);
}); */

/* function convertRgbToHex(rgbString) {
  let [r, g, b] = rgbString.split(",").map((num) => parseInt(num.trim(), 10));
  let redHex = r.toString(16).padStart(2, "0");
  let greenHex = g.toString(16).padStart(2, "0");
  let blueHex = b.toString(16).padStart(2, "0");
  return `#${redHex}${greenHex}${blueHex}`;
}
let rgbColors = [
  "218, 247, 166",
  "255, 195, 0",
  "199, 0, 57",
  "144, 12, 63",
  "88, 24, 69",
];
rgbColors.forEach((rgbColor) => {
  let hexColor = convertRgbToHex(rgbColor);
  console.log(`RGB: ${rgbColor} -> Hexadecimal: ${hexColor}`);
}); */

/* function generateHexColor() {
  let chars = "abcdef0123456789";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * chars.length)];
  }
  return hex;
}

function generateRgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateColors(colorCode, num) {
  let colors = [];
  for (let i = 0; i < num; i++) {
    if (colorCode === "hex") {
      colors.push(generateHexColor());
    } else if (colorCode === "rgb") {
      colors.push(generateRgbColor());
    } else {
      console.log("Formato inválido. Usá 'hex' o 'rgb'");
    }
  }
  return num === 1 ? colors[0] : colors;
}
console.log(generateColors("rgb", 2));
console.log(generateColors("hex", 3));
console.log(generateColors("rgb", 1));
console.log(generateColors("hex", 1)); */

/* function shuffleArray(arr) {
  let shuffledArray = arr.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
let originalArray = [1, 2, 3, 4, 5];
let shuffled = shuffleArray(originalArray);
console.log(`Array original: ${originalArray}`);
console.log(`Array mezclado: ${shuffled}`); */

/* function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(10)); */

/* function isEmpty(value) {
  return (
    value === null ||
    value === undefined ||
    (typeof value === "string" && value.trim() === "") ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" && Object.keys(value).length === 0)
  );
}
console.log(isEmpty(null));
console.log(isEmpty(undefined));
console.log(isEmpty(""));
console.log(isEmpty([]));
console.log(isEmpty({}));
console.log(isEmpty("hello"));
console.log(isEmpty([1, 2, 3]));
console.log(isEmpty({ a: 1 })); */

/* function sum() {
  let total = 0;
  for (let num of arguments) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3));
console.log(sum(5, 10, -2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, 2, 3, 4, 5, 6)); */

/* function sumOfArrayItems(arr) {
  if (!Array.isArray(arr)) {
    return "El argumento proporcionado no es un array!";
  }
  let total = 0;
  for (const item of arr) {
    if (typeof item !== "number" || isNaN(item)) {
      return "El array contiene elementos NO numéricos!";
    }
    total += item;
  }
  return total;
}
console.log(sumOfArrayItems([1, 2, 3]));
console.log(sumOfArrayItems([5, 10, -2, 3]));
console.log(sumOfArrayItems([0]));
console.log(sumOfArrayItems([]));
console.log(sumOfArrayItems([1, 2, "3", 4, 5, 6]));
console.log(sumOfArrayItems([1, 2, true, 4, 5, 6]));
console.log(sumOfArrayItems("No soy un array.")); */

/* function average(arr) {
  if (!Array.isArray(arr)) {
    return "El argumento proporcionado no es un array!";
  }
  let total = 0;
  for (const item of arr) {
    if (typeof item !== "number" || isNaN(item)) {
      return "El array contiene elementos NO numéricos!";
    }
    total += item;
  }
  return total;
} */

/* function average(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== "number") {
      return "Error: Todos los elementos deben ser números!";
    }
  }
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let averageNums = sum / nums.length;
  return averageNums;
}
console.log(average([19, 22, 19, 24, 20, 25, 26, 24, 25, 24])); */

/* function modifyArray(arr, newValue) {
  if (arr.length < 5) {
    return "Elemento no encontrado!";
  }
  arr[4] = newValue.toUpperCase();
  return arr;
}
console.log(
  modifyArray(
    ["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"],
    "banana"
  )
);
console.log(
  modifyArray(
    ["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"],
    "Netflix"
  )
);
console.log(modifyArray(["Quilmes", "Brahma", "Heineken"])); */

/* function isPrime(num) {
  if (num % 2 === 0) {
    return "El número es primo!";
  } else {
    return "El número no es primo";
  }
}
console.log(isPrime(5)); */

/* function areUniques(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(areUniques([1, 2, 3, 4, 5]));
console.log(areUniques([1, 2, 3, 4, 5, 1]));
console.log(areUniques(["a", "b", "c", "d", "e"]));
console.log(areUniques(["a", "b", "c", "d", "e", "a"])); */

/* function sameType(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== typeof arr[0]) {
      return "Los datos no son todos del mismo tipo";
    }
  }
  return "Todos los datos son del mismo tipo";
}
console.log(sameType([1, 2, 3, 4, 5]));
console.log(sameType(["Arg", "Br", "Ch", "Uy", "Py"]));
console.log(sameType([8, "Elsa Pallito", 19])); */

/* function isValidVariable(variableName) {
  return /^[a-zA-Z0-9_$]*$/.test(variableName);
}
console.log(isValidVariable("variable"));
console.log(isValidVariable("_variable"));
console.log(isValidVariable("$variable"));
console.log(isValidVariable("1variable"));
console.log(isValidVariable("va$riable"));
console.log(isValidVariable("var-iable"));
console.log(isValidVariable("#var-iable"));
console.log(isValidVariable("")); */

function randomNumbers() {
    let uniqueNumbers = new Set();
    while (uniqueNumbers.size < 7) {
        uniqueNumbers.add(Math.floor(Math.random() * 10));
    }
    return Array.from(uniqueNumbers);
}
console.log(randomNumbers());

function reverseCountries() {
    let countriesCopy = countries.slice();
    return countriesCopy.reverse();
}
console.log(reverseCountries());
