let fecha = new Date();
let año = fecha.getFullYear();
let mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
let dia = ("0" + fecha.getDate()).slice(-2);
let horas = ("0" + fecha.getHours()).slice(-2);
let minutos = ("0" + fecha.getMonth()).slice(-2);
let formatoLegible = `${dia}/${mes}/${año} ${horas}:${minutos}`;
console.log(formatoLegible);
