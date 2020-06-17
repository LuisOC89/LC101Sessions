
// Add a method to an object
console.log("\nExample 4");
let giraffe = {
    species: "Reticulated Giraffe",
    name: "Cynthia",
    weight: 1500,
    age: 15,
    diet: "leaves"
};
console.log(giraffe);
giraffe.birthday = function() {
    return this.age = this.age + 1;
}

// Correct
console.log(giraffe);
console.log(giraffe.age);
console.log(typeof giraffe.birthday);
giraffe.birthday();
console.log(giraffe.age);

// Correct
let printName = function() {
    console.log(this.name);
} 
console.log("============ here1 ==============");
printName();
console.log("============ here2 ==============");
// Global Variable -> Global Context
// let instead -> Won't work.
// let name = "tricky tricky";
// var name = "tricky2";
name = "tricky tricky";
printName();

console.log(giraffe);
console.log("============ here3 ==============");
giraffe["printName"] = printName;
giraffe.printName();


// You can use for ... in in arrays as well
let arr4 = [1,"two",3,4,5];
for (item in arr4) {
    console.log(arr4[item]);
}

// Other way to iterate through objects:
const fruits = {
    apple: 28,
    orange: 17,
    pear: 54,
};

const keys = Object.keys(fruits);
console.log(keys);
const values = Object.values(fruits);
console.log(values);
const entries = Object.entries(fruits);
console.log(entries);

// The for...of statement creates a loop iterating over iterable objects, 
// including: built-in String, Array, array-like objects (e.g., arguments or NodeList), 
// TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration 
// hook with statements to be executed for the value of each distinct property of the object.
for (const [fruit, count] of entries) {
    console.log(`There are ${count} ${fruit}s`);
}

// Generate a random number from 0 to 99
console.log(Math.trunc(Math.random()*100));

// Returns a random integer from 0 to 100
console.log(Math.floor(Math.random()*101));     

// Returns a random integer from 0 to 100
console.log(Math.round(Math.random()*100));  

// Rounds a random number to XX decimals
let xAmountDecimals = 4;
let tenXAmountDecimals = Math.pow(10, xAmountDecimals);
console.log(Math.round(Math.random()*tenXAmountDecimals)+Math.round(Math.random()*tenXAmountDecimals)/tenXAmountDecimals);  
