
anObject = {
    level: 0,
    propertyTwo: 'amazing',
    propertyThree: {
        level: 1,
        subPropertyTwo: false,
        subPropertyThree: {
            level: 2,
            otherProperty: {
                level: 3
            }
        }
    }
}

// Because 'otherProperty' is nested after level 2, 
// you will see [Object] when trying to log it in the console
console.log(anObject);

// If you want to seehow the object looks like, you would have
// to reduce the relative levels to that object (shrink the distance)
console.log(anObject['propertyThree']);
// or
console.log(anObject['propertyThree']['subPropertyThree']);

// If you only want to see it, you could do it by 
// logging the string version of it:
console.log(JSON.stringify(anObject));
