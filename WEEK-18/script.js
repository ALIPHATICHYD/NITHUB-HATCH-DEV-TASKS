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
