let firstName = "Elsa";
let lastName = "Patuki";
let country = "Uruguay";
let city = "Punta del Este";
let age = 55;
let isMarried = true;
let year = 1969;
console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);

console.log(typeof "10" == 10); // false

console.log(parseInt("9.8") == 10); // false

console.log(
  55 == "55",
  "1969".length == "hola".length,
  9691 == parseInt("9691")
); // true true true

console.log(5 > 4 && 4 > 8, 1969 != "1969", 3 + 5 == 7); // false false

console.log(
  4 > 3,
  4 >= 3,
  4 < 3,
  4 <= 3,
  4 == 4,
  4 === 4,
  4 != 4,
  4 !== 4,
  4 != "4",
  4 == "4",
  4 === "4",
  "Python".length != "jargon".length
); // true true false false true true false false false true false false

console.log(
  4 > 3 && 10 < 12,
  4 > 3 && 10 > 12,
  4 > 3 || 10 < 12,
  4 > 3 || 10 > 12,
  !(4 > 3),
  !(4 < 3),
  !false,
  !(4 > 3 && 10 < 12),
  !(4 > 3 && 10 > 12),
  !(4 === "4"),
  !("Dragon".includes("on") && "Python".includes("on"))
);

let thisYear = new Date().getFullYear();
let thisMonth = new Date().getMonth();
let thisDate = new Date().getDate();
let thisDay = new Date().getDay();
let thisHour = new Date().getHours();
let thisMinutes = new Date().getMinutes();
let seconds = new Date().getTime();
console.log(
  `Estamos en ${thisYear}, en el mes ${thisMonth} y el día ${thisDay} de la semana, la fecha es ${thisDate} del ${thisMonth}, son las ${thisHour} horas con ${thisMinutes} minutos, y los segundos transcurridos desde 01 de Enero de 1970 hasta ahora son ${seconds}`
);
