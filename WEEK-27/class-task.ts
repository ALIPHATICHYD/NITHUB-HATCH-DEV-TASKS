interface Author {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface Book {
  name: string;
  authors: Author[];
  quantity: number;
  category: string;
  datePublished: Date;
}

interface Library {
  name: string;
  books: Book[];
  librarians: string[];
}

// Example usage
const author1: Author = {
  firstName: "AROSAUTIC",
  lastName: "HYDROCARBON",
  email: "arosautic@hydrocarbon.com",
  phoneNumber: "555-555-5555",
};

const book1: Book = {
  name: "The Great Gatsby",
  authors: [author1],
  quantity: 5,
  category: "Fiction",
  datePublished: new Date("2023-04-10"),
};

const library1: Library = {
  name: "Central Library",
  books: [book1],
  librarians: ["ALIPHATIC", "AROMATIC"],
};


/** Conclusion
* In this code, we have defined three interfaces - Author, Book, and Library - to represent the features of the library system.
* An Author has a first name, last name, email, and phone number.
* A Book has a name, one or more authors, a quantity, a category, and a date published.
* Note that the authors property is an array of Author objects, as a book can have multiple authors.
* A Library has a name, an array of books, and an array of librarian names.
* Finally, we have created an example usage where we define an Author, a Book, and a Library object.
* Note that we are using the Date object for the datePublished property of the Book interface.
 */