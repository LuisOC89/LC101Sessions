
// // Types of variables: Strings, Numbers, Booleans and objects

let aString = "I am a string";

let aString2 = "532.43";

let aNumber = 532.43;

let aCar = {
    color: 'blue',
    model: 'hyundai',
    year: 2008
};

let fruitsPrices = {
    4: ['apple', 'pineapple', 'grapefruit'],
    5: ['banana', 'strawberries'],
    9: ['watermelon']
};

const aConst = "Im a constant";

let anArray = [aString, aNumber, aCar, fruitsPrices];


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

let newKeysObject = transform(fruitsPrices);

let fruitsImBuying = ['banana', 'grapefruit', 'apple', 'watermelon'];

function calculateTotalCost(newKeysObject, fruitsImBuying){
    let totalCost = 0;
    for (let i=0; i<fruitsImBuying.length; i++){
        let thisFruit = fruitsImBuying[i];
        let thisFruitCost = newKeysObject[thisFruit];
        totalCost = totalCost + thisFruitCost;
    }
    return totalCost;
}
debugger;
console.log(calculateTotalCost(newKeysObject, fruitsImBuying));
console.log(calculateTotalCost(transform(fruitsPrices), fruitsImBuying));

let marketTrip = {
    location: 'walmart',
    hoursSpent: 1,
    payCash: false,
    commonPurchases: ['banana', 'grapefruit', 'apple', 'watermelon']
}

console.log("Step 1. See original object");
console.log(marketTrip);

marketTrip['newKeysObject'] = transform(fruitsPrices);

console.log("\nStep 2. See object with new key 'newKeysObject'");
console.log(marketTrip);

function calculateTotalCost2(){
    newKeysObject = this.newKeysObject;
    fruitsImBuying = this.commonPurchases;
    let totalCost = 0;
    for (let i=0; i<fruitsImBuying.length; i++){
        let thisFruit = fruitsImBuying[i];
        let thisFruitCost = newKeysObject[thisFruit];
        totalCost = totalCost + thisFruitCost;
    }
    return totalCost;
}

marketTrip['calculateTotalCost'] = calculateTotalCost2;

console.log("\nStep 3. See object with new method 'calculateTotalCost'");
console.log(marketTrip);

let totalCostMyTrip = marketTrip['calculateTotalCost'](); 
console.log("\nStep 4. Calculate Total Cost of my purchases");
console.log(totalCostMyTrip);

// ============================ RECURSION ==============================

let phrase = 'Universal Studios Entertainments'; 
console.log("Using a forLoop");
// vowels -> 3 points
// lettersNotVowels -> 1 point
// Case Insensitive
let score = 0;
let aLetter;
for (let y=0; y<phrase.length; y++){
    aLetter = phrase[y].toLowerCase();
    if ('aeiou'.includes(aLetter)){
        score += 3;
    } else {
        score += 1;
    }
}
console.log(score);

// 12*3=36
// 20 points
// 56 points total

console.log("Using a whileLoop");
score = 0;
aLetter;
let y = 0;
while (y<phrase.length) {
    aLetter = phrase[y].toLowerCase();
    if ('aeiou'.includes(aLetter)){
        score += 3;
    } else {
        score += 1;
    }
    y += 1;
}
debugger;
console.log(score);

console.log("Using recursion");

function calculateScoreOfPhrase(aPhrase, score2=0, t=0){
    if (t<aPhrase.length) {
        // keep doing what your function is doing
        aLetter = aPhrase[t].toLowerCase();
        score2 = ('aeiou'.includes(aLetter)) ? score2 + 3 : score2 + 1;
        t += 1;
        return calculateScoreOfPhrase(aPhrase, score2, t);
    } else {
        return score2;
    }
}

console.log(calculateScoreOfPhrase(phrase));
