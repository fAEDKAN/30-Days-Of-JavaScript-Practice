const countries = require("../Day5 - Arrays/countries.js");

/* const countries = [
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

let countriesCopy = countries.slice();
console.log(countriesCopy);

let sortedCountries = countriesCopy.sort();
console.log(sortedCountries); */

/* const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
const sortedTechs = webTechs.sort();
console.log(sortedTechs);

const mernStack = ["MongoDB", "Express", "React", "Node"];
const sortedStacks = mernStack.sort();
console.log(sortedStacks); */

/* let countryLand = [];
for (const country of countries) {
  country.includes("land") ? countryLand.push(country) : null;
}
console.log(countryLand); */

/* let longestCountry = countries[0];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}
console.log(longestCountry); */

/* let fourCharCountry = countries.filter((country) => country.length === 4);
console.log(fourCharCountry); */

/* let multipleWordsCountry = countries.filter(country => country.split(' ').length > 1);
console.log(multipleWordsCountry); */

let changedCountriesArr = [];
for (let i = countries.length - 1; i >= 0; i--) {
  changedCountriesArr.push(countries[i].toUpperCase());
}
console.log(changedCountriesArr);

/* let fruits = ["banana", "orange", "mango", "lemon"];
let reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}
console.log(reversedFruits); */
