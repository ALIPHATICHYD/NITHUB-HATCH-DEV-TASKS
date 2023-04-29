class Library {
    private name: string;
    private books: Array<string>; //TODO
    private librarians: string[]; //TODO

    constructor(name: string){
        this.name = name;
        this.books = [];
        this.librarians = [];
    }


    // TODO
    assignLibrarian(librarian: string){
        this.librarians.push(librarian);
        return this.librarians;


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
console.log()mainLib;