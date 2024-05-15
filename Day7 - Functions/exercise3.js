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


