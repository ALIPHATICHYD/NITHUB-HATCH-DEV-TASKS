/** TypeScript Types
* string: Represents a string value.
* number: Represents a numeric value.
* boolean: Represents a boolean value (true or false).
* any: Represents any type of value. This is the default type if no type is specified.
* void: Represents a function that does not return a value.
* null: Represents a null value.
* undefined: Represents an undefined value.
* object: Represents any non-primitive value, i.e., any value that is not a string, number, boolean, null, or undefined.
* Array<T>: Represents an array of values of type T.
* Tuple: Represents an array of fixed length, where each element can have a different type.
* Enum: Represents a set of named constants.
* Union Types: Represents a type that can be one of several types.
* Intersection Types: Represents a type that has properties and methods from multiple types.
* Type Aliases: Allows you to create a new name for a type.
 */


// String 
let Name: string = "John Doe";

// Number 
let age: number = 25;

// Boolean
let isEmployed: boolean = true;


// Any
let data: any = "some value";
data = 10;
data = false;


// Void
function printMessage(message: string): void {
  console.log(message);
}

// Null
let foo: null = null;

// Undefined
let bar: undefined = undefined;

// Object
let user: object = { name: "John", age: 25 };

// Array<T>
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["John", "Mary", "Bob"];

// Tuple
let person: [string, number] = ["John", 25];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

let selectedColor: Color = Color.Red;

// Union Types
let value: string | number = "Hello";
value = 10;

// Intersection Types
interface User {
  name: string;
}

interface Employee {
  id: number;
}

type Admin = User & Employee;

let admin: Admin = { name: "John", id: 1 };

// Type Aliases
type Age = number;
let year: Age = 25;


