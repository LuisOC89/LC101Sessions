
let nonprofit = "LaunchCode";
console.log(nonprofit);

console.log(nonprofit.toLowerCase());
console.log(nonprofit.toUpperCase());
console.log(nonprofit);
console.log(`\n${nonprofit.indexOf("Code")}`)
// Returns a copy of the given string with the 
// leading and trailing whitespace removed.
console.log(" Saint Louis ".trim()); 
console.log("Saint Louis ".trim()); 
console.log(" Saint Louis".trim()); 
console.log("Saint Louis".trim()); 
// Returns a copy of stringName, with the first occurrence 
// of searchChar replaced by replacementChar.
console.log(nonprofit.replace("Code", "Career"));
console.log(nonprofit);

// Return the substring consisting of characters from index i through index j-1.
// j is not required

let i = 2;
let j = nonprofit.length - 1;

substring = nonprofit.slice(i, j);
console.log(substring);
console.log(nonprofit);

let word = 'JavaScript';
console.log(`${word.slice(4).toUpperCase()}`);
debugger;
console.log("\nExercises");
let language = "JavaScript";
let copy_replacement = language.replace('J', 'Q');
let substring2 = language.slice(0,5);
console.log(language);

console.log(language.slice(1,6));

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);