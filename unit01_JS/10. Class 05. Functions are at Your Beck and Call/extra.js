
let radius = 4;

console.log("Example 1: Common function");
// Common function:
function calculateAreaOfCircle(radius) {
    let area = Math.PI * radius**2;
    return area;
}
areaOfCircle = calculateAreaOfCircle(radius);
console.log(areaOfCircle);

console.log("Example 2: Anonymous common function != lambda expression");
// Anonymous common function (not a lambda): -> The function doesn't have a name
// Evaluate at the end
console.log(
    function (radius) {
        let area = Math.PI * radius**2;
        return area;
}(radius));

console.log("Example 3: Anonymous arrow function != lambda expression");
// All arrow functions are anonymous
// Anonymous arrow function (not a lambda): -> The function doesn't have a name
// and have an arrow
// Evaluate at the end
// “not all anonymous functions are lambda functions and viceversa”
console.log(((radius) => Math.PI * radius**2)(radius));

console.log("Example 4: Lambda expression + anonymous function");
// Lambda expression: 
// Lambda means "function used as data".
/*They are simply expressions that create 
functions to be passed functions as arguments
to other functions or assigning them to variables.*/
// Lambda expression + anonymous common function:
let areaOfCircle2 = function (radius) {
    let area = Math.PI * radius**2;
    return area;
}
console.log(areaOfCircle2(4));

console.log("Example 4: Lambda expression + anonymous common function in 1 line");
// Lambda expression + anonymous common function in 1 line:
let areaOfCircle3 = function (radius) { return Math.PI * radius**2; };
console.log(areaOfCircle3(radius));

console.log("Example 5: Lambda expression + arrow function");
// Arrow functions
// Lambda expression + arrow function:
let areaOfCircle4 = (radius) => Math.PI * radius**2;
console.log(areaOfCircle4(radius));

console.log("Example 6: Lambda expression + named common function in 1 line");
// OJO: Anonymous defeats the purpose of functions since you cannot reuse them
// You cannot call the function but you can call the variable, so you can reuse it.
// “not all lambda functions are anonymous functions and vice versa”
// Lambda expression + named common function in 1 line:
let toProveInScopeInvocation = function thisIsMyName (radius) { return Math.PI * radius**2; };
console.log("Correct Usage");
console.log(toProveInScopeInvocation(radius));
console.log("Incorrect Usage");
// console.log(thisIsMyName(radius));

// Function Replacement
let letters = "letters"
function printLetters(letters){
    console.log(letters);
}
printLetters(letters)

function printLetters(letters){
    console.log(letters[0]);
}
printLetters(letters)

