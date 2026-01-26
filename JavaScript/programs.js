// // part 1 (Callbacks)
// // example one (basic callback)
// function greet(name, callback){
//     console.log("Hi " + name);
//     callback();
// }

// function sayBye(){
//     console.log("Goodbye!")
// }

// greet("Calvin", sayBye)

// // Example 2 – Callback with delay
// function fetchData(callback){
//     setTimeout(() =>{
//         console.log("Data received")
//         callback()
//     }, 2000)
// }

// fetchData(()=>{
//     console.log("Processing Data....")
// })

// // Example 3 – Nested callbacks (callback hell)
// setTimeout(()=>{
//     console.log("Step 1");

//     setTimeout(()=>{
//         console.log("step 2");

//     setTimeout(()=>{
//         console.log("Step 3");
//     }, 1000)
//     }, 1000)
// }, 1000)


// // Example 4 – Passing data into callback
// function calculate(a, b, callback){
//     let result = a + b
//     callback(result)
// }

// calculate(5,7 , (res) =>{
//     console.log(res)
// })


// // Example 5 – Error-first callback style
// function divide(a, b, callback){
//     if(b === 0){
//         callback("Cannot divide by zero", null);
//     }else{
//         callback(null, a/b)
//     }
// }

// divide(10, 2, (err, result) =>{
//     if(err) console.log(err);
//     else console.log(result);
// })

// 7 Callback Exercises 
// A callback means: “I don’t decide what happens next — the caller does.”

// 1. Write a function that waits 2 seconds then prints your name using a callback.
function user(callback){
    setTimeout(()=>{
        callback("Tendo Calvin")
    },2000)
}

user((name)=>{
    console.log(`Hello my name is ${user}`)
})

// 2. Create 3 nested timeouts that print: “Wake up → Brush → Eat”.
setTimeout(()=>{
    console.log("Wake up");

    setTimeout(()=>{
        console.log("Brush");

    setTimeout(()=>{
        console.log("Eat")
    },1000)
    },1000)
},1000)

// 3. Create a calculator function that uses a callback for multiplication.
function multiplication(a,b, callback){
    callback(a * b)
}

multiplication(3,7, (res)=>{
    console.log(res)
})

// 4. Simulate fetching a user after 1 second, then print the user name in a callback.
function fetchUser(callback){
    let user = {name : "Robbie Lyle"}
    setTimeout(()=>{
        callback(user)
    },1000)
}

fetchUser((user)=>{
    console.log(user.name)
})



// 5.  Write a function that checks if a number is even and returns result via callback.
function even(a, callback){
    if(a % 2 === 0){
        callback("Even number");
    }else{
        callback("Odd number");
    }
}

even(101, (res)=>{
    console.log(res)
})

// 6. Recreate callback hell with 4 steps.

setTimeout(()=>{
    console.log("Discipline and Consistency in 2026");

    setTimeout(()=>{
        console.log("This is my break or make year as a Software Engineer in 2026");

    setTimeout(()=>{
        console.log("I pray to God to be consistent and start learning how to journal as said by Ali Abdaal");

    setTimeout(()=>{
        console.log("I want to earn over $100K as a SWE in my first year, so help me God. I want to work remotely as well.")
    },2000)
    }, 2000)
    }, 2000)
},2000)

// 7. Write an error-first callback that checks if a password length is ≥ 8.

function password(word, callback){
    if (word.length >= 8){
        callback(null, "Password is fine")
    }else{
        callback("Password is too short", null)
    }
}

password("manchester united", (err, result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})