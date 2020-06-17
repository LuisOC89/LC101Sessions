/*As with strings, JavaScript provides us with useful methods for arrays. 
These methods will either alter an existing array, return information about 
the array, or create and return a new array. */

/*Common Array Methods
Here is a sample of the most frequently used array methods. */

// Checks if an array contains the specified item.
console.log("Example 1");
let fruits = ["apple", "banana", "orange"];
let containOrange = fruits.includes("orange");
console.log(`fruits = ["apple", "banana", "orange"]`);
console.log(`containOrange: ${containOrange}`);

let containsPear = fruits.includes("pear");
console.log(`containsPear: ${containsPear}`);

//Returns the index of the FIRST occurrence of an item in the array. 
//If the item is not in the array, -1 is returned.
console.log("\nExample 2");
let orangeIndex = fruits.indexOf("orange");
let pearIndex = fruits.indexOf("pear");
console.log(`fruits = ["apple", "banana", "orange"]`);
console.log(`orangeIndex: ${orangeIndex}`);
console.log(`pearIndex: ${pearIndex}`);

//Reverses the order of the elements in an array.
console.log("\nExample 3");
let inverseArrayFruits = fruits.reverse();
console.log(`fruits = ["apple", "banana", "orange"]`);
console.log(`inverseArrayFruits: ${inverseArrayFruits}`);

//Arranges the elements of an array into increasing order (kinda).
console.log("\nExample 4");
console.log(`fruits = ["apple", "banana", "orange"]`);
let sortedFruits = fruits.sort();
console.log(`sortedArray: ${JSON.stringify(sortedFruits)}`);

//Removes and returns the LAST element in an array.
console.log("\nExample 5");
console.log(`fruits: ${JSON.stringify(fruits)}`);
let expulsedLastFruit = fruits.pop();
console.log(`expulsedLastFruit: ${expulsedLastFruit}`);
console.log(`fruits: ${JSON.stringify(fruits)}`);

// Adds one or more items to the END of an array and returns the new length.
console.log("\nExample 6");
let newFruitsLength = fruits.push("watermelon","strawberry","pineapple");
console.log(`fruitsAfterPush: ${JSON.stringify(fruits)}`);
console.log(`newFruitsLength: ${newFruitsLength}`);

//Removes and returns the FIRST element in an array.
console.log("\nExample 7");
console.log(`fruits: ${JSON.stringify(fruits)}`);
let expulsedFirstFruit = fruits.shift();
console.log(`expulsedFirstFruit: ${expulsedFirstFruit}`);
console.log(`fruits: ${JSON.stringify(fruits)}`);

// Adds, removes or replaces one or more elements anywhere in the array.
// The splice() method adds/removes items to/from an array, and returns the removed item(s).
console.log("\nExample 8");
console.log(`fruits: ${JSON.stringify(fruits)}`);
let startIndex = 1;
let itemsToRemove = 2;
let removedFruits = fruits.splice(startIndex, itemsToRemove, "orange", "mango");
console.log(`removedFruits: ${removedFruits}`);
console.log(`fruits: ${JSON.stringify(fruits)}`);

// Adds one or more items to the START of an array and returns the new length.
console.log("\nExample 9");
newFruitsLength = fruits.unshift("strawberry","pineapple");
console.log(`fruitsAfterUnshift: ${JSON.stringify(fruits)}`);
console.log(`newFruitsLength: ${newFruitsLength}`);

// Combines two or more arrays and returns the result as a new array.
console.log("\nExample 10");
moreFruits = ["grapes", "grapefruit"];
fruits = fruits.concat(moreFruits, ["mandarin", "guava"]);
console.log(`fruits: ${JSON.stringify(fruits)}`);

// Combines all the elements of an array into a string.
console.log("\nExample 11");
let connecter = " - ";
fruitsDisplay = fruits.join(connecter);
console.log(`fruitsDisplay: ${fruitsDisplay}`);

// Copies selected entries of an array into a new array.
console.log("\nExample 12");
startIndex = 3;
let endIndex = 7;
fruits = fruits.slice(startIndex, endIndex);
console.log(`fruits: ${JSON.stringify(fruits)}`);

// Divides a string into smaller pieces, which are stored in a new array.
console.log("\nExample 13");
let fruitsString = fruitsDisplay;
fruitsArray = fruitsDisplay.split(" - ");
console.log(`fruitsArray: ${JSON.stringify(fruitsArray)}`);

// Check understanding
console.log("\nExample 1");
let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

console.log("\nExample 2");
let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);

debugger;

