console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

let stringNum = "10";
let numberNum = 10;
let stringNumToNum = parseInt(stringNum);
console.log(typeof stringNum == typeof numberNum); // false
console.log(typeof stringNumToNum == typeof numberNum); //true

let floatNum = parseFloat("9.8");
let numInt = 10;
console.log(floatNum == numInt); // false
console.log(Math.ceil(floatNum) == numInt); // true

let string1 = "Python";
let string2 = "Jargon";
console.log(string1 && string2.includes("on")); // true

let quote = "I hope this course is not full of jargon";
console.log(quote.includes("jargon")); // true

let randomNum1 = Math.floor(Math.random() * 101);
console.log(randomNum1);

let randomNum2 = Math.floor(Math.random() * (100 - 50 + 1) + 50);
console.log(randomNum2);

let randomNum3 = Math.floor(Math.random() * 256);
console.log(randomNum3);

let text = "JavaScript";
let randomIndex = Math.floor(Math.random() * text.length);
console.log(text.charAt(randomIndex));

let pattern = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125";
console.log(pattern);

let substrQuote =
  "No puedes terminar una oración con porque porque porque es una conjunción";
console.log(substrQuote.substr(34, 21)); //porque porque porque
