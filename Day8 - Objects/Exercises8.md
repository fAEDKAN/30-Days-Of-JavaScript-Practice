# **Día 8: Ejercicios**

## **Ejercicio: Nivel 1**

- [ ] Creá un objeto vacío llamado **dog**.

- [ ] Imprimí el objeto **dog** en la consola.

- [ ] Agregá las propiedades _name_, _legs_, _color_, _age_ y _bark_ para el objeto **dog**. La propiedad de _bark_ es un método que retorna "woof woof".

- [ ] Obtené _name_, _legs_, _color_, _age_ y el valor de _bark_ del objeto **dog**.

- [ ] Establecé nuevas propiedades para el objeto **dog**: _breed_, _getDogInfo_.

---

## **Ejercicio: Nivel 2**

[ ] Encontrá a la persona que tenga muchas habilidades en el objeto **users**.

[ ] Contá los usuarios que iniciaron sesión y contá los usuarios que tengan más de 50 puntos.

```javascript
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
```

- [ ] Encontrá personas que sean MERN stack developers a partir del objeto **users**.

- [ ] Establecé tu nombre en el objeto, sin modificar el objeto **users** original.

- [ ] Obtené todas las claves o propiedades del objeto **users**.

- [ ] Obtené todos los valores del objeto **users**.

- [ ] Usá el objeto **countries** para imprimir el nombre de un país, capital, poblaciones e idiomas.

---

## **Ejercicio: Nivel 3**

- [ ] Crea un objeto literal llamado **personAccount**. Tiene propiedades _firstName_, _lastName_, _incomes_, _expenses_ y tiene métodos _totalIncome_, _totalExpense_, _accountInfo_, _addIncome_, _addExpense_ y _accountBalance_. Los ingresos son un conjunto de ingresos y su descripción, y los gastos son un conjunto de gastos y su descripción.

**Las preguntas 2, 3 y 4 se basan en los 2 arrays siguientes: users - products!**

```javascript
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Pro-caster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
```

Imaginá que obtenés la colección de **users** anterior de una base de datos MongoDB.

- [ ] Creá una función llamada **signUp** que permita al usuario agregarse a la colección. Si el usuario existe, informale que ya tiene cuenta.

- [ ] Creá una función llamada **signIn** que permita al usuario iniciar sesión en la aplicación.

El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades.

- [ ] Creá una función llamada **rateProduct** que califique el producto.
- [ ] Creá una función llamada **averageRating** que calcule la calificación promedio de un producto.

- [ ] Creá una función llamada **likeProduct**, esta función ayudará a dar me gusta al producto si no está "likeado" y eliminar me gusta si ya está "likeado".
