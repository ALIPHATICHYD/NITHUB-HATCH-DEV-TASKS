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


}