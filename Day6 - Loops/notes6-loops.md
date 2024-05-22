# 📔 Día 6: Loops.

## Loops

Los _loops_ ofrecen una forma rápida y sencilla de hacer algo repetidamente.

---

### for

Un ciclo `for` se repite hasta que una condición especificada se evalúa como `false`.

```javascript
for (inicialización; condición; actualización) {
  instrucción;
}
```

Cuando se ejecuta un `for`, pasa lo siguiente:

1. Se ejecuta la expresión `inicialización`, si existe. Esta expresión normalmente inicia uno o más contadores de bucle, pero la sintaxis permite una expresión de cualquier grado de complejidad. También puede declarar variables.
2. Se evalúa la expresión `condición`. Si el valor es `true`, se ejecutan las instrucciones. Si es `false`, el bucle `for` termina.
3. Se ejecuta la `instrucción`.
4. Si está presente, se ejecuta la expresión de `actualización`.
5. Regresa al paso 2.

```javascript
for (let step = 0; step < 5; step++) {
  // se ejecuta 5 veces, con valores del paso 0 al 4
  console.log("Caminá un paso hacia adelante");
} // 1, 2, 3, 4, 5
```

---

### while

Una declaración `while` ejecuta sus instrucciones siempre que una condición especificada se evalúe como `true`.

```javascript
while (condición) {
  expresión;
}
```

La prueba de condición ocurre antes de que se ejecute la `expresión`. Si devuelve `true`, se ejecuta y la `condición` se prueba nuevamente. Si devuelve `false`, la ejecución se detiene y el control se pasa a la instrucción que sigue a `while`.

```javascript
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

Con cada iteración, el bucle incrementa `n` y agrega ese valor a `x`. Por lo tanto, `x` y `n` toman los siguientes valores:

- Después de la primera pasada: `n` = `1` y `x` = `1`
- Después de la segunda pasada: `n` = `2` y `x` = `3`
- Después de la tercera pasada: `n` = `3` y `x` = `6`

Después de completar la tercera pasada, la condición `n < 3` ya no es `true`, por lo que el bucle termina.

Hay que evitar los bucles infinitos, asegurándonos de que eventualmente la condición se convierta en `false`.

---

### do...while

La instrucción `do...while` se repite hasta que una condición especificada se evalúe como `false`.

```javascript
do {
  expresión;
} while (condición);
```

La `expresión` siempre se ejecuta una vez antes de que se verifique la condición.
Si `condición` es `true`, la declaración se ejecuta de nuevo. Al final de cada ejecución, se comprueba la condición. Cuando es `false`, la ejecución se detiene y el control pasa a la declaración que sigue a `do...while`.

```javascript
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

El bucle `do` itera al menos una vez y se repite hasta que `i` ya no sea menor que `5`.

---

### for...of

La declaración `for...of` se usa para iterar arrays. Es una forma muy práctica de iterarlos si no estamos interesados en el index de cada elemento.

