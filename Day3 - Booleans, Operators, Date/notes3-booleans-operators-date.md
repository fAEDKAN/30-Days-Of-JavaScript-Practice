# 📔 Día 3: Booleanos, Operadores, Date.

## Booleanos

Los booleanos representan valores _true_ o _false_. Cualquier comparación devuelve un valor booleano.

```javascript
let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let trueValue = 4 > 3; // true
let falseValue = 4 < 3; // false
```

### Valores verdaderos

- Todos los números (+ y -) son verdaderos, excepto el cero.
- Todos los strings son verdaderos, excepto un string vacío ("").
- El booleano true.

### Valores falsos

- 0.
- 0n.
- null.
- undefined.
- NaN
- El booleano false.
- Strings vacíos ("", '', ``).

---

## Undefined

Si al declarar una variable no le asignamos valor, si una función no devuelve un valor o si intentamos acceder a una propiedad de un objeto que no existe, obtendremos _undefined_.

```javascript
let firstName;
console.log(firstName); // no definido, porque no tiene un valor asignado
```

---

## Null

Se usa _null_ para indicar intencionalmente que una variable no tiene valor, que un objeto esperado está ausente, o para reiniciar una variable a un estado vacío.

```javascript
let empty = null;
console.log(empty); // -> null, porque no tiene valor
```

---

## Operadores
