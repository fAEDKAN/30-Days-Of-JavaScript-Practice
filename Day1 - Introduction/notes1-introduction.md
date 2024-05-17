# 📔 Día 1: Introducción a JavaScript.

**JavaScript** es un lenguaje usado para darle interactividad a las páginas web, desarrollar apps móviles, apps de escritorio, juegos, y ahora también puede ser usado para _machine learning_ (aprendizaje automático) e _IA_ (inteligencia artificial).

---

## Sintaxis

**JavaScript**, al igual que otros lenguajes, tiene su sintaxis. Si no escribimos una sintaxis que **JS** entienda, se producirán diferentes tipos de errores, como los sintácticos. Si escribimos algo mal, la consola puede arrojarnos un error. El proceso de identificación y eliminación de errores se llama _debugging_.

---

## Aritmética

Además de texto, en **JS** también podemos hacer cálculos matemáticos.
2 + 3 > Adición
3 - 2 > Sustracción
2 \* 3 > Multiplicación
3 / 2 > División
3 % 2 > Módulo (encontrar el resto)
3 \*\* 2 > Exponencial

---

## Añadiendo JS a una página web

Se puede añadir de 4 formas distintas:

- **_Script en línea (inline script):_**
  Lo escribimos en el lugar donde queremos usarlo.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DíasDeJS: Inline Script</title>
  </head>

  <body>
    <button onclick="alert('Bienvenido a 30DaysOfJavaScript!')">
      Haceme Click
    </button>
  </body>
</html>
```

- **_Script interno:_**
  Podemos ponerlo en la cabecera (_head_) o en el cuerpo (_body_), pero es recomendable ponerlo al final del _body_ del HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DíasDeJS: Script Interno</title>
  </head>
  <body>
    <button onclick="alert('Bienvenido a 30DaysOfJavaScript!');">
      Haceme Click
    </button>
    <script>
      console.log("Bienvenido a 30DaysOfJavaScript!");
    </script>
  </body>
</html>
```

- **_Script externo:_**
  Al igual que el interno, puede estar en el _head_ o el _body_, pero siempre es recomendable ponerlo en el _body_. Primero creamos un archivo **JavaScript** externo y después lo enlazamos en la parte inferior del _body_.
  **Archivo introduction.js**

```javascript
console.log("Bienvenido a 30DaysOfJavaScript");
```

**Archivo HTML**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DíasDeJS: Script Externo</title>
  </head>
  <body>
    <script src="introduction.js"></script>
  </body>
</html>
```

- **_Scripts múltiples:_**
  Podemos enlazar múltiples archivos **JS** en un HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Múltiples scripts externos</title>
  </head>
  <body>
    <script src="./holamundo.js"></script>
    <script src="./introduction.js"></script>
  </body>
</html>
```

---

## Introducción a tipos de datos

En **JS**, como en otros lenguajes, hay distintos tipos de datos. Los siguientes son los tipos de datos primitivos: Strings, numbers, booleans, undefined, null y symbol.

### Numbers

- **Integers:** Números enteros, negativos, positivos, cero. Ej: ... -2, -1, 0, 1, 2, 3...
- **Floats:** Números decimales. Ej: ... -3.5, -2.25, 0.0, 2.13, 3.79...

### Strings

Son una colección de uno o más caracteres entre comillas:

```javascript
"JavaScript es un hermoso lenguaje de programación";
"Estoy aprendiendo mucho en este primer día";
`También podemos crear strings usando backticks`;
```

### Booleans

Cualquier comparación devuelve un valor booleano, que es _verdadero_ o _falso_.

```javascript
true; // si la luz está encendida
false; // si la luz está apagada
```

### Undefined

En **JS** si no asignamos valor a una variable o si una función no devuelve nada, retornará undefined.

```javascript
let nombre;
console.log(nombre); // retorna undefined, porque no tiene ningún valor asignado
```

### Null

En **JS** significa un valor vacío/nulo

```javascript
let valorVacio = null;
```

## Comprobando los tipos de datos

Para comprobar el tipo de dato de un determinado valor, usamos el operador _typeof_:

```javascript
console.log(typeof "fAEDKAN"); // string
console.log(typeof 8); // number
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
```

---

## Comentarios

Los comentarios en **JS** son similares a los de otros lenguajes. Son importantes para hacer el código más legible. Hay 2 formas de hacerlos:

- Una sola línea:

```javascript
// let nombre = "fAEDKAN";
// let numero = 8;
```

- Multi-línea:

```javascript
/*
let edad = 100;
let ubicacion = "Whole Space"
*/
```

---

## Variables

Las variables son contenedores, se usan para almacenar datos en un espacio de memoria. Cuando se declaran, se reserva el espacio, cuando se les asigna valor, dicho espacio se llena con los datos. Para declararlas, usamos las palabras claves _var_, _let_ o _const_ seguido del nombre de la variable, el signo igual y el valor que queramos asignarle (en caso de querer darle uno). Ej:

```javascript
let nombreDeLaVariable = valor;
let nombreDeLaVariable;
```

Para una variable que cambia en otro momento, usamos _let_. Si los datos no cambian en absoluto, usamos _const_. Ej: número PI, el nombre de un país, la gravedad, no cambian, por ende podemos usar _const_.

#### Convenciones para nombrar una variable

- No debe empezar con un número.
- No se permiten caracteres especiales, excepto el signo dólar ($) y el guión bajo (\_).
- Deben seguir la convención _camelCase_.
- No debe tener espacio entre palabras.

Ejemplos **válidos** para nombrar variables en **JS**:

```javascript
primerNombre;
pais;
ciudadCapital;
estadoCivil;

primer_nombre;
pais;
ciudad_capital;
estado_civil;

num1;
num_1;
_num_1;
$num1;
año2024;
año_2024;
```

Ejemplos **NO válidos** para nombrar variables en **JS**:

```javascript
primer-nombre;
1_numero
num_#_1
```

Las variables también pueden ser declaradas en una misma línea separadas por una coma:

```javascript
let nombre = "fAEDKAN",
  edad = 101,
  ubicacion = "Whole Space";
console.log(nombre, edad, ubicacion);
// fAEDKAN, 101, Whole Space
```
