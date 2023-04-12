class Staff {
    private name: string;
    private email: string;



    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }
}


// Non-teaching and Teaching Staff



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
}