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

# 7. Set, WeakMap

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
# JavaScript Asynchronous Programming (Backend-Focused)

Asynchronous programming is one of the most important concepts in Node.js because JavaScript runs on a single thread. Understanding these concepts will help you write efficient and scalable backend applications.

---

# 1. Event Loop

The Event Loop allows JavaScript to perform non-blocking operations despite being single-threaded.

## Components

### Call Stack

Executes synchronous code.

```js
function one() {
  console.log("One");
}

function two() {
  one();
  console.log("Two");
}

two();
```

Execution Order:

```txt
Call Stack
two()
one()
```

Output:

```txt
One
Two
```

---

### Web APIs / Node APIs

Handle asynchronous operations like:

- setTimeout
- HTTP requests
- File system operations
- Database queries

---

### Microtask Queue

Higher priority queue.

Contains:

- Promise callbacks
- queueMicrotask()

```js
Promise.resolve().then(() => {
  console.log("Microtask");
});
```

---

### Macrotask Queue

Lower priority queue.

Contains:

- setTimeout
- setInterval
- setImmediate

```js
setTimeout(() => {
  console.log("Macrotask");
}, 0);
```

---

## Execution Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

Output:

```txt
Start
End
Promise
Timeout
```

Execution Order:

1. Call Stack
2. Microtask Queue
3. Macrotask Queue

---

# 2. Callbacks and Callback Hell

## Callback

A function passed as an argument to another function.

```js
function greet(name, callback) {
  console.log(`Hello ${name}`);

  callback();
}

greet("John", () => {
  console.log("Welcome");
});
```

---

## Callback Hell

Deeply nested callbacks become difficult to read and maintain.

```js
getUser(userId, (user) => {
  getOrders(user.id, (orders) => {
    getPayment(orders[0], (payment) => {
      console.log(payment);
    });
  });
});
```

Problems:

- Hard to read
- Hard to debug
- Difficult error handling

---

# 3. Promises

A Promise represents a value that may be available now, later, or never.

## Creating a Promise

```js
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
```

---

## then()

Handles successful completion.

```js
promise.then((result) => {
  console.log(result);
});
```

---

## catch()

Handles errors.

```js
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

---

## finally()

Runs regardless of success or failure.

```js
promise
  .finally(() => {
    console.log("Completed");
  });
```

---

## Promise Chaining

```js
Promise.resolve(2)
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => console.log(num));
```

Output:

```txt
12
```

---

# 4. Async / Await

Provides cleaner syntax for working with Promises.

---

## Async Function

```js
async function hello() {
  return "Hello";
}
```

Automatically returns a Promise.

---

## Await

Pauses execution until a Promise resolves.

```js
async function fetchData() {
  const data = await Promise.resolve("Data");

  console.log(data);
}

fetchData();
```

---

## Error Handling with Async/Await

```js
async function getUser() {
  try {
    const user = await fetchUser();

    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}
```

---

# 5. Promise Utility Methods

## Promise.all()

Waits for all promises to succeed.

```js
const results = await Promise.all([
  fetchUsers(),
  fetchPosts(),
  fetchComments(),
]);
```

If one fails:

```txt
Entire Promise.all fails
```

---

## Promise.allSettled()

Waits for all promises regardless of success or failure.

```js
const results = await Promise.allSettled([
  promise1,
  promise2,
  promise3,
]);
```

Output:

```js
[
  { status: "fulfilled" },
  { status: "rejected" },
]
```

---

## Promise.race()

Returns the first completed promise.

```js
const result = await Promise.race([
  fetchApiA(),
  fetchApiB(),
]);
```

---

## Promise.any()

Returns the first successful promise.

```js
const result = await Promise.any([
  promise1,
  promise2,
  promise3,
]);
```

Useful for:

- Multiple API endpoints
- CDN fallbacks
- Redundant services

---

# 6. Parallel vs Sequential Execution

Understanding this is critical for backend performance.

---

## Sequential Execution

Tasks run one after another.

```js
const users = await fetchUsers();
const posts = await fetchPosts();
const comments = await fetchComments();
```

Total Time:

```txt
1s + 1s + 1s = 3s
```

---

## Parallel Execution

Tasks run simultaneously.

```js
const [users, posts, comments] =
  await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments(),
  ]);
```

Total Time:

```txt
1s
```

if all requests take about 1 second.

---

## Common Performance Mistake

Bad:

```js
for (const id of ids) {
  const user = await fetchUser(id);

  console.log(user);
}
```

Better:

```js
const users = await Promise.all(
  ids.map((id) => fetchUser(id))
);

console.log(users);
```

---

# 7. Why Blocking the Event Loop is Dangerous

Node.js uses a single-threaded event loop.

If one task blocks it, all incoming requests wait.

---

## Blocking Example

```js
function heavyTask() {
  let count = 0;

  for (let i = 0; i < 1_000_000_000; i++) {
    count++;
  }

  return count;
}
```

During execution:

- HTTP requests wait
- Database responses wait
- Timers wait
- Entire server becomes slow

---

## Example in Express

```js
app.get("/", (req, res) => {
  heavyTask();

  res.send("Done");
});
```

Every user will wait until `heavyTask()` finishes.

---

## Better Solutions

### Use Worker Threads

```js
const { Worker } = require("worker_threads");
```

For:

- Image processing
- Video processing
- Data analytics
- CPU-intensive calculations

---

### Break Large Tasks Into Chunks

```js
setImmediate(() => {
  processChunk();
});
```

Allows the event loop to continue processing requests.

---

# Async Programming Flow

```txt
Call Stack
    ↓
Node APIs
    ↓
Microtask Queue (Promises)
    ↓
Macrotask Queue (setTimeout)
    ↓
Event Loop
    ↓
Call Stack
```

---

# Important to understand

### Why does Promise execute before setTimeout?

Because Promise callbacks go to the **Microtask Queue**, which has higher priority than the **Macrotask Queue**.

### Difference between Promise.all() and Promise.allSettled()?

- `Promise.all()` fails if any promise fails.
- `Promise.allSettled()` waits for every promise to finish.

### Difference between async/await and .then()?

- Both use Promises internally.
- `async/await` makes asynchronous code look synchronous and is easier to read.

### Why is blocking the event loop dangerous?

Because Node.js handles many requests on one thread. A CPU-heavy task can delay all incoming requests.

# Node.js Essentials

Node.js is a JavaScript runtime built on Chrome's V8 engine. It is designed for scalable, high-performance, and event-driven applications.

---

# 1. How Node.js Works

## Single-Threaded

Node.js executes JavaScript on a single main thread.

```js
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

Output:

```txt
Task 1
Task 2
Task 3
```

---

## Non-Blocking I/O

Node.js does not wait for I/O operations to complete.

```js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("Reading file...");
```

Output:

```txt
Reading file...
<file content>
```

---

## libuv

libuv is the library responsible for:

- Event Loop
- Async I/O
- File System Operations
- Networking
- Thread Pool

```txt
JavaScript
     ↓
Event Loop
     ↓
libuv
     ↓
Operating System
```

---

## Thread Pool

Used for expensive asynchronous operations.

Examples:

- File System (`fs`)
- DNS lookups
- Crypto operations
- Compression

```txt
Default Thread Pool Size = 4
```

Increase size:

```bash
UV_THREADPOOL_SIZE=8
```

---

# 2. Core Modules

Node.js provides built-in modules without installing packages.

---

## fs (File System)

Read and write files.

### Read File

```js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  console.log(data);
});
```

### Write File

```js
fs.writeFile("output.txt", "Hello", (err) => {
  console.log("Written");
});
```

---

## path

Work with file paths.

```js
const path = require("path");

console.log(path.join("users", "profile.txt"));
```

Output:

```txt
users/profile.txt
```

---

## http

Create web servers.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000);
```

---

## crypto

Generate hashes and random values.

```js
const crypto = require("crypto");

const hash = crypto
  .createHash("sha256")
  .update("password")
  .digest("hex");

console.log(hash);
```

---

## os

Get operating system information.

```js
const os = require("os");

console.log(os.platform());
console.log(os.cpus().length);
```

---

## events

Provides EventEmitter functionality.

```js
const events = require("events");
```

---

## url

Parse URLs.

```js
const url = require("url");

const myUrl = new URL(
  "https://example.com/users?id=1"
);

console.log(myUrl.searchParams.get("id"));
```

Output:

```txt
1
```

---

# 3. EventEmitter

EventEmitter is the foundation of many Node.js APIs.

---

## Creating an EventEmitter

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();
```

---

## Listening to Events

```js
emitter.on("userCreated", () => {
  console.log("User Created");
});
```

---

## Emitting Events

```js
emitter.emit("userCreated");
```

Output:

```txt
User Created
```

---

## Passing Data

```js
emitter.on("login", (username) => {
  console.log(`${username} logged in`);
});

emitter.emit("login", "john");
```

Output:

```txt
john logged in
```

---

## Common Use Cases

- Authentication systems
- Logging
- Notifications
- File uploads
- Background jobs

---

# 4. Streams and Buffers

Very important for:

- File uploads
- Video streaming
- Large file processing
- Data pipelines

---

## Buffers

Buffers store binary data.

```js
const buffer = Buffer.from("Hello");

console.log(buffer);
```

Output:

```txt
<Buffer 48 65 6c 6c 6f>
```

---

## Why Buffers?

Computers store:

- Files
- Images
- Videos
- Network packets

as binary data.

---

# Streams

Streams process data in chunks rather than loading everything into memory.

---

## Read Stream

```js
const fs = require("fs");

const readStream =
  fs.createReadStream("large-file.txt");

readStream.on("data", (chunk) => {
  console.log(chunk);
});
```

---

## Write Stream

```js
const writeStream =
  fs.createWriteStream("output.txt");

writeStream.write("Hello");
```

---

## Piping Streams

```js
const fs = require("fs");

const read =
  fs.createReadStream("input.txt");

const write =
  fs.createWriteStream("output.txt");

read.pipe(write);
```

Benefits:

- Faster
- Less memory usage
- Better performance

---

## Stream Types

### Readable

```js
fs.createReadStream();
```

### Writable

```js
fs.createWriteStream();
```

### Duplex

Can read and write.

Example:

```txt
Socket Connections
```

### Transform

Modifies data while streaming.

Example:

```txt
Compression
Encryption
```

---

# 5. Environment Variables

Environment variables store configuration outside code.

Examples:

- API Keys
- Database URLs
- Secrets
- Port Numbers

---

## process.env

```js
console.log(process.env.NODE_ENV);
```

---

## Setting Variables

Linux/macOS:

```bash
PORT=3000 node app.js
```

Windows:

```bash
set PORT=3000 && node app.js
```

---

## dotenv

Install:

```bash
npm install dotenv
```

---

### .env

```env
PORT=3000
DB_URL=mongodb://localhost
JWT_SECRET=mysecret
```

---

### Usage

```js
require("dotenv").config();

console.log(process.env.PORT);
```

---

# 6. npm, pnpm, package.json, Semantic Versioning

---

## npm

Node Package Manager.

Initialize project:

```bash
npm init -y
```

Install package:

```bash
npm install express
```

---

## pnpm

Alternative package manager.

Install:

```bash
npm install -g pnpm
```

Usage:

```bash
pnpm add express
```

Advantages:

- Faster
- Uses less disk space

---

## package.json

Project metadata and dependencies.

```json
{
  "name": "backend-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js"
  }
}
```

---

## Semantic Versioning

Format:

```txt
MAJOR.MINOR.PATCH
```

Example:

```txt
1.4.2
```

### PATCH

```txt
1.4.2 → 1.4.3
```

Bug fixes.

---

### MINOR

```txt
1.4.2 → 1.5.0
```

New features.

---

### MAJOR

```txt
1.4.2 → 2.0.0
```

Breaking changes.

---

## Dependency Symbols

### Exact Version

```json
"express": "4.18.2"
```

---

### Caret (^)

```json
"express": "^4.18.2"
```

Allows:

```txt
4.x.x
```

---

### Tilde (~)

```json
"express": "~4.18.2"
```

Allows:

```txt
4.18.x
```

---

## Lockfiles

Ensure identical installs.

npm:

```txt
package-lock.json
```

pnpm:

```txt
pnpm-lock.yaml
```

Always commit lockfiles.

---

# 7. Worker Threads, Child Processes, and Clustering

Used for CPU-intensive tasks.

---

## Worker Threads

Run JavaScript on separate threads.

```js
const {
  Worker,
} = require("worker_threads");
```

Use for:

- Image processing
- Video processing
- Data analysis
- Heavy calculations

---

## Child Processes

Execute external programs.

```js
const {
  exec,
} = require("child_process");

exec("dir", (err, stdout) => {
  console.log(stdout);
});
```

Use for:

- Running scripts
- CLI tools
- System commands

---

## Cluster

Creates multiple Node.js processes.

```js
const cluster = require("cluster");
```

Example:

```txt
CPU Cores = 8

Worker 1
Worker 2
Worker 3
Worker 4
...
```

Benefits:

- Better CPU utilization
- Higher throughput

---

# 8. Graceful Shutdown and SIGTERM

A server should shut down cleanly.

Reasons:

- Prevent data loss
- Finish active requests
- Close database connections

---

## SIGTERM

Common shutdown signal.

```js
process.on("SIGTERM", () => {
  console.log("Shutting down...");
});
```

---

## Graceful Shutdown Example

```js
process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server closed");

    process.exit(0);
  });
});
```

---

## Database Cleanup

```js
process.on("SIGTERM", async () => {
  await mongoose.connection.close();

  process.exit(0);
});
```

---

## Production Scenario

When running:

```txt
Docker
Kubernetes
PM2
AWS
Azure
```

a SIGTERM signal is generally sent before stopping your application.

Handling it properly prevents interrupted requests and corrupted connections.

---

# Request Lifecycle in Node.js

```txt
Client Request
      ↓
HTTP Server
      ↓
Event Loop
      ↓
libuv
      ↓
OS Resources
      ↓
Callback / Promise
      ↓
Response Sent
```

---

# Important to understand

### Why is Node.js called single-threaded?

JavaScript execution happens on a single main thread, while libuv uses background threads for I/O operations.

### What is the difference between process and thread?

- Process = Independent application instance.
- Thread = Lightweight execution unit inside a process.

### Why use streams instead of readFile()?

Streams process data in chunks, reducing memory consumption and improving performance.

### When should you use Worker Threads?

For CPU-bound tasks that would otherwise block the event loop.

### Why commit lockfiles?

To ensure all developers and deployment environments install exactly the same dependency versions.

# TypeScript for Backend Engineers

TypeScript is JavaScript with static typing. It helps catch bugs at compile time, improves IDE support, and makes large backend applications easier to maintain.

---

# Basics

---

# 1. Why TypeScript?

Benefits:

- Static Typing
- Compile-Time Error Checking
- Better Autocomplete
- Safer Refactoring
- Improved Maintainability

---

## TypeScript Compilation

TypeScript cannot run directly in Node.js.

```txt
TypeScript (.ts)
       ↓
     tsc
       ↓
JavaScript (.js)
       ↓
     Node.js
```

Compile:

```bash
npx tsc index.ts
```

---

## tsconfig.json

Configuration file for TypeScript.

Create:

```bash
npx tsc --init
```

Example:

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

---

# 2. Primitive Types

## String

```ts
let username: string = "John";
```

---

## Number

```ts
let age: number = 25;
```

---

## Boolean

```ts
let isAdmin: boolean = true;
```

---

## Null and Undefined

```ts
let value: null = null;
let data: undefined = undefined;
```

---

# any vs unknown vs never

---

## any

Disables type checking.

```ts
let value: any;

value = "hello";
value = 123;
value = true;
```

Avoid whenever possible.

---

## unknown

Safer alternative.

```ts
let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

## never

Function never returns.

```ts
function throwError(): never {
  throw new Error("Error");
}
```

---

# Arrays

```ts
const users: string[] = [
  "John",
  "Alice",
];
```

Alternative:

```ts
const users: Array<string> = [
  "John",
  "Alice",
];
```

---

# Tuples

Fixed-length arrays.

```ts
const user: [string, number] = [
  "John",
  25,
];
```

---

# 3. Type Annotations vs Type Inference

---

## Type Annotation

Explicitly defined.

```ts
let username: string = "John";
```

---

## Type Inference

TypeScript infers automatically.

```ts
let username = "John";
```

TypeScript understands:

```ts
let username: string;
```

---

# 4. Interfaces vs Type Aliases

---

## Interface

```ts
interface User {
  id: number;
  name: string;
}
```

Usage:

```ts
const user: User = {
  id: 1,
  name: "John",
};
```

---

## Type Alias

```ts
type User = {
  id: number;
  name: string;
};
```

---

## When to Use Which?

Interfaces:

```ts
interface User {}
```

Best for:

- API contracts
- Classes
- Object structures

Types:

```ts
type Status =
  | "pending"
  | "success";
```

Best for:

- Unions
- Advanced type composition

---

# 5. Union, Intersection, and Literal Types

---

## Union Types

A value can be one of multiple types.

```ts
let id: string | number;

id = 123;
id = "abc";
```

---

## Intersection Types

Combine multiple types.

```ts
type User = {
  name: string;
};

type Admin = {
  role: string;
};

type AdminUser =
  User & Admin;
```

Result:

```ts
{
  name: string;
  role: string;
}
```

---

## Literal Types

```ts
type Status =
  | "success"
  | "error"
  | "pending";
```

Usage:

```ts
let status: Status;

status = "success";
```

---

# 6. Enums and as const

---

## Enums

```ts
enum Role {
  ADMIN,
  USER,
}
```

Usage:

```ts
const role = Role.ADMIN;
```

---

## String Enum

```ts
enum Status {
  SUCCESS = "success",
  FAILED = "failed",
}
```

---

## as const

Creates immutable literal values.

```ts
const ROLES = {
  ADMIN: "admin",
  USER: "user",
} as const;
```

Type:

```ts
{
 readonly ADMIN: "admin";
 readonly USER: "user";
}
```

Modern TypeScript often prefers `as const` over enums.

---

# 7. Optional and Readonly Properties

---

## Optional Property

```ts
interface User {
  name: string;
  age?: number;
}
```

Valid:

```ts
{
  name: "John";
}
```

---

## Readonly Property

```ts
interface User {
  readonly id: number;
}
```

Cannot modify:

```ts
user.id = 10;
```

Output:

```txt
Type Error
```

---

# 8. Function Typing

---

## Parameters

```ts
function add(
  a: number,
  b: number
): number {
  return a + b;
}
```

---

## Return Types

```ts
function greet(): string {
  return "Hello";
}
```

---

## Function Type

```ts
const multiply:
  (a: number, b: number) => number =
    (a, b) => a * b;
```

---

## Function Overloads

```ts
function format(
  value: string
): string;

function format(
  value: number
): string;

function format(
  value: string | number
) {
  return String(value);
}
```

---

# Intermediate

---

# 9. Generics

Generics create reusable type-safe code.

---

## Generic Function

```ts
function identity<T>(
  value: T
): T {
  return value;
}
```

Usage:

```ts
identity<string>("John");

identity<number>(100);
```

---

## Generic Interface

```ts
interface ApiResponse<T> {
  data: T;
  success: boolean;
}
```

Usage:

```ts
interface User {
  id: number;
}

const response:
  ApiResponse<User> = {
    data: {
      id: 1,
    },
    success: true,
  };
```

---

## Generic Class

```ts
class Repository<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }
}
```

---

## Generic Constraints

```ts
interface HasId {
  id: number;
}

function getId<T extends HasId>(
  obj: T
) {
  return obj.id;
}
```

---

# 10. Type Narrowing

---

## typeof

```ts
if (typeof value === "string") {
  console.log(value);
}
```

---

## instanceof

```ts
if (error instanceof Error) {
  console.log(error.message);
}
```

---

## in Operator

```ts
if ("role" in user) {
  console.log(user.role);
}
```

---

## Type Guards

```ts
function isString(
  value: unknown
): value is string {
  return typeof value === "string";
}
```

---

## Discriminated Unions

```ts
type Success = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type Response =
  | Success
  | ErrorResponse;
```

---

# 11. Utility Types

---

## Partial

```ts
type UserUpdate =
  Partial<User>;
```

---

## Required

```ts
type StrictUser =
  Required<User>;
```

---

## Pick

```ts
type UserSummary =
  Pick<User, "id" | "name">;
```

---

## Omit

```ts
type PublicUser =
  Omit<User, "password">;
```

---

## Record

```ts
type Roles = Record<
  string,
  string
>;
```

---

## ReturnType

```ts
function getUser() {
  return {
    id: 1,
  };
}

type User =
  ReturnType<typeof getUser>;
```

---

## Awaited

```ts
type User =
  Awaited<
    ReturnType<typeof fetchUser>
  >;
```

---

# 12. Classes

---

## Access Modifiers

### public

```ts
public name: string;
```

---

### private

```ts
private password: string;
```

---

### protected

```ts
protected role: string;
```

---

## Implementing Interfaces

```ts
interface User {
  name: string;
}

class Admin
  implements User {
  constructor(
    public name: string
  ) {}
}
```

---

## Abstract Classes

```ts
abstract class Database {
  abstract connect(): void;
}
```

---

# 13. Modules and Declaration Files

---

## Export

```ts
export const add = () => {};
```

---

## Import

```ts
import { add } from "./utils";
```

---

## Declaration Files

```txt
types/
  custom.d.ts
```

Example:

```ts
declare module "my-lib";
```

---

## @types

Install Type Definitions:

```bash
npm install -D @types/express
```

Examples:

```bash
@types/node
@types/express
@types/jest
```

---

# 14. Strict Mode

Always enable:

```json
{
  "strict": true
}
```

---

## Important Strict Flags

### strictNullChecks

```ts
let name: string = null;
```

Error.

---

### noImplicitAny

```ts
function test(data) {}
```

Error.

---

### noUnusedLocals

Detects unused variables.

---

### noUnusedParameters

Detects unused parameters.

---

### noImplicitReturns

Forces explicit returns.

---

# 15. Typing Async Code

---

## Promise<T>

```ts
async function getUser():
  Promise<string> {
  return "John";
}
```

---

## Promise with Object

```ts
interface User {
  id: number;
}

async function getUser():
  Promise<User> {
  return {
    id: 1,
  };
}
```

---

# 16. Typing Express

---

## Request

```ts
import {
  Request,
  Response,
} from "express";
```

---

## Route Params

```ts
interface Params {
  id: string;
}

app.get(
  "/users/:id",
  (
    req: Request<Params>,
    res
  ) => {}
);
```

---

## Request Body

```ts
interface CreateUserDto {
  name: string;
  email: string;
}
```

```ts
Request<
  {},
  {},
  CreateUserDto
>
```

---

# Advanced

---

# 17. Mapped Types

Transform existing types.

```ts
type ReadonlyUser = {
  readonly [K in keyof User]:
    User[K];
};
```

---

# 18. Conditional Types

```ts
type IsString<T> =
  T extends string
    ? true
    : false;
```

---

# 19. infer

Extract types.

```ts
type Return<T> =
  T extends (
    ...args: any[]
  ) => infer R
    ? R
    : never;
```

---

# 20. Template Literal Types

```ts
type Method =
  "GET" | "POST";

type Route =
  `${Method}_USER`;
```

Result:

```ts
"GET_USER"
"POST_USER"
```

---

# 21. keyof, typeof, Indexed Access Types

---

## keyof

```ts
type UserKeys =
  keyof User;
```

Result:

```ts
"id" | "name"
```

---

## typeof

```ts
const user = {
  id: 1,
};

type User = typeof user;
```

---

## Indexed Access

```ts
type UserId =
  User["id"];
```

---

# 22. Decorators (NestJS)

Used heavily in NestJS.

```ts
@Controller("users")
export class UsersController {}
```

---

```ts
@Get()
findAll() {}
```

---

```ts
@Injectable()
export class UserService {}
```

---

# 23. Runtime Validation vs Compile-Time Types

TypeScript disappears at runtime.

This compiles:

```ts
interface User {
  age: number;
}
```

But does NOT validate API requests.

---

# Zod

```ts
import { z } from "zod";

const UserSchema = z.object({
  age: z.number(),
});
```

---

## z.infer

```ts
type User =
  z.infer<typeof UserSchema>;
```

Single source of truth:

```txt
Validation
+
Type Inference
```

---

# 24. Type-Safe Environment Variables

Bad:

```ts
process.env.DB_URL;
```

Could be undefined.

---

Better:

```ts
const envSchema = z.object({
  DB_URL: z.string(),
});
```

Validate during startup.

---

# 25. Branded Types

Prevent mixing identical primitive values.

```ts
type UserId = string & {
  readonly brand: unique symbol;
};
```

---

# 26. Declaration Merging

```ts
interface User {
  id: number;
}

interface User {
  name: string;
}
```

Result:

```ts
{
  id: number;
  name: string;
}
```

---

# 27. Module Augmentation

Extend existing library types.

```ts
declare module "express" {
  interface Request {
    user?: User;
  }
}
```

Used frequently for:

- JWT Auth
- Session Data
- Request Context

---


# API Development for Backend Engineers

Modern backend engineering revolves around designing, securing, documenting, and scaling APIs effectively.

---

# Fundamentals

---

# 1. HTTP Fundamentals

HTTP (HyperText Transfer Protocol) is the foundation of APIs.

---

## HTTP Methods

### GET

Retrieve resources.

```http
GET /users
```

---

### POST

Create resources.

```http
POST /users
```

---

### PUT

Replace an entire resource.

```http
PUT /users/1
```

---

### PATCH

Partially update a resource.

```http
PATCH /users/1
```

---

### DELETE

Delete a resource.

```http
DELETE /users/1
```

---

# HTTP Status Codes

### Success

```http
200 OK
201 Created
204 No Content
```

---

### Client Errors

```http
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Entity
429 Too Many Requests
```

---

### Server Errors

```http
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
```

---

# HTTP Headers

Metadata sent with requests and responses.

Request:

```http
Authorization: Bearer token
Content-Type: application/json
Accept: application/json
```

Response:

```http
Cache-Control: no-cache
ETag: abc123
```

---

# Content Negotiation

Allows clients and servers to agree on response format.

Request:

```http
Accept: application/json
```

Response:

```http
Content-Type: application/json
```

Other formats:

```txt
JSON
XML
HTML
CSV
```

---

# 2. REST Principles

REST = Representational State Transfer

---

## Resources

A resource is represented by a URL.

```http
/users
/products
/orders
```

---

## Statelessness

Every request contains all necessary information.

Bad:

```txt
Server remembers previous request state
```

Good:

```http
GET /users
Authorization: Bearer token
```

---

## Idempotency

Making the same request multiple times produces the same result.

Idempotent:

```http
GET
PUT
DELETE
```

Not necessarily idempotent:

```http
POST
```

Example:

```http
DELETE /users/1
```

Calling repeatedly still results in:

```txt
User Deleted
```

---

# 3. URL Design

---

## Good URL Design

```http
/users
/users/123
/orders/456
```

---

## Avoid Verbs

✅

```http
GET /users
```

❌

```http
GET /getUsers
```

---

# API Versioning

---

## URL Versioning

```http
/api/v1/users
/api/v2/users
```

Most common approach.

---

# Pagination

Large datasets should never return everything.

---

## Offset Pagination

```http
/users?page=2&limit=20
```

Pros:

- Simple

Cons:

- Slow on huge datasets

---

## Cursor Pagination

```http
/users?cursor=abc123
```

Pros:

- Faster
- Better scalability

Used heavily by:

```txt
Twitter
Facebook
GitHub
```

---

# Filtering

```http
/users?country=india
```

---

# Sorting

```http
/users?sort=createdAt
```

Descending:

```http
/users?sort=-createdAt
```

---

# 4. Request/Response Lifecycle

```txt
Request
   ↓
Middleware
   ↓
Authentication
   ↓
Validation
   ↓
Controller
   ↓
Service
   ↓
Database
   ↓
Response
```

---

# Middleware

Reusable request-processing logic.

```ts
app.use((req, res, next) => {
  console.log(req.method);

  next();
});
```

---

# Routing

```ts
app.get("/users", getUsers);

app.post("/users", createUser);
```

---

# 5. Validation and Error Response Format

Never trust client input.

---

# Validation

Example using Zod:

```ts
const UserSchema =
  z.object({
    name: z.string(),
    age: z.number(),
  });
```

---

# Consistent Error Format

Bad:

```json
{
  "error": "something failed"
}
```

---

Better:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email"
  }
}
```

---

# Security

---

# 6. Authentication

Authentication answers:

```txt
Who are you?
```

---

# Sessions

Server stores session data.

```txt
Client
   ↓
Session ID Cookie
   ↓
Server Session Store
```

---

# JWT Authentication

JSON Web Token

```ts
const token = jwt.sign(
  { userId: 1 },
  secret
);
```

Verification:

```ts
jwt.verify(token, secret);
```

---

# Refresh Tokens

Access Token:

```txt
Short Lifetime
```

Refresh Token:

```txt
Long Lifetime
```

Flow:

```txt
Access Token Expired
          ↓
Refresh Token
          ↓
New Access Token
```

---

# OAuth2

Delegated authentication.

Examples:

```txt
Google Login
GitHub Login
Microsoft Login
```

Flow:

```txt
User
 ↓
OAuth Provider
 ↓
Authorization Code
 ↓
Access Token
```

---

# OpenID Connect (OIDC)

Built on top of OAuth2.

Provides identity information.

```txt
OAuth2 → Authorization

OIDC → Identity + Authorization
```

---

# API Keys

Used for machine-to-machine communication.

```http
x-api-key: my-secret-key
```

---

# 7. Authorization

Authorization answers:

```txt
What are you allowed to do?
```

---

# RBAC

Role-Based Access Control

Roles:

```txt
Admin
Manager
User
```

Example:

```ts
if (user.role !== "admin") {
  throw new Error();
}
```

---

# ABAC

Attribute-Based Access Control

Evaluates:

```txt
User Attributes
Resource Attributes
Environment Attributes
```

Example:

```txt
Owner can edit only own post
```

---

# 8. Security Protection

---

# CORS

Controls cross-origin requests.

```ts
app.use(cors());
```

---

# CSRF

Cross-Site Request Forgery.

Protection:

```txt
CSRF Tokens
SameSite Cookies
```

---

# Rate Limiting

Prevents abuse.

```ts
rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
});
```

---

# Helmet

Security headers.

```ts
app.use(helmet());
```

Headers added:

```txt
X-Frame-Options
Content-Security-Policy
```

---

# Input Sanitization

Always validate:

```txt
Request Body
Query Params
Headers
File Uploads
```

---

# 9. Password Hashing

Never store plaintext passwords.

---

# bcrypt

```ts
const hash =
  await bcrypt.hash(password, 10);
```

Compare:

```ts
await bcrypt.compare(
  password,
  hash
);
```

---

# argon2

Modern alternative.

```ts
const hash =
  await argon2.hash(password);
```

---

# Secrets Management

Bad:

```ts
const secret = "mysecret";
```

Good:

```ts
process.env.JWT_SECRET;
```

Production:

```txt
AWS Secrets Manager
Azure Key Vault
HashiCorp Vault
```

---

# HTTPS

Encrypts traffic.

```txt
HTTP  ❌
HTTPS ✅
```

Required for:

- Login systems
- Payment systems
- Production APIs

---

# Advanced

---

# 10. GraphQL

Alternative to REST.

---

# Schema

```graphql
type User {
  id: ID!
  name: String!
}
```

---

# Query

```graphql
query {
  user(id: 1) {
    name
  }
}
```

---

# Resolver

```ts
const resolvers = {
  Query: {
    user: () => {},
  },
};
```

---

# DataLoader

Prevents N+1 query problems.

Bad:

```txt
100 Users
100 Database Queries
```

Good:

```txt
100 Users
1 Database Query
```

---

# 11. gRPC

Remote Procedure Call framework.

Built on:

```txt
HTTP/2
Protocol Buffers
```

---

# Protocol Buffers

Schema definition format.

```proto
message User {
  int32 id = 1;
  string name = 2;
}
```

Benefits:

- Fast
- Compact
- Strongly Typed

---

# 12. WebSockets

Persistent full-duplex communication.

```txt
Client ↔ Server
```

Use Cases:

- Chat Apps
- Notifications
- Live Dashboards
- Multiplayer Games

---

# Server-Sent Events (SSE)

One-way streaming.

```txt
Server → Client
```

Use Cases:

- Notifications
- Live Updates
- Stock Data

---

# WebSockets vs SSE

| Feature | WebSocket | SSE |
|----------|------------|------|
| Direction | Two-Way | One-Way |
| Complexity | Higher | Lower |
| Chat Apps | ✅ | ❌ |
| Notifications | ✅ | ✅ |

---

# 13. Webhooks

Applications calling another application's endpoint.

Example:

```txt
Stripe Payment Success
          ↓
Webhook
          ↓
Your API
```

---

# Webhook Signing

Verify sender.

```ts
crypto
```

signature validation.

---

# Retries

Webhook providers may retry failed deliveries.

Design handlers to be:

```txt
Idempotent
```

---

# 14. Idempotency Keys

Prevent duplicate actions.

Example:

```http
Idempotency-Key: xyz123
```

Useful for:

```txt
Payments
Orders
Transactions
```

---

# 15. ETags

Version identifier for resources.

Response:

```http
ETag: "abc123"
```

---

# Conditional Requests

Request:

```http
If-None-Match: "abc123"
```

Response:

```http
304 Not Modified
```

Benefits:

- Reduced bandwidth
- Faster responses

---

# 16. OpenAPI / Swagger

Industry standard API documentation.

---

# OpenAPI Specification

```yaml
/users:
  get:
    summary: Get Users
```

---

# Swagger UI

Provides:

- Interactive Documentation
- Request Testing
- Response Examples

URL:

```txt
/api-docs
```

---

# 17. API Gateways

Acts as a single entry point.

```txt
Client
   ↓
API Gateway
   ↓
Services
```

Responsibilities:

- Authentication
- Logging
- Routing
- Rate Limiting
- Monitoring

---

# Throttling

Limit usage patterns.

Examples:

```txt
100 Requests/Minute
1000 Requests/Hour
```

Used with API gateways.

---

# 18. File Uploads

Single upload:

```ts
upload.single("image");
```

Multiple files:

```ts
upload.array("images");
```

---

# Validation

Check:

```txt
File Size
File Type
MIME Type
```

---

# 19. Streaming Responses

Efficient for large files.

Example:

```ts
fs
  .createReadStream(file)
  .pipe(res);
```

Benefits:

```txt
Low Memory Usage
Faster Response Time
```

---

# Important to understand

### Difference between Authentication and Authorization?

```txt
Authentication = Who are you?

Authorization = What can you do?
```

---

### Difference between OAuth2 and OIDC?

```txt
OAuth2 = Authorization

OIDC = Authentication + Authorization
```

---

### Why use Cursor Pagination?

Better performance and consistency for large datasets.

---

### What problem do Idempotency Keys solve?

Prevent duplicate operations caused by retries.

---

### Why are ETags useful?

Reduce bandwidth by avoiding unnecessary responses.

---

### When would you choose GraphQL over REST?

When clients need flexible querying and want to avoid over-fetching or under-fetching data.

---

### When would you choose gRPC?

For internal microservices requiring high performance and strong contracts.

---

### WebSocket vs REST?

REST is request-response.

WebSocket provides persistent real-time communication.

# Databases for Backend Engineers

Databases are the foundation of backend systems. Understanding SQL, NoSQL, indexing, transactions, scaling, and query optimization is critical for building production-grade applications.

---

# SQL Fundamentals

---

# 1. Tables, Keys, and Data Types

## Tables

Tables store related data.

### Users Table

| id | name | email |
|----|------|--------|
| 1 | John | john@email.com |

---

## Primary Key (PK)

Uniquely identifies a row.

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);
```

---

## Foreign Key (FK)

Creates relationships between tables.

```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id)
);
```

---

## Unique Key

Prevents duplicate values.

```sql
email VARCHAR(255) UNIQUE
```

---

## Common Data Types

```sql
INTEGER
BIGINT
BOOLEAN
VARCHAR
TEXT
DATE
TIMESTAMP
JSON
UUID
```

Example:

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(100),
  age INTEGER,
  created_at TIMESTAMP
);
```

---

# 2. CRUD Operations

---

## Create

```sql
INSERT INTO users(name)
VALUES ('John');
```

---

## Read

```sql
SELECT * FROM users;
```

---

## Update

```sql
UPDATE users
SET name = 'Alice'
WHERE id = 1;
```

---

## Delete

```sql
DELETE FROM users
WHERE id = 1;
```

---

# JOINs

Combine data from multiple tables.

---

## INNER JOIN

Only matching rows.

```sql
SELECT *
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
```

---

## LEFT JOIN

All left rows + matching right rows.

```sql
SELECT *
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;
```

---

## RIGHT JOIN

All right rows + matching left.

```sql
SELECT *
FROM users
RIGHT JOIN orders
ON users.id = orders.user_id;
```

---

## FULL JOIN

Everything from both tables.

```sql
SELECT *
FROM users
FULL JOIN orders
ON users.id = orders.user_id;
```

---

# GROUP BY

Aggregate data.

```sql
SELECT department,
COUNT(*)
FROM employees
GROUP BY department;
```

---

# HAVING

Filter grouped results.

```sql
SELECT department,
COUNT(*)
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

---

# Subqueries

Query inside a query.

```sql
SELECT *
FROM users
WHERE id IN (
  SELECT user_id
  FROM orders
);
```

---

# CTE (Common Table Expression)

Improves readability.

```sql
WITH active_users AS (
  SELECT *
  FROM users
  WHERE active = true
)
SELECT *
FROM active_users;
```

---

# 3. Normalization and Denormalization

---

# Normal*zation

Avoid duplication.

Bad:

*``txt*Users Table

*d | name | city
1 *| John | Delhi

Orders Table

id |*user_name | city
1  | John      | *elhi
```

*ata duplicated.

---

Good:

```tx*
Users
Orders
```

*ith foreign keys.

Benefits:

* Consistency
- Less*duplication*- Easier maintenance

---

# Denor*alization

Intentionally duplicate*data.

Example:

```txt
User Name *tored inside Orders
```

Benefits:*
- Faster reads
- Simpler reportin*

Tradeoff:

```txt
More Storage
M*re Duplication
```

---

# 4. Rela*ionships

---

# One-to-One

```tx*
User
 ↓
Profile
```

Example:

``*sql
users
profiles
```

Each user *as one profile.

---

# One-to-Man*

```txt
User
 ↓↓↓
Orders
```

One*user has many orders.

---

# Many*to-Many

```txt
Students ↔ Courses*```

Implemented using a junction *able.

```sql
student_courses
```
*---

# Intermediate

---

# 5. Ind*xes

Indexes make reads faster.

-*-

## B-Tree Index

*ost common*

```sql
CREATE INDEX
idx*users_email
ON users(email);
```

*--

## Composite Index

Multiple*columns.

```sql
CREATE INDEX
idx_*ser_status_created
ON users(status* created_at);
```

*--

## Partial Index

Indexes only*matching rows.

```sql
CREATE INDE*
idx_active_users
ON users(email)
*HERE active = true;
```

---

# EX*LAIN

Shows query*execution*plan.

```sql
EXPLAIN
SELECT *
FRO* users
WHERE email='john@test.com'*
```

*se it to identify:

- Table scans
* Missing indexes
- Slow operations*
---

# 6. Transactions and ACID

*ransaction:

```txt
*ll operations succeed
*R
All operations fail
```

---

Ex*mple:

```sql
BEGIN;

UPDATE accou*ts
SET balance*= balance - 100
WHERE id = 1;

UPD*TE accounts
SET balance = balance * 100
WHERE id = 2;

COMMIT;
```

*--

# ACID

---

## Atomicity

Eve*ything succeeds or nothing.

---

*# Consistency

Data remains valid.*
---

## Isolation

Transactions d*n't interfere.

---

## Durability*
Committed data survives crashes.
*---

# 7. Isolation Levels

---

#* Read Uncommitted

Lowest isolatio*.

Possible:

```txt
Dirty Reads
`*`

---

## Read Committed

Most co*mon default.

---

## Repeatable R*ad

Same query returns same result*

---

## Serializable

Highest is*lation level.

Most*expensive.

---

# Locks

Used to*protect data.

---

*# Row Lock

```*ql
SELECT *
FROM users
FOR UPDATE;*```

*--

# Dead*ocks

Two transactions waiting on *ach other.

Example:

```txt
TX1 w*its for TX2
TX2 waits for TX1
```
*Database kills one transaction.

-*-

# 8. Migrations

Track schema c*anges.

Example:

```sql
*LTER TABLE users
*DD COLUMN phone VARCHAR(20);
```

*--

# Schema Versioning

Migration*Files:

```txt
001_create_users.sq*
002_add_email.sql
003_add_role.sq*
```

Popular Tools:

```txt
Prism* Migrate
Flyway
Liquibase
Type*RM Migrations
Drizzle*Kit
```

---

# 9. Connection Pool*ng

Opening*DB connections is expensive.

Pool*

```txt
Application
     *↓
Connection Pool
      ↓
*atabase
```

*--

Example:

```txt*Pool Size = 10
```

*enefits:

- Better performance
- L*wer latency
- Reduced DB overhead
*---

# 10. ORMs vs Query Builders
*---

# ORM

Examples:

```txt*Prisma
TypeORM
Sequelize
```

Exam*le:

```ts
const user =
  await*prisma.user.find*any();
```

Pros:

- Fast*development
- Type Safety
- Relati*nships

Cons:

- Less control
-*Complex queries harder

---

* Query Builders

Examples:

```txt*Drizzle
Knex
K*sely
```

Example:

```ts*db
  .select()
  .*rom(users);
```

*ros:

- More*SQL control
- Better performance t*ning

Cons:

- More*manual work

---

# ORM vs Query B*ilder

| Feature | ORM | Query Bui*der |
|----------|----------|-----*----|
| Productivity | High | Medi*m |
| SQL Control | Medium | High *
| Learning Curve | Easier | Harde* |
| Flexibility | Medium | High |*
---

# 11. N+1 Problem

Bad Examp*e:

```txt
1*Query → Users

100 Queries → Order*
```

Total:

```txt*101 Queries
```

---

Solutions:

*``txt
JOINs
Batch Loading
DataLoad*r
E*ger Loading
```

---

# Soft Delet*s

Instead of deleting records.

`*`sql
deleted_at TIMESTAMP
``*

Delete:

```sql
UPDATE users
SET*deleted_at = NOW();
```

Benefits:*
- Recovery
- Auditing

*--

# Seeding

Insert initial data*

```sql
INSERT INTO roles(name)
V*LUES ('admin');
```

Use For:

```*xt*Development
Testing
Demo Data
```
*---

# NoSQL

---

# 12. MongoDB*
Document database.

Example*Document:

```json
{
  "_*d": "1",
  "name": "John",
  "*mail": "john*test.com"
}
```

---

# Schema Des*gn

Embed:

```json
{
  "order": {*    "items": [*
  }
}
```

Reference:

```json
{
* "userId": "123"
}
```

*--

# Aggregation Pipeline

```js*db.orders.aggregate([
  {
*   $group: {
      _*d: "$status",
      count* { $sum: 1 },
*   },
  },
]);
```

*--

# MongoDB Index

```js
db.user*.createIndex({
  email: 1,
});
```*
---

# 13. Redis

In-memory*key-value store.

Extremely fast.
*---

# Caching

```txt
API
 ↓
Redi* Cache
 ↓
Database
``*

---

Example:

```js
await redis*set(
  "user:1",
  JSON.stringify(*ser)
);
```

---

# TTL

Expire da*a automatically.

```js
await redi*.set(
  "token",
  value,
  {
    *X: 3600,
  }
);
```

---

# Pub/Su*

Message communication.

```txt
P*blisher
   ↓
Redis
   ↓
Subscriber*```

*--

# Rate Limiting

```txt*User Requests
      ↓
Redis Counte*
      ↓
Limit
``*

---

# Session Storage

```txt*Session ID
      ↓
Redis
```

*ery common in production.

---

# *4. SQL vs NoSQL

Choose*SQL when:

```txt
Strong Relations*ips
Transactions
Consistency
Compl*x Queries
```

Examples:

```txt
P*stgreSQL
MySQL
SQL Server
```

---*
Choose NoSQL when:

```txt
Flexib*e Schema
Rapid Scaling
Document Da*a
```

Examples:

```txt
MongoDB
C*ssandra
DynamoDB
```

---

# Advan*ed

---

# 15. Replication

Copies*data between servers.

```txt
Prim*ry
   ↓
Replica
```

Benefits:

- *igh Availability
- Disaster Recove*y

---

# Read Replicas

Used only*for reads.

```txt*Search Queries
Reports
Analytics
`*`

---

# 16. Sharding

Split data*across multiple databases.

```*xt
*sers A-M*→ Shard 1

Users N-Z → Shard 2
*``

Benefits:

- Horizontal*Scaling

---

# Partitioning

Spli* data within same database.

Examp*e:

```txt
Orders_2024
Orders_2025*Orders_2026
```

---

# 17. Consis*ency Models

---

# Strong Consist*ncy

Latest write always visible.
*---

# Eventual Consistency

Event*ally all replicas agree.

Example:*
```txt
Redis Replicas
Dynamo*B
Cassandra
```

---

# CAP Theore*

Distributed systems can guarante* only two:

```txt
Consistency
Ava*lability
Partition Tolerance
```

*artition tolerance is generally re*uired.

Tradeoff:

```txt
CP
or
AP*```

---

# 18. Full-Text Search

*--

* PostgreSQL FTS

```sql
SELECT *
F*OM articles
WHERE
to_t*vector(content)
@@
to_ts*uery('database');
```

---

# Elas*icsearch

Specialized search engin*.

Features:

```txt
*elevance Ranking
Autocomplete
Sear*h Analytics
```

---

# 19. Optimi*tic vs Pessimistic Locking

---

#*Optimistic Locking

Uses version n*mbers.

```txt
version = 5
```

*pdate succeeds only if version mat*hes.

Good for:

```txt
Low Conten*ion
```

---

# Pessimistic Lockin*

Locks row immediately.

```sql
F*R UPDATE
```

Good for:

```txt*Banking
*ayments
```

---

# 20. Query Opti*ization

---

Techniques:

✅ Prope* indexes

✅ Avoid SELECT *

✅ Anal*ze execution plans

✅ Remove N+1 q*eries

✅ Optimize JOINs

✅ Cache f*equent queries

---

# Slow Query *nalysis

Postgres:

```sql*EXPLAIN ANALYZE
```

Look for:

``*txt
Sequential Scans
Exp*nsive Sorts
Nested Loops
*``

*--

# 21. Backup and Restore

---
*# Backup

```bash
pg_dump
```

---*
# Restore

```bash
pg_restore
```*
*--

# Zero-Downtime Migrations

Sa*e migration strategy:

```txt
Add *olumn
 ↓
Deploy App
 ↓
Backfill Da*a
 ↓
Remove Old Column
```

*void breaking production.

---

# *2. Outbox Pattern

Prevents lost e*ents.

---

Traditional:

```txt
S*ve Order
 ↓
Publish Event
```

*isk:

```txt
DB succeeds
Event fai*s
```

---

Outbox:

```txt
Save O*der
Save Event
Same*Transaction
```

Worker publishes *vent later.

---

# 23. Event Sour*ing

Store events instead of state*

Instead of:

```txt
Balance = 50*
```

Store:

```txt
Deposited 100*Deposited 200
Deposited 200
```

*urrent balance reconstructed from *vents.

---

# 24. CQRS*
Command Query Responsibility Segr*gation

Separate:

```txt
Write Mo*el
```

and

```txt
Read Model
```*
Benefits:

- Better scalability
-*Independent optimization

Common i*:

```txt
Large Distributed System*
Financial Systems
Event-Driven Ar*hitectures
```

---

# Backend Dat*base Checklist

## SQL

- [ ] Tabl*s
- [ ] Keys
- [ ] CRUD
- [ ] JOIN*
- [ ] GROUP BY
- [ ] HAVING
- [ ]*Subqueries
- [ ] CTEs
- [ ] Relati*nships
- [ ] Normalization

---

#* Performance

- [ ] Indexes
- [ ] *XPLAIN
- [ ] Connection Pooling
- * ] Query Optimization
- [ ] N+1 Pr*vention

---

## Reliability

- [ ] Transactions
- [ ] ACID
- [ ] Iso*ation Levels
- [ ] Locks
- [ ] Dea*locks

---

## ORM Layer

- [ ] Pr*sma
- [ ] Drizzle
- [ ] TypeORM
- * ] Migrations
- [ ] Seeding

---

*# NoSQL

- [ ] MongoDB
- [ ] Aggre*ation
- [ ] Redis
- [ ] Caching
- * ] Pub/Sub
- [ ] TTL

---

## Scal*ng

- [ ] Replication
- [ ] Read R*plicas
- [ ] Sharding
- [ ] Partit*oning
- [ ] CAP Theorem
- [ ] Even*ual Consistency

---

## Architect*re

- [ ] Full-Text Search
- [ ] O*tbox Pattern
- [ ] Event Sourcing
* [ ] CQRS
- [ ] Backup & Restore
-*[ ] Zero-Downtime Migrations

---

# Advanced Backend Engineering

These are the topics that separate a backend developer from a backend engineer. They focus on scalability, reliability, system design, distributed systems, observability, and production-ready architecture.

---

# 1. Architecture Patterns

Architecture defines how your application is structured.

---

# Layered Architecture

Most common backend architecture.

```txt
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

Example:

```txt
Request
 ↓
Controller
 ↓
Business Logic
 ↓
Repository
 ↓
Postgres
```

Benefits:

- Easy to understand
- Easy to test
- Common in Express/NestJS

---

# Clean Architecture

Separates business rules from implementation details.

```txt
Entities
    ↓
Use Cases
    ↓
Interfaces
    ↓
Frameworks
```

Rule:

```txt
Business Logic
should not know
about database or framework
```

Benefits:

- Highly testable
- Flexible
- Easy to replace technologies

---

# Hexagonal Architecture

Also called:

```txt
Ports and Adapters
```

```txt
         API
          ↓

Database ← Core → Queue

          ↓

       External APIs
```

Core business logic remains independent.

---

# Modular Monolith

Single application.

Multiple isolated modules.

```txt
User Module
Order Module
Payment Module
Notification Module
```

Benefits:

- Simpler deployment
- Easier than microservices
- Excellent for startups

---

# Microservices

Application split into services.

```txt
User Service
Order Service
Payment Service
Notification Service
```

Communication:

```txt
HTTP
gRPC
Kafka
RabbitMQ
```

Benefits:

- Independent deployments
- Team autonomy
- Better scalability

Trade-offs:

- Higher complexity
- Distributed systems challenges

---

# 2. Design Patterns

---

# Repository Pattern

Encapsulates database access.

```ts
interface UserRepository {
  findById(id: string): Promise<User>;
}
```

Benefits:

- Easier testing
- Database abstraction

---

# Factory Pattern

Object creation logic in one place.

```ts
class UserFactory {
  createAdmin() {
    return new User("ADMIN");
  }
}
```

---

# Dependency Injection (DI)

Dependencies are supplied externally.

Bad:

```ts
const db = new Postgres();
```

Good:

```ts
constructor(
  private db: Database
) {}
```

Benefits:

- Loose coupling
- Easier testing

Used heavily in:

```txt
NestJS
Angular
Spring Boot
```

---

# Strategy Pattern

Swap algorithms dynamically.

```ts
interface PaymentStrategy {
  pay(): void;
}
```

Examples:

```txt
Stripe
Razorpay
PayPal
```

---

# Observer Pattern

Objects listen for events.

```txt
Event
 ↓
Subscribers
```

Example:

```txt
User Registered
     ↓
Email Service
Analytics Service
Notification Service
```

---

# 3. Asynchronous Processing

---

# Why?

Long-running tasks shouldn't block requests.

Examples:

```txt
Sending Emails
Image Processing
Report Generation
Video Transcoding
```

---

# Job Queues

Store tasks for later processing.

Popular:

```txt
BullMQ
Agenda
Bee-Queue
```

Architecture:

```txt
API
 ↓
Queue
 ↓
Worker
```

---

# BullMQ

Uses Redis.

```ts
queue.add(
  "send-email",
  {
    email: "john@test.com"
  }
);
```

Worker:

```ts
worker.process(async job => {
  console.log(job.data);
});
```

---

# Message Brokers

---

# RabbitMQ

Message Queue.

```txt
Producer
   ↓
RabbitMQ
   ↓
Consumer
```

Good for:

```txt
Reliable messaging
Background jobs
Task queues
```

---

# Kafka

Distributed event streaming system.

```txt
Producer
   ↓
Kafka
   ↓
Consumers
```

Good for:

```txt
Analytics
Event Streaming
Large Scale Systems
```

---

# Retries

Temporary failures should retry.

```txt
API Timeout
 ↓
Retry
 ↓
Success
```

---

# Exponential Backoff

```txt
1s
2s
4s
8s
```

Reduces system pressure.

---

# Dead Letter Queue (DLQ)

Failed jobs eventually move here.

```txt
Queue
 ↓
Retry
 ↓
Retry
 ↓
Retry
 ↓
DLQ
```

---

# 4. Caching

Improves performance and reduces DB load.

---

# Cache-Aside Pattern

Most common.

```txt
Request
   ↓
Cache?
   ↓
Miss
   ↓
Database
   ↓
Cache
```

Example:

```ts
const cached = await redis.get(key);
```

---

# Write-Through Cache

Update cache and DB together.

```txt
Write
 ↓
Cache
 ↓
Database
```

Benefits:

- Data always available in cache

---

# Cache Invalidation

The hardest problem in caching.

When data changes:

```txt
Database Updated
 ↓
Remove Cache
```

---

# CDN

Content Delivery Network.

Caches content closer to users.

Examples:

```txt
Cloudflare
CloudFront
Akamai
```

Used for:

```txt
Images
Videos
JavaScript
CSS
```

---

# 5. Scalability

---

# Horizontal Scaling

Add more servers.

```txt
Server 1
Server 2
Server 3
```

Benefits:

- High availability
- Better traffic handling

---

# Vertical Scaling

Increase server resources.

```txt
More RAM
More CPU
```

---

# Load Balancing

Distributes requests.

```txt
Users
   ↓
Load Balancer
 ↓   ↓   ↓
S1  S2  S3
```

Examples:

```txt
NGINX
AWS ELB
HAProxy
```

---

# Stateless Services

Never store session state locally.

Bad:

```txt
Server Memory
```

Good:

```txt
Redis
Database
JWT
```

Allows easy scaling.

---

# 6. Reliability

---

# Circuit Breaker

Stops repeated failures.

States:

```txt
Closed
Open
Half-Open
```

Example:

```txt
Database Down
 ↓
Circuit Opens
 ↓
Requests Fail Fast
```

---

# Timeouts

Never wait forever.

```ts
fetch(url, {
  timeout: 5000,
});
```

---

# Retries

Useful for:

```txt
Network Errors
Temporary Outages
```

Avoid retrying:

```txt
Validation Errors
Authentication Errors
```

---

# Retry with Backoff

```txt
Attempt 1 -> 1s

Attempt 2 -> 2s

Attempt 3 -> 4s
```

---

# Graceful Shutdown

Handle:

```txt
SIGTERM
SIGINT
```

Example:

```ts
process.on("SIGTERM", () => {
  server.close();
});
```

---

# 7. Observability

Understand system behavior in production.

---

# Structured Logging

Bad:

```txt
Something failed
```

Good:

```json
{
  "service": "user-api",
  "level": "error",
  "userId": 123
}
```

---

# Metrics

Track numerical system health.

Examples:

```txt
Request Count
Error Rate
CPU Usage
Latency
```

---

# Prometheus

Popular metrics platform.

Metrics:

```txt
requests_total

response_time

memory_usage
```

---

# Tracing

Track requests across services.

```txt
Request
 ↓
Auth Service
 ↓
User Service
 ↓
Payment Service
```

---

# OpenTelemetry

Industry standard for tracing.

Benefits:

```txt
Latency Analysis
Root Cause Analysis
Distributed Debugging
```

---

# Alerting

Notify engineers.

Examples:

```txt
High Error Rate

High Latency

Low Disk Space
```

Tools:

```txt
Grafana
Prometheus
PagerDuty
```

---

# 8. Testing

---

# Unit Testing

Tests individual functions.

```ts
expect(sum(1, 2))
.toBe(3);
```

Tools:

```txt
Jest
Vitest
```

---

# Integration Testing

Tests service interactions.

```txt
API + Database
```

---

# End-to-End (E2E)

Tests complete flows.

```txt
Login
 ↓
Create Order
 ↓
Checkout
```

---

# Contract Testing

Verifies API agreements.

Useful in:

```txt
Microservices
```

Popular Tool:

```txt
Pact
```

---

# Mocking

Replace dependencies.

Example:

```txt
Database
External APIs
Email Service
```

---

# Testcontainers

Run real dependencies in Docker.

```txt
Postgres
Redis
RabbitMQ
```

during tests.

---

# 9. DevOps

---

# Docker

Containerizes applications.

```dockerfile
FROM node:22

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]
```

---

# Docker Compose

Run multiple services.

```yaml
services:
  api:
  postgres:
  redis:
```

---

# CI/CD

Automated deployment pipeline.

```txt
Code
 ↓
Build
 ↓
Test
 ↓
Deploy
```

Tools:

```txt
GitHub Actions
GitLab CI
Jenkins
Azure DevOps
```

---

# Environment Management

Separate configs.

```txt
Development
Staging
Production
```

---

# Kubernetes Basics

Container orchestration.

Resources:

```txt
Pod
Deployment
Service
Ingress
ConfigMap
Secret
```

---

# 10. Cloud Fundamentals

---

# Compute

Run applications.

Examples:

```txt
AWS EC2
Azure VM
Google Compute Engine
```

---

# Storage

Store files.

Examples:

```txt
AWS S3
Azure Blob Storage
Google Cloud Storage
```

---

# Managed Databases

Examples:

```txt
AWS RDS
Azure Database
Cloud SQL
```

---

# Queues

Examples:

```txt
AWS SQS
Azure Service Bus
Google Pub/Sub
```

---

# 11. Security

---

# OWASP Top 10

Most common web vulnerabilities.

Examples:

```txt
Broken Access Control

Injection Attacks

Authentication Failures

Security Misconfiguration
```

---

# Dependency Auditing

Check vulnerable packages.

```bash
npm audit
```

---

# Secrets Rotation

Rotate credentials regularly.

Examples:

```txt
Database Passwords

JWT Secrets

API Keys
```

---

# 12. Performance Engineering

---

# Profiling

Find bottlenecks.

Node Tools:

```txt
clinic.js
Chrome DevTools
Node Inspector
```

---

# Memory Leaks

Common Causes:

```txt
Global Variables

Event Listeners

Uncleared Timers

Large Caches
```

---

# Event Loop Lag

Blocked event loop causes slow responses.

Monitoring:

```txt
Event Loop Delay
```

---

# Load Testing

Measure system capacity.

---

# k6

```js
export default function() {
  http.get(url);
}
```

---

# autocannon

```bash
autocannon localhost:3000
```

Metrics:

```txt
Throughput
Latency
Requests/sec
```

---

# 13. System Design

---

# Rate Limiter

Protect APIs from abuse.

Algorithms:

```txt
Token Bucket

Leaky Bucket

Fixed Window

Sliding Window
```

---

# URL Shortener

Components:

```txt
API
Database
Cache
ID Generator
```

Example:

```txt
abc123
 ↓
https://long-url.com
```

---

# Notification System

Channels:

```txt
Email
SMS
Push Notifications
```

Features:

```txt
Retries
Queues
Templates
Scheduling
```

---

# Trade-Off Thinking

Every architecture choice has trade-offs.

Examples:

| Choice | Benefit | Cost |
|----------|----------|----------|
| Cache | Faster Reads | Invalidation Complexity |
| Microservices | Independent Scaling | Operational Complexity |
| SQL | Strong Consistency | Harder Horizontal Scaling |
| NoSQL | Easy Scaling | Eventual Consistency |
| Sync Communication | Simpler | Tighter Coupling |
| Async Communication | More Resilient | More Complexity |

---

# Senior Backend Engineer Checklist

## Architecture

- [ ] Layered Architecture
- [ ] Clean Architecture
- [ ] Hexagonal Architecture
- [ ] Modular Monolith
- [ ] Microservices

---

## Scalability

- [ ] Horizontal Scaling
- [ ] Load Balancing
- [ ] Stateless Services
- [ ] CDN
- [ ] Caching Strategies

---

## Reliability

- [ ] Circuit Breakers
- [ ] Timeouts
- [ ] Retries
- [ ] DLQs
- [ ] Graceful Shutdown

---

## Distributed Systems

- [ ] RabbitMQ
- [ ] Kafka
- [ ] Outbox Pattern
- [ ] CQRS
- [ ] Event Sourcing

---

## Observability

- [ ] Logging
- [ ] Metrics
- [ ] Tracing
- [ ] Alerting

---

## DevOps

- [ ] Docker
- [ ] Docker Compose
- [ ] CI/CD
- [ ] Kubernetes

---

## Performance

- [ ] Profiling
- [ ] Memory Leaks
- [ ] Event Loop Lag
- [ ] Load Testing

---

## Security

- [ ] OWASP Top 10
- [ ] Secrets Management
- [ ] Dependency Auditing

---

## System Design

- [ ] Rate Limiters
- [ ] URL Shorteners
- [ ] Notification Systems
- [ ] Consistency Trade-Offs
- [ ] Scalability Trade-Offs

---

# What Does a Backend Engineer Actually Do?

A backend engineer is responsible for building, maintaining, securing, and scaling the systems that power applications behind the scenes.

Think of the backend as:

```txt
Frontend
    ↓
API
    ↓
Backend
    ↓
Database / Services
```

The frontend displays data.

The backend:

- Processes requests
- Implements business rules
- Stores and retrieves data
- Integrates external systems
- Ensures security and reliability

---

# 1. Designing and Building APIs

Backend engineers expose APIs that clients consume.

Clients:

```txt
Web Apps
Mobile Apps
Partner Systems
Other Microservices
```

Example:

```http
GET /api/v1/users/1
```

Response:

```json
{
  "id": 1,
  "name": "John"
}
```

Common Responsibilities:

- API Design
- Routing
- Validation
- Authentication
- Error Handling
- Documentation

Skills Used:

```txt
Express
Fastify
NestJS
REST
GraphQL
Swagger
```

---

# 2. Implementing Business Rules

Backend engineers implement application behavior.

Examples:

---

## E-commerce Pricing

```txt
Product Price = ₹1000

Discount = 10%

Final Price = ₹900
```

---

## Coupon Rules

```txt
Coupon Active?

User Eligible?

Minimum Spend Reached?
```

---

## State Machines

Order Lifecycle:

```txt
Placed
  ↓
Paid
  ↓
Packed
  ↓
Shipped
  ↓
Delivered
```

Invalid:

```txt
Placed
  ↓
Delivered
```

without intermediate states.

---

## Permissions

Example:

```txt
Admin → Manage Users

Customer → View Profile

Seller → Manage Products
```

---

# 3. Data Modeling

Backend engineers design databases.

---

## Example Tables

Users:

```sql
users
-------
id
name
email
```

Orders:

```sql
orders
-------
id
user_id
total
```

---

## Relationships

```txt
User
 ↓
Orders
```

---

## Index Design

```sql
CREATE INDEX
idx_user_email
ON users(email);
```

Objectives:

- Fast queries
- Data integrity
- Scalability

---

# 4. Authentication and Authorization

---

# Authentication

Answers:

```txt
Who are you?
```

Examples:

```txt
Login
JWT
Session
OAuth
```

---

# Authorization

Answers:

```txt
What can you do?
```

Example:

```txt
Admin → Delete Users

User → Read Own Profile
```

Implementation:

```ts
if (user.role !== "admin") {
  throw new Error("Forbidden");
}
```

---

# 5. Integrating Third-Party Services

Most applications depend on external systems.

---

# Payment Providers

Examples:

```txt
Stripe
Razorpay
PayPal
```

Use Cases:

```txt
Charge Customer

Refund Payment

Save Payment Method
```

---

# Email Providers

Examples:

```txt
SendGrid
Resend
AWS SES
```

Use Cases:

```txt
Welcome Emails
Password Resets
Notifications
```

---

# SMS Providers

Examples:

```txt
Twilio
MSG91
```

---

# Storage Providers

Examples:

```txt
AWS S3
Cloudinary
Azure Blob
```

Use Cases:

```txt
Images
Documents
Videos
```

---

# Maps

Examples:

```txt
Google Maps

Mapbox
```

Use Cases:

```txt
Location Search

Distance Calculation

Delivery Tracking
```

---

# Analytics

Examples:

```txt
Google Analytics

Mixpanel

Amplitude
```

---

# 6. Background Processing

Not all work should happen during requests.

Bad:

```txt
User waits 30 seconds
for report generation
```

---

Good:

```txt
Request
 ↓
Queue
 ↓
Worker
 ↓
Process
```

---

# Scheduled Jobs (Cron)

Examples:

```txt
Nightly Reports

Database Cleanup

Subscription Renewal
```

Example:

```txt
Every Day
at 12:00 AM
```

---

# Notifications

Examples:

```txt
Email

SMS

Push Notification
```

---

# Data Imports

Examples:

```txt
CSV Import

Excel Import

Third-party Sync
```

---

# Report Generation

Examples:

```txt
PDF Reports

Analytics Reports

Invoices
```

---

# 7. Ensuring Data Integrity

Data consistency is a core backend responsibility.

---

# Transactions

Example:

```txt
Transfer ₹100
```

Either:

```txt
Debit Success
Credit Success
```

OR

```txt
Everything Rollback
```

---

# Constraints

Example:

```sql
email UNIQUE
```

Prevents duplicates.

---

# Idempotency

Multiple identical requests produce one result.

Examples:

```txt
Payment APIs

Order Creation
```

Header:

```http
Idempotency-Key: xyz123
```

---

# Race Conditions

Example:

```txt
Two Users
Buy Last Product
At Same Time
```

Backend must prevent:

```txt
Overselling
```

Solutions:

```txt
Transactions

Locks

Optimistic Concurrency
```

---

# 8. Performance and Scaling

Applications must remain fast.

---

# Caching

```txt
API
 ↓
Redis
 ↓
Database
```

Benefits:

```txt
Lower Latency

Lower Database Load
```

---

# Query Optimization

Bad:

```sql
SELECT *
```

Good:

```sql
SELECT id,name
```

---

# Pagination

Avoids returning huge datasets.

```http
/users?page=2&limit=20
```

---

# Traffic Spikes

Example:

```txt
Black Friday

Flash Sales

Viral Launches
```

Solutions:

```txt
Caching

Load Balancing

Horizontal Scaling
```

---

# 9. Reliability and Security

Backend engineers protect systems.

---

# Error Handling

Bad:

```txt
Server Crash
```

Good:

```txt
Meaningful Error Response
```

Example:

```json
{
  "message": "Invalid email"
}
```

---

# Logging

Track application behavior.

```json
{
  "level": "error",
  "service": "auth-api"
}
```

---

# Monitoring

Track:

```txt
Errors

Latency

CPU Usage

Memory Usage
```

---

# Security Protection

Examples:

```txt
XSS

SQL Injection

CSRF

Brute Force Attacks
```

Tools:

```txt
Helmet

Rate Limiting

Validation
```

---

# 10. Deployment and Maintenance

Writing code is only part of the job.

Backend engineers also run software in production.

---

# CI/CD

Pipeline:

```txt
Code
 ↓
Build
 ↓
Test
 ↓
Deploy
```

Tools:

```txt
GitHub Actions

Azure DevOps

GitLab CI
```

---

# Database Migrations

Example:

```sql
ALTER TABLE users
ADD COLUMN phone;
```

---

# Production Debugging

Examples:

```txt
Investigate Errors

Analyze Logs

Fix Performance Problems
```

---

# On-Call Responsibilities

Examples:

```txt
Server Outage

Database Failure

Payment Issues

Traffic Surges
```

---

# 11. Collaboration

Backend engineers rarely work alone.

---

# Frontend Collaboration

Agree on:

```txt
Endpoints

Request Format

Response Format

Error Format
```

Example:

```json
{
  "success": true,
  "data": {}
}
```

---

# API Documentation

Tools:

```txt
Swagger

OpenAPI

Postman Collections
```

---

# Code Reviews

Responsibilities:

```txt
Review Pull Requests

Suggest Improvements

Maintain Standards
```

---

# Working With Other Teams

Examples:

```txt
Product Managers

Frontend Developers

QA Engineers

DevOps Engineers

Designers
```

---

# Real Backend Request Flow

```txt
Frontend
    ↓
API Request
    ↓
Authentication
    ↓
Authorization
    ↓
Validation
    ↓
Business Logic
    ↓
Database
    ↓
Third-party Services
    ↓
Response
```

---

# Backend Engineer Daily Checklist

## API Development

- [ ] Build APIs
- [ ] Design Endpoints
- [ ] Validate Requests
- [ ] Document APIs

---

## Business Logic

- [ ] Pricing Rules
- [ ] Discount Rules
- [ ] Permissions
- [ ] Workflow Management

---

## Database

- [ ] Design Tables
- [ ] Create Indexes
- [ ] Optimize Queries
- [ ] Manage Migrations

---

## Security

- [ ] Authentication
- [ ] Authorization
- [ ] Input Validation
- [ ] Rate Limiting

---

## Performance

- [ ] Redis Caching
- [ ] Query Tuning
- [ ] Pagination
- [ ] Load Testing

---

## Reliability

- [ ] Logging
- [ ] Monitoring
- [ ] Error Handling
- [ ] Recovery Planning

---

## DevOps

- [ ] CI/CD
- [ ] Docker
- [ ] Deployments
- [ ] Production Debugging

---


✅ API Design

✅ Database Design

✅ Performance Optimization

✅ Scaling Systems

✅ Security

✅ Reliability

✅ Distributed Systems

✅ Cloud Infrastructure

✅ Code Reviews

✅ Technical Decision Making

✅ System Design

✅ Mentoring Engineers

---