// // Examples of using async/await in JavaScript

// // A function that returns a promise that resolves after a given time
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // An async function that uses await to pause execution until the promise resolves
// async function fetchData() {
//     console.log("Fetching data...");
//     await delay(2000);  // Wait for 2 seconds   
//     console.log("Data fetched!");
//     return { data: "Sample Data" };
// }

// // An async function that calls another async function and handles the result
// async function processData() {  
//     try {
//         const result = await fetchData();
//         console.log("Processing:", result.data);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
// // Call the processData function to see the output
// processData();

// // An example of using await with multiple promises
// async function fetchMultipleData() {
//     const promises = [
//         delay(1000).then(() => "Data from source 1"),
//         delay(1500).then(() => "Data from source 2"),
//         delay(500).then(() => "Data from source 3")
//     ];
//     const results = await Promise.all(promises);
//     console.log("All data fetched:", results);
// }

// async function greet(){
//     return "Hello, My name is Tendo Calvin and I am a software developer.";
// }

// // Example  – Await delay
// function delay(){
//     return new Promise((resolve)=>{
//         setTimeout((resolve, 2000))
//     })
// }

// async function run(){
//     await delay();
//     console.log("2 seconds passed");
// }

// run()


// async function fetchInfo(){
//     let res = await fetch ("https://jsonplaceholder.typicode.com/users/1");
//     let data = await res.json();
//     console.log(data.name)
// }

// fetchInfo();

// // Example  – Error handling
// async function test(){
//     try{
//         throw new Error("Oops");
//     }catch(e){
//         console.log(e.message)
//     }
// }

// test()

// // Example – Sequential steps
// async function steps(){
//     await delay();
//     console.log("step 1");
//     await delay();
//     console.log("step 2");

// }

// steps();


// 🧪 7 Async/Await Exercises

// 1. Rewrite your promise delay using async/await.
function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            (resolve, ms)
        })
    })
}

async function process(){
    await delay(2000);
    console.log("2 seconds passed")
}

process();

// 2. Fetch a post from JSONPlaceholder and print the title.
async function fetchPost(){
    let post = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await post.json();
    console.log(data.name)
}

fetchPost();

// 3. Create 3 awaited delays printing steps.
async function measures(){
    await delay(1000);
    console.log("2026 is for locking in!");

    await delay(1000);
    console.log("2026 is for getting a remote role and starting a business that is YouTube");

    await delay(1000);
    console.log("2026 is for discipline and consistency");
}

measures()



// 4. Use try/catch with an async function.
async function failure(){
    try{
        throw new Error("Damn I need to lock in")
    }catch(e){
        console.log(e.message)
    }
}
failure();

// 5. Convert the fake login promise into async/await.
function login() {
    return new Promise((resolve)=>{
        setTimeout(resolve, 2000)
        console.log("User logged in")
        resolve()
    })
}

async function run(){
    await login();
    console.log("Welcome to the dashboard !")
}

run()

// 6. Await two promises one after another.
// This is where async/await becomes powerful.

function task1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Gym is the only way for the next 4 years")
            resolve()
        },2000)
    })
}


function task2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Tendo Calvin, you must collect wealth in the next 4 years, otherwise you're fucked man.")
            resolve()
        },2000)
    })
}

async function runTasks(){
    await task1()
    await task2();
    console.log("All tasks are done");
}

runTasks();

// 7. Await multiple promises using Promise.all.
// This is where async/await becomes powerful.

async function runParallel() {
    await Promise.all([task1(), task2()]);
    console.log("All tasks are done")
}

runParallel();


