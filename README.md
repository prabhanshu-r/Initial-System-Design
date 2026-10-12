# JavaScript Essentials

## Type Coercion
- Implicit Type Conversion
- Explicit Type Conversion

## Variable Declarations
- `const`
- `let`

---

## Operators

### Arithmetic Operators
- `+`
- `-`
- `*`
- `/`
- `%`
- `**`

### Assignment Operators
- `=`
- `+=`
- `-=`
- `*=`
- `/=`

### Comparison Operators
- `==`
- `===`
- `!=`
- `!==`
- `>`
- `<`
- `>=`
- `<=`

### Logical Operators
- `&&`
- `||`
- `!`

### Ternary Operator

```js
const result = age >= 18 ? "Adult" : "Minor";
```

### Nullish Coalescing Operator (`??`)

```js
let username = null;
console.log(username ?? "Guest");
```

### Optional Chaining (`?.`)

```js
const user = {};

console.log(user.address?.city);
```

### Typeof Operator

```js
console.log(typeof "Hello"); // string
```

### Destructuring

```js
const { constrainedMemory } = require("node:process");
```

---

## Conditionals

### Switch Statement

```js
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;

  default:
    console.log("Other day");
}
```

---

## Loops

### for...of

```js
const fruits = ["Apple", "Banana"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

### for...in

```js
const user = {
  name: "John",
  age: 25,
};

for (const key in user) {
  console.log(key, user[key]);
}
```

### forEach()

```js
const nums = [1, 2, 3];

nums.forEach((num) => {
  console.log(num);
});
```

---

## Arrow Functions

```js
const add = (a, b) => a + b;

console.log(add(2, 3));
```

---

## Arrays and Their Methods

### map()

```js
const doubled = [1, 2, 3].map(num => num * 2);
```

### filter()

```js
const even = [1, 2, 3, 4].filter(num => num % 2 === 0);
```

### reduce()

```js
const sum = [1, 2, 3].reduce((acc, num) => acc + num, 0);
```

### find()

```js
const result = [1, 2, 3].find(num => num > 1);
```

### some()

```js
const hasEven = [1, 2, 3].some(num => num % 2 === 0);
```

### every()

```js
const allPositive = [1, 2, 3].every(num => num > 0);
```

### forEach()

```js
[1, 2, 3].forEach(num => console.log(num));
```

### sort()

```js
const nums = [3, 1, 2];
nums.sort((a, b) => a - b);
```

---

## Objects

```js
const person = {
  name: "John",
  age: 25,
};

console.log(person.name);
```

---

## Strings and Template Literals

### String

```js
const name = "John";
```

### Template Literal

```js
const name = "John";

console.log(`Hello, ${name}!`);
```

---

## Truthy and Falsy Values

### Falsy Values

```js
false
0
-0
0n
""
null
undefined
NaN
```

### Truthy Values

```js
"Hello"
[]
{}
1
true
```

### null vs undefined

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```