


const obj1 = {key: 1};
const obj2 = {key: "1"};
const obj3 = {key: 1};

console.log(`obj1 === obj2: ${obj1 === obj2}`);
console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2));
console.log(`obj1 === obj2: ${(JSON.stringify(obj1) === JSON.stringify(obj2))}`);

console.log(`obj1 === obj3: ${obj1 === obj3}`);
console.log(`obj1 === obj3: ${(JSON.stringify(obj1) === JSON.stringify(obj3))}`);

let arr = [1,2,3,4];

console.log(`arr: ${JSON.stringify(arr)}`);