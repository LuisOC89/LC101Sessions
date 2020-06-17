
// // 1. What happens if a function expects an argument to be a function, but it isn't?
// function callMe(anyName) {
//     anyName();
// }

// callMe("Al");
// // --> TypeError: anyName is not a function

// // 2. Why use anonymous functions? They can be single used. -> This depends on the case.
// // Why do we use functions? -> To make code reusable, so anonymous functions wouldn't be
// // reusable, so why? WHat's better?
// // Ex:

// // What's better?
// setTimeout(function () {
//     console.log("The future is now!");
// }, 5000);

// setTimeout(console.log("The future is now!"), 5000);
// // I disagree with this 'advantage' of anonymous functions. If you are going to use your 
// // code once, then you shouldn't create a function (unless you are planning to use it more
// // than once in the future).


// // 3. Spaguetti Code and functions. Don't exagerate, find some equilibrium.
// // As a rule of thumb, don't repeat functionality, but don't write a function for
// // every action, literally.

// // Bad:
// function sayHi(name){
//     console.log("Hi, "+ name);
// }

// function sayBye(name){
//     console.log("Bye, "+ name);
// }

// // Instead:
// function saySomething2Name(message, name){
//     console.log(message +" "+ name);
// }

// 4. What is recursion?
// To call same function over and over until some condition is met.

function add2ToNumberXTimes(number, times){
    if (times <= 0) {
        return number;
    } else {
        return add2ToNumberXTimes(number+2, times-1)
    }
}


let y = add2ToNumberXTimes(10, 5);

console.log(y);
