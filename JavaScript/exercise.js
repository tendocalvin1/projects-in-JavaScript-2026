// Simple exercises to help me become a better Full Stack Developer

let arr = [1,2,3,4,5,6,7,8,9,10];
arr.pop(); // removes the lat element in an array
console.log(arr)

arr.shift();
console.log(arr)

console.log(arr);


let student = {
    name: "Tendo Calvin",
    age: 24,
    country: "Uganda",
    occupation: "Software Engineer",
    greet : function(){
        console.log(`Hello everyone, my name is ${this.name}, I am a ${this.occupation} by profession and I come from ${this.country}`)
    }
}

for (let key in student){
    console.log(key, student[key])
}
student.greet();
// console.log(student);


var a;
console.log(a); // undefined

a = 10;
console.log(a) // a = 10

// console.log(b) // ReferenceError: Cannot access 'b' before initialization
let b = 15;
console.log(b)