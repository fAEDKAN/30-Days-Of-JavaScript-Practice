const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Edad mediana
const sortedAges = ages.toSorted((a, b) => a - b);
const medianAge = sortedAges[Math.floor(ages.length / 2)];

// Edad promedio
const averageAge = ages.reduce((acc, curr) => acc + curr, 0) / ages.length;

// Rango de edades
const ageRange = Math.max(...ages) - Math.min(...ages);

// Diferencia entre mínimo y promedio, y entre máximo y promedio
const minDiff = Math.abs(Math.min(...ages) - averageAge);
const maxDiff = Math.abs(Math.max(...ages) - averageAge);

console.log("Edad mediana:", medianAge);
console.log("Edad promedio:", averageAge);
console.log("Rango de edades:", ageRange);
console.log("Diferencia entre mínimo y promedio:", minDiff);
console.log("Diferencia entre máximo y promedio:", maxDiff);
