# 📔 Día 8: High Order Functions.

## Función de orden superior

Son funciones que toman otra función como parámetro o retorna una función como valor. La función pasada como parámetro se llama _callback_.

### Callback

Es una función que se pasa a otra como argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

```javascript
// función callback, el nombre puede ser cualquiera
const callback = (n) => {
  return n ** 2;
};

// función que toma otra función como callback
function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 3));
```
