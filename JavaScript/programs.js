// part 1 (Callbacks)
// example one (basic callback)
function greet(name, callback){
    console.log("Hi " + name);
    callback();
}

function sayBye(){
    console.log("Goodbye!")
}

greet("Calvin", sayBye)

// Example 2 – Callback with delay
function fetchData(callback){
    setTimeout(() =>{
        console.log("Data received")
        callback()
    }, 2000)
}

fetchData(()=>{
    console.log("Processing Data....")
})

// Example 3 – Nested callbacks (callback hell)
setTimeout(()=>{
    console.log("Step 1");

    setTimeout(()=>{
        console.log("step 2");

    setTimeout(()=>{
        console.log("Step 3");
    }, 1000)
    }, 1000)
}, 1000)


// Example 4 – Passing data into callback
function calculate(a, b, callback){
    let result = a + b
    callback(result)
}

calculate(5,7 , (res) =>{
    console.log(res)
})


// Example 5 – Error-first callback style
function divide(a, b, callback){
    if(b === 0){
        callback("Cannot divide by zero", null);
    }else{
        callback(null, a/b)
    }
}

divide(10, 2, (err, result) =>{
    if(err) console.log(err);
    else console.log(result);
})