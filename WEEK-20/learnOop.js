/** OOP (Object Oriented Programming)
 * OOP in JavaScript allows developers to organize code into reusable and modular objects, making it easier to maintain and extend complex applications.
 * In JavaScript, objects can be created using either object literals or constructor functions.
 * Object literals are a simple way to create and initialize an object using curly braces and key-value pairs, like this👇🏽:
 */

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
/** Constructor Functions, on the other hand, are used to create objects that share common properties and methods. 
 *  They are defined using the 'class' keyword, and are initialized using the 'new' keyword, like this👇🏽:
 */

class Human {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  
  const Human = new Person('John', 'Doe', 30);

/** In the above example👆🏾, 'Human' is a constructor function that defines a 'firstName', 'lastName', and 'age' property for each 'Human' object created. 
 * The 'getFullName()' method is also defined inside the constructor function, and will be available to each instance of the 'Human' class.
 * In addition to classes and objects, JavaScript also supports inheritance through the use of prototypes. 
 * Prototypes allow you to define methods and properties on an object's prototype, which can then be inherited by all instances of that object.
 * This is done using the prototype property of a constructor function or object, like this👇🏽:
 */
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const d = new Dog('Mitzie');
  d.speak(); // logs "Mitzie barks."

/** In this example, 'Dog' is a subclass of 'Animal', which means it inherits all of the properties and methods of 'Animal'. 
 * By defining a 'speak()' method in 'Dog', we can override the default behavior of 'Animal' and create a more specific behavior for 'Dog' instances.
 * Overall, object-oriented programming in JavaScript provides a powerful tool-set for building complex and scalable applications.
 * And is a core skill💪🏾 for any modern web developer🛠️.
 */
  
  