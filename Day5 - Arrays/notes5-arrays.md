# 📔 Día 5: Arrays.

## Arrays

Un array es una colección de datos ordenados y modificables. Puede estar vacío o puede tener distintos valores de diferentes tipos de datos, también permite almacenar elementos duplicados.

Cada valor en un array tiene un _index_, el cual nos sirve para acceder a él, y cada _index_ tiene una _referencia_ a una dirección de memoria. El índice de un array empieza en cero y termina en la longitud del array menos uno.

### Crear un array vacío

Podemos crear un array de distintas maneras. Es muy común usar _const_ en lugar de _let_ para declarar una variable de tipo _array_. Si usamos _const_, significa que no volveremos a usar ese nombre de variable.

- Usando el constructor de arrays

```javascript
const arr = Array();
// o
// let arr = new Array();
```

- Usando corchetes ([])

```javascript
const arr = [];
console.log(arr);
```

### Crear un array con valores

Array con valores iniciales. Usamos _length_ para encontrar la longitud del array.

```javascript
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const fruits = ["banana", "orange", "mango", "lemon"];
console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);
// Numbers: [0, 3.14, 9.81, 37, 98.6, 100]
// Number of numbers: 6

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);
// Fruits: ['banana', 'orange', 'mango', 'lemon']
// Number of fruits: 4
```

**Un array puede tener elementos de distintos tipos de datos:**

```javascript
const arr = [
  "Elsa",
  250,
  true,
  { country: "Antigua & Barbuda", city: "Jolly Harbour" },
  { skills: ["HTML", "CSS", "JS", "React", "C#", "Python"] },
];
console.log(arr);
```

### Crear un array usando split()

Como vimos anteriormente, podemos dividir un string en diferentes posiciones y cambiarlo a un array.

```javascript
let js = "JavaScript";
const charsInJavaScript = js.split("");
console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");
console.log(companies); // [" Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
```

### Acceder a elementos de un array usando index

Accedemos a cada elemento usando su índice. El índice comienza en 0.

```javascript
["banana", "orange", "mango", "lemon"];
//  0         1         2        3
```

```javascript
const fruits = ["banana", "orange", "mango", "lemon"];
let secondFruit = fruits[1]; // accedemos al primer elemento
console.log(secondFruit); // orange

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];
console.log(lastFruit); // lemon
```

### Modificar elementos de un array

Los arrays son mutables. Una vez creados, podemos modificar el contenido de los elementos.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10; // cambiando 1 en el índice 0 a 10
numbers[1] = 20; // cambiando 2 en el índice 0 a 20
```

### Métodos para manipular arrays

Existen distintos métodos para manipular un array. Algunos de los métodos disponibles son: _Array()_, _length_, _concat()_, _indexOf()_, _slice()_, _splice()_, _join()_, _toString()_, _includes()_, _lastIndexOf()_, _isArray()_, _fill()_, _push()_, _pop()_, _shift()_, _unshift()_.

#### Array(): Constructor de arrays

Para crear un array.

```javascript
const arr = Array(); // crea un array vacío
console.log(arr);
const eightEmptyValues = Array(8); // crea ocho valores vacíos
console.log(eightEmptyValues); // [empty x 8]
```

#### fill(): Crea valores estáticos

Rellenar todos los elementos del array con un valor estático.

```javascript
const arr = Array(); // crea un array vacío
console.log(arr);
const eightXValues = Array(8).fill("X"); // crea ocho valores de elementos llenos de "X"
console.log(eightXValues); // ["X", "X", "X", "X", "X", "X", "X", "X"]
```

#### concat(): Concatena arrays

Concatenar dos arrays.

```javascript
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList); // [1, 2, 3, 4, 5, 6]
```

#### length: Muestra la longitud

Averiguar el tamaño del array.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // -> 5 es el tamaño del array
```

#### indexOf(): Obtiene index de un elemento

Verificar si un elemento existe en un array, si existe, devuelve el índice, caso contrario retorna -1.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(5)); // -> 4
console.log(numbers.indexOf(0)); // -> -1
console.log(numbers.indexOf(6)); // -> -1
```

**Comprobar si un elemento existe en un array:**

```javascript
const fruits = ["banana", "orange", "mango", "lemon"];
let index = fruits.indexOf("banana"); // 0
if (index === -1) {
  console.log("Esta fruta no existe en el array.");
} else {
  console.log("Esta fruta existe en el array.");
}
// Esta fruta existe en el array.
// También podemos usar un ternario:
index === -1
  ? console.log("Esta fruta no existe en el array.")
  : console.log("Esta fruta existe en el array.");
```

#### lastIndexOf(): Obtiene último index de un array elemento

Obtener la posición del último elemento, si existe, devuelve el índice, caso contrario retorna -1.

```javascript
const numbers = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(numbers.lastIndexOf(2)); // 7
console.log(numbers.lastIndexOf(0)); // -1
console.log(numbers.lastIndexOf(4)); // 3
```

#### includes(): Comprueba si un elemento existe

Verificar si un elemento existe, si existe, devuelve true, de lo contrario devuelve false.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(5)); // true
console.log(numbers.includes(0)); // false
console.log(numbers.includes(1)); // true
```

#### Array.isArray(): Verifica si el tipo de dato es un array

Para comprobar si el tipo es un array.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers)); // true
const number = 100;
console.log(Array.isArray(number)); // false
```

#### toString(): Convierte un array a string

Convertir array a string.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString); // 1, 2, 3, 4, 5
```

#### join(): Une elementos de un array

Usado para unir elementos del array, el argumento pasado en el método _join()_ se une al array y retorna un string. De forma predeterminada, se une con una coma, pero podemos pasar distintos parámetros de string que se pueden unir entre los elementos.

```javascript
const languages = ["JavaScript", "Python", "CSharp", "Rust"];
console.log(languages.join()); // JavaScript,Python,CSHarp,Rust
console.log(languages.join("")); // JavaScriptPythonCSHarpRust
console.log(languages.join(" ")); //  JavaScript Python CSHarp Rust
console.log(languages.join(", ")); //  JavaScript, Python, CSHarp, Rust
console.log(languages.join(" # ")); // JavaScript # Python # CSHarp # Rust
```

#### slice(): Corta elementos de un array

Para cortar varios elementos en el rango, toma dos parámetros: posición inicial y final (opcional), pero al retornar el nuevo array no incluye el elemento en la última posición.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice()); // -> copia todos los elementos
console.log(numbers.slice(0)); // -> copia todos los elementos
console.log(numbers.slice(0, numbers.length)); // -> copia todos los elementos
console.log(numbers.slice(1, 4)); // -> [2, 3, 4] no incluye la posición final
```

#### splice(): Elimina y agrega elementos

Toma tres parámetros: posición inicial, número de elementos a eliminar y cantidad de elementos que se agregarán.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
numbers.splice();
console.log(numbers); // -> elimina todos los elementos
```

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
numbers.splice(3, 3, 7, 8, 9);
console.log(numbers.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] elimina tres elementos y reemplaza tres elementos
```

#### push(): Agrega elementos a un array

Para agregar elementos al final de un array existente.

```javascript
const arr = ["item1", "item2", "item3"];
arr.push("new item");
console.log(arr); // ["item1", "item2", "item3", "new item"]
```

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers); // -> [1, 2, 3, 4, 5, 6]
```

#### pop(): Elimina el elemento final

Para eliminar el último elemento.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers); // -> [1, 2, 3, 4]
```

#### shift(): Elimina el elemento al principio

Eliminar elemento al comienzo del array.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers); // -> [2, 3, 4, 5]
```

#### unshift(): Agrega un elemento al principio

Para añadir un elemento al inicio del array.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.unshift(0);
console.log(numbers); // -> [0, 1, 2, 3, 4, 5]
```

#### reverse(): Invierte el orden de un array

Para invertir el orden de un array.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]
numbers.reverse();
console.log(numbers); // [1, 2, 3, 4, 5]
```

#### sort(): Ordena los elementos de un array

Ordenar los elementos de forma ascendente.

```javascript
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
webTechs.sort();
console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse(); // después de ordenar, podemos revertirlo
console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
```

### Array de arrays

Un array puede almacenar diferentes tipos de datos, incluido un array en sí mismo.

```javascript
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]
```
