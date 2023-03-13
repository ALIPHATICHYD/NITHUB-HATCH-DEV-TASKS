/** Logical Order In If Else Statements
 * When you are using Else if statements Order is very important 
 * Lets look at this example here ;
 */

function orderMyLogic(val){
    if (val < 5){
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 5";
    }
}

// Change the value to test
console.log(orderMyLogic(7));


/** Chaining If Else Statements
 * You can also chain If and Else If Statements 
 * So we are going to do a small challenge here 
 * Write Chained if/else if statements to fulfil the following conditions;
 * 
 * num < 5 - return "Tiny";
 * num < 10 - return "Small";
 * num < 15 - return "Medium";
 * num < 20 - return "Large";
 * num >= 20 - return "Huge"; 
 */

function testSize(num){
    // Only change code below this line
    if (num < 5){
        return "Tiny";
    } else if (num < 10){
        return "Small";
    } else if (num < 15){
        return "Medium";
    }else if (num < 20){
        return "Large";
    } else {
        return "Huge";
    }

    return "Change Me";
}
// You can change the value here to test 
console.log(testSize(7));


/** Golf Code
 * In the game of Golf each hole has a par. 
 * Which means the average number of strokes you are supposed to use to get the ball into the hole.
 * So depending on how far above or below par your strokes are, theres a different nickname.
 * So we are going to write a function where you can pass in the par and you also pass in the strokes.
 * And its going to return the nickname 
 * 
 * 
 * Strokes         Return
 * 1               "Hole-in-hole"
 * <= par - 2      "Eagle"
 * par - 1         "Birdie"
 * par            "Par"
 * par + 1         "Bogey"
 * par + 2         "Double Bogey"
 * >= par + 3      "Go Home"
 **/

 

var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];
function golfScore(par, strokes){
if (strokes == 1){
    return names[0];
}else if (strokes <= par - 2){
    return names[1];
}else if (strokes == par - 1){
    return names[2];
}else if (strokes == par){
    return names[3];
}else if (strokes == par + 1){
    return names[4];
}else if (strokes == par + 2){
    return names[5];
}else if (strokes >= par + 3){
    return names[6];
}
}

// Change these values to test
console.log(golfScore(5, 4));


/** Switch Statements
 * Instead of using chained if else statements, you can use a switch statement.
 * Switch statements tests a value and can have many case statements which define various possible values.
 * Lets see how that works. 
 * 
 * Here we are going to write a switch statement which tests val and sets answer for the following conditions:
 * 1 - "alpha"
 * 2 - "beta"
 * 3 - "gamma"
 * 4 - "delta"
 */

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }

    return answer;
}

// Change this value to test
console.log(caseInSwitch(1));
  

/** Selecting from Many Options with Switch Statements
    * If you have many options to choose from, use a switch statement.
    * A switch statement tests a value and can have many case statements which define various possible values.
    * Statements are executed from the first matched case value until a break is encountered.
    * If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.
    * Here is an example of a switch statement;
    */

// switch (num) {
//     case value1:
//         statement1;
//         break;
//     case value2:
//         statement2;
//         break;
//     default:
//         defaultStatement;
//         break;
// }


/** Default Option in Switch Statements  
 * Now let me clarify the Default option in a switch statement.
 * The default option is kind of like else in an if else statement 
 * So heres a switch statement that is similar to the previous one and its inside the function where we pass in a value into the function.
 * And we are going to check if the value equals "a".
 * If it equals "a" the answer is going to be sent to "apple".
 */

function switchOfStuff(val){
    var answer = "";
    switch(val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
/** What if we want to return something anytime a, b or c isn't passed through. 
 * So for anything else thats passed into the function we're going to do default. This is like the else statement.
* So if a, b or c isn't passed through we're going to return "stuff".
 */
        default:
            answer = "stuff";
            break; 
    }
    return answer;
}

// Change this value to test
console.log(switchOfStuff(2));


/** Multiple Identical Options in Switch Statements
 * Sometimes you want a switch statement where multiple inputs give the same output.
 * Well thats easy enough by omitting the break statement.
 * Lets see how that works.
 * So lets get a switch statement here.
 */

function sequentialSizes(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;         

    }
    return answer;
}

// change this value to test 
console.log(sequentialSizes(1));


/** Replacing If Else Chains with Switch 
 * Sometimes the switch statements can be easier to write and understand than a chain of if else statements.
 * So we are going to change these chain of if else statements to switch statements.
 * We will start with the switch keyword.
 */

function chainToSwitch(val){
    var answer = ""
    // Only change code below this line 

    if (val === "bob"){
        answer = "Marley";
    } else if (val === 42){
        answer = "The Answer";
    } else if (val === 1){
        answer = "There is no #1";
    } else if (bal === 99){
        answer = "Missed me by this much!";
    } else if (val === 7){
        answer = "Ate Nine";
    }

// And now we have changed the chain of If Else Statements to chain of Switch Statements.

    switch(val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    

    // Only change code above this line 
    return answer; 
}

console.log(chainToSwitch());


/** Returning Boolean Values from Functions
 * Heres a little trick when you want a function to return a Boolean, a true or false value.
 * You can see in this function we are checking if this a is less than b and if so we return false.
 * You may remember from before the all comparison operators return a Boolean true or false value.
 * So instead of using this if statement here we can just delete all of these code below and just return the result of (a < b).
 */

function isLess(a, b){
    // Fix this code 
    if (a < b){
        return true;
    } else {
        return false;
    }
}
//* So instead of using this if statement here we can just delete all of these code above and just return the result of (a < b)
function isLess(a, b){
    // Fix this code
    return a < b;
}

// Change these values to test
console.log(isLess(10, 15));

/** Returning Early Patterns from Functions
 * We have seen few examples of this before 
 * But you can return early from a function with the return statement.
 * So looking at this function below we return at the very end of the function.
 * So it leaves the function and returns this value from the function.
 * But you can leave the function anytime with a return statement.
 * So we are gonna modify this function so that if a or b are less than 0, the function will immediately exit the value of "Undefined".
 * So lets do that 
 * we are going to set an if statement;
 */

function abTest(a, b){
    // Only change code below thus line 
if (a < 0 || b < 0){
    return undefined; 
}

    // Only change code above this line 
return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2,2)); 

/** Counting Cards
 * We are going to create a blackjack card counting function.
 * So, how card counting works is that you keep track of the relative number of high and low cards remaining in the deck.
 * At least how is this function going to work is that when you see a low card, the count goes up,
 * And when you see a high card the count goes down,
 * And if its a middle value card, the count stays the same,
 * And when the count is positive, the player should bet high,
 * And when the count is zero or negative, the player should bet low.
 * So we are going to use a Switch Statement to figure out what card has been passed in and what to do about it.
 * You can see the function looks like this - cc and we pass in the card,
 * And depending on what the card is, its going to increase the global count variable or its going to decrease it or its going to stay the same,
 * And then we are going to return two things;
 * We are going to return the current count value  and we are going to return the string "Bet" or "Hold".
 * So every time you call the cc function, it going to change the count value and return the total count.
 * So lets ee how its going to work.
 */

var count = 0;

function cc(card){
    switch(card){
        case 2: 
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
        count--;
        break;
    }

    var holdbet = 'hold';
    if (count > 0){
        holdbet = 'Bet';
    }

    return count + "" + holdbet;

}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));


/** Build JavaScript Objects
 * Objects are similar to array except that instead of using indexes to access data, you use properties.
 * So here is an example of an object called ourDog👇🏽
 * Objects are going to be defined with these curly braces at the beginning and the end.
 * And these are the properties, now the properties are everything before the colons.
 * So we have "name" which is a property,
 * we have "legs" also the property,
 * And we have the values which are the things after the colons here.
 * Now you can see that the properties can be strings, numbers, arrays, they can be literally any Datatype in JavaScript.
 */

var ourDog = {
    "name" : "BuskiBuski",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everything!"]
};

// Only change code below this line.
// Now we are going to create our own Fox

var myFox = {
    "name" : "Kurama",
    "legs" : 4,
    "tails" : 9,
    "friends" : [] 
    // We have now created our own object 
}

/** Accessing Object Properties With Dot Notation
 * There are two main ways to access a property on an object.
 * The first I will discuss here is the (dot notation).
 */

// Setup
var testObj = {
    "hat" : "Abetiaja",
    "shirt" : "Buba",
    "shoes" : "Salubata"

};

// Only change code below this line 

var hatValue = testObj;
var shirtValue = testObj;