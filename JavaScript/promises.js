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


// More numbers on Promises
// Exercise 1
function getUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("User fetched");
            resolve({id: 1, name: "Tendo Calvin"});
        },1000)
    })
}

function getPosts(userId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Posts fetched")
            resolve(["Post 1", "Post 2"])
        },1000)
    })
}


function getComments(post){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Comments fetched")
            resolve(["Nice", "Great"]);
        },1000)
    })
}
getUser()
    .then(user => getPosts(user.id))
    .then(posts => getComments(posts[0]))
    .then(()=> console.log("Done"))

// 🧪 Exercise 2 — Parallel speed test (must use Promise.all)

let letter1 = new Promise(res => setTimeout(()=>resolve("C"), 3000))
let letter2 = new Promise(res => setTimeout(()=>resolve("B"), 2000))
let letter3 = new Promise(res => setTimeout(()=>resolve("A"), 1000))

Promise.all([letter1, letter2, letter3])
    .then(letters => console.log(letters))


// 🧪 Exercise 3 — Proper error handling
function fetchData(success){
    return new Promise((resolve, reject)=>{
       if(success){
        resolve("Data received !")
    }else{
        reject("Network error !")
    } 
    });
    
}

fetchData(true)
    .then(res => console.log(res))
    .catch(err => console.log(err))

fetchData(false)
    .then(res => console.log(res))
    .catch(err => console.log(err))


// 🧪 Exercise 4 — Returning promises correctly (trap exercise)

function step1(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 1");
            resolve();
        }, 1000);
    });
}

function step2(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 2");
            resolve();
        }, 1000);
    });
}

step1()
    .then(()=> step2())
    .then(()=> console.log("Done"))

// for number 4, I got lost on whether to use both .then and .catch


// 🧪 Exercise 5 — Mixed sequential + parallel (real world pattern)

function login() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("User logged in");
            resolve();
        }, 2000);
    });
}

function fetchProfile() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Profile fetched");
            resolve();
        }, 2000);
    });
}

function fetchNotifications() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Notifications fetched");
            resolve();
        }, 2000);
    });
}

login()
    .then(() => {
        return Promise.all([fetchProfile(), fetchNotifications()]);
    })
    .then(() => console.log("Dashboard ready"));



