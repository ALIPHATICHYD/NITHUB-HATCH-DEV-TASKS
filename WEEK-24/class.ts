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



