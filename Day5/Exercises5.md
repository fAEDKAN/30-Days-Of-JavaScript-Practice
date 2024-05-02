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

- [x] Declara un array vacío.

- [x] Declara un array con más de 5 elementos.

- [x] Encuentra la longitud de tu array.

- [x] Obtenga el primer elemento, el intermedio y el último del array.

- [x] Declare un array llamado **mixedDataTypes**, coloque diferentes tipos de datos y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.

- [x] Declare una variable de array con el nombre **itCompanies** y asigne valores iniciales _Facebook_, _Google_, _Microsoft_, _Apple_, _IBM_, _Oracle_ y _Amazon_

- [x] Imprima el array usando **console.log()**.

- [x] Imprima el número de empresas en el array.

- [x] Imprima la primera empresa, la intermedia y la última.

- [x] Imprima cada empresa.

- [x] Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.

- [x] Imprima el array como una oración: **Facebook, Google, Microsoft, IBM, Oracle y Amazon son grandes empresas IT**.

- [x] Compruebe si existe una determinada empresa en el array itCompanies. Si existe, devolver el nombre de la empresa, caso contrario devolver **no encontrada**.

- [x] Filtrar empresas que tengan más de una **'o'** sin el método **filter**.

- [x] Ordene el array usando el método **sort()**.
- [x] Invertir el array usando el método **reverse()**.
- [x] Separe las primeras 3 empresas del array.
- [x] Separe las últimas 3 empresas del array.
- [x] Separe la empresa o empresas del medio del array.
- [x] Eliminar la primera empresa del array.
- [x] Eliminar la última empresa del array.
- [x] Eliminar la empresa o empresas IT intermedias del array.
- [x] Eliminar todas las empresas.

---

## **Ejercicio: Nivel 2**

- [x] Cree un archivo **countries.js** separado y almacene el array de países en este archivo, cree un archivo **web_techs.js** separado y almacene el array webTechs en este archivo. Acceda a ambos archivos en el archivo main.js.
- [x] Primero elimine todas las puntuaciones, cambie el string a un array y cuente el número de palabras en el array.
      let text =
      'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
      console.log(words);
      console.log(words.length);
      ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
      13
- [x] En el siguiente carrito de compras agregue, elimine, edite artículos.
      const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'] - Agregue "Meat" al principio del carrito si aún no se ha agregado. - Agregue "Sugar" al final del carrito si aún no se ha agregado. - Elimine "Honey" si es alérgico a la miel. - Modifique "Tea" por "Green Tea".
- [x] En el array de países, verifique si "Etiopía" existe; si existe, imprima "ETIOPÍA". Si no existe agréguelo a la lista de países.
- [x] En el array **webTechs**, verifique si **Sass** existe y, si existe, imprima **"Sass es un pre-proceso de CSS**. Si no existe, agregue **Sass** e imprima el array.
- [x] Concatene las dos variables siguientes y guárdelas en una variable **fullStack**.
      const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
      const backEnd = ['Node','Express', 'MongoDB']

      console.log(fullStack)
      ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

---

## **Ejercicio: Nivel 3**

- [ ] Lo siguiente es un array de 10 edades de estudiantes:
      const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
  - Ordene el array y encuentre la edad mínima y máxima.
  - Encuentre la edad mediana (un elemento del medio o dos elementos del medio divididos por dos -promedio-).
  - Encuentre la edad promedio (todas las edades divididas por la cantidad de edades).
  - Encuentre el rango de edades (máximo menos mínimo).
  - Compare el valor de (min - promedio) y (max - promedio), use el método **abs()**.
- [ ] Corte los primeros 10 países del array de países.
- [ ] Encuentre los países del medio.
- [ ] Divida el array de países en dos matrices iguales si es par. Si el array no es par, un país más para la primera mitad.
