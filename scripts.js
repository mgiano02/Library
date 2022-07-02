// Holds list of all books in the library
let myLibrary = [];

// Object constructor that creates book objects 
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const container = document.querySelector('#container');
const card = document.querySelector('.card');
const newBtn = document.querySelector('#newBtn');

// Prompts user to enter information on a book to run it through the object constructor and store
// it in the myLibrary array
// function addBookToLibrary() {
//     let bookTitle = prompt('What is the title of the book?');
//     let bookAuthor = prompt('Who is the author of the book?');
//     let bookPages = prompt('How many pages long is this book?');
//     let bookRead = prompt('Has this book been read?');
//     const book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
//     myLibrary.push(book);
// }


newBtn.addEventListener('click', function() {
    let bookTitle = prompt('What is the title of the book?');
    let bookAuthor = prompt('Who is the author of the book?');
    let bookPages = prompt('How many pages long is this book?');
    let bookRead = prompt('Has this book been read?');
    const book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(book);
    // Remove if statement if removing starter books below
    if (myLibrary[3]) {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
    }
    librayDisplay();
})

// Starter books to display and get pushed into the library
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read');
myLibrary.push(book1);
const book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', '498', 'read');
myLibrary.push(book2);


// Displays books in the library list
function librayDisplay() {
    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        div.classList.add('card');
        container.appendChild(div);
        // div.innerText = book1.title + '| ' + book1.author + '| ' + book1.pages + '| ' + book1.read;
        div.innerText = myLibrary[i].title + ' | ' + myLibrary[i].author + ' | ' + 
        myLibrary[i].pages + ' | ' + myLibrary[i].read
    }
}
