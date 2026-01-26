// asynchronous programming in JavaScript
// step 1 : The call stack
console.log("A");
console.log("B");
console.log("C");

// This runs from top to bottom

// step 2: The problem
setTimeout(()=>{
    console.log("E")
},0)

console.log("D");

// Here D is printed before E setTimeout is not hanlded by the JavaScript engine
// output will be A, B, C, D, E

// You must visualize this
// Timeline:
// 1. setTimeout → sent to Web API
// 2. console.log("A") → runs
// 3. 2 seconds later → callback → queue
// 4. Stack empty → Event loop pushes callback → runs

console.log("Start");

setTimeout(()=>{
    console.log("Middle");
},0)

console.log("End")

// output will be start, end & middle

// callbacks
// A callback is just a function passed into another function to run later

setTimeout(()=>{
    console.log("Hello after 2 seconds")
}, 2000)

// Promises — the solution
// A Promise is: A value that will exist in the future
// Three states:
// - Pending
// - Resolved
// - Rejected

let promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Data received")
    },2000)
})

promise.then(data => console.log(data))

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Error: Something went wrong")
    },2000)
})

promise2.then(data =>console.log(data)).catch(err => console.log(err))

// Async / Await — the final evolution
// This is just syntax over promises.

function wait (){
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve("Done")
        },2000)
    })
}

async function run(){
    let result = await wait();
    console.log(result);
}

run();

// The rule you must remember: await pauses the function, NOT JavaScript

console.log("Start")

setTimeout(()=>{
    console.log("Waited")
},2000)

console.log("End")

// callback hell
setTimeout(()=>{
    console.log("Start");

    setTimeout(()=>{
        console.log("End");

        setTimeout(()=>{
            console.log("Waited");
        },2000)
    })
})

// async/wait solution
function delay(ms){
    return new Promise (resolve => setTimeout(resolve, ms))
}

async function run(){
    console.log("Start");
    console.log("End");
    await delay(2000);
    console.log("Waited");
}

run();