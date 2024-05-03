let quote1 =
  "El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y otros todavía están buscando su amor";
console.log(quote1.match(/amor/gi)); // amor amor amor

let quote2 =
  "No puedes terminar una oración con porque porque porque es una conjunción";
console.log(quote2.match(/porque/gi)); // porque porque porque

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence.replace(/[^a-zA-Z,\s.]/g, ""));

let quote3 =
  "Gana 5000 euros de salario al mes, 10000 euros de bonificación anual y 15000 euros de cursos en línea al mes.";
let regex = /\d+/g;
let numbers = quote3.match(regex).map(Number);
let salarioMensual = numbers[0];
let bonusAnual = numbers[1];
let cursosMensuales = numbers[2];
let salarioTotal = salarioMensual * 12 + bonusAnual + cursosMensuales * 12;
console.log(`El ingreso anual total es de: $${salarioTotal}`); // 250000