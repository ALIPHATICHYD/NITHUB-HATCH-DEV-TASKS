// LIBRARY SYSTEM
// Implement the Book feature
// Implement the Author feature

// LIBRARIAN FEATURES
type Gender = "MALE" | "FEMALE";

class Librarian {
  private firstName: string;
  private lastName: string;
  private email: string;
  private gender: Gender;
  private phoneNum: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    gender: Gender,
    phoneNum: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.phoneNum = phoneNum;
  }

  get fullName(): string {
    if (this.gender === "MALE") {
      return `Mr. ${this.firstName} ${this.lastName}`;
    } else {
      return `Mrs. ${this.firstName} ${this.lastName}`;
    }
  }
}

// BOOKS FEATURE
type Category =
  | "ENGINEERING"
  | "SCIENCE"
  | "ARTS"
  | "SOCIAL SCIENCE"
  | "MANAGEMENT SCIENCE"
  | "ENVIRONMENTAL SCIENCE"
  | "MASS COMMUNCATION"
  | "LAW"
  | "WORKS & PLANNING";

class Book {
  private name: string;
  private authors: string[];
  private quantity: number;
  private category: Category;
  private datePublished: Date;

  constructor(
    name: string,
    authors: string[],
    quantity: number,
    category: Category,
    datePublished: Date
  ) {
    this.name = name;
    this.authors = authors;
    this.quantity = quantity;
    this.category = category;
    this.datePublished = datePublished;
  }
}

// AUTHORS FEATURE
type Genders = "MALE" | "FEMALE";

class Author {
  private firstName: string;
  private lastName: string;
  private email: string;
  private gender: Genders;
  private phoneNum: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    gender: Genders,
    phoneNum: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.phoneNum = phoneNum;
  }

  get fullName(): string {
    if (this.gender === "MALE") {
      return `Mr. ${this.firstName} ${this.lastName}`;
    } else {
      return `Mrs. ${this.firstName} ${this.lastName}`;
    }
  }
}

// LIBRARY FEATURES
class Library {
  private name: string;
  private books: Book[]; // books should be an array of Book objects
  private librarians: Librarian[];

  constructor(name: string) {
    this.name = name;
    this.books = [];
    this.librarians = [];
  }

  assignLibrarian(librarian: Librarian) {
    this.librarians.push(librarian);
    return this.librarians;
  }

  addBook(book: Book) { // changed addBooks() to addBook(book: Book)
    this.books.push(book);
  }

  get libraryName(): string {
    return this.name;
  }

  get libraryBooks(): Book[] { // changed return type to array of Book objects
    return this.books;
  }

  get librariansName(): Librarian[] { // changed return type to array of Librarian objects
    return this.librarians;
  }
}

// Example usage