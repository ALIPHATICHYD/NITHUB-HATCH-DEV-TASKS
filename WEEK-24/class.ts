class Shapes {
    area: number = 0;
    name: string;

    // constructor(){}   //No Argument Constructor
    
    constructor(name: string){
        this.name = name;
    }

    // Setters and Getters
    // Setters and getters are used to set and get the values of the properties of a class.
    // Setters are used to set the value of a property of a class.
    // Getters are used to get the value of a property of a class.

    set calculatedArea(result: number){
        this.area = result;
    }

    get areaOfShape(): number{
        return this.area;
    }
    
    calculateArea(){
        return this.area * 2;
    }

}

 /** Access Modifiers
 Access modifiers are used to control the access of the properties and methods of a class.
 There are three access modifiers in TypeScript:
 1. public: Public properties and methods can be accessed from anywhere.
 2. private: Private properties and methods can only be accessed from within the class.
 3. protected: Protected properties and methods can only be accessed from within the class and its subclasses.
 

Instance Methods & Static Methods
Instance methods are methods that can be called on an instance of a class.
Static methods are methods that can be called on a class itself.

A static property is a property that is tied to a class
A static method is a method that is tied to a class
A static method can be called without instantiating the class
A static method can only access static properties
*/
    


const sqr = new Shapes("square");


// Create a Bank System using OOp
// This bank system has Account for Users
// Simulate these operations using class methods and properties
// 1. Depositing into the bank
// 2. Withdrawing from the account
// 3. Transferring to another bank [Assignment]

// The Account class for the user should contain properties such as 
// 1. Bank name
// 2. The owner
// 3. Balance
// 4. Account Number

// Implement methods such as 
// 1. Deposit
// 2. Withdraw
// 3. Transfer[Assignment]

// make aa properties of the account class private and assign getters to each of them 
// feel free to add any other thing you think


