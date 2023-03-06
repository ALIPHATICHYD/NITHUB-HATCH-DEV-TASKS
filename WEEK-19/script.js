//      ASSIGNMENT

/* 1 *  Array Methods
 * In JavaScript, an array is a data structure that stores a collection of values or objects. 
 * Array methods are built-in functions that allow you to manipulate arrays in various ways. 
 * Here are some of the most common array methods in JavaScript;
 */

// The "push()" Array Method: This method adds one or more elements to the end of an array.
let myArray = ['apple', 'banana', 'cherry'];
myArray.push('orange', 'grape');
console.log(myArray); // Output: ['apple', 'banana', 'cherry', 'orange', 'grape']


// The "pop()" Array Method: This method removes the last element from an array.
let myArray = ['apple', 'banana', 'cherry'];
myArray.pop();
console.log(myArray); // Output: ['apple', 'banana']

// The "shift()" Array Method: This method removes the first element from an array.
let myArray = ['apple', 'banana', 'cherry'];
myArray.shift();
console.log(myArray); // Output: ['banana', 'cherry']

// The "unshift()" Array Method: This method adds one or more elements to the beginning of an array.
let myArray = ['apple', 'banana', 'cherry'];
myArray.unshift('orange', 'grape');
console.log(myArray); // Output: ['orange', 'grape', 'apple', 'banana', 'cherry']

// The "slice()" Array Method: This method returns a copy of a portion of an array into a new array.
let myArray = ['apple', 'banana', 'cherry', 'orange', 'grape'];
let newArray = myArray.slice(1, 3);
console.log(newArray); // Output: ['banana', 'cherry']

// The "splice()" Array Method: This method adds and/or removes elements from an array.
let myArray = ['apple', 'banana', 'cherry', 'orange', 'grape'];
myArray.splice(1, 2, 'watermelon', 'mango');
console.log(myArray); // Output: ['apple', 'watermelon', 'mango', 'orange', 'grape']

// The "sort()" Array Method: This method sorts the elements of an array.
let myArray = ['apple', 'banana', 'cherry', 'orange', 'grape'];
myArray.sort();
console.log(myArray); // Output: ['apple', 'banana', 'cherry', 'grape', 'orange']

// The "reverse()" Array Method: This method reverses the order of the elements of an array.
let myArray = ['apple', 'banana', 'cherry', 'orange', 'grape'];
myArray.reverse();
console.log(myArray); // Output: ['grape', 'orange', 'cherry', 'banana', 'apple']

// The "concat()" Array Method: This method is used to merge two or more arrays.
let myArray = ['apple', 'banana', 'cherry'];
let newArray = ['orange', 'grape'];
let finalArray = myArray.concat(newArray);

// The "join()" Array Method: This method joins all elements of an array into a string.
let myArray = ['apple', 'banana', 'cherry'];
let newArray = myArray.join();
console.log(newArray); // Output: apple,banana,cherry

// The "indexOf()" Array Method: This method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let myArray = ['apple', 'banana', 'cherry'];
let newArray = myArray.indexOf('banana');
console.log(newArray); // Output: 1

// The "lastIndexOf()" Array Method: This method returns the last index at which a given element can be found in the array, or -1 if it is not present.
let myArray = ['apple', 'banana', 'cherry', 'banana'];
let newArray = myArray.lastIndexOf('banana');
console.log(newArray); // Output: 3

// The "forEach()" Array Method: This method executes a provided function once for each array element.
let myArray = ['apple', 'banana', 'cherry'];
myArray.forEach(function(item, index, array){
    console.log(item, index);
});

// The "map()" Array Method: This method creates a new array with the results of calling a provided function on every element in the calling array.
let myArray = ['apple', 'banana', 'cherry'];
let newArray = myArray.map(function(item, index, array){
    return item + 's';
});
console.log(newArray); // Output: ['apples', 'bananas', 'cherries']

// The "filter()" Array Method: This method creates a new array with all elements that pass the test implemented by the provided function.
let myArray = ['apple', 'banana', 'cherry'];
let newArray = myArray.filter(function(item, index, array){
    return item.length > 5;
});
console.log(newArray); // Output: ['banana', 'cherry']

// The "reduce()" Array Method: This method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
let myArray = [1, 2, 3, 4, 5];
let newArray = myArray.reduce(function(total, item, index, array){
    return total + item;
});
console.log(newArray); // Output: 15

// The "reduceRight()" Array Method: This method applies a function against an accumulator and each value of the array (from right-to-left) has to reduce it to a single value.
let myArray = [1, 2, 3, 4, 5];
let newArray = myArray.reduceRight(function(total, item, index, array){
    return total + item;
});
console.log(newArray); // Output: 15

// The "every()" Array Method: This method tests whether all elements in the array pass the test implemented by the provided function.
let myArray = ['apple', 'banana', 'cherry'];
let newArray = myArray.every(function(item, index, array){
    return item.length > 5;
});
console.log(newArray); // Output: false

// The "some()" Array Method: This method tests whether some element in the array passes the test implemented by the provided function.
let myArray = ['apple', 'banana', 'cherry'];
let newArray = myArray.some(function(item, index, array){
    return item.length > 5;
});
console.log(newArray); // Output: true

// The "find()" Array Method: This method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
let myArray = ['apple', 'banana', 'cherry'];
let newArray = myArray.find(function(item, index, array){
    return item.length > 5;
});
console.log(newArray); // Output: banana    

// The "findIndex()" Array Method: This method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
let myArray = ['apple', 'banana', 'cherry'];
let newArray = myArray.findIndex(function(item, index, array){
    return item.length > 5;
});
console.log(newArray); // Output: 1

// The "includes()" Array Method: This method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let myArray = ['apple', 'banana', 'cherry'];
let newArray = myArray.includes('banana');
console.log(newArray); // Output: true

// The "flat()" Array Method: This method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let myArray = [1, 2, [3, 4, [5, 6]]];
let newArray = myArray.flat(2);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]   

// The "flatMap()" Array Method: This method first maps each element using a mapping function, then flattens the result into a new array.
let myArray = [1, 2, 3, 4];
let newArray = myArray.flatMap(function(item, index, array){
    return item * 2;
});
console.log(newArray); // Output: [2, 4, 6, 8]

// The "copyWithin()" Array Method: This method shallow copies part of an array to another location in the same array and returns it, without modifying its size.
let myArray = ['apple', 'banana', 'cherry', 'orange', 'grape'];
let newArray = myArray.copyWithin(2, 0);
console.log(newArray); // Output: ['apple', 'banana', 'apple', 'banana', 'cherry']

// The "fill()" Array Method: This method fills all the elements of an array from a start index to an end index with a static value.
let myArray = ['apple', 'banana', 'cherry', 'orange', 'grape'];
let newArray = myArray.fill('watermelon', 2, 4);
console.log(newArray); // Output: ['apple', 'banana', 'watermelon', 'watermelon', 'grape']

// The "entries()" Array Method: This method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
let myArray = ['apple', 'banana', 'cherry'];
let newArray = myArray.entries();
console.log(newArray.next().value); // Output: [0, 'apple']

// The "keys()" Array Method: This method returns a new Array Iterator that contains the keys for each index in the array.
let myArray = ['apple', 'banana', 'cherry'];
let newArray = myArray.keys();
console.log(newArray.next().value); // Output: 0

// The "values()" Array Method: This method returns a new Array Iterator object that contains the values for each index in the array.
let myArray = ['apple', 'banana', 'cherry'];
let newArray = myArray.values();
console.log(newArray.next().value); // Output: apple

// The "from()" Array Method: This method creates a new, shallow-copied Array instance from an array-like or iterable object.
let myArray = Array.from('apple');
console.log(myArray); // Output: ['a', 'p', 'p', 'l', 'e']

// The "isArray()" Array Method: This method determines whether the passed value is an Array.
let myArray = ['apple', 'banana', 'cherry'];
let newArray = Array.isArray(myArray);
console.log(newArray); // Output: true






/* 2 * Shuffle of the Array
 * Shuffling an array in JavaScript means rearranging the elements of the array randomly.
    * The shuffle() method takes an array as an argument and returns a shuffled array.
    * This is commonly used in games or when you want to randomize the order of elements in an array. 
    * There are several ways to shuffle an array in JavaScript. Here are two common methods;
    

Method 1: Using a for loop and Math.random()
 */

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
/* * This method uses a for loop to iterate through the array, starting at the last element and working backwards
    * The Math.random() method is used to generate a random number between 0 and 1.
    *For each element, it generates a random index between 0 and the current index, and then swaps the current element with the element at the random index.
 */

// Method 2: Using the sort() method and Math.random()

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
/* * This method uses the sort() method to sort the array randomly. 
 * The sort() method accepts a comparison function that takes two elements as arguments and returns a negative, zero, or positive value depending on their relative order
*  In this case, the comparison function simply returns a random value between -0.5 and 0.5, causing the array to be sorted randomly.
 */


// Here's an example of how to use the shuffleArray() function;

let myArray = [1, 2, 3, 4, 5];
let shuffledArray = shuffleArray(myArray);
console.log(shuffledArray);

/* *
 * This will output an array with the same elements as myArray, but in a random order. 
 * The shuffleArray() function can be used to shuffle any array, including arrays of objects.
 * Note that both of the above methods modify the original array, so if you want to keep the original array intact, you should create a copy of it before shuffling.
 * 
 *       How to create a copy of an array before reshuffling it 
 * In JavaScript, you can create a copy of an array before shuffling it using the "slice()"" method or the Spread Operator (...).
 * Here's how you can create a copy of an array before shuffling it using both of these methods; 
 * 
 * 
 * Using the "slice()" method;
 */

let originalArray = [1, 2, 3, 4, 5];
let copiedArray = originalArray.slice();
shuffleArray(copiedArray);

// Function to shuffle the array
function shuffleArray(array) {
  // Shuffle the array using any method you prefer
}

// Using the Spread Operator(...);

let originalArray = [1, 2, 3, 4, 5];
let copiedArray = [...originalArray];
shuffleArray(copiedArray);

// Function to shuffle the array
function shuffleArray(array) {
  // Shuffle the array using any method you prefer
}

// Both methods create a new array that is a copy of the original array. 
// The original array is not modified, and the shuffled array is returned by the shuffleArray() function.
// This new array can then be shuffled without affecting the original array.