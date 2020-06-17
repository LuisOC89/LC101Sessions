
console.log("Example 1");
// To pretty print a list in JS
let colorsList = ["blue", "red", "black", "yellow", "white", "green"];
console.log(colorsList);
console.log(`colorsList: ${colorsList}`);
console.log(`JSON.stringify(colorsList): ${JSON.stringify(colorsList)}`);

console.log("\nExample 2");
let fruits = ["apple", "banana", "orange"];
console.log("fruits: " + fruits);
fruits.push(fruits.pop());
console.log("fruits: " + fruits);

console.log("\nExample 3");
console.log("fruits: " + fruits);
fruits.unshift(fruits.shift());
console.log("fruits: " + fruits);

console.log("\nExample 4");
let connecter = " - ";
fruits = fruits.join(connecter);
fruits = fruits.split(connecter);
console.log(`fruitsDisplay: ${fruits}`);
