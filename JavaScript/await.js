// Examples of using async/await in JavaScript

// A function that returns a promise that resolves after a given time
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// An async function that uses await to pause execution until the promise resolves
async function fetchData() {
    console.log("Fetching data...");
    await delay(2000);  // Wait for 2 seconds   
    console.log("Data fetched!");
    return { data: "Sample Data" };
}

// An async function that calls another async function and handles the result
async function processData() {  
    try {
        const result = await fetchData();
        console.log("Processing:", result.data);
    } catch (error) {
        console.error("Error:", error);
    }
}
// Call the processData function to see the output
processData();

// An example of using await with multiple promises
async function fetchMultipleData() {
    const promises = [
        delay(1000).then(() => "Data from source 1"),
        delay(1500).then(() => "Data from source 2"),
        delay(500).then(() => "Data from source 3")
    ];
    const results = await Promise.all(promises);
    console.log("All data fetched:", results);
}