
// =======================
// RECURSION BEST EXAMPLES
// =======================

// =====================================
// Joining Array Elements with FOOR LOOP
// =====================================
console.log("\nExample 1: Foor Loop");
let arr = ['L', 'C', '1', '0', '1'];
let newString = '';

for (let i = 0; i < arr.length; i++){
    newString = newString + arr[i];
}
// console.log(arr);
console.log(newString);

// ======================================
// Joining Array Elements with WHILE LOOP
// ======================================
console.log("\nExample 1: While Loop");
let newString2 = '';
let i = 0;
while (i<arr.length){
    newString2 = newString2 + arr[i];
    i += 1;
}
console.log(newString2);

// =====================================
// Joining Array Elements with RECURSION
// =====================================
console.log("\nExample 1: Recursion");
let j = 0;
let newString3 = '';
function joiningArrayElements(j, arr){
    if (j<arr.length){
        newString3 = newString3 + arr[j];
        j += 1;
        return joiningArrayElements(j, arr);
    } else {
        return newString3;
    }
}
console.log(joiningArrayElements(j, arr));

/* 
Base case: Condition that ends the process, since we do not 
know how many times the function must be called
for and while loops end when a particular condition evaluates to false, 
like (i < arr.length) or (arr.length > 0)
if the base case is true, the recursion ends and the task is complete. 
if the base case is false, the function calls itself again.

function combineEntries(arrayName){
    if (baseCase is true){
        //solve last small step
        //end recursion
    } else {
        //call combineEntries again
    }
}
*/


/* 
MY DEFINITION: IN MY OWN WORDS
function whatever(entryWhatever){
    if (whatever condition is true){
        // DO something
        // Call function again if necessary
    } else {
        // condition is not true anymore
        // return expected result from function
    }
}
*/


/*Add to array only the ODD values from 3 - 29.*/
console.log("\nExample 2: FOR LOOP");
let remainder;
let oddArray1 = [];
for (let i = 3; i < 30; i++) {
    remainder = i % 2;
    if (remainder !== 0){
        oddArray1.push(i);
    }
}
console.log(oddArray1);

console.log("\nExample 2: RECURSION");
// Recursion version
let remainder2;
let k = 3;
let oddArray2 = [];
function addOddArray(k, arr){
    if (k < 30) {
        remainder2 = k % 2;
        if (remainder2 !== 0){
            arr.push(k);
        }
        k += 1;
        return addOddArray(k, arr);
    }
    else {
        return arr;
    }
}
console.log(addOddArray(k, oddArray2))

console.log("\nExample 3: FOR LOOP");
function removeHyphens(str) {
    let strWithoutHyphens = ''
 
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '-') {
            strWithoutHyphens += str[i];
        }
    }
 
    return strWithoutHyphens;
}
 
let launchCodePhone = "314-254-0107";
console.log(removeHyphens(launchCodePhone));


console.log("\nExample 3: RECURSION");
function removeHyphens2(str, m=0, strWithoutHyphens2='') {
    if (m<str.length){
        if (str[m] !== '-') {
            strWithoutHyphens2 += str[m];
        }
        return removeHyphens2(str, m+1, strWithoutHyphens2)
    } else {
        return strWithoutHyphens2;
    }
}
 
let launchCodePhone2 = "314-254-0107";
console.log(removeHyphens2(launchCodePhone2));