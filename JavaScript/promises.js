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