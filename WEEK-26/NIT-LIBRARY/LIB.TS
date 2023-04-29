// LIBRARY SYSTEM


type Gender = "MALE" | "FEMALE";

class Librarian {
    private firstName: string;
    private lastName: string;
    private email: string;
    private gender: Gender;
    private phoneNum: string;

    constructor(firstName: string, lastName: string, email: string, gender: Gender, phoneNum: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.phoneNum = phoneNum;
    }


    get fullName(): string{
        if(this.gender === "MALE"){
            return `Mr. ${this.firstName} - ${this.lastName}`;
        }else{
            return `Mrs. ${this.firstName} - ${this.lastName}`;
        }
      
    }
}






class Library {
    private name: string;
    private books: Array<string>; //TODO
    private librarians: Librarian []; //TODO

    constructor(name: string){
        this.name = name;
        this.books = [];
        this.librarians = [];
    }


    // TODO
    assignLibrarian(librarian: Librarian){
        this.librarians.push(librarian);
        return this.librarians;


    }

    addBooks(){

    }

    addBook(name: string){
        this.books.push(name)
    }

    get libraryName(): string{
        return this.name;
    }

    get libraryBooks(): string[]{
        return this.books;
        
    }

    get librariansName(){
        return this.librarians;
    }


}


const mainLib = new Library("Main");

const olaide = new Librarian('olaide', 'ojuolape', 'ojuolapeolaide92@gmail.com', "FEMALE", "+23429299269");
const hanif = new Librarian('hanif', 'kanif ', 'hanif@gmail.com', "MALE", "+23429299269");
const gwen = new Librarian('gwen', 'ochayan', 'gwen@gmail.com', "FEMALE", "+23429299269");
const olympia = new Librarian('olympia', 'the great', 'olympia@gmail.com', "FEMALE", "+23429299269");




const librarians = mainLib.assignLibrarian(olaide);
// console.log(mainLib);
mainLib.assignLibrarian(gwen);
mainLib.assignLibrarian(hanif);
mainLib.assignLibrarian(olaide);
console.log(mainLib)

mainLib.addBook("Singles don't do that");
console.log(mainLib)
