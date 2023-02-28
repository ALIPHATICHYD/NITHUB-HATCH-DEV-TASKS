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
