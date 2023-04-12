class Staff {
    private name: string;
    private email: string;



    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }
}


// Non-teaching and Teaching Staff

class NonTeachingStaff extends Staff {
    private role: string;
    constructor(name: string, email: string, role: string){
        super(name, email);
        this.role = role;
    }
}

class TeachingStaff extends Staff {
    private subject: string;
    constructor(name: string, email: string, subject: string){
        super(name, email);
        this.subject = subject;
    }
}