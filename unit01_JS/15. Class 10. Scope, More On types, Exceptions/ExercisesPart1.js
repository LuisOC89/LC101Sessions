/*
Exercises: Exceptions
Part 1: Zero Division (Throw)
Write a function called divide that takes two parameters: a numerator and a denominator.
Your function should return the result of numerator / denominator.
However, if the denominator is zero you should throw the error, "Attempted to divide by zero."
Hint: You can use an if / throw statement to complete this exercise.
*/

function divide(numerator, denominator){
    if (denominator === 0){
        throw Error("Attempted to divide by zero.");
    }
    return numerator/denominator;
}

console.log("9/3 is equal to " + divide(9, 3));
console.log("9/0 is equal to " + divide(9, 0));