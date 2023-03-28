/** Learning TS for JAvascript Programmers 
 * TypeScript stands in an unusual relationship to JavaScript.
 * TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.
 * For example, JavaScript provides language primitives like string and number.
 * But it doesn’t check that you’ve consistently assigned these.
 * TypeScript does.
 * This means that your existing working JavaScript code is also TypeScript code.
 * The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.
 * This documentation provides a brief overview of TypeScript, focusing on its type system.
 */


/** Types by Inference
 * TypeScript knows the JavaScript language and will generate types for you in many cases.
 * For example in creating a variable and assigning it to a particular value, TypeScript will use the value as its type.
 */

let helloWorld = "Hello World";
// helloWorld = 10; // Error: Type '10' is not assignable to type 'string'.

/** By understanding how JavaScript works, TypeScript can build a type-system that accepts JavaScript code but has types.
 * This means that you can use TypeScript to write JavaScript code that is type-safe.
 * This offers a type-system without needing to add extra characters to make types explicit in your code. 
 * That’s how TypeScript knows that helloWorld is a string in the above example.
 * You may have written JavaScript in Visual Studio Code, and had editor auto-completion
 * Visual Studio Code uses TypeScript under the hood to make it easier to work with JavaScript.
 * TypeScript is a superset of JavaScript, meaning that all valid JavaScript is also valid TypeScript.
 * TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
*/



/** Defining Types
 * You can use a wide variety of design patterns in JavaScript.
 * However, some design patterns make it difficult for types to be inferred automatically.
 * For example, patterns that use dynamic programming or mixins.
 * To cover these cases, TypeScript supports an extension of the JavaScript language.
 * Which offers places for you to tell TypeScript what the types should be.
 * For example, to create an object with an inferred type which includes name: string and id: number, you can write:
 */

const user = {
    name: "Hayes",
    id: 0,
  };



// You can explicitly describe this object’s shape using an interface declaration:
interface User {
    name: string;
    id: number;
  }


// You can then declare that a JavaScript object conforms to the shape of your new interface by using syntax like : TypeName after a variable declaration:

// const user: User = {
//     name: "Hayes",
//     id: 0,
//   };


// TypeScript will now warn you if you try to assign an object that doesn’t match the interface you have provided:
// If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you:
// This is an example 👇🏾 of a type error:

// interface User {
//   name: string;
//   id: number;
// }
 
// const user: User = {
//   username: "Hayes",
  
//   Type '{ username: string; id: number; }' is not assignable to type 'User'.
//   Object literal may only specify known properties, and 'username' does not exist in type 'User'.
//   id: 0,
// };


// Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:

interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1);