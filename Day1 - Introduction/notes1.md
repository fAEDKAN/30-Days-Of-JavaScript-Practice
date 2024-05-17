# 📔 Día 1: Introducción a JavaScript.

**JavaScript** es un lenguaje usado para darle interactividad a las páginas web, desarrollar apps móviles, apps de escritorio, juegos, y ahora también puede ser usado para _machine learning_ (aprendizaje automático) e _IA_ (inteligencia artificial).

Comentarios en **JS**:

- Una sola línea:

```javascript
// Primer comentario
// Segundo comentario
```

- Multi-línea:

```javascript
/* Este es
  un comentario
  de muchas líneas */
```

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

En **JS**, como en otros lenguajes, hay distintos tipos de datos. Los siguientes son los tipos de datos primitivos: Cadenas de texto (_string_), numéricos, booleans, undefined, null y symbol.

### Números

- **Integers:** Números enteros, negativos, positivos, cero. Ej: ... -2, -1, 0, 1, 2, 3...
- **Floats:** Números decimales. Ej: ... -3.5, -2.25, 0.0, 2.13, 3.79... 