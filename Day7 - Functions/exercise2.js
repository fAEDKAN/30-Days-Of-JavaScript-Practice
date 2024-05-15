/* function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
let myArray = ["pizza", "helado", "empanadas"];
printArray(myArray); */

/* function showDateTime() {
  let date = new Date();
  let day = ("0" + date.getDate()).slice(-2);
  let month = ("0" + date.getMonth()).slice(-2);
  let year = date.getFullYear();
  let hour = ("0" + date.getHours()).slice(-2);
  let minute = ("0" + date.getMinutes()).slice(-2);
  console.log(`Fecha: ${day}/${month}/${year} | Hora: ${hour}:${minute}`);
}
showDateTime(); */

/* function swapValues(x, y) {
  let temp = x;
  x = y;
  y = temp;
  console.log(`x => ${x}, y => ${y}`);
}
swapValues(5, 9);
swapValues(3, 7);
swapValues(6, 15);
swapValues(24, 2); */

/* function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}
console.log(reverseArray([1, 2, 3, 4, 5])); */

/* function capitalizeArray(arr) {
  let capitalizedArr = arr.map(function (e) {
    return e.toUpperCase();
  });
  return capitalizedArr;
}
console.log(capitalizeArray(["Hello", "World"]));
console.log(capitalizeArray(["JavaScript", "Python", "Rust", "Cobol"])); */

/* function addItem(element) {
  let elementsArr = ["jabón", "shampoo", "lavandina", "trapo de piso"];
  elementsArr.push(element);
  return elementsArr;
}
console.log(addItem("acondicionador")); */

/* function removeItem(i) {
  let elementsArr = [
    "jabón",
    "shampoo",
    "lavandina",
    "trapo de piso",
    "acondicionador",
  ];
  if (i >= 0 && i < elementsArr.length) {
    elementsArr.splice(i, 1);
  } else {
    console.log("Índice fuera de rango!");
  }
  return elementsArr;
}
console.log(removeItem(2));
console.log(removeItem(0));
console.log(removeItem(10)); */

/* function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(5));
console.log(sumOfNumbers(10));
console.log(sumOfNumbers(0));
console.log(sumOfNumbers(1)); */

/* function sumOfOdds(n) {
  let sumOdds = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sumOdds += i;
    }
  }
  return sumOdds;
}
console.log(sumOfOdds(5));
console.log(sumOfOdds(10));
console.log(sumOfOdds(0));
console.log(sumOfOdds(1));
console.log(sumOfOdds(27)); */

/* function sumOfEvens(n) {
  let sumEvens = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sumEvens += i;
    }
  }
  return sumEvens;
}
console.log(sumOfEvens(2));
console.log(sumOfEvens(10));
console.log(sumOfEvens(0));
console.log(sumOfEvens(1));
console.log(sumOfEvens(20)); */

/* function evensAndOdds(n) {
  let odds = 0;
  let evens = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  return `El número de pares es ${evens}. El número de impares es ${odds}`;
}
console.log(evensAndOdds(100));
console.log(evensAndOdds(371)); */

/* function sumArgs() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(total);
}
sumArgs(1, 2, 3);
sumArgs(1, 2, 3, 4); */

/* function randomUserIp() {
  const num1 = Math.floor(Math.random() * 256);
  const num2 = Math.floor(Math.random() * 256);
  const num3 = Math.floor(Math.random() * 256);
  const num4 = Math.floor(Math.random() * 256);
  const ip = `${num1}.${num2}.${num3}.${num4}`;
  return ip;
}
console.log(randomUserIp()); */

/* function randomMacAddress() {
  let mac = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0")
  ).join(":");
  return mac;
}
console.log(randomMacAddress()); */

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

/* function userIdGenerator() {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i <= 7; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}
let randomId = userIdGenerator();
console.log(`ID aleatorio: ${randomId}`); */
