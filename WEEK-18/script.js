        /** FUNCTIONS
         * Function allows us to create reusable codes in JavaScript
         * We have the word function
         * Then we have the function name
         * Theres always parenthesis there, you can pass information into the parenthesis 
         * Then theres the curly bracket, opening and closing 
         * Everything inside the curly  brackets is run anytime the function is called or invoked 
         * So anytime the function is called its says Shege, Banza!!! in the console 
         */

function ourReusableFunction() {
    console.log("Shege, Banza!!!");
}
ourReusableFunction();


/** Passing Values to Functions with Arguments 
 * Parameters are variables that act as placeholders for the values that are to be input to a function when it is called 
 * We have defined the function 
 * inside the parenthesis we see the letters a and b, these can be anything 
 * that means when the function is called we are going to pass data into the function or input data into the function 
 * we can see that from the example 
 * when we called the function we pass the value 10 and 5 
 * so when the function runs it can use the information thats passed into the function 
*/ 


function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5



/**Global Scope and Functions
 * Scope refers to the visibility of variables 
 * Variables which are defined out of a function block have a global scope
 * Global scope means that they can be seen everywhere in your JavaScript code 
 * in the if statement we are checking if the type of my Global does not equal undefined 
 * it will not equal undefined if the program knows about the variable 
 * since this is global scope  it does not equal undefined, it equals 10, the programs knows about the variable because this is a global scope 
 * since the function can access my global variable will run within this if statement where wwe will just add 
 */


// Declare the variable here 
var myGlobal = 10;

function fun1() {
// Assign 5 oopsGlobal here 
    oopsGlobal = 5;
}


function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }

    console.log(output)
          
}
fun1();
fun2();



/** Local Scope and Functions
 * Variables which are declared within a function as well as the function parameters have a local scope
 * That means they are only visible from within the function
 **/

function localScope() {
    var myVar = 5;
    console.log(myVar);
}
localScope();



/** Global vs. Local Scope in Functions
 * It is possible to have both global and local variables with the same name 
 * When you do this the local variable takes president over the global variable 
 * 
 * Here we have a function called myOutfit thats going to  return outerWear, the variable up here
 * This is a global variable because it is declared outside the function 
 * When we console the output of the myOutfit function 
 * the myOutfit function is going to return outerwear which is TShirt
 * If you run the outerWear = sweater, it going to log out sweater in the console
 * This is because the local variable inside the function took president over the global function outside the function
 * If you log out the outerWear outside the function it will give TShirt as output 
 * This is because we console the function first which is sweater, then the global variable which is TShirt
 **/

var outerWear = "TShirt";
function myOutfit() {
    // var outerWear = "Sweater";  
    
    return outerWear;
}

console.log(myOutfit());
// console.log(outerWear);



/** Return a Value from a Function with Return
 * You can return a value from a function with the return statement 
 * So we have this function here and we are passing a number into it (the num) 
 * Its going to return whatever is after the return keyword
 * In this case num minus 7 
 * So here we will log the function 
 * It returns the result of minus 7 which is 10 and the result is 3 
 **/

function minusSeven(num) {
    return num - 7;

}
console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;

}
console.log(timesFive(5));




/** Understanding Undefined value Returned From a Function 
 * Functions can have return statements but they don't have to 
 * In this case this function adds 3 to the sum variable which is a global variable because its defined before the function 
 * It does not return anything, if you don't specify a return value the return vale is undefined 
 * 
 */


var sum = 0;
function addThree() {
    sum = sum + 3;

}

function addFive() {
    sum += 5;
}



/** Assignment with a returned Value 
 * Its simple to assign a returned value to a variable 
 * Right here we have a function change 
 * And we pass the number and its going to return the result of this mathematical expression 
 * So when we call the function change and pass in the 10 
 * The value that is returned from the function is gonna be stored in this variable here 
 */

var changed = 0;

function change(num) {
    return (num + 5) / 3;

}

changed = change(10);

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;

}

processed = processArg(7);



/** Stand in Line
 * In computer science a queue is an abstract data structure where items are kept in order
 * New items can be added to the back of  queue and old items are taken off from the front of thr queue 
 * We are going to simulate that as some of the functionality of the queue using the next in line function 
 * The purpose of this is to show that with the next in line function you can add an item to the array thats passed in 
 * And then its going to return the first item of the list 
 * For instance, this array right here 
 * If we add an item to this array it should come after at the end, it should come after 5
 * And then it should return the first item on the list 
 * I this case its 1 
 * We have some console set up, it should show what the array looks like before and afterwards 
 * The JSON.Stringify  is just a way to change an array into a string that can easily be printed out into a string 
 * 
 */

function nextInLine(arr, item) {
    arr.push(item);
    return item;
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));




/** Boolean Values 
 * Booleans are  another datatype in javascript
 * They are only two values TRUE and FALSE
 * The basic little on/off switch is where 'true is on' and 'false is off'
 * They don't use quotation marks around the boolean  
 * So this says return false
 * This is just a function that returns false when the function welcomeToBoolean is being called

 */

function welcomeToBoolean() {
    return false; // or return true;
}


/** Using Conditional Logic with If Statements 
 * An if statements are used to make decisions in codes 
 * The keyword "if" tells Javascript to execute the code in curly braces {} under certain conditions defined in the parenthesis 
 * so here is a full if statement right here 
 * And theres always a parenthesis after the keyword "if"
 * So heres the condition;
 * If the stuff inside the parenthesis evaluates to true then the code within the curly braces will be evaluated or run 
 * So in this case its a variable
 * If the (isItTrue) variable is true it will return "Yes, it is true." 
 * Now if its not true then we will get to the second return statement "No, it is false."
 * So this whole function here takes any variable and check if its true or not 
 */

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {         // Beginning of the if statement 
        return "Yes, it is true.";
    }                       // End of the full if statement 
    return "No, it is false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";


}

console.log(trueOrFalse(true));



/** Comparison With the Equality Operator 
 * There are many comparison operators in JavaScript that will return a boolean of true or false 
 * The most common is the Equality operator and its often used in an if statement 
 * In this if (val) statement we are gonna see if it equals 12
 * To check if it equals 12 we will ue the (==) sign i.e the Equal operator 
 * We cant use the (=) sign because this is used to assign values 
 */

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(textEqual(10));




/** Comparison with the Strict Equality Operator 
 * We learnt about the equality operator  i.e the (==) sign 
 * Theres also the Strict Equality Operator which is the (===) sign
 * 
 * Here 👇🏽 we are checking if the 3 equals 3 with the strict equality operator (===)
 * The difference is that the Equality operator (==) attempts to converts both values being compared to a common type
 * But the Strict Equality Operator (===) does not do the type conversion
 * 
 * Struct Equality Operator (===) Example
 * 3 === 3;  So this will evaluate to true 
 * 3 === '3'; But this will evaluate to false because of the string wont be converted to a number 
 * 
 * Equality Operator (==) Example
 * 3 == 3;  So this will evaluate to true 
 * 3 == '3'; This also will evaluate to true because the string will be converted to a number 
 * 
 */

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));



/** Practice Comparing Different Values
 * Here we will do one more review with the Equality Operator (==) and the Strict Equality Operator (===)
 * 
 */

function compareEquality(a, b) {
    if (a == b) { // You can change this value 
        return "Equal";
    }
    return "Not Equal";
}
// You can Change this value to test
console.log(compareEquality(10, "10"));



/** Comparison With The Inequality Operator 
 * Now to show the Inequality Operator (!=)
 * Just like the Equality operator this does type conversion
 */

function testNotEqual(val) {
    if (val != 99 ) {  // You can change this line
        return "Equal";
    }
    return "Not Equal";
}
// You can change this value to test
console.log(testNotEqual(10));



/** Comparison With The Strict Inequality Operator
 * This is basically the opposite of the Strict Operator 
 */

function testStrictNotEqual(val) {
    if (val !== 171) { // This means its going to check if its not true but its not going to convert types  
        return "Not Equal";
    }
    return "Equal";
}

// You can change this value to test
console.log(testStrictNotEqual(10));


/** Comparisons With The Logical and Operator
 * 
 **/
