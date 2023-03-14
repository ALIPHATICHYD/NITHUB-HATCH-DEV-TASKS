/** Pass by Value && Pass by Reference
 * In JavaScript, primitive data types such as numbers, strings, and booleans are passed by value, while objects and arrays are passed by reference.
 * Pass by value means that when a variable is passed as an argument to a function, a copy of the value is created and passed to the function.
 * Any changes made to the value within the function do not affect the original variable outside of the function. 
 * For example👇🏽:
 */

function increment(num) {
    num += 1;
    return num;
  }
  
  let x = 10;
  increment(x); // returns 11
  console.log(x); // outputs 10


// Pass by reference means that when an object or array is passed as an argument to a function, a reference to the original object or array is passed to the function. 
// Any changes made to the object or array within the function affect the original object or array outside of the function. 
// For example👇🏽:

function addName(arr, name) {
    arr.push(name);
    return arr;
  }
  
  let names = ["Alice", "Bob"];
  addName(names, "Charlie"); // returns ["Alice", "Bob", "Charlie"]
  console.log(names); // outputs ["Alice", "Bob", "Charlie"]

// It's important to understand the difference between pass by value and pass by reference in JavaScript to avoid unexpected behavior and to write more efficient code.




/** Scopes and Closures
 * Scopes and closures are two important concepts in JavaScript that relate to how variables are accessed and stored in memory.
 * A scope is a region of code where a variable is defined and can be accessed. 
 * In JavaScript, there are two types of scopes: global scope and local scope. 
 * Variables declared outside of any function have global scope and can be accessed from any part of the code. 
 * Variables declared inside a function have local scope and can only be accessed within the function.
 */

let globalVar = "I am global!"; // global scope

function exampleFunction() {
  let localVar = "I am local!"; // local scope
  console.log(globalVar); // outputs "I am global!"
  console.log(localVar); // outputs "I am local!"
}

exampleFunction();
console.log(globalVar); // outputs "I am global!"
console.log(localVar); // ReferenceError: localVar is not defined


// Closures refer to the ability of a function to access variables in its outer function, even after the outer function has returned. 
// Closures are created when a function is defined inside another function and has access to variables in the outer function's scope.
// For example👇🏽:

function outerFunction() {
    let outerVar = "I am in the outer function's scope!";
  
    function innerFunction() {
      console.log(outerVar); // closure - can access outerVar even though it is out of scope
    }
  
    return innerFunction;
  }
  
  let closure = outerFunction();
  closure(); // outputs "I am in the outer function's scope!"

// In this example, 'outerFunction' returns 'innerFunction' which is assigned to the variable 'closure'. 
// When 'closure' is invoked, it still has access to outerVar, even though outerFunction has already returned.
// Closures can be useful for creating private variables and functions, as well as for creating higher-order functions that can take functions as arguments and return new functions.
// Closures are useful because they allow you to create private variables and methods in JavaScript.


/** more on Var, Let and Const
 * 
 */