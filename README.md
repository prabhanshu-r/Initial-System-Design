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