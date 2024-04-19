let challenge1 = "30 Días de JavaScript";
console.log(challenge1); //30 Días de JavaScript
console.log(challenge1.length); //21
console.log(challenge1.toUpperCase()); // 30 DÍAS DE JAVASCRIPT
console.log(challenge1.toLowerCase()); // 30 días de javascript
console.log(challenge1.substring(3, 7)); // Días
console.log(challenge1.substring(3, 21)); // Días de JavaScript
console.log(challenge1.includes("Script")); // true
console.log(challenge1.split()); // [ '30 Días de JavaScript' ]
console.log(challenge1.split(" ")); // [ '30', 'Días', 'de', 'JavaScript' ]
console.log(challenge1.replace("JavaScript", "Python")); // 30 Días de Python
console.log(challenge1.charAt(15)); // S
console.log(challenge1.charCodeAt("J")); // 51
console.log(challenge1.indexOf("a")); // 5
console.log(challenge1.lastIndexOf("a")); // 14
console.log(challenge1.startsWith("30")); // true
console.log(challenge1.endsWith("JavaScript")); //true
console.log(challenge1.match("a")); // a, index: 5
console.log(challenge1.match(/a/gi)); // [ 'a', 'a', 'a' ]

let days = "30 Días";
let language = "de Javascript";
console.log(days.concat(" " + language)); // 30 Días de Javascript

console.log(challenge1.repeat(2)); //30 Días de JavaScript30 Días de JavaScript

let challenge2 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(challenge2.split(","));

let challenge3 = "No puedes terminar una oración con porque porque porque es una conjunción";
console.log(challenge3.indexOf("porque")); // 35
console.log(challenge3.lastIndexOf("porque")); //49
console.log(challenge3.search("porque")); // 35

let challenge4 = " 30 Días de JavaScript ";
console.log(challenge4.trim()); // "30 Días de JavaScript"
