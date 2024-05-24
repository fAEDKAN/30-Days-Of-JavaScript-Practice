# 📔 Día 3: Booleanos, Operadores, Date.

## Booleanos

Los booleanos representan valores _true_ o _false_. Cualquier comparación devuelve un valor booleano.

```javascript
let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let trueValue = 4 > 3; // true
let falseValue = 4 < 3; // false
```

### Valores verdaderos

- Todos los números (+ y -) son verdaderos, excepto el cero.
- Todos los strings son verdaderos, excepto un string vacío ("").
- El booleano true.

### Valores falsos

- 0.
- 0n.
- null.
- undefined.
- NaN
- El booleano false.
- Strings vacíos ("", '', ``).

---

## Undefined

Si al declarar una variable no le asignamos valor, si una función no devuelve un valor o si intentamos acceder a una propiedad de un objeto que no existe, obtendremos _undefined_.

```javascript
let firstName;
console.log(firstName); // no definido, porque no tiene un valor asignado
```

---

## Null

Se usa _null_ para indicar intencionalmente que una variable no tiene valor, que un objeto esperado está ausente, o para reiniciar una variable a un estado vacío.

```javascript
let empty = null;
console.log(empty); // -> null, porque no tiene valor
```

---

## Operadores

### Operadores de asignación

Un signo igual (=) en **JS** es un operador de asignación. Se usa para asignar una variable.

```javascript
let language = "JavaScript";
let country = "Finland";
```

| Operador | Ejemplo   | Igual A      |
| -------- | --------- | ------------ |
| =        | x = y     | x = y        |
| +=       | x += y    | x = x + y    |
| -=       | x -= y    | x = x - y    |
| \*=      | x \*= y   | x =x \* y    |
| /=       | x /= y    | x = x / y    |
| %=       | x %= y    | x = x % y    |
| \*\*=    | x \*\*= y | x = x \*\* y |

### Operadores aritméticos

Son operadores matemáticos.

- Suma(+): a + b
- Resta(-): a - b
- Multiplicación(\*): a \* b
- División(/): a / b
- Módulo(%): a % b
- Exponencial(\*\*): a \*\* b

```javascript
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let multi = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;
console.log(sum, diff, multi, div, remainder, powerOf); // 7, 1, 12, 1.33, 1, 64
```

### Operadores de comparación

Usamos operadores de comparación para comparar dos valores. Comprobamos si un valor es mayor, menor o igual a otro.

| Operador | Nombre                                           | Ejemplo |
| -------- | ------------------------------------------------ | ------- |
| ==       | Igual en valor: Equivalente                      | x == y  |
| ===      | Igual en valor y tipo de dato: Exactamente igual | x === y |
| !=       | No es igual                                      | x != y  |
| >        | Mayor que                                        | x > y   |
| <        | Menor que                                        | x < y   |
| >=       | Mayor o igual a                                  | x >= y  |
| <=       | Menor o igual a                                  | x <= y  |

```javascript
console.log(3 > 2); // true, 3 es mayor que 2
console.log(3 >= 2); // true, 3 es mayor que 2
console.log(3 < 2); // false,  3 es mayor que 2
console.log(2 < 3); // true, 2 es menor que 3
console.log(2 <= 3); // true, 2 es menor que 3
console.log(3 == 2); // false, 3 no es igual a 2
console.log(3 != 2); // true, 3 no es igual a 2
console.log(3 == "3"); // true, compara solamente el valor
console.log(3 === "3"); // false, compara tanto el valor como el tipo de dato
console.log(3 !== "3"); // true, compara tanto el valor como el tipo de dato
console.log(3 != 3); // false, compara solo valor
console.log(3 !== 3); // false, compara tanto el valor como el tipo de dato
console.log(0 == false); // true, equivalente
console.log(0 === false); // false, no exactamente igual
console.log(0 == ""); // true, equivalente
console.log(0 == " "); // true, equivalente
console.log(0 === ""); // false, no exactamente igual
console.log(1 == true); // true, equivalente
console.log(1 === true); // false, no exactamente igual
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, diferente
console.log(NaN === NaN); // false
console.log(typeof NaN); // tipo número

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false
```

### Operadores lógicos

Los símbolos _&&_ (ampersand), _||_ (pipe/or) y _!_ (negación) son los operadores lógicos más comunes. El operador _&&_ se vuelve _true_ sólo si los dos operandos son verdaderos. El operador _||_ se vuelve _true_ cuando cualquiera de los operandos es verdadero. El operador _!_ niega _true_ a _false_ y _false_ a _true_.

```javascript
// && ejemplo de operador ampersand
const check = 4 > 3 && 10 > 5; // true && true -> true
const check = 4 > 3 && 10 < 5; // true && false -> false
const check = 4 < 3 && 10 < 5; // false && true -> false

// || ejemplo de operador pipe (or)
const check = 4 > 3 || 10 > 5; // true || true -> true
const check = 4 > 3 || 10 < 5; // true || false -> true
const check = 4 < 3 || 10 < 5; // false || false -> false

// ! ejemplo de operador negación
let check = 4 > 3; // true
let check = !(4 > 3); // false
let isLightOn = true;
let isLightOff = !isLightOn; // false
let isMarried = !false; // true
```

### Operadores de incremento

Usamos el operador de incremento para aumentar un valor almacenado en una variable. El incremento podría ser anterior o posterior al incremento.

#### 1. Pre-incremento

```javascript
let count = 0;
console.log(++count); // 1
console.log(count); // 1
```

#### 2. Post-incremento

```javascript
let count = 0;
console.log(count++); // 0
console.log(count); // 1
```

La mayor parte del tiempo usamos _post-incremento_. Pero tenemos que recordar cómo usar el operador de incremento posterior.

### Operadores de decremento

Usamos el operador de decremento para disminuir un valor almacenado en una variable. El decremento puede ser anterior o posterior al decremento.

#### 1. Pre-decremento

```javascript
let count = 0;
console.log(--count); // -1
console.log(count); // -1
```

#### 2. Post-decremento

```javascript
let count = 0;
console.log(count--); // 0
console.log(count); // -1
```

### Operadores ternarios

El operador ternario nos brinda otra forma de escribir condicionales.

```javascript
let isRaining = true;
isRaining
  ? console.log("Necesitás un impermeable.")
  : console.log("No necesitás un impermeable.");
// Necesitás un impermeable.

let number = 5;
number > 0
  ? console.log(`${number} es un número positivo.`)
  : console.log(`${number} es un número negativo`);
// 5 es un número positivo
```

---

## Método Window

### Método Window alert()

El método **alert()** muestra un cuadro de alerta con un mensaje específico y un botón _Aceptar_. Toma un argumento.

```javascript
alert(message);

alert("Bienvenidos a 30DaysOfJavaScript");
```

### Método Window prompt()

El método **prompt()** (entrada) muestra un cuadro de solicitud con una entrada en el navegador para tomar valores, esos datos se pueden almacenar en una variable. Toma dos argumentos, el segundo es opcional.

```javascript
prompt("texto requerido", "texto opcional");

let number = prompt("Ingresá un número", "El valor va acá");
console.log(number);
```

### Método window confirm()

El método **confirm()** muestra un cuadro de diálogo con un mensaje específico, junto con un botón _Aceptar_ y _Cancelar_. Comúnmente se usa para pedir permiso para ejecutar algo. Toma un string como argumento. _Aceptar_ retorna _true_, _Cancelar_ retorna _false_.

```javascript
const agree = confirm("¿Estás seguro de que querés eliminar?");
console.log(agree); // el resultado será true o false según el click del usuario
```

---

## Objeto Date

El objeto que creamos usando **Date** proporciona muchos métodos para trabajar con la fecha y la hora. Estos métodos empiezan con la palabra _get_ porque proporciona la información.
_getFullYear()_, _getMonth()_, _getDate()_, _getDay()_, _getHours()_, _getMinutes()_, _getSeconds()_, _getMilliseconds_, _getTime_, _getDay_.

| Método            | Descripción                                       | Ejemplos      |
| ----------------- | ------------------------------------------------- | ------------- |
| getFullYear()     | Obtener **año** como un número de 4 dígitos       | 2020          |
| getMonth()        | Obtener **mes** como un número (0-11)             | 0             |
| getDate()         | Obtener **día** como un número (1-31)             | 4             |
| getHours()        | Obtener **hora** (0-23)                           | 0             |
| get Minutes()     | Obtener **minutos** (0-59)                        | 56            |
| getSeconds()      | Obtener **segundos** (0-59)                       | 41            |
| getMilliseconds() | Obtener **mili-segundos** (0-999)                 | 731           |
| getTime()         | Obtener tiempo (mili-segundos desde 1 Enero 1970) | 1578092201341 |
| getDay()          | Obtener **día de semana** como un número (0-6)    | 6             |

### Crear un objeto de tiempo

Una vez que creamos el objeto de tiempo, proporcionará información sobre el tiempo.

```javascript
const now = new Date();
console.log(now); // Sáb 04 de Enero de 2024 00:56:41 GMT+0200 (hora estándar de Europa del Este)
```

### Obtener año completo

Obtengamos el año completo:

```javascript
const now = newDate();
console.log(now.getFullYear()); // 2024
```

### Obtener mes

Obtengamos el mes:

```javascript
const now = newDate();
console.log(now.getMonth()); // 0, porque el mes es Enero
```

### Obtener fecha

Obtengamos la fecha del mes:

```javascript
const now = newDate();
console.log(now.getDate()); // 4, porque es el 4to día del mes
```

### Obtener día

Obtengamos el día de la semana:

```javascript
const now = newDate();
console.log(now.getDay()); // 6, porque el día es Sábado
```

### Obtener horas

Obtengamos las horas:

```javascript
const now = newDate();
console.log(now.getHours()); // 0, porque el tiempo es 00:56:41
```

### Obtener minutos

Obtengamos los minutos:

```javascript
const now = newDate();
console.log(now.getMinutes()); // 56, porque el tiempo es 00:56:41
```

### Obtener segundos

Obtengamos los segundos:

```javascript
const now = newDate();
console.log(now.getSeconds()); // 41, porque el tiempo es 00:56:41
```

### Obtener tiempo

Este método da el tiempo en mili-segundos a partir del 1 de Enero de 1970. También conocido como tiempo _Unix_, se puede obtener de dos maneras:

#### 1. Usando getTime()

```javascript
const now = newDate();
console.log(now.getTime()); // 1578092201341, estos son los segundos que pasaron desde el 1ero de Enero de 1970 al 04 de Enero del 2020 00:56:41
```

#### 2. Usando Date.now()

```javascript
const allSeconds = Date.now();
console.log(allSeconds); // 1578092201341

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds); // true
```

### Formatear valores a un formato de tiempo legible por humanos

```javascript
const now = new Date();
const year = now.getFullYear(); // return años
const month = now.getMonth() + 1; // return meses (0-11)
const date = now.getDate(); // return días (1-31)
const hours = now.getHours(); // return horas (0-23)
const minutes = now.getMinutes(); // return minutos (0-59)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56
```
