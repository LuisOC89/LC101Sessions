
/*
- Method != function:
When learning about strings and arrays, we noted that a method is a function that "belongs to" an object. 
This distinction is important to keep in mind, 
and will be explored in depth in a later chapter. 
For now, think of a method as a special type of function.

- Encapsulation:
Encapsulation is the process of packaging up code in a reusable way, 
without the programmer needing to be concerned with how it works.
A commonly-used analogy for describing the concept of a function is that of a machine that takes input, 
carries out an action, and gives back a result. This is known as the function machine analogy.

- What is a function:
The programming concept of a function is very similar to the concept of a mathematical function. 
For example, in high school algebra you learned about functions like y = 4x + 7. 
These functions used a mathematical input (x) and carried out a procedure to return a numerical result (y).

- DRY vs. WET:
    DRY: Don't Repeat Yourself.
    WET: "write everything twice", "we enjoy typing" or "waste everyone's time"

- What does it mean to invoke a function?
A function call is the act of using a function by referring to its name,
followed by parentheses. A synonymous term is function invocation, 
and we will sometimes say that we are "invoking a function."
*/
let value = 1 
/*
- WHat is an argument?
Within parentheses, a comma-separated list of arguments may be provided 
when calling a function. These are sometimes called inputs, and we say 
that the inputs are "passed to" the function.

- WHat is a common way to say you are providing inputs to a function?
You are "passing arguments to the function".

- Does a function error if you assign it's return value to a variable
and it doesn't return a value? Will it break?*/
let returnVal = console.log("LaunchCode");
console.log(returnVal);
/*If a function doesn't provide an explicit return value, 
the special value 'undefined' will be returned.

- What do this returns? */
console.log(Number('Bravo'));
/*It returns the special value 'NaN' --> Not a Number

- The special value undefined is built into JavaScript. 
As with booleans, it is not a string, 
so undefined === "undefined" returns false.

- What does this return? Tricky tricky*/
console.log(Number('Bravo'));
// It logs NaN in the console, but tecnichally speaking, it returns undefined.
/*
- What is a side effect?
When calling a function results in an action that 
changes the state of a program outside of the function itself.
Calling console.log results in output to the console,
which is a side effect.

- Difference between parameter and argument.
A parameter is a variable in a function definition. When a function is 
called, the arguments are the data you pass into the function's 
parameters. Parameter is variable in the declaration of function. 
Argument is the actual value of this variable that gets passed to 
function.

- What are the parts of a function?
Name, parameters and body.

- What does abstraction mean in programming? Give an example.
Abstraction is the process of taking something specific and making it more general.
In this example, a loop that prints the contents of a specific array variable 
(something specific) is transformed into a function that prints the 
contents of any array (something general). */
let names = ["Lena", "James", "Julio"];

// From a for loop that prints an array of names
for (let i = 0; i < names.length; i++) {
   console.log(names[i]);
}

// To a function that prints any array of names
function printArray(array) {
   for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
   }
}

printArray(names);

/*
- What is the naming convention for functions?
lowercaseCamelCase, descriptive verb, what it does. Pair verb/Object

- What value is returned from a function that doesn't have 
a 'return' statement?  undefined 

- What is a boolean function? A function that returns a boolean value.
Example:*/
function isEven(n) {
   if (n % 2 === 0) {
      return true;
   } else {
      return false;
   }
}
 
console.log(isEven(4));
console.log(isEven(7));

// - Naming convention for boolean functions? Two words: 'is' and 'has'.
// It is conventional to name boolean functions by starting with either is or has, 
// which creates a nice semantic effect when reading the code. For example, 
// reading isEven(4) communicates to the reader that the function should answer 
// the question: "Is 4 even?". This is a convention so widely used by programmers 
// that it extends to nearly every language.
function isEven(n) {
   return (n % 2 === 0);
}
console.log(isEven(4));

// What happens if you invoke a function without any arguments
// and the function doesn't have a default argument for the parameter?
// Does the function break or does it assign a value to the required 
// parameter, and if yes, what value? 
// The argument assumes a value of 'undefined'. The function will break
// if logic is affected by value 'undefined' of argument, like 'undefined' + 2 -> break

// Advantages of using functions:
// - Functions Reduce Repetition
// - Functions Make Your Code More Readable
// - Functions Reduce Complexity
// - Functions Enable Code Sharing


