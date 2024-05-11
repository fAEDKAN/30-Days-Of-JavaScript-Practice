# **Día 7: Ejercicios**

## **Ejercicio: Nivel 1**

- [x] Declará una función **fullName** e imprimí tu nombre completo.

- [x] Declará una función **fullName** que tome como parámetro **firstName** y **lastName** y que retorne tu nombre completo.

- [x] Declará una función **addNumbers** que tome 2 parámetros y devuelva la suma.

- [x] El área de un rectángulo se calcula: _area = largo x ancho_. Escribí una función **areaOfRectangle** que calcule el área de un rectángulo.

- [x] El perímetro de un rectángulo se calcula: _perímetro = 2x(largo + ancho)_. Escribí una función **perimeterOfRectangle** que calcule el perímetro de un rectángulo.

- [x] El volumen de un prisma rectangular se calcula: _volumen = largo x ancho x alto_. Escribí una función **volumeOfRectPrism** que calcule el volumen de un prisma.

- [x] El área de un círculo se calcula: _area = π x r x r_. Escribí una función **areaOfCircle** que calcule el área de un círculo.

- [x] La circunferencia de un círculo se calcula: _circunferencia = 2πr_. Escribí una función **circumOfCircle** que calcule la circunferencia de un círculo.

- [x] La densidad de una sustancia se calcula: _densidad = masa/volumen_. Escribí una función **density** que calcule la densidad de una sustancia.

- [x] La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribí una función **speed** que calcule la velocidad de un objeto en movimiento.

- [x] El peso de una sustancia se calcula: _peso = masa x gravedad_. Escribí una función **weight** que calcule el peso de una sustancia.

- [x] La temperatura en °C se puede convertir a °F usando esta fórmula: _°F = (°C x 9/5) + 32_. Escribí una función **convertCelsiusToFahrenheit** que convierta °C a °F.

- [x] El índice de masa corporal (IMC) se calcula: _imc = peso en Kg / (altura x altura) en m2_. Escribí una función que calcule IMC. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Comprobá si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.

  - Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
  - Peso bajo: IMC inferior a 18,5
  - Peso normal: IMC de 18,5 a 24,9
  - Sobrepeso: IMC de 25 a 29,9
  - Obeso: IMC es 30 o más

- [ ] Escribí una función llamada **checkSeason**, tomá un parámetro de mes y retorná la estación: Otoño, Invierno, Primavera o Verano.

- [ ] _Math.max_ retorna su argumento más grande. Escribí una función **findMax** que tome tres argumentos y devuelva su máximo sin usar el método _Math.max_.

```javascript
console.log(findMax(0, 10, 5));
10;
console.log(findMax(0, -10, -2));
0;
```

---

## **Ejercicio: Nivel 2**

- [ ] La ecuación lineal se calcula: _ax + by + c = 0_. Escribí una función que calcule el valor de una ecuación lineal, **solveLinEquation**.

- [ ] La ecuación cuadrática se calcula: _ax2 + bx + c = 0_. Escribí una función que calcule el valor o los valores de una ecuación cuadrática, **solveQuadEquation**.

```javascript
console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}
```

- [ ] Declará una función llamada **printArray**. Tomá un array como parámetro e imprimí cada valor del array.

- [ ] Declará una función llamada **showDateTime** que muestre la hora en este formato: _01/08/2020 04:08_ usando el objeto _Date_.

```javascript
showDateTime()
08/01/2020 04:08
```

- [ ] Declará una función llamada **swapValues**. Esta función _intercambia_ el valor de _x_ a _y_.

```javascript
swapValues(3, 4); // x => 4, y=>3
swapValues(4, 5); // x = 5, y = 4
```

- [ ] Declará una función llamada **reverseArray**. Toma un array como parámetro y retorna el array invertido (no uses el método _reverse()_).

```javascript
console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
//['C', 'B', 'A']
```

- [ ] Declará una función llamada **capitalizeArray**. Toma un array como parámetro y retorna el array en mayúsculas.

- [ ] Declará una función llamada **addItem**. Toma un elemento como parámetro y retorna un array después de agregar un elemento.

- [ ] Declará una función **removeItem**. Toma como parámetro un index y retorna un array después de eliminar el elemento con ese index.

- [ ] Declará una función **sumOfNumbers**. Toma un parámetro numérico y suma todos los números en ese rango.

- [ ] Declará una función **sumOfOdds**. Toma un parámetro numérico y suma todos los números impares en ese rango.

- [ ] Declará una función **sumOfEven**. Toma un parámetro numérico y suma todos los números pares en ese rango.

- [ ] Declará una función **evensAndOdds**. Toma un entero positivo como parámetro y cuenta el número de pares e impares en el número.

```javascript
evensAndOdds(100);
El número de impares son 50.
El número de pares es 51.
```

- [ ] Escribí una función que tome cualquier número de argumentos y retorne la suma de los argumentos.

```javascript
sum(1, 2, 3); // -> 6
sum(1, 2, 3, 4); // -> 10
```

- [ ] Escribí una función **randomUserIp** que genere una _IP_ de usuario aleatoria.

- [ ] Escribí una función **randomMacAddress** que genere una dirección _MAC_ aleatoria.

- [ ] Declará una función **randomHexNumberGenerator**. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna dicho número.

```javascript
console.log(randomHexNumberGenerator());
("#ee33df");
```

- [ ] Declará una función **userIdGenerator**. Cuando se llama a esta función, genera un ID de 7 caracteres. La función devuelve dicho ID.

```javascript
console.log(userIdGenerator());
41XTDbE
```

---

## **Ejercicio: Nivel 3**

- [ ] Modificá la función **userIdGenerator**. Declará una función **userIdGeneratedByUser**. No toma ningún parámetro pero toma dos entradas usando _prompt()_. Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.

```javascript
userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
```

- [ ] Escribí una función **rgbColorGenerator** que genera colores RGB.

```javascript
rgbColorGenerator();
rgb(125, 244, 255);
```

- [ ] Escribí una función **arrayOfHexColors** que retorna cualquier cantidad de colores hexadecimales en un array.

- [ ] Escribí una función **arrayOfRgbColors** que retorna cualquier cantidad de colores RGB en un array.

- [ ] Escribí una función **convertHexToRgb** que convierta el color hexadecimal a RGB y retorna un color RGB.

- [ ] Escribí una función **convertRgbToHex** que convierta RGB a color hexadecimal y retorna un color hex.

- [ ] Escribí una función **generateColors** que pueda generar cualquier número de colores hex o RGB.

```javascript
console.log(generateColors("hex", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hex", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
```

- [ ] Llamá a tu función **shuffleArray**, que toma un array como parámetro y devuelve un array mezclado.

- [ ] Llamá a tu función **factorial**, que toma un número entero como parámetro y devuelve un factorial del número.

- [ ] Llamá a tu función **isEmpty**, que toma un parámetro y verifica si está vacío o no.

- [ ] Llamá a tu función **sum**, que toma cualquier cantidad de argumentos y devuelve la suma.

- [ ] Escribí una función **sumOfArrayItems**, que toma un array como parámetro y devuelve la suma de todos los elementos. Comprobá si todos los elementos del array son de tipo numérico. Si no, dá una respuesta razonable.

- [ ] Escribí una función **average**, que toma un array como parámetro y retorna el promedio de los elementos. Comprobá si todos los elementos del array son de tipo numérico. Si no, dá una respuesta adecuada.

- [ ] Escribí una función **modifyArray** que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'.

```javascript
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'
```

- [ ] Escribí una función **isPrime**, que verifica si un número es primo.

- [ ] Escribí una función que verifique si todos los elementos de un array son únicos.

- [ ] Escribí una función que verifique si todos los elementos de un array son del mismo tipo de dato.

- [ ] El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto $ o \_. Escribí una función **isValidVariable** que verifique si una variable es válida o inválida.

- [ ] Escribí una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.

```javascript
sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)];
```

- [ ] Escribí una función **reverseCountries**, toma el array **countries**, primero copia el array y devuelve el array original invertido.
