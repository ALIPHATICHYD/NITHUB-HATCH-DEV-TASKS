/**   Dot Notation & Bracket Notation in Javascript

In JavaScript, there are two ways to access object properties: dot notation and bracket notation. 
Both notations allow you to access an object's properties, but they differ in their syntax and functionality.
Dot notation is the most common way to access an object property in JavaScript.
It involves using a dot (.) to separate the object name from the property name.
For example:
**/

const myObject = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(myObject.name); // Output: "John"
console.log(myObject.age); // Output: 30
console.log(myObject.city); // Output: "New York"

/**
As you can see, dot notation allows you to access an object's properties by simply appending the property name to the object name using a dot (.) operator.
Bracket notation, on the other hand, uses square brackets [] to access an object's properties.
It allows you to use a variable or a string as the property name.
For example:
**/

const myObject = {
  name: "John",
  age: 30,
  city: "New York"
};

const propertyName = "name";
console.log(myObject[propertyName]); // Output: "John"

const city = "city";
console.log(myObject[city]); // Output: "New York"

/**
In this example, bracket notation is used to access an object's property using a variable.
The variable propertyName is assigned the value "name", and the object's name property is accessed using myObject[propertyName].
Similarly, the city property is accessed using a variable city.
In summary, dot notation is preferred when the property name is known ahead of time, while bracket notation is used when the property name is dynamic and determined at runtime.
**/



