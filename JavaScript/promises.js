// Part 2 (Promises)

// example 1
let promise = new Promise((resolve, reject)=>{
    resolve("Success!")
})

promise.then(res =>console.log(res))

// example 2 -Promise with delay
function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data received !")
        },2000)
    })
}

fetchData().then(res =>console.log(res))

// example 3 -Handling errors
let p = new Promise((resolve, reject)=>{
    reject("Something went wrong");
})

p.catch(err => console.log(err))

// example 4 -Chaining Promises

fetchData()
  .then(res => {
    console.log(res);
    return "Processing";
  })
  .then(step => console.log(step));


// Example 5 – Promise.all
let p1 = Promise.resolve("A")
let p2 = Promise.resolve("B")

Promise.all([p1, p2])
.then(values => console.log(values))

// 🧪 7 Promise Exercises
// 1. Create a promise that resolves after 3 seconds with “Done”.
function Data(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Done");
        },3000)
    })
}

Data().then(res => console.log(res))

// 2. Create a promise that rejects if a number is negative.
function positive(number){
    return new Promise((reject, resolve)=>{
        if(number < 0){
            reject("Negative number")
        }else{
            resolve("Positive number")
        }
    })
}

positive(8)
    .then(res => console.log(res))
    .catch(err => console.log(err))

// Rule: Promise creates the result.  .then() consumes the result.

// 3. Chain 3 .then() calls that print steps.
Promise.resolve("Start")
    .then(res =>{
        console.log(res);
        return "Step 1";
    })

    .then(res =>{
        console.log(res);
        return "Step 2";
    })

    .then(res =>{
        console.log(res);
        return "Step 3";
    })

    .then(res => console.log(res))

// 4. Convert your “Wake up → Brush → Eat” callback hell into promises.

function steps(message, time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },time)
    })
}

steps("Wake up", 1000)
    .then(()=> steps("Brush", 1000))
    .then(()=> steps("Eat", 1000))


// 5. Use Promise.all with 3 promises.
let goal1 = Promise.resolve("Get a SWE job");
let goal2 = Promise.resolve("Earn over $100K in my first year");
let goal3 = Promise.resolve("Invest in myself as much as possible");

Promise.all([goal1, goal2, goal3])
    .then(values => console.log(values))

// 6. Use .catch() to handle errors.

let q = new Promise((resolve, reject)=>{
    reject("Mikel Carrick is at the wheel again")
})

q.catch(err => console.log(err))

// 7. Create a fake login function that resolves if password is “1234”.
function login(password){
    return new Promise((reject, resolve)=>{
        if(password === "1234"){
            resolve("Login successfully");
        }else{
            reject("Wrong Password")
        }
    })
}

login("1234")
    .then(res => console.log(res))
    .catch(err => console.log(err))

