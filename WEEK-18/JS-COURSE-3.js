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

/** Selecting from Many Options with Switch Statements
    * If you have many options to choose from, use a switch statement.
    * A switch statement tests a value and can have many case statements which define various possible values.
    * Statements are executed from the first matched case value until a break is encountered.
    * If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.
    * Here is an example of a switch statement;
    */

switch (num) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    default:
        defaultStatement;
        break;
}

    