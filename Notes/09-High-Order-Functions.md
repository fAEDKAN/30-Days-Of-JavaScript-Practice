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
