# **Día 5: Ejercicios**

## **Ejercicio: Nivel 1**

const countries = [
'Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia',
'Finland',
'Germany',
'Hungary',
'Ireland',
'Japan',
'Kenya'
]

const webTechs = [
'HTML',
'CSS',
'JavaScript',
'React',
'Redux',
'Node',
'MongoDB'
]

- [x] Declará un array vacío.

- [x] Declará un array con más de 5 elementos.

- [x] Encontrá la longitud de tu array.

- [x] Obtené el primer elemento, el intermedio y el último del array.

- [x] Declará un array llamado **mixedDataTypes**, colocá diferentes tipos de datos y encontrá la longitud del array. El tamaño debe ser mayor que 5.

- [x] Declará una variable de array con el nombre **itCompanies** y asigná valores iniciales: _Facebook_, _Google_, _Microsoft_, _Apple_, _IBM_, _Oracle_ y _Amazon_

- [x] Imprimí el array usando **console.log()**.

- [x] Imprimí el número de empresas en el array.

- [x] Imprimí la primera empresa, la intermedia y la última.

- [x] Imprimí cada empresa.

- [x] Cambiá el nombre de cada empresa **a mayúsculas** uno por uno e imprimilos.

- [x] Imprimí el array como una oración: `Facebook, Google, Microsoft, IBM, Oracle y Amazon son grandes empresas IT.`

- [x] Comprobá si existe una determinada empresa en el array **itCompanies**. Si existe, devolvé el nombre de la empresa, caso contrario devolvé **no encontrada**.

- [x] Filtrá empresas que tengan más de una "**o**" sin el método **.filter()**.

- [x] Ordená el array usando el método **.sort()**.

- [x] Invertí el array usando el método **.reverse()**.

- [x] Separá las primeras 3 empresas del array.

- [x] Separá las últimas 3 empresas del array.

- [x] Separá la empresa o empresas intermedias del array.

- [x] Eliminá la primer empresa del array.

- [x] Eliminá la última empresa del array.

- [x] Eliminá la empresa o empresas IT intermedias del array.

- [x] Eliminá todas las empresas.

---

## **Ejercicio: Nivel 2**

- [x] Creá un archivo **countries.js** separado y almacená el array **countries** en este archivo, creá un archivo **web_techs.js** separado y almacená el array **webTechs** en este archivo. Accedé a ambos archivos en el archivo main.

- [x] Primero eliminá todas las puntuaciones, cambiá el string a un array y contá el número de palabras en el array:

```javascript
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(words);
console.log(words.length);
[
  "I",
  "love",
  "teaching",
  "and",
  "empowering",
  "people",
  "I",
  "teach",
  "HTML",
  "CSS",
  "JS",
  "React",
  "Python",
];
13;
```

En el siguiente carrito de compras agregá, eliminá y editá artículos:

```javascript
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
```

- [x] Agregá "Meat" al principio del carrito si aún no se ha agregado.
- [x] Agregá "Sugar" al final del carrito si aún no se ha agregado.
- [x] Eliminá "Honey" si sos alérgico a la miel.
- [x] Modificá "Tea" por "Green Tea".

- [x] En el array **countries**, verificá si "**Etiopía**" existe; si existe, imprimí "**ETIOPÍA**", si no existe, agregalo a la lista de países.

- [x] En el array **webTechs**, verificá si **Sass** existe; si existe, imprimí **"Sass es un pre-proceso de CSS**. Si no existe, agregá **Sass** e imprimí el array.

- [x] Concatená las dos variables siguientes y guardalas en una variable **fullStack**:

```javascript
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

console.log(fullStack)[
  ("HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB")
];
```

---

## **Ejercicio: Nivel 3**

- [x] Lo siguiente es un array de 10 edades de estudiantes:

```javascript
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
```

- [x] Ordená el array y encontrá la edad mínima y máxima.
- [x] Encontrá la edad mediana (uno o dos elementos del medio divididos por dos -promedio-).
- [x] Encontrá la edad promedio (todas las edades divididas por la cantidad de edades).
- [x] Encontrá el rango de edades (máximo menos mínimo).
- [x] Compará el valor de (min - promedio) y (max - promedio), usá el método **.abs()**.
