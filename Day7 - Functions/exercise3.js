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

