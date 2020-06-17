
console.log("The module");

t = 'another';

var x = 'global';
let y = 'global';
const z = 'constant';

console.log(this.x); // should work -> undefined
console.log(this.y); // undefined
console.log(this.z); // should work -> undefined
console.log(this.t); // should work -> undefined

// console.log(this); // undefined

// Two ways to run:
// https://stackoverflow.com/questions/32370806/using-var-and-this-in-the-global-scope-in-node-js-program
// node extra.js -> if you execute it as a file (node stuff.js), a file will execute in its own scope
// node < extra.js -> the only way to get the global scope in Node is to execute your program interactively

function exampleScope(){
    tt = 'anothertt';

    var xx = 'globalxx';
    let yy = 'globalyy';
    const zz = 'constantzz';

    console.log(this.xx); // should work -> undefined
    console.log(this.yy); // undefined
    console.log(this.zz); // should work -> undefined
    console.log(this.tt); // should work -> undefined

    // console.log(this); // undefined
}
console.log('\nNow, the function');
exampleScope()

exampleObject = {
    tt: 'anothertt',
    xx: 'globalxx',
    yy: 'globalyy',
    zz: 'constantzz',
    printf: function(){
        console.log(this.xx); // should work -> undefined
        console.log(this.yy); // undefined
        console.log(this.zz); // should work -> undefined
        console.log(this.tt); // should work -> undefined
    }
}
console.log('\nNow, the object');
exampleObject.printf();