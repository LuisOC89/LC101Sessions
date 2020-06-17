
# Interview Questions
1. What does local scope mean?  
Local scope refers to variables declared and initialized inside  
a function or block. A locally scoped variable can only be referenced  
inside of the block or function where it is defined.  

2. What is global scope?  
Global scope refers to variables declared and initialized outside  
of a function and in the main body of the file. These variables  
are accessible to any function within a file.  

3. What is the execution context?  
Execution context refers to the conditions under which a  
variable is executed ---> its scope.  

4. What is variable shadowing?  
Variable shadowing is where two variables in different scopes have the same name. The variables can then be accessed under different contexts. However, shadowing can affect the variable's accessibility. It also causes confusion for anyone reviewing the code.

5. Whenever possible, use different global and local variable names.  

6. What is hoisting?  
Variable hoisting is a behavior in JavaScript where variable declarations 
are raised to the top of the current scope. This results in a program 
being able to use a variable before it has been declared. Hoisting occurs 
when the var keyword is used in the declaration, but it does NOT occur 
when let and const are used in the declaration.

7. What keyword allows a variable to be hoisted?  
let  
var --> this one  
cons  

8. Which of these are NOT primitive data types?  
- Strings
- Numbers
- Booleans
- Arrays --> this one
- Objects --> this one
- undefined
- null

9. Primitive data types are immutable.  

10. try and catch for catching exceptions  

11. Catching an exception is also known as handling an exception.  

12. WHen to use `null` instead of `undefined`?
When initializing a variable, to verify it has been initialized.

13. Great resource for coding questions and answers.
Stackoverflow.
