# **Día 6: Ejercicios**

## **Ejercicio: Nivel 1**

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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];
```

- [x] Iterá de 0 a 10 usando el bucle **for**, hacé lo mismo usando los bucles **while** y **do while**.

- [x] Iterá de 10 a 0 usando el bucle **for**, hacé lo mismo usando los bucles **while** y **do while**.

- [x] Iterá de 0 a n usando el bucle **for**.

- [x] Escribí un bucle que haga el siguiente patrón usando **console.log()**:

```javascript
#
##
###
####
#####
######
#######
```

- [x] Usá un bucle para imprimir el siguiente patrón:

```javascript
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
```

- [x] Usando un bucle imprimí el siguiente patrón:

```javascript
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
```

- [x] Usá el bucle **for** para iterar de 0 a 100 e imprimí sólo números **pares**.

- [x] Usá el bucle **for** para iterar de 0 a 100 e imprimí sólo números **impares**.

- [x] Usá el bucle **for** para iterar de 0 a 100 e imprimí los sólo números **primos**.

- [x] Usá el bucle **for** para iterar de 0 a 100 e imprimí la **suma** de **todos** los números.

```javascript
La suma de todos los números de 0 a 100 es 5050.
```

- [x] Usá el bucle **for** para iterar de 0 a 100 e imprimir la **suma** de todos los **pares** e **impares**.

```javascript
La suma de todos los pares de 0 a 100 es 2550. Y la suma de todos los impares de 0 a 100 es 2500.
```

- [x] Usá el bucle **for** para iterar de 0 a 100 e imprimir la **suma** de todos los **pares** e **impares**. Imprimí la **suma** de **pares** e **impares** como un array.

```javascript
[2550, 2500];
```

- [x] Desarrollá un pequeño script que genere un array de 5 números aleatorios.

- [x] Desarrollá un pequeño script que genere un array de 5 números aleatorios y que los números sean únicos.

- [x] Desarrollá un pequeño script que genere un id aleatorio de seis caracteres.

```javascript
5j2khz
```

---

## **Ejercicio: Nivel 2**

- [x] Desarrollá un pequeño script que genere un id con cualquier número de caracteres aleatorios.

```javascript
fe3jo1gl124g;
xkqci4utda1lmbelpkm03rba;
```

- [x] Escribí un script que genere un número **hexadecimal** aleatorio.

```javascript
"#ee33df";
```

- [ ] Escribí un script que genere un número de color **rgb** aleatorio.

```javascript
rgb(240, 180, 80);
```

- [ ] Usando el array **countries** anterior, creá un array como el siguiente:

```javascript
[
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];
```

- [ ] Usando el array **countries** anterior, creá un array para saber la longitud de cada país:

```javascript
[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5];
```

- [ ] Utilizá el array **countries** para crear el siguiente array de arrays:

```javascript
[
  ["Albania", "ALB", 7],
  ["Bolivia", "BOL", 7],
  ["Canada", "CAN", 6],
  ["Denmark", "DEN", 7],
  ["Ethiopia", "ETH", 8],
  ["Finland", "FIN", 7],
  ["Germany", "GER", 7],
  ["Hungary", "HUN", 7],
  ["Ireland", "IRE", 7],
  ["Iceland", "ICE", 7],
  ["Japan", "JAP", 5],
  ["Kenya", "KEN", 5],
];
```

- [ ] En el array **countries**, verificá si hay algún país que contenga la palabra '**land**'. Si hay países que contienen '**land**', imprimilos como array. Si no hay ninguno, imprimí: `Ninguno de estos países contiene "land"`.

```javascript
["Finland", "Ireland", "Iceland"];
```

- [ ] En el array **countries**, verificá si hay algún país que termine con '**ia**'. Si hay países que terminan con '**ia**', imprimilos como un array. Si no hay ninguno, imprimí `"Estos países no terminan con ia"`.

```javascript
["Albania", "Bolivia", "Ethiopia"];
```

- [ ] Usando el array **countries**, encontrá el país que contiene la mayor cantidad de caracteres.

```javascript
Ethiopia;
```

- [ ] Usando el array **countries**, encontrá el país que contiene sólo 5 caracteres.

```javascript
["Japan", "Kenya"];
```

- [ ] Encontrá la palabra más larga en el array **webTechs**.

- [ ] Utilizá el array **webTechs** para crear el siguiente array de arrays:

```javascript
[
  ["HTML", 4],
  ["CSS", 3],
  ["JavaScript", 10],
  ["React", 5],
  ["Redux", 5],
  ["Node", 4],
  ["MongoDB", 7],
];
```

- [ ] Una aplicación creada con MongoDB, Express, React y Node se denomina _MERN stack app_. Crea el acrónimo **MERN** usando el array **mernStack**.

- [ ] Iterá a través del array: `["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]` usando el bucle **for** o el bucle **for of** e imprimí los elementos.

- [ ] Este es un array de frutas: `['banana', 'orange', 'mango', 'lemon']`, invertí el orden usando un bucle sin usar el método **.reverse()**.

- [ ] Imprimí todos los elementos del array como se muestra a continuación:

```javascript
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

HTML;
CSS;
JS;
REACT;
NODE;
EXPRESS;
MONGODB;
```

---

## **Ejercicio: Nivel 3**

- [ ] Copiá el array **countries** (evitá mutaciones).

- [ ] Los arrays son mutables. Creá una copia del array que no modifique el original. Ordená la copia y guardala en una variable **sortedCountries**.

- [ ] Ordená el array **webTechs** y el array **mernStack**.

- [ ] Extraé todos los países que contengan la palabra "**land**" del array **countries** e imprimilos como un array.

- [ ] Encontrá el país que contiene la mayor cantidad de caracteres en el array **countries**.

- [ ] Extraé todos los países que contienen la palabra "**land**" del array **countries** e imprimilos como un array.

- [ ] Extraé todos los países que contengan sólo cuatro caracteres del array **countries** e imprimilos como un array.

- [ ] Extraé todos los países que contengan dos o más palabras del array **countries** e imprimilos como un array.

- [ ] Invertí el array **countries**, poné en mayúscula cada país y almacenalos en un array.
