// Holds list of all books in the library
let myLibrary = [];

// Object constructor that creates book objects 
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Prompts user to enter information on a book to run it through the object constructor and store
// it in the myLibrary array
function addBookToLibrary() {
    let bookTitle = prompt('What is the title of the book?');
    let bookAuthor = prompt('Who is the author of the book?');
    let bookPages = prompt('How many pages long is this book?');
    let bookRead = prompt('Has this book been read?');
    const book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(book);
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read');
myLibrary.push(book1);
const book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', '498', 'read');
myLibrary.push(book1);
// addBookToLibrary(1, 2, 3, 4);


function librayDisplay() {
    for (let i = 0; i <= myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}

