

// let number = 3;

// console.log(`Before: ${number}`);
// function addNum(number){
//     number += 6;
//     console.log(`Inside: ${number}`);
// }
// addNum(number);
// console.log(`Outside: ${number}`);

// let array = ["1", "2"];
// console.log(`Before: ${array}`);
// function addItem(array){

//     array = array.concat(["3"]);
//     console.log(`Inside: ${array}`);
// }
// addItem(array);
// console.log(`Outside: ${array}`);


// Functions:
// Syntax:
// Name of the function
// Paramaters
// Body

// function addNumbers(TwoNumbers){
//     let number1 = TwoNumbers[0];
//     let number2 = TwoNumbers[1];
//     let solution = number1 + number2;
//     console.log(solution);
// }

// let solution = addNumbers([1, 4]);
// console.log(solution);

// Scopes
let number1 = 4;
let number2 = 1;
function multiplyNumbers(TwoNumbers){
    let number1 = TwoNumbers[0];
    // let number2 = TwoNumbers[1];
    let solution = number1 * number2;
    console.log(number1);
    return solution;
}

solution = multiplyNumbers([1, 4]);
console.log(number1);
console.log(solution);









