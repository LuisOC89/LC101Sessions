
// What does NPM means?
// Node Package Manager

// WHere to look for online modules?
// https://www.npmjs.com/ 

// Another name for a module: a package, a library.

/*Exporting a Single Function
Let's start by exporting the isPalindrome function. 
At the bottom of the practiceExports.js code, 
add the line module.exports = isPalindrome;. 
This makes the function available to other files.

In index.js, we import practiceExports.js with a require statement. 
isPalindrome gets pulled in and assigned to the 
new variable palindromeCheck, and we can now call 
the function from within index.js. */