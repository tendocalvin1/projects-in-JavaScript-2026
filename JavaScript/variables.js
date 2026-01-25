// basics of JavaScript 
// variables in JavaScript

var age = 20;
let name = "Tendo"
const country = "Uganda"

console.log(age);
console.log(name);
console.log(country);

let a = "hello";
let b = 10;
let c = true
let d = null;
let e


console.log(typeof(a))
console.log(typeof (b))
console.log(typeof (c))
console.log(typeof (d))
console.log(typeof (e))


// Operators & Type Coercion
console.log("5" + 2); // "52" (string concatenation)
console.log("5" - 2); // 3 (subtraction)
console.log("5" * 2); // 10 (multiply)
console.log("5" / 2); // 2.5(divide)
console.log("5" > 2); // true (comparison)
console.log("5" == 5); // true (loose equality)


// Mini exercises
// 1️⃣ Temperature Converter
let celsius = 30
fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit)

// 2️⃣ Simple Calculator
let num1 = 12;
let num2 = 4;

let sum = num1 + num2;
let difference = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;

console.log(`The sum of these two numbers is: ${sum}`);
console.log(`The difference of these two numners is : ${difference}`);
console.log(`The multiplication of these two numbers is: ${multiplication}`);
console.log(`The division of these two numbers is: ${division}`);


// 3️⃣ String Play
let firstName = "Tendo";
let lastName = "Calvin";

console.log(firstName  + " " + lastName)
console.log(`My name is ${firstName} ${lastName}`)

firstName.toUpperCase();
lastName.toUpperCase();

firstName.length
lastName.length
console.log(firstName.length + lastName.length)

console.log(firstName.toUpperCase() + " " + lastName.toUpperCase())

let z;
console.log(z); // undefined  → JS default

let p = null;
console.log(p); // null → you decided

// Think:
// undefined = not assigned yet
// null = deliberately empty

// typeof "hello"   // "string"
// typeof 10        // "number"
// typeof true      // "boolean"
// typeof undefined // "undefined"
// typeof null      // "object"  (famous JS bug)
// typeof {}        // "object"
// typeof []        // "object"

// You use typeof when:
// - Debugging
// - Validating input
// - Avoiding type errors

