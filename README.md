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

# JavaScript Intermediate Concepts (Backend-Focused)

These concepts are commonly used in real-world Node.js and backend development.

---

# 1. Scope, Closures, and Hoisting

## Scope

Determines where variables are accessible.

### Global Scope

```js
const name = "John";

function greet() {
  console.log(name);
}
```

### Function Scope

```js
function test() {
  let age = 25;
}

console.log(age); // Error
```

### Block Scope

```js
if (true) {
  let city = "Delhi";
}

console.log(city); // Error
```

---

## Closures

A closure allows a function to access variables from its outer scope even after the outer function has finished executing.

```js
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
```

---

## Hoisting

JavaScript moves declarations to the top of their scope before execution.

### var

```js
console.log(a);

var a = 10;
```

Equivalent to:

```js
var a;

console.log(a);

a = 10;
```

Output:

```txt
undefined
```

### let and const

```js
console.log(a);

let a = 10;
```

Output:

```txt
ReferenceError
```

---

# 2. this, call(), apply(), bind(), and Arrow Functions

## this

Refers to the object that is currently executing a function.

```js
const user = {
  name: "John",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

Output:

```txt
John
```

---

## call()

Invokes a function with a specific `this`.

```js
function greet() {
  console.log(this.name);
}

const user = { name: "John" };

greet.call(user);
```

---

## apply()

Same as `call()` but arguments are passed as an array.

```js
function introduce(city) {
  console.log(this.name, city);
}

introduce.apply({ name: "John" }, ["Delhi"]);
```

---

## bind()

Returns a new function with bound `this`.

```js
function greet() {
  console.log(this.name);
}

const user = { name: "John" };

const fn = greet.bind(user);

fn();
```

---

## Arrow Functions and this

Arrow functions do not have their own `this`.

```js
const user = {
  name: "John",

  greet() {
    const show = () => {
      console.log(this.name);
    };

    show();
  },
};

user.greet();
```

Output:

```txt
John
```

---

# 3. Prototypes, Classes, and Inheritance

## Prototype

Every JavaScript object has a prototype.

```js
const user = {
  name: "John",
};

console.log(user.toString());
```

`toString()` comes from `Object.prototype`.

---

## Classes

```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const user = new User("John");

user.greet();
```

---

## Inheritance

```js
class User {
  greet() {
    console.log("Hello");
  }
}

class Admin extends User {}

const admin = new Admin();

admin.greet();
```

---

## Getter

```js
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}
```

---

## Setter

```js
class User {
  set name(value) {
    this._name = value;
  }
}
```

---

## Private Fields

```js
class User {
  #password;

  constructor(password) {
    this.#password = password;
  }
}
```

---

# 4. ES Modules and CommonJS

## CommonJS

Used traditionally in Node.js.

### Export

```js
module.exports = add;
```

### Import

```js
const add = require("./math");
```

---

## ES Modules (ESM)

### Export

```js
export const add = (a, b) => a + b;
```

### Import

```js
import { add } from "./math.js";
```

---

## Default Export

```js
export default add;
```

```js
import add from "./math.js";
```

---

# 5. Error Handling

## try / catch

```js
try {
  JSON.parse("{");
} catch (error) {
  console.log(error.message);
}
```

---

## finally

Always runs.

```js
try {
  console.log("Try");
} catch (error) {
  console.log(error);
} finally {
  console.log("Always runs");
}
```

---

## Throwing Errors

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}
```

---

## Custom Error Class

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
```

---

## Throw vs Return

### Return Error

```js
return {
  error: "Invalid input",
};
```

### Throw Error

```js
throw new Error("Invalid input");
```

---

# 6. JSON

## JSON.parse()

Converts JSON string to JavaScript object.

```js
const user = JSON.parse('{"name":"John"}');

console.log(user.name);
```

---

## JSON.stringify()

Converts object into JSON string.

```js
const user = {
  name: "John",
};

console.log(JSON.stringify(user));
```

---

## Pitfalls

### Dates Become Strings

```js
JSON.stringify(new Date());
```

---

### undefined is Removed

```js
JSON.stringify({
  name: "John",
  age: undefined,
});
```

Output:

```json
{
  "name": "John"
}
```

---

### Circular References

```js
const user = {};

user.self = user;

JSON.stringify(user);
```

Output:

```txt
TypeError
```

---

# 7. Map, Set, WeakMap, Optional Chaining, Nullish Coalescing

## Map

Key-value pairs.

```js
const map = new Map();

map.set("name", "John");

console.log(map.get("name"));
```

---

## Set

Stores unique values.

```js
const set = new Set([1, 1, 2, 2, 3]);

console.log(set);
```

Output:

```txt
Set(3) {1, 2, 3}
```

---

## WeakMap

Only allows object keys.

```js
const wm = new WeakMap();

const user = {};

wm.set(user, "secret");
```

---

## Optional Chaining

```js
const user = {};

console.log(user.address?.city);
```

---

## Nullish Coalescing

```js
let username = null;

console.log(username ?? "Guest");
```

---

# 8. Date Handling

## Native Date

```js
const now = new Date();

console.log(now);
```

---

## Current Date

```js
console.log(new Date().toISOString());
```

---

## Formatting Date

```js
const date = new Date();

console.log(date.toLocaleDateString());
```

---

## Why Use Libraries?

Native Date API can be difficult for:

- Formatting
- Time zones
- Parsing
- Date arithmetic

Popular libraries:

### date-fns

```js
import { addDays } from "date-fns";

console.log(addDays(new Date(), 7));
```

### dayjs

```js
import dayjs from "dayjs";

console.log(dayjs().format("YYYY-MM-DD"));
```

---

# Quick Revision Checklist

- [ ] Scope
- [ ] Closures
- [ ] Hoisting
- [ ] this keyword
- [ ] call()
- [ ] apply()
- [ ] bind()
- [ ] Arrow Functions and this
- [ ] Prototypes
- [ ] Classes
- [ ] Inheritance
- [ ] Getters and Setters
- [ ] Private Fields (#)
- [ ] CommonJS (require/module.exports)
- [ ] ES Modules (import/export)
- [ ] try/catch/finally
- [ ] Custom Errors
- [ ] JSON.parse()
- [ ] JSON.stringify()
- [ ] Map
- [ ] Set
- [ ] WeakMap
- [ ] Optional Chaining (?.)
- [ ] Nullish Coalescing (??)
- [ ] Date Handling
- [ ] date-fns
- [ ] dayjs