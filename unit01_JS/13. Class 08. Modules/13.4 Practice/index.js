
const practice = require('./practiceExports.js');
const example = require('../13.4_ExportingModules.js');

console.log(example.isPalindrome('aha'));

console.log(typeof practice);
console.log(practice);

let arr = ['Hello', 'World', 123, 987, 'LC101'];

console.log(practice.isPalindrome('mom'));
console.log(practice.evenOrOdd(9));

for (i=0; i < 3; i++){
   console.log(practice.randomArrayElement(arr));
}

/*typeof indicates that practice is an object, 
and printing practice gives us a list of its key/value
 pairs (e.g. isPalindrome: [Function: isPalindrome]).

All of the functions from practiceExports are included 
in the practice object. To call them, 
we use dot notation--- practice.functionName(argument). 




*/