# 📔 Día 7: Functions.

## Funciones

Una función es un bloque re-utilizable de código o declaraciones diseñadas para realizar una determinada tarea. Hacen un código más limpio, fácil de leer y de probar.
Se declaran mediante la palabra clave `function`, seguida de un `nombre` y `()`. Los paréntesis pueden tomar parámetros, si una función toma un parámetro, se llamará con un argumento. Para obtener el valor siempre debemos invocar a la función.

Se pueden declarar o crear de varias maneras:

- Función _declarativa_.
- Función de _expresión_.
- Función _anónima_.
- Función _flecha_.

---

### Función declarativa

```javascript
function functionName() {
  // expresión
}
functionName(); // invocación de la función
```

---

### Función sin parámetros ni return

Se puede declarar sin un parámetro.

```javascript
function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}
square(); // 4

function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;
  console.log(sum);
}
addTwoNumbers(); // 30
```

---

### Función que retorna una valor

Las funciones también pueden devolver valores, si no lo hace, el valor de la función no está definido.

```javascript
function addTwoNumbers() {
  let numOne = 2;
  let numTwo = 3;
  let total = numOne + numTwo;
  return total;
}
console.log(addTwoNumbers()); // 5
```

---

### Función con un parámetro

En una función podemos pasar diferentes tipos de datos (number, string, boolean, object, function) como un parámetro.

```javascript
function functionName(param1) {
  expresión;
}
functionName(param1); // durante la invocación es necesario un parámetro
```

```javascript
function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}
console.log(areaOfCircle(10)); // recibe como argumento: 10 | r = 10
```

---

### Función con dos parámetros

```javascript
function functionName(param1, param2) {
  expresión;
}
functionName(param1, param2);
```

```javascript
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}
console.log(sumTwoNumbers(10, 20)); // numOne = 10 - numTwo = 20 | sum = 30
```

---

### Función con muchos parámetros

```javascript
function functionName(param1, param2, param3) {
  expresión;
}
functionName(param1, param2, param3); // durante la invocación necesita tres argumentos
```

```javascript
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers)); // retorna la suma de todos los números: 15
```

---

### Función con número ilimitado de parámetros

A veces no sabemos cuántos argumentos pasará el usuario, por lo que debemos escribir una función que tome un número ilimitado de argumentos. La forma en que lo hacemos tiene una diferencia significativa entre una función _declarativa_ (función regular) y una función _flecha_.

#### Número ilimitado de parámetros en una función regular

En este tipo de funciones, hay un objeto especial llamado `arguments` que actúa como un array de todos los argumentos pasados a la función, permitiendo así manejar un número ilimitado de argumentos de manera flexible.

```javascript
function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173
```

#### Número ilimitado de parámetros en una función flecha

Estas funciones no tienen su propio objeto `arguments`, si necesitamos manejar un número ilimitado de argumentos, usamos el _operador de propagación/spread operator_ (`...`).

```javascript
const sumAllNums = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};
console.log(sumAllNums(1, 2, 3, 4));
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173
```

---

### Función anónima

No tiene un nombre explícito, por lo que no añade nombres adicionales al espacio de nombres global, reduciendo así el riesgo de colisión de nombres. Se define y se puede asignar a una variable, pasar como argumento a otra función o ejecutarse inmediatamente. Otorga simplicidad, permiten encapsular código que sólo se requiere en un contexto específico, manteniendo el código limpio y modular.

```javascript
const saludar = function () {
  console.log("Hola, mundo!");
};
saludar(); // "Hola, mundo!"
```

#### Uso común de funciones anónimas

1. **Callbacks:** Se usan frecuentemente como funciones de retorno (_callbacks_) en funciones asíncronas como `setTimeout`, `setInterval`, o en métodos de array como `map`, `forEach`, `filter`.

```javascript
const nums = [1, 2, 3, 4];
const doubles = nums.map(function (numero) {
  return numero * 2;
});
console.log(doubles); // [2, 4, 6, 8]
```

2. **Manejadores de Eventos:** En la programación del lado del cliente, las funciones anónimas son comunes para manejar eventos.

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  alert("Clicked Button!");
});
```

---

### Función de expresión

Son una forma de definir funciones donde la función se define dentro de una expresión, en lugar de ser declarada por separado. Pueden ser nombradas o anónimas, son una forma flexible y poderosa de trabajar con funciones.

```javascript
const square = function (n) {
  return n * n;
};
console.log(2); // 4
```

---

### Función de auto-invocación

Son funciones anónimas que no necesitan ser llamadas para devolver un valor, se define y se ejecuta inmediatamente después de su creación. Es útil para crear un ámbito de función local, evitando así la contaminación del ámbito global y manteniendo las variables encapsuladas.

```javascript
let squaredNum = (function (n) {
  return n * n;
})(10);
console.log(squaredNum);
```

---

### Función flecha

Utiliza una flecha en lugar de la palabra clave `function`. No tiene su propio objeto `arguments`, por lo que debemos usar el `spread operator`. Son especialmente útiles como _callbacks_ métodos de array como `map`, `filter` y `reduce`.

```javascript
const square = (n) => {
  return n * n;
};
console.log(square(2)); // 4
```

Si sólo tenemos una línea en el bloque, podemos escribirla con un `return` implícito:

```javascript
const square = (n) => n * n; // 4
```

---

### Función con parámetros por defecto

A veces, pasamos valores predeterminados a los parámetros, si al invocar la función, no pasamos un argumento, se usará el valor predeterminado. Tanto la función declarativa como la función flecha pueden tener uno o varios valores predeterminados.

```javascript
function functionName(param = value) {
  expresión;
}
functionName();
functionName(arg);
```

```javascript
function greetings(name = "Peter") {
  let message = `${name}, welcome to 30 Days Of JavaScript!`;
}
console.log(greetings());
console.log(greetings("Elsa"));
```
