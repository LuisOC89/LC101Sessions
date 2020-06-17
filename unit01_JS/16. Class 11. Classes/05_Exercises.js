/*
Exercises: Classes
Welcome to the space station! It is your first day onboard and as the newest 
and most junior member of the crew, you have been asked to organize the library 
of manuals and fun novels for the crew to read.

Headquarters have asked that you store the following information about each book:
1. The title
2. The author
3. The copyright date
4. The ISBN
5. The number of pages
6. The number of times the book has been checked out.
7. Whether the book has been discarded.

Headquarters also needs you to track certain actions that must be performed when 
books get out of date. First, for a manual, the book must be thrown out if it is 
over 5 years old. Second, for a novel, the book should be thrown out if it has 
been checked out over 100 times.

Part 1:
Construct three classes that hold the information needed by headquarters as properties. 
Also, each class needs two methods that update the book’s property if the book needs to be discarded. 
One class should be a Book class and two child classes of the Book class called Manual and Novel. 

Hint: This means you need to read through the requirements for the problem and decide what 
should belong to Book and what should belong to the Novel and Manual classes.

*/

// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, pagesCount, checkoutCount=0, hasBeenDiscarded=false){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.pagesCount = pagesCount;
        this.checkoutCount = checkoutCount;
        this.hasBeenDiscarded = hasBeenDiscarded;
    }

    updateCheckoutCount(times=1){
        this.checkoutCount += times;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, pagesCount, checkoutCount=0, hasBeenDiscarded=false) {
        // super(title, author, copyrightDate, isbn, pagesCount, checkoutCount, hasBeenDiscarded);
        super(...arguments);
    }

    needstoBeDiscarded(){
        let todayYear = new Date().getFullYear();
        if (todayYear > this.copyrightDate){
            this.hasBeenDiscarded  = true;
        }
    }

}

class Novel extends Book {
    constructor(...argsThisCanBeWhatever) {
        super(...argsThisCanBeWhatever);
    }

    needstoBeDiscarded(){
        if (this.checkoutCount > 100){
            this.hasBeenDiscarded  = true;
        }
    }
}


/*
Part 2:
Declare two objects, one from the Novel class and one from the Manual class.
To see the list of data that must be added to each object, refer to the information 
given in the book instructions: 
https://education.launchcode.org/intro-to-professional-web-dev/chapters/classes/exercises.html.
*/
// Declare the objects for part 2 here:
let prideAndPrejudice = new Novel(
    'Pride and Prejudice', 
    'Jane Austen',
    1813, 
    '1111111111111',
    432, 
    32);

let topSecretManual = new Manual(
    'Top Secret Shuttle Building Manual',
    'Redacted',
    2013,
    '0000000000000',
    1147,
    1)

// Code part 3 here:

/*
Part 3:
One of the above books needs to be discarded. Call the appropriate method for 
that book to update the property. That way the crew can throw it into empty 
space to become debris.
The other book has been checked out 5 times since you first created the object. 
Call the appropriate method to update the number of times the book has been 
checked out.
*/

// To discard
console.log(topSecretManual);
topSecretManual.needstoBeDiscarded();
console.log(topSecretManual);

// To update the checkout times
console.log(prideAndPrejudice);
prideAndPrejudice.updateCheckoutCount(5);
console.log(prideAndPrejudice);
