
// let genePos = 5;
// // Initializate vars in one line
// let [geneIniPos, geneFinPos] = [(genePos - 1) * 4,  (genePos * 4) - 1]
// // Use ternary positions
// posLetters = (genePos === 1) ? "st" : (genePos === 2) ? "nd" : (genePos === 3) ? "rd" : "th"; 
// console.log(`The ${genePos}${posLetters} gene (set of 3 characters) from the DNA strand is: ${dna.slice(geneIniPos, geneFinPos)}.`);

// console.log(`The DNA string is ${dna.length} characters long.`);

// let fun = "taco cat";
// console.log(`'${fun}'.`);

// debugger;



// function indicatePos(number){
//     let posStr;
//     if (number === 1){
//         posStr = 'st';
//     } else if (number === 2){
//         posStr = 'nd';
//     } else if (number === 3){
//         posStr = 'rd';
//     } else {
//         posStr = 'th';
//     }
//     return posStr;
// }

// posLetters = (genePos === 1) ? "st" : (genePos === 2) ? "nd" : (genePos === 3) ? "rd" : "th"; 

function indicatePos(number){
    // let result = (condition) ? result if true : result if false;
    let posStr = (number === 1) ? "st" : (number === 2) ? "nd" : (number === 3) ? "rd" : "th";
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
