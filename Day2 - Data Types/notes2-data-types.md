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
