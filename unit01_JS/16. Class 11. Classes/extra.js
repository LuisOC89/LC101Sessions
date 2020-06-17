
// Spread operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
/*
Spread syntax allows an iterable such as an array expression or string to be expanded in 
places where zero or more arguments (for function calls) or elements (for array literals) 
are expected, or an object expression to be expanded in places where zero or more 
key-value pairs (for object literals) are expected.
*/
function sum(x, y, z) {
    return x + y + z;
}
  
const numbers = [1, 2, 3];

console.log(sum(numbers));
// expected output: 6

console.log(sum(numbers[0], numbers[1], numbers[2]));
// expected output: 6

console.log(sum(...numbers));
// expected output: 6


// Reduce method
// https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332

const arrSum = arr => arr.reduce((a,b) => a + b, 0)
console.log(arrSum([20, 10, 5, 10]));

/*
The function that we pass as the first parameter of the reduce 
method receives two parameters, a and b. In this code, a is our 
accumulator. It will accumulate our sum as our function works. 
b is the current value being processed.
The second parameter of the reduce method is the initial value
we wish to use. We’ve set our initial value to zero which allows 
us to use empty arrays with our arrSum functions.
In other words, we are simply going to start with zero and one by 
one add each value of the array to our initial value until we’ve 
looped through the entire array. When done, the accumulator value will be returned.
*/