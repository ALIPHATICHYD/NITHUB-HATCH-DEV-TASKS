               // Mini-JavaScript Course
        
 

  // Operators in JavaScript
  // Assignment Operators : '=';
  // Arithmetic Operators
  // Comparison Operators
  // Logical Operators
  // String Operators
  // Conditional (Ternary) Operator: ==, ===, >, >=, <, <=,!;
  // Comma Operator
  // Unary Operators
  // Relational Operators
  /*Data Types:$
    undefined
    null
    boolean
    string
    symbol
    number
    object*/

//Variables
    var myName = "ALIPHATIC"; //Var can be used throughout your whole program

    myName = 8;

    let ourName = "HYDROCARBON"; //Let will only be used within the scope of where it being declared

    const pi = 3.14; //Const is a variable that should never change and cannot change 



// Storing Values with the Assignment Operator
    var a;
    var b = 8;
    // console.log(a);

    a = 7;

    b = a;

    // console.log(a);
        
// Initializing variables with assignment operators
// The equal sign (=) is the initializing operator 

    var a = 9;
   

// Uninitialized variables 

// Initialize these three variables 

    var a = 5;
    var b = 10;
    var c = "I am a";

// Do not change the codes in the line below 

    a = a + 1;
    b = b + 5;
    c = c + "String!";

// Case sensitivity in variables

// Declarations 

    var StUdLyCapVaR;
    var properCamelCase;
    var TitleCaseOver;

// Assignment 

    STUDLYCAPVAR = 10;
    PRoperCAmelCAse = "A String";
    tITLEcASEoVER = 9000;
    
// Adding Numbers 

    var sum = 10 + 10;
    console.log(sum);

// Subtracting Numbers

    var difference = 20 - 10;
    console.log(difference);

// Multiplying Numbers

    var product = 5 * 2;
    console.log(product);

// Dividing Numbers 

    var division = 6 / 3;
    console.log(division);

// Incrementing Numbers

    var myVar = 47;

// Do not touch this code 

    myVar = myVar + 1;
    myVar++; 

// Decrementing Numbers 

    var myVar = 24;

// Do not touch this code

    myVar = myVar - 1;
    myVar--;

// Decimal Numbers 

    var ourDecimal = 4.5;

// Only change code below this line 
    
    var myDecimal = 0.00009;

// Multiply Decimals 

    var product = 2.00 * 0.5;
    console.log(product);

// Divide Decimals

    var quotient = 4.4 / 2.0;
    console.log(quotient);

// Finding a Remainder

    var remainder = 11 % 3;
    console.log(remainder);

// Compound Assignment with Augmented Addition
 
    var a = 4;
    var b = 6;
    var c = 8;

// Only modify code in the line below 
    /*
    a = a + 15; or a += 15;
    b = 9 + b; or b += 9;
    c = c + 7; or c += 7;
    */

// Compound Assignment with Augmented Multiplication

    var a = 4;
    var b = 6;
    var c = 8;

// Only modify code in the line below
    /*
    a = a * 5; or a *= 5;
    b = b * 3; or a *= 3;
    c = c * 1; or a *= 1;
    */

// Compound Assignment with Augmented Division

    var a = 4;
    var b = 6;
    var c = 8;

// Only modify code in the line below
    /*
    a = a / 5; or a /= 5;
    b = b / 3; or a /= 3;
    c = c / 1; or a /= 1;
    */

// Declare String Variables
// Example 
    var firstName = "ALIPHATIC";
    var lastName = "HYDROCARBON";

// Only change code below this line

    var myFirstName = "ALIPHATIC";
    var myLastName = "HYDROCARBON";
        

// Escaping Literal Quotes in Strings

    // var myStr = " I an a "double quoted" string inside a "double quote" ";
    var myStr = " I an a \"double quoted\" string inside a \"double quote\" "; 
    // Back slash is added to the front of the double quote to make javascript understand that its a double quoted string inside a double quote.

    console.log(myStr);
        
// Quoting Strings with Single Quotes
// Apart for using the back slash quote before the double quote, the single quote method can also be used         
      
    var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
// From the code above you can see that the backslash has been removed 
      
// Another method that can also be used is the backticks 
// This allows both the single and double quote to be used inside a string.
    `'<a href="http://www.example.com" target="_blank">Link</a>'`;       
        

//Escape Sequences in Strings 
/***
Code Output
    \' single quote
    \" double quote
    \\ backslash: anytime you want to use the backslash, You will add two backslashes so that JavaScript knows that you are not trying to escape a character 
    \n newline
    \r carriage return
    \t tab
    \b word boundary/ backspace
    \f form feed
***/        
        
  
    var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Ty logging this out 

// Concatenating Strings with Plus Operator
// You can concatenate strings with the plus operator
// Example

    var myStr = "This is the start. " + "This is the end."; // This will concatenate the two strings together     
        
    
// Concatenating Strings with the Plus Equals Operator
// You can also concatenate strings using the plus equal operator 
// Example
    var myStr = "This is the first sentence. ";
    myStr += "This is the second sentence."; // This will concatenate the two strings together       
      
// Constructing Strings with variables 
// EXAMPLE

    var theirName = "this is free";
    var theirStr = "Hey " + theirName + " come and get it"; 
    console.log(theirStr);
        
        
// Appending Variables to Strings 
// Example
    var theAdj =  "shege!";
    var theStr = "Js is";
    theStr += theAdj;

        
// Finding The Length Of A String
// Example 

    var lastNameLength = 0;
    var lastName = "banza";
    lastNameLength = lastName.length;
    console.log(lastNameLength);

// Bracket Notation to Find the First Character in a String 
// Example

    var firstLetterOfLastName = "";
    var lastName = "banza";
    firstLetterOfLastName = lastName[0];
    console.log(firstLetterOfLastName);
        
// String Immutability
// Example

    var myStr = "Jello World";
    myStr = "Hello World"; // This will change the first letter of the string from J to H
    console.log(myStr);
      
       
// Bracket Notation to Find the Nth Character in a String
// Example

    var lastName = "banza";
    var thirdLetterOfLastName = lastName[2];
    console.log(thirdLetterOfLastName);
        
// Bracket Notation to Find the Last Character in a String
// Example

    var lastName = "banza";
    var lastLetterOfLastName = lastName[lastName.length - 1];
    console.log(lastLetterOfLastName);

        
// Bracket Notation to Find the Nth-to-Last Character in a String
// Example

    var lastName = "banza";
    var secondToLastLetterOfLastName = lastName[lastName.length - 2];
    console.log(secondToLastLetterOfLastName);

        
        
       
        
// Word Blanks 
    function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";  
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;


    return result;

    }
    console.log(wordBlanks("dog", "big", "ran", "quickly"));
    console.log(wordBlanks("bike", "slow", "flew", "slowly"));


// Store Multiple Values With Arrays
    var ourArray = ["John", 23];

    var myArray = ["Quincy", 1];
    
// Nested Arrays
    var ourArray = [["the universe", 42], ["everything", 101010]];

    var myArray = [["Bulls", 23], ["White Sox", 45]];
        
// Access Array Data with Indexes
    var ourArray = [["the universe", 42], ["everything", 101010]];       
  

    var myArray = [["Bulls", 23], ["White Sox", 45]];          

    var myData = myArray[0][0];
    console.log(myData);        

// Modify Array Data With Indexes
    var ourArray = [20, 30, 40]
    ourArray[2] = 35; // ourArray now equals [20, 30, 35]    
   
    console.log(ourArray);
        
 // Access Multi-Dimensional Arrays With Indexes    
 
    var ourArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14, 15]];        
    var myData = ourArray[0][0]; // The first zero indicates the first index in the array, while the second zero indicates the '1' in the first index

    console.log(myData);
  
// Manipulate Arrays With Push()
    var ourArray = ["Shege", "banza"];
    ourArray.push(["happy", "joy"]);   //Our Array now equals ["shege", "banza", ["happy", "joy"]];     
    console.log(ourArray);   
        
  // Manipulate Arrays With Pop()
    var ourArray = [1, 2, 3];  
    var removedFromOurArray = ourArray.pop(); // removedFromOurArray now equals 3, and ourArray now equals [1, 2]
    console.log(ourArray);        
        
  // Manipulate Arrays With Shift()    
    var ourArray = ["Stimpson", "J", "cat"];
    var removedFromOurArray = ourArray.shift();  // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", "cat"]
    console.log(ourArray);
     
 // Manipulate Arrays With Unshift() 
    ourArray.unshift("Happy"); // ourArray now equals ["Happy", "J", "cat"]     
    ourArray.shift(); // ourArray now equals ["J", "cat"]
    ourArray.unshift("Happy"); // ourArray now equals ["Happy", "J", "cat"]     
    console.log(ourArray);

// Shopping List      
        
        
        
        
      
      
        
      
        
        
        
// The parseInt 
// The parseInt method parses a value as a string and returns the first integer

    function convertToInteger(str) {
        return parseInt(str);
    }

    convertToInteger("56");     


