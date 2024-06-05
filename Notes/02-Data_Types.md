# 📔 Día 2: Tipos de Datos.

## Tipos de datos

Los tipos de datos se pueden dividir en 2:

- Primitivos.
- No primitivos (referencias de objetos).

### Tipos de datos primitivos

Son tipos de datos inmutables (no modificables). Una vez que se crea un tipo de dato primitivo, no podemos modificarlo.

1. **Numbers:** Enteros, de punto flotante (_float_).
2. **Strings:** Cualquier dato entre comillas simples, dobles o invertidas (_backticks_).
3. **Booleans:** Valor _verdadero_ o _falso_.
4. **Null:** Valor vacío/sin valor.
5. **Undefined:** Variable declarada sin valor.

**Ejemplo:**

```javascript
let word = 'JavaScript";
```

Si tratamos de modificar el string almacenado en _word_, **JS** debería arrojar un error.

```javascript
word[0] = "Y";
```

Esta expresión no cambia el string guardado en _word_. Los primitivos se comparan por sus valores.

```javascript
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo); // true

let js = "JavaScript";
let py = "Python";
console.log(js == py); // false

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff); // false
```

### Tipos de datos no primitivos

Son tipos de datos mutables o modificables. Podemos modificar el valor de los tipos de datos después de su creación. Por ejemplo en un array, que es una lista de valores cuyos tipos de datos pueden ser iguales o distintos, los valores de un array se referencian por su índice, que siempre empieza en 0.

```javascript
let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums); // [10, 2, 3]
```

Los tipos de datos no primitivos no se pueden comparar por valor, incluso si 2 tipos tienen las mismas propiedades y valores, no son estrictamente iguales.

```javascript
let nums = [1, 2, 3];
let numbers = [1, 2, 3];
console.log(nums == numbers); // false

let userOne = {
  name: "Susana Horia",
  country: "Uzbekistan"
  job: "Goose farmer"
}
let userTwo = {
  name: "Elsa Pallito",
  country: "Antigua & Barbuda",
  job: "Teacher"
}
console.log(userOne == userTwo); // false
```

Como regla general, no comparamos arrays, funciones u objetos.
Los valores no primitivos se conocen como tipos de referencia, porque se comparan por referencia en vez de por valor. Dos objetos sólo son estrictamente iguales, si se refieren al mismo objeto subyacente.

```javascript
let nums = [1, 2, 3];
let numbers = nums;
console.log(nums == numbers); // true

let userOne = {
  name: "Susana Horia",
  country: "Uzbekistan"
  job: "Goose farmer"
}
let userTwo = userOne;
console.log(userOne == userTwo); // true
```

### Numéricos

Los números son enteros y decimales que pueden hacer todas las operaciones aritméticas.

#### Declaración de tipos de datos numéricos

```javascript
let age = 35;
const gravity = 9.81; // usamos const para valores que no cambian, constante gravitacional en m/s2
let mass = 72; // masa en Kilogramos
const PI = 3.14; // pi es una constante geométrica
const boilingPoint = 100; // temperatura en oC, el punto de ebullición del agua es una constante
const bodyTemp = 37; // oC la temperatura corporal promedio del ser humano
console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);
```

---

## Objeto Math

En **JS**, el objeto **Math** proporciona muchos métodos para trabajar con números.

### Math.PI:

Número PI.

```javascript
const PI = Math.PI;
console.log(PI); // 3.141592653589793
```

### Math.round(), Math.floor() y Math.ceil():

- **Math.round():** redondea al número más cercano, superior a 0.5 hacia arriba, inferior a 0.5 hacia abajo.
- **Math.ceil():** redondea hacia arriba
- **Math.floor():** redondea hacia abajo.

```javascript
console.log(Math.round(PI)); // 3
console.log(Math.round(9.81)); // 10
console.log(Math.ceil(PI)); // 4, redondea hacia arriba
console.log(Math.floor(PI)); // 3, redondea hacia abajo
```

### Math.min() y Math.max():

Valor mínimo y máximo.

```javascript
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, retorna el menor
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, retorna el mayor
```

### Math.abs():

Valor absoluto.

```javascript
console.log(Math.abs(-10)); // 10
```

### Math.sqrt():

Raíz cuadrada.

```javascript
console.log(Math.sqrt(100)); // 10
console.log(Math.sqrt(2)); // 1.4142135623730951
```

### Math.pow():

Potencia.

```javascript
console.log(Math.pow(3, 2)); // 9
```

### Math.E:

Permite acceder al valor de la constante _e_ (número de Euler, base de los algoritmos naturales), para así realizar cálculos exponenciales y logarítmicos de forma precisa.

```javascript
console.log(Math.E); // 2.718281828459045
```

### Math.log():

Devuelve el logaritmo natural con base E de un número _X_.

```javascript
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046
```

### Math.LN2 y Math.LN10:

Representa el logaritmo natural de 2 y 10 respectivamente

```javascript
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
```

### Math.sin() y Math.cos():

Se usan para calcular los valores del seno y el coseno respectivamente. Utilizan ángulos en radianes, no en grados.

```javascript
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);
```

### Math.random():

Crea un número aleatorio entre 0 y 0.999999...

```javascript
const randNum = Math.random(); // 0 a 0.999...
let numBtnZeroAndTen = randomNum * 11;
console.log(numBtnZeroAndTen); // retorna mínimo 0 y máximo 10.99
let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // retorna entre 0 y 10
```

---

## Strings

Los strings son texto entre comillas, simples, dobles o invertidas (_backticks_).

```javascript
let space = " ";
let firstName = "Susana";
let lastName = "Horia";
let country = "Albany";
let language = "JavaScript";
let quoteWithBackTick = `The saying, 'Seeing is Believing' is not correct in 2024`;
```

### Concatenación de strings

Conectar dos o más strings entre sí se llama concatenación.

```javascript
let fullName = firstName + space + lastName;
console.log(fullName); // Susana Horia
```

**Podemos concatenar strings de distintas formas:**

#### Usando el operador de suma

Esta es una forma antigua tediosa y propensa a errores.

```javascript
let space = " ";
let firstName = "Elsa";
let lastName = "Pallito";
let country = "Azerbaijan";
let language = "JavaScript";
let fullName = firstName + space + lastName;
let personInfo =
  "Mi nombre es " +
  fullName +
  ". Soy de " +
  country +
  " y me gusta programar en " +
  language;
console.log(personInfo); // Mi nombre es Elsa Pallito. Soy de Azerbaijan y me gusta programar en JavaScript
```

#### Strings largos

Un string puede ser un solo carácter, un párrafo o una página. Si la longitud es demasiado grande podemos usar la barra invertida (\\) al final de cada línea para indicar que el string continuará en la siguiente línea.

```javascript
const paragraph =
  "Mi nombre es Susana Horia. Vivo en Azerbaiyán.\
Estoy reforzando mis conocimientos en JavaScript\
para poder convertirme en una muy buena desarrolladora de software,\
espero poder cumplir mi sueño de conseguir un empleo en el mundo IT.";
```

#### Secuencias de escape en strings

En **JS** y otros lenguajes, la barra \ seguida de algunos caracteres son una secuencia de escape.

- **\n:** Nueva línea.
- **\t:** Tabulador, 8 espacios.
- **\\:** Barra invertida.
- **\':** Una frase.
- **\":** Cita doble.

```javascript
console.log(
  "Espero que todos estén disfrutando de los 30 Días de JavaScript.\n Lo estás disfrutando?"
);
// Espero que todos estén disfrutando de los 30 Días de JavaScript.
// Lo estás disfrutando?
console.log("Days\tTopics\tExercises");
// Days   Topics   Exercises
```

#### Literales de plantilla (template strings)

Para crear template strings, usamos _backticks_. Podemos añadir datos como expresiones dentro de un template string. Encerramos la expresión en una llave ({}) precedida por un signo $.

```javascript
let a = 2;
let b = 3;
console.log(`La suma de ${a} y ${b} es ${a + b}`); // La suma de 2 y 3 es 5
```

Usando string template o string interpolation, podemos añadir expresiones, que podrían ser un valor u operaciones (comparación, operaciones aritméticas, operaciones ternarias).

```javascript
let a = 2;
let b = 3;
console.log(`${a} is greater than ${b} : ${a > b}`); // 2 is greater than 3: false
```

### Métodos de string

Todo en **JS** es un objeto. Un string es un tipo de dato primitivo, lo que significa que no podemos modificarlo una vez creado. El objeto string tiene muchos métodos.

#### 1. **length:** Este método devuelve el número de caracteres en un string, incluyendo el espacio vacío.

```javascript
let js = "JavaScript";
console.log(js.length); // 10
let firstName = "Elsa";
console.log(firstName.length); // 4
```

#### 2. Acceder a los caracteres de un string: Podemos acceder a cada carácter usando su índice. En programación el conteo empieza en 0. El primer índice es 0 y el último es su longitud - 1.

```javascript
let string = "JavaScript";
let firstLetter = string[0];
console.log(firstLetter); // J
```

#### 3. **toUpperCase():** Cambia el string a letras mayúsculas.

```javascript
let string = "JavaScript";
console.log(string.toUpperCase()); // JAVASCRIPT
```

#### 4. **toLowerCase():** Cambia el string a letras minúsculas.

```javascript
let string = "jAVAsCRIPT";
console.log(string.toLowerCase()); // javascript
```

#### 5. **substr():** Toma 2 argumentos, el índice inicial y el número de caracteres para dividir.

```javascript
let string = "JavaScript";
console.log(string.substr(4, 6)); // Script
```

#### 6. **substring():** Toma 2 argumentos, el índice inicial y el índice final, pero no incluye el carácter en el índice final.

```javascript
let string = "JavaScript";
console.log(string.substring(0, 4)); // Java
console.log(string.substring(4, 10)); // Script
console.log(string.substring(4)); // Script
```

#### 7. **split():** Divide un string en un lugar específico.

```javascript
let string = "30 Days Of JavaScript";
console.log(string.split()); // Lo cambia a un array -> ["30 Days Of JavaScript"]
console.log(string.split(" ")); // Divide los elementos usando los espacios como separadores -> ["30", "Days", "Of", "JavaScript"]
```

#### 8. **trim():** Elimina el espacio al principio o al final de un string.

```javascript
let string = "  30 Days Of JavaScript  ";
console.log(string.trim(" ")); // 30 Days Of JavaScript
```

#### 9. **includes():** Toma un argumento de substring y verifica si existe en el string. Devuelve un valor booleano. Si existe, devuelve true, caso contrario, false.

```javascript
let string = "30 Days Of JavaScript";
console.log(string.includes("Days")); // true
console.log(string.includes("days")); // false - es case sensitive!
```

#### 10. **replace():** Toma como parámetro un substring antiguo y un substring nuevo.

```javascript
let string = "30 Days Of JavaScript";
console.log(string.replace("JavaScript", "Python")); // 30 Days Of Python
```

#### 11. **charAt():** Toma un índice y devuelve el valor en ese índice.

```javascript
let string = "30 Days Of JavaScript";
console.log(string.charAt(0)); // 3
```

#### 12. **charCodeAt():** Toma un índice y devuelve el código de caracteres (ASCII) del valor en ese índice.

```javascript
let string = "30 Days Of JavaScript";
console.log(string.charCodeAt(3)); // D - ASCII = 68
```

#### 13. **indexOf():** Toma un substring y si existe, devuelve la primera posición, si no existe, devuelve -1.

```javascript
let string = "30 Days Of JavaScript";
console.log(string.indexOf("D")); // 3
console.log(string.indexOf("Days")); // 3
```

#### 14. **lastIndexOf():** Toma un substring y si existe, devuelve la última posición, si no existe, devuelve -1.

```javascript
let string =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string.lastIndexOf("love")); // 67
console.log(string.lastIndexOf("you")); // 63
```

#### 15. **concat():** Toma substrings y los une.

```javascript
let string = "30";
console.log(string.concat("Days", "Of", "JavaScript")); // 30DaysOfJavaScript
```

#### 16. **startsWith():** Toma un substring como argumento y verifica si el string comienza con ese argumento. Devuelve un valor booleano.

```javascript
let string = "Love is the best to in this world";
console.log(string.startsWith("Love")); // true
console.log(string.startsWith("love")); // false
```

#### 17. **endsWith():** Toma un substring como argumento y verifica si el string termina con ese argumento. Devuelve un valor booleano.

```javascript
let string = "Love is the most powerful feeling in the world";
console.log(string.endsWith("world")); // true
console.log(string.endsWith("love")); // false
```

#### 18. **search():** Toma un substring como argumento y devuelve el índice de la primera coincidencia. El valor de búsqueda puede ser un substring o una expresión regular.

```javascript
let string =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string.search("love")); // 2
console.log(string.search(/javascript/gi)); // 7
```

#### 19. **match():** Toma un substring o una expresión regular como argumento y devuelve un array si hay una coincidencia, si no, devuelve _null_.

```javascript
let string =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string.match("love"));
// ["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
console.log(string.match(/love/gi)); // g - significa buscar en todo el texto, i - no distingue entre mayúsculas y minúsculas
// ["love", "love", "love"]
```

```javascript
let text = "En 2024 estoy aprendiendo JS con el desafío 30 Días De JavaScript";
let regEx = /\d+/;
// d con carácter de escape significa que d no es una d normal, sino que actúa como un dígito
// + significa uno o más dígitos
// si hay g después de eso significa global, busca en todas partes
console.log(text.match(regEx)); // ["2", "0", "2", "4", "3", "0"]
console.log(text.match(/\d+/g)); // ["2024", "30"]
```

#### 20. **repeat():** Toma un número como argumento y devuelve la versión repetida del string

```javascript
let string = "love";
console.log(string.repeat(5)); // lovelovelovelovelove
```

---

## Comprobación de tipos de datos y casting (conversión)

### Comprobación de datos

Para comprobar el tipo de dato de una variable, usamos el método **typeof**.

```javascript
let firstName = "Elsa";
let lastName = "Pallito";
let country = "Azerbaiyán";
let age = 102;
let job;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof age); // number
console.log(typeof job); // undefined
console.log(typeof null); // object
```

### Conversión de datos (casting)

**_Casting:_** convertir un tipo de dato en otro. Usamos **parseInt()**, **parseFloat()**, **Number()**, signo **+**, **str()**, cuando hacemos operaciones aritméticas, los números de strings deben convertirse primero a _integers_ o _floats_, si no, devuelve un error.

#### String a Integer

Podemos convertir un número de string en un número.

- **parseInt()**
- **Number()**
- **+**

```javascript
let num = "10";
let numInt1 = parseInt(num);
let numInt2 = Number(num);
let numInt3 = +num;
console.log(numInt1); // 10
console.log(numInt2); // 10
console.log(numInt3); // 10
```

#### String a Float

Podemos convertir un número flotante de string en un número flotante.

- **parseFloat()**
- **Number()**
- **+**

```javascript
let num = "9.81";
let numFloat1 = parseFloat(num);
let numFloat2 = Number(num);
let numFloat3 = +num;
console.log(numFloat1); // 9.81
console.log(numFloat2); // 9.81
console.log(numFloat3); // 9.81
```

#### Float a Integer

Podemos convertir números flotantes a enteros.

- **parseInt()**

```javascript
let num = 9.81;
let numInt = parseInt(num);
console.log(numInt); // 9
```
