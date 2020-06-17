/*Studio: Loops
Now that we’ve launched our shuttle, let’s use loops (iteration) to put together some meals for the astronauts.

Initialize variables to store the following arrays.  Remember to use descriptive names.
  
Protein options: ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans']   
Grain options: ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers']   
Vegetable options: ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus']   
Beverage options: ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']   
Dessert options: ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']*/
let proteinOptions = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];   
let grainOptions = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];   
let vegetableOptions = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];   
let beverageOptions = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];   
let dessertOptions = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

let options = [proteinOptions, grainOptions, vegetableOptions, beverageOptions, dessertOptions];

/*Modify the code to accept user input.  Add a while loop to ask for the number of meals to assemble.  
Validate the input to make sure it is an integer from 1 - 6, then print out the chosen number of meal arrays.
IMPORTANT: Use the prompt, "How many meals?" for the input statement.*/

const input = require('readline-sync');
mealsNum = Number(input.question('\nHow many meals (1 - 6)?: '));

while ((mealsNum <= 0) || (mealsNum > 6)) {
    mealsNum = Number(input.question('Invalid input. How many meals (1 - 6)?: '));
}

/*Construct a for loop that assembles 6 meals. Each meal must include one item from each array. 
Each ingredient can only be used once. Example 'chicken' will only appear in one of the 6 meals.
Print the meal array for each astronaut.*/
let astronautsMeals = [];
let astronautMeal;
for (j = 0; j < mealsNum; j++){
    astronautMeal = [];
    for (i = 0; i < options.length; i++){
        astronautMeal.push(options[i][j])
    }
    astronautsMeals.push(astronautMeal);
}
// astronautMeal.push(options[j][mealOption])
console.log(astronautsMeals);
/*
Bonus Missions:
A) Kale rewards.
To enhance your learning, modify your code to: 
Use string formatting to print something more interesting than  “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
Use an “array of arrays” to store the food options in a pantry.
Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow."

B) Self-destruct system.
If the shuttle gets hijacked by space pirates, the astronauts can activate a self-destruct sequence to provide some drama for the viewers at home.

It takes two crew members to begin the countdown.  Each person must enter a different code, after which the computer will “zip” them together before overloading the engines.

Construct a for loop that combines two strings together, alternating the characters from each source.

Examples  
If string = "1234" and otherString = "5678", then the output will be “15263748”.
If code1 = "ABCDEF" and code2 = "notyet", then the output will be “AnBoCtDyEeFt”.
If ka = "LoOt" and blam = "oku!", then the output will be "LookOut!".

Before You Submit:
Unfortunately, the auto-grader will not accept any of the awesome bonus content. (Sorry, chocolate lovers).  
Save your modifications by commenting them out of the code.

Make sure that your code outputs ONLY meal arrays and not any other text.

The meal arrays must be in this order: [protein, grain, veg, beverage, dessert]. */