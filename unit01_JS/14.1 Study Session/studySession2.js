
// ============ You dont need arguments to be named when you pass
// them into a function, but it is a good practice

let otherObject = {
    whatever: '123',
    number: 6
};

function addNumbers(number1, number2, object1, object2){
    return number1 + number2 + object1.number + object2.number;
}

console.log(addNumbers(3, 5, {name: 'anObject', number: 3}, otherObject));

// =========================== Conditionals (if)

function indicatePos(number){
    let posStr;
    if (number === 1){
        posStr = 'st';
    } else if (number === 2){
        posStr = 'nd';
    } else if (number === 3){
        posStr = 'rd';
    } else {
        posStr = 'th';
    }
    return posStr;
}

let number = 1;
console.log(`${number} corresponds to the ${number}${indicatePos(number)}`);
number = 2;
console.log(`${number} corresponds to the ${number}${indicatePos(number)}`);
number = 3;
console.log(`${number} corresponds to the ${number}${indicatePos(number)}`);
number = 4;
console.log(`${number} corresponds to the ${number}${indicatePos(number)}`);
number = 7;
console.log(`${number} corresponds to the ${number}${indicatePos(number)}`);

// ================= Errors and debugging 

// 3 kinds:

// 1. Syntax error
// le aNumber = 3;

// Runtime errors
// let iAmAnArray = [1, 2];
// console.log(iAmAString);

// Logic Errors
// let number1 = '1';
// let number2 = 'two';

// let total = Number(number1 + number2);

// console.log(total);

// ========== Stringing characters together
// Two ways: 
let name = "Lucy";
let friend = "Skywalker";

// 1. Concatenation 
console.log(name + " is friends with " + friend + ".");

// 2. String literals --> Broadly most used and accepted
console.log(`${name} is friends with ${friend}.`);

// ========= Strings and arrays
let aString = "I am a string";
let anArray = [
    -1, 
    2.75, 
    true, 
    false, 
    "I am a string", 
    {name: "object2"}, 
    undefined, 
    null,
    function aFunction(name){
        return name[0] + name[name.length - 1];
    }
];
console.log(anArray);

let aName = "Rama";
console.log(anArray[8](aName));

// ======================= Loops and recursion

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

let y = 0;
let newString9 = '';
while (true){
    newString9 = newString9 + arr[y];
    y = y +1;
    if (y >= arr.length){
        break;
    }
    if (arr[y] === '0'){
        break;
    }
}
console.log(newString9);

// ================ Nested loops
let fruitsPrices = {
    4: ['apple', 'pineapple', 'grapefruit'],
    5: ['banana', 'strawberries'],
    9: ['watermelon']
};

function transform(fruitsObject){
    let newObj = {};
    let newKey;
    for (key in fruitsObject){
        for (let i=0; i<fruitsObject[key].length; i++){
            newKey = fruitsObject[key][i];
            newObj[newKey] = Number(key);
        }
    }
    return newObj;
}
// debugger;
console.log(transform(fruitsPrices));

let multiDImArr = [
    ['Becca', 'Rama', 'Ashley', 'Josiah'],
    ['Michael', 'Susan', 'Max', 'Luis'],
    ['Ed', 'Greg', 'Jhoan']
];

for (let counter=0; counter<multiDImArr.length; counter++){
    let elementOfMainArray = multiDImArr[counter];
    for (let c=0;c<elementOfMainArray.length;c++){
        console.log(elementOfMainArray[c]);
    }
}

// 

function returnName(name){
    console.log("\n"+name);
    // return name;
    // return
}

function validateName(name){
    console.log("\n"+name);
    if (name === 'Luke'){
        throw Error('Luke cannot be Darth Vader.');
    }
    // return name;
    // return
}

function returnName2(name){
    return name;
}

console.log(`\n\nreturnName: ${returnName('Darth Vader')}`);

validateName('Leia');
// validateName('Luke');

console.log(`\nreturnName2 with no param passed: ${returnName2()}`);
console.log(`\nreturnName2 as expected: ${returnName2('Sakura')}`);




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

let obj2 = {
    name: 'an object',
    'description': 'I am an object',
    elements: [1, 3, true, 'string3'],
    describe: function(){
        return this.description;
    }
}

let message = `Name: ${obj2['name']}\n`;
message += `Description: ${obj2.description}\n`;
message += `Elements: ${JSON.stringify(obj2.elements)}\n`;

console.log(message);
// console.log(`Name: ${obj2['name']}\nDescription: ${obj2.description}\nElements: ${JSON.stringify(obj2.elements)}\n`)

function returnElements(){
    return this.elements;
}

console.log(obj2);
console.log(`Dot Notation: ${obj2.describe()}`);
console.log(`Bracket Notation: ${obj2['describe']()}`);
// console.log(describe()); ==> This wont work

console.log(returnElements());

obj2.retElements = returnElements;

console.log(obj2);
console.log(obj2.retElements());
