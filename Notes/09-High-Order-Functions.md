# 📔 Día 8: High Order Functions.

## Función de orden superior

Son funciones que toman otra función como parámetro o retornan una función como valor. La función pasada como parámetro se llama _callback_.

---

### Callback

Es una función que se pasa a otra como argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

```javascript
// función callback, el nombre puede ser cualquiera
const callback = (n) => {
  return n ** 2;
};

// función que toma otra función como callback
function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 3));
```

- Se llama a `cube(callback, 3)`.
- Dentro de `cube`, se ejecuta `callback(3)`. La función callback toma 3 y calcula 3 \*\* 2, que es 9.
- El resultado de `callback(3)` es 9.
- Luego, `cube` multiplica el resultado de `callback(3)` (que es 9) por n (que es 3): 9 \* 3.
- Esto da como resultado 27.
- Finalmente, console.log imprime 27.

---

### Retornar una función

Las _high order functions_ retornan una función como valor.

```javascript
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));
// (2 * 2) + (3 * 3) + 10 => 4 + 9 + 10 = 23
```

#### El método forEach() usa callback

```javascript
const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers)); // 15
```

Puede simplificarse así:

```javascript
const numbers = [1, 2, 3, 4];
const sumArray = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log(sumArray(numbers)); // 15
```

---

### Configuración de tiempo

Podemos ejecutar actividades en determinados intervalos temporales o podemos programar tiempos de espera para ejecutar actividades.

- `setInterval`
- `setTimeout`

#### Configurar tiempo mediante `setInterval`

Realiza una tarea de forma continua cada cierto tiempo. Toma un _callback_ y el tiempo en mili-segundos como parámetro.

```javascript
function callback() {
  expresión;
}
setInterval(callback, duration);
```

```javascript
function sayHello() {
  console.log("Hello!");
}
setInterval(sayHello, 1000); // Imprime Hello! cada 1 segundo
```

#### Configurar tiempo mediante `setTimeout`

Realiza uan tarea después de cierto tiempo. Toma un _callback_ y el tiempo en mili-segundos como parámetro.

```javascript
function callback() {
  expresión;
}
setTimeout(callback, duration);
```

```javascript
function sayHello() {
  console.log("Hello!");
}
setTimeout(sayHello(), 2000); // Imprime Hello! después de 2 segundos
```

---

## Programación funcional

La última versión de **JS** trajo consigo muchos métodos integrados que nos pueden ayudar a resolver problemas complicados. Estos métodos toman la función _callback_. Veremos .

La última versión de **JS** trajo consigo métodos integrados, como: _forEach_, _map_, _filter_, _reduce_, _find_, _every_, _some_ y _sort_, que podemos usar en lugar de un bucle regular, y pueden ayudarnos a resolver problemas complicados.

---

### forEach()

Lo usamos sólo para iterar arrays. Toma un _callback_ con elementos, index y el propio array, estos últimos dos son opcionales.

```javascript
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr);
});
// También se puede escribir usando arrow function
arr.forEach((element, index arr) => {
  console.log(index, element, arr)
}):
// arrow function + return
arr.forEach((element, index, arr) => console.log(index, element, arr))
```

```javascript
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
console.log(sum);
// 1
// 2
// 3
// 4
// 5
```

```javascript
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => (sum += num));

console.log(sum);
// 1
// 2
// 3
// 4
// 5
```

---

### map()

Lo usamos para iterar los elementos de un array y modificar los mismos. Toma un _callback_ con elementos, index y el propio array, devolviendo un nuevo array.

```javascript
const modifiedArray = arr.map(function (element, index, arr) {
  return element;
});
```

```javascript
const numbers = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map((num) => num * num);
console.log(numbersSquare); // [ 1, 4, 9, 16, 25 ]
```

```javascript
const countries = [
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
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
);
//  ["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]
```

---

### filter()

Lo utilizamos para filtrar los elementos que cumplen las condiciones de filtrado y devuelve un nuevo array.

```javascript
//Filtra los países que contienen 'land'
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand); // ['Finland', 'Ireland']
```

```javascript
const countriesEndsWithIa = countries.filter((country) =>
  country.endsWith("ia")
);
console.log(countriesEndsWithIa); // ['Albania', 'Bolivia','Ethiopia']
```

```javascript
const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
);
console.log(countriesHaveFiveLetters); // ['Japan', 'Kenya']
```

---

### reduce()
