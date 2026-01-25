
//  Core JavaScript Concepts (Objects, Arrays, Scope, Hoisting, this)

// scope = where a variable lives

let globalVar = "I am global";
function test(){
    let localVar = "I am local";
    console.log("globalVar") //accesible
}

// console.log(localVar); // Error: localVar is not defined

if (true){
    let x = "10"
}
// console.log(x); // Error: x is not defined

// Hoisting = JavaScript's default behavior of moving declarations to the top
console.log(a); // undefined
var a = 10;
console.log(a);

// console.log(b); ReferenceError: Cannot access 'b' before initialization
let b = 5; 
console.log(b)

// Rule for real engineers: Never use var. Ever.

// Arrays 
let age = [10,20,30];
age.push(40); // add element to the end
console.log(age)

age.pop(); // remove the last element
console.log(age)

age.shift(); // removes the first element
console.log(age);

age.unshift(5); // adds element to the beginning of an array
console.log(age)

age.includes(30); // checks if the elemnt mentioned is in the array
console.log(age.includes(30))

// age.indexOf(30); // returns the index of the element in play
console.log(age)
console.log(age[0])
console.log(age.indexOf(30))


// Looping
for (let i = 0; i < age.length; i++){
    for (let value of age){
        age.forEach(v => console.log(v))
    }
}

// Objects
let student = {
    name: "Tendo Calvin",
    age: 24,
    greet: function(){
        console.log("Hello there, 2026 is going to be my year of breakthrough!")
    }
}

// accessing object properties
console.log(student.name)
console.log(student["age"])

// add or update properties
student.country = "Uganda"
student.occupation = "Software Engineer"

console.log(student)


// looping through the objects
for (let key in student){
    console.log(key, student[key])
}

// The this keyword
let car = {
    brand: "Tesla",
    show(){
        console.log(`This car is a ${this.brand}`)
    }
}

car.show()

// this = the object calling the function.