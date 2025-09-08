let a = 5;
let b = "5";

// Loose equality
console.log(a == b); // true

// Strict equality
console.log(a === b); // false

// Greater than
console.log(10 > 5); // true

let greeting = "Hello";
greeting += ", World!";
console.log(greeting); // Hello, World!

console.log(typeof "Hello"); // string
console.log([] instanceof Array); // true

let x = (2, 3); // x is 3
console.log(x);

let name = null;
let defaultName = name ?? "Guest";
console.log(defaultName); // Guest