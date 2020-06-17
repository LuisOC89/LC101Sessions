
console.log("Example 1");
// Initiate several vars in single line:
let [a, b] = [4, "whatever"];
console.log("a: " + a + "\nb: " + b);

console.log("\nExample 2");
// Ternary Operator
// condition ? expressionIfConditionTrue : expressionIfConditionFalse
let n = 26;
let sign = (n > 0) ? "positive" : "negative"; 
console.log(`${n} is: ${sign}`);

console.log("\nExample 3");
// More difficult:
n = 0; 
sign = (n > 0) ? "positive" : (n < 0) ? "negative" : "neutral";
console.log(`${n} is: ${sign}`);

console.log("\nExample 4");
// Method Chaining 
// To put one method (function) after the other, so you can read like sentence.
let language = "Javascript";
abreviation = language.slice(0, 5).replace("ava", "").toUpperCase();
console.log(`languaje: ${language}\nabreviation: ${abreviation}`);

console.log("\nExample 5");
// Other example:
let pythonCopy = "title case";
pythonCopy = pythonCopy.replace('ti', 'Ti').replace('c', 'C');
console.log(`"title case": '${pythonCopy}'.`);
