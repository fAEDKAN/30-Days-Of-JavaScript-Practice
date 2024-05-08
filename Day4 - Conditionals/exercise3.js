/* let monthUser = prompt("Ingresa un mes: ").toLowerCase();
switch (monthUser) {
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    alert(`${monthUser} tiene 31 días`);
    break;
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    alert(`${monthUser} tiene 30 días`);
    break;
  case "febrero":
    alert(`${monthUser} tiene 28 días`);
    break;
  default:
    alert("Y ese mes de dónde lo sacaste?");
} */

let monthUser = prompt("Ingresa un mes: ").toLowerCase();
let yearUser = prompt("Ingresa el año: ");
let daysFebruary = 28;
if ((yearUser % 4 === 0 && yearUser % 100 !== 0) || yearUser % 400 === 0) {
  daysFebruary = 29;
}

switch (monthUser) {
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    alert(`${monthUser} tiene 31 días`);
    break;
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    alert(`${monthUser} tiene 30 días`);
    break;
  case "febrero":
    alert(`${monthUser} tiene ${daysFebruary} días`);
    break;
  default:
    alert("Y ese mes de dónde lo sacaste?");
}
