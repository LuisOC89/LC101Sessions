/*
Exercises: Exceptions (Part 2)
Test Student Labs
A teacher has created a gradeLabs function that verifies if 
student programming labs work. This function loops over an 
array of JavaScript objects that should contain a student 
property and a runLab method.

The runLab method is expected to be a function containing the 
student’s code. The runLab function is called, and the result 
is compared to the expected result. If the actual and expected 
results don’t match, then the lab is considered a failure.

Your tasks:
Copy studentLabs2, shown below, and paste it into the code editor
Pass studentLabs2 to gradeLabs(); 
Run the code
Add a try/catch to handle the TypeError
*/

let studentLabs2 = [
    {
        student: 'Blake',
        myCode: function (num) {
            return Math.pow(num, num);
        }
    },
    {
        student: 'Jessica',
        runLab: function (num) {
            return Math.pow(num, num);
        }
    },
    {
        student: 'Mya',
        runLab: function (num) {
            return num * num;
        }
    }
];

function gradeLabs(labs) {
    for (let i=0; i < labs.length; i++) {
        let lab = labs[i];
        try {
            let result = lab.runLab(3);
            console.log(`${lab.student}'s code worked: ${result === 27}`);
        } catch(err) {
            console.log(`There was an error: ${err.name} with message: ${err}`);
        }
            
    }
}
 
let studentLabs = [
    {
        student: 'Carly',
        runLab: function (num) {
            return Math.pow(num, num);
        }
    },
    {
        student: 'Erica',
        runLab: function (num) {
            return num * num;
        }
    }
];
 
gradeLabs(studentLabs);

gradeLabs(studentLabs2);
