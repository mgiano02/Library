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
const newBtn = document.querySelector('#newBtn');


// Button click prompts new book information, creates a book object, pushes it to the library array,
// removes listed cards, and runs the loop that displays the book cards
newBtn.addEventListener('click', function() {
    addBookToLibrary()
    // Remove conditional if removing starter books below
    if (myLibrary[3]) {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
    }
    librayDisplay();
})

function addBookToLibrary() {
    let bookTitle = prompt('What is the title of the book?');
    let bookAuthor = prompt('Who is the author of the book?');
    let bookPages = prompt('How many pages long is this book?');
    let bookRead = prompt('Has this book been read?');
    const book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(book);
}

// Starter books to display and get pushed into the library
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read');
myLibrary.push(book1);
const book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', '498', 'read');
myLibrary.push(book2);


// Loop that creates book cards and displays them in the library list
function librayDisplay() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('card');
        container.appendChild(bookCard);
        bookCard.innerText = myLibrary[i].title + ' | ' + myLibrary[i].author + ' | ' + 
        myLibrary[i].pages + ' | ' + myLibrary[i].read + " ";
        const btn = document.createElement('button');
        btn.innerText = 'Remove';
        // btn.classList.add('rmBtn');
        btn.setAttribute('id', `rmBtn${i}`);
        bookCard.appendChild(btn);
    }
}



// Remove book button
// Create button element
// Create button id and class
//  -id for each specific book object in the library array
//  -class to be removed from the element, which should drop it from the list
// Create selectors so an array specific id can be selected and the
//  overall button class can be added or removed
// Append to each card
// Add innertext
// Set up css class
// Create event listener to remove class which will remove the book stored in the array and
//  refresh the library book list displayed

// Read toggle button