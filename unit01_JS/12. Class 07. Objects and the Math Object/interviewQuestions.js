
// 1. How do you call the pairing between a key and its value?
// key/value pair

// 2. What does it mean that objects are stored by reference and not by name and value?
let tortoiseOne = {
    species: "Galapagos Tortoise",
    diet: ["pumpkins", "lettuce", "cabbage"]
};
 
let tortoiseTwo = {
    species: "Galapagos Tortoise",
    diet: ["pumpkins", "lettuce", "cabbage"]
};
 
console.log(tortoiseOne === tortoiseTwo);
console.log(tortoiseOne.species === tortoiseTwo.species);
/*
The objects contain properties that have the same keys and equal values. 
However, the output is false. Even though tortoiseOne and tortoiseTwo 
have the same keys and values, they are stored in separate locations 
in memory. This means that even though you can compare the properties 
in different objects for equality, you cannot compare the objects themselves for equality.*/

// 3. Will this work?
let giraffe = {
    species: "Reticulated Giraffe",
    name: "Cynthia",
    weight: 1500,
    age: 15,
    diet: "leaves"
};
  
for (item in giraffe) {
    console.log(item + ", " + giraffe[item]);
}
// Inside a for..in loop, we can only use bracket syntax to access the property values. 









