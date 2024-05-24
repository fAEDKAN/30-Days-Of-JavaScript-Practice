# 📔 Día 4: Conditionals.

## Condicionales

Las declaraciones condicionales se usan para tomar decisiones basadas en distintas condiciones. De forma predeterminada, las declaraciones en **JavaScript** se ejecutan secuencialmente de arriba hacia abajo. Si la lógica de procesamiento lo requiere, el flujo secuencial de ejecución se puede alterar de dos formas:

- **Ejecución condicional:** Se ejecutará un bloque de una o más sentencias si cierta expresión es _true_.
- **Ejecución repetitiva:** Un bloque de una o más sentencias se ejecutará de forma repetitiva siempre que cierta expresión sea verdadera.

Las condiciones se pueden implementar con:

- if
- if else
- if else if else
- switch
- operador ternario

### If

La palabra clave _if_ se usa para verificar si una condición es _true_ y ejecutar el bloque de código. Para crear un _if_, necesitamos la palabra clave _if_, la condición, que va dentro de paréntesis y el bloque de código va dentro de llaves ({}).

```javascript
if (condition) {
  // esta parte se ejecuta cuando es true
}
```

```javascript
let num = 3;
if (num > 0) {
  console.log(`${num} es un número positivo`); // 3 es un número positivo
}
```

Como se puede ver en el ejemplo anterior, 3 es mayor que 0, por lo que es un número positivo. La condición era _true_ y se ejecutó el bloque de código. Si la condición es _false_, no veremos ningún resultado.

```javascript
let isRaining = true;
if (isRaining) {
  console.log("Recordá llevar impermeable.");
}
```

Lo mismo pasa con la segunda condición, si **isRaining** es _false_, el bloque _if_ no se ejecutará y no veremos respuesta. Para ver el resultado de una condición _false_, tenemos que tener otro bloque, _else_.

### If Else

Si la condición es _true_, se ejecutará el primer bloque, si no, se ejecutará la condición _else_.

```javascript
if (condition) {
  // esta parte se ejecuta cuando es true
} else {
  // esta parte se ejecuta cuando es false
}
```

```javascript
let num = 3;
if (num > 0) {
  console.log(`${num} es un número positivo`);
} else {
  console.log(`${num} es un número negativo`);
} // 3 es un número positivo

num = -3;
if (num > 0) {
  console.log(`${num} es un número positivo`);
} else {
  console.log(`${num} es un número negativo`);
} // -3 es un número negativo
```

Ahora, qué pasa si tenemos más de dos condiciones? En ese caso, usaremos las condiciones _else if_.

### If Else If Else

Usamos _else if_ cuando tenemos múltiples condiciones.

```javascript
if (condition) {
  // código
} else if (condition) {
  // código
} else {
  // código
}
```

```javascript
let a = 0;
if (a > 0) {
  console.log(`${a} es un número positivo`);
} else if (a < 0) {
  console.log(`${a} es un número negativo`);
} else if (a == 0) {
  console.log(`${a} es cero`);
} else {
  console.log(`${a} no es un número`);
}
```

### Switch

Es una alternativa para _if else if else else_. Comienza con una palabra clave _switch_, seguida de un paréntesis y un bloque de código. Dentro del bloque tendremos diferentes _cases_ (casos). El bloque de casos se ejecuta si el valor en el paréntesis de la declaración de cambio coincide con el valor del _case_. La declaración de _break_ es para terminar la ejecución una vez que se cumpla la condición. El bloque _default_ se ejecuta si ninguno de los casos cumple la condición.

```javascript
switch (caseValue) {
  case 1:
    // código
    break;
  case 2:
    // código
    break;
  case 3:
    // código
    break;
  default:
  // código
}
```

```javascript
let weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("Necesitás un impermeable.");
    break;
  case "cloudy":
    console.log("Puede que haga frío, necesitás un abrigo.");
    break;
  case "sunny":
    console.log("Salí tranquilo.");
    break;
  default:
    console.log("No hay necesidad de un impermeable.");
}
```

### Operadores ternarios

Otra manera de escribir condicionales es usando _operadores ternarios_.

```javascript
let isRaining = true;
isRaining
  ? console.log("Necesitás un impermeable.")
  : console.log("No hay necesidad de un impermeable.");
```
