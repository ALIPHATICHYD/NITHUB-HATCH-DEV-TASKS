class Staff {
    private name: string;
    private email: string;
    private educationalQualification: String;
    private salary: ;



    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
        this.educationalQualification: String;
        this.salary = "10,000$"
    }
}


// Non-teaching and Teaching Staff

class Animal {
    name: string;
    constructor(name: string){
}



class NonTeachingStaff extends Staff{

    private roles: string[] = [];

    constructor(name: string, email: string, roles: string[]){
        super(name, email);
       roles.forEach((role: string) => this.roles.push(role) )
    }

}

class TeachingStaff extends Staff{
    private faculty: string;
    private department: string;
    private courseTaking: string[];

    constructor(name: string, email: string, faculty: string, department: string, courseTaking: string[]){
        super(name, email);
        this.faculty = faculty;
        this.department = department;
        this.courseTaking = courseTaking;
    }

}

const BossMike = new NonTeachingStaff("Mike", "mike@gmail.com", ["Security", "Food Vendor"])
const Jumo = new TeachingStaff("Jumoke", "Garba", "Arts", "Sociology", ["Chemistry", "Advanced Maths"])

console.log(BossMike);
console.log(Jumo);