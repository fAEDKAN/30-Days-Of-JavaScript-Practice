# 📔 Día 8: Objects.

## Objeto

Todo puede ser un objeto, los objetos tienen propiedades, las propiedades tienen valores, por lo que un objeto es un _key-value pair_ (par clave-valor). El orden de la clave no está reservado o no hay orden.

---

### Crear un objeto vacío

```javascript
const person = {};
```

---

### Crear un objeto con valores

El objeto `persona` tiene las propiedades `firstName`, `lastName`, `age`, `location`, `skills` e `isMarried`. El valor de las propiedades o _keys_ puede ser un string, un number, un boolean, un object, null, undefined o una function.

```javascript
const person = {
  firstName: "Elsa",
  lastName: "Pallito",
  age: 102,
  country: "Antigua & Barbuda",
  city: "Saint John",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
console.log(person);
```

---

### Obtener valores de un objeto

Podemos acceder a los valores del objeto utilizando dos métodos:

- Usando `.` seguido del nombre de la clave si el nombre de la clave es de una sola palabra.
- Utilizando `[]` y `""`.

```javascript
const person = {
  firstName: "Elsa",
  lastName: "Pallito",
  age: 102,
  country: "Antigua & Barbuda",
  city: "Saint John",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
};
// Acceder a los valores con un .
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location); // undefined
// Acceder usando [] y ""
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["location"]); // undefined
```

---

### Crear métodos de objetos

Ahora, el objeto `persona` tiene las propiedades `getFullName`, que es una función dentro del objeto y lo llamamos un método de dicho objeto. La palabra clave `this` se refiere al objeto mismo. Podemos usar `this` para acceder a los valores de diferentes propiedades.

```javascript
const person = {
  firstName: "Elsa",
  lastName: "Pallito",
  age: 102,
  country: "Antigua & Barbuda",
  city: "Saint John",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.getFullName());
// Elsa Pallito
```

---

### Establecer una nueva clave para un objeto

Un objeto es una estructura de datos mutable y podemos modificar el contenido de un objeto después de su creación.

```javascript
const person = {
  firstName: "Elsa",
  lastName: "Patuki",
  age: 102,
  country: "Azerbaijan",
  city: "Baku",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
person.nationality = "African";
person.country = "Antigua & Barbuda";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = true;

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nShe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};
console.log(person);
console.log(person.getPersonInfo());
// Elsa Patuki is a teacher.
// She lives in Azerbaijan.
// She teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.
```

---

### Métodos de los objetos

Existen distintos métodos para manipular un objeto.

#### 1. Object.assign():

Copia propiedades de uno o más objetos a un objeto destino.

```javascript
Object.assign(destino, ...fuentes);
```

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }
```

#### 2. Object.keys():

Devuelve un array con los nombres de las propiedades enumerables propias.

```javascript
Object.keys(obj);
```

```javascript
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
console.log(keys); // ["a", "b", "c"]
```

#### 3. Object.values():

Devuelve un array con los valores de las propiedades enumerables propias.

```javascript
Object.values(obj);
```

```javascript
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
console.log(values); // [1, 2, 3]
```

#### 4. Object.entries():

Devuelve un array de pares `[key, value]` de las propiedades enumerables propias.

```javascript
Object.entries(obj);
```

```javascript
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
console.log(entries); // [["a", 1], ["b", 2], ["c", 3]]
```

#### 5. hasOwnProperty():

Es una función disponible en todos los objetos de **JS**, ya que se hereda del objeto prototipo `Object.prototype`. Se usa para comprobar si un objeto tiene una propiedad específica como su propia propiedad, es decir, no hereda su prototipo.

```javascript
obj.hasOwnProperty(prop);
```

```javascript
const obj = {
  name: "Elsa",
  age: 102,
};
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("age")); // true
console.log(obj.hasOwnProperty("toString")); // false
```
