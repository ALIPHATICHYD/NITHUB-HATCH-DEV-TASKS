class Student {
    // Visibility of a Porperty of a method
    // Private, Protected, Public, 
    cgpa: string;
    matricno: number;
    email: string;

    constructor(currentGp: string, matricNo: number, email: string){
        this.cgpa = currentGp;
        this.matricno = matricNo;
        this.email = email; 
    }

    goToClass(){
        console.log('I am going to class');
    }

    stabTheClass(){
        console.log('Scholars don`t need classes');
    }

}



const treasure = new Student('5.0', 210407063, 'smartkid@play.com');

