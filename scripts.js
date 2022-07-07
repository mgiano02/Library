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
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '310', 'Not read');
myLibrary.push(book1);
const book2 = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', '437', 'Read');
myLibrary.push(book2);


// Loop that creates book cards and displays them in the library list
function librayDisplay() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    myLibrary.forEach((book) => {
        let title = document.createElement('p');
        let author = document.createElement('p');
        let pages = document.createElement('p');
        let read = document.createElement('p');
        title.textContent = `Title: ${book.title}`;
        author.textContent = `Author: ${book.author}`;
        pages.textContent = `Pages: ${book.pages}`;
        read.textContent = `Read: ${book.read}`;

        let bookCard = document.createElement('div');
        bookCard.classList.add('card');
        bookCard.append(title, author, pages, read, removeBookBtn());
        container.append(bookCard);
        applyIndex();
    })
}

// Adds Remove button with a click event
function removeBookBtn() {
    const rmBtn = document.createElement('button');
    rmBtn.classList.add('rmBtn');
    rmBtn.innerText = 'Remove';

    rmBtn.addEventListener('click', removeBook);
    return rmBtn;
}

// Targets index of Remove button clicked and splices (removes) the stored book from the array and
// the book card that goes with it
function removeBook(event) {
    let index = event.target.parentNode.dataset.index;
    let card = event.target.parentNode;
    console.log(index);
    myLibrary.splice(index, 1);
    card.remove();
    console.log(card);
    applyIndex();
}

// Adds index to each book card (div)
function applyIndex() {
    let cards = document.querySelectorAll('div');
    for (let i = 1; i < cards.length; i++) {
        cards[i].dataset.index = (i - 1);
    }
}

librayDisplay();



// Future update: Toggle read button
// Add function somewhere to apply button
// function toggleReadBtn() {
//     const readBtn = document.createElement('button');
//     readBtn.classList.add('readBtn');
//     readBtn.innerText = 'Read';

//     readBtn.addEventListener('click', readBook);
//     return readBtn;
// }

// // Add way to target specific <p> element and toggle read status
// function readBook(event) {
//     let readCard = event.target.parentNode;
//     if (readCard.innertext === 'read') {
//         readCard.innerText = 'not read'
//     } else {
//         readCard.innertext = 'read'
//     }
//     // toggle()    
// }

// Read toggle button:
// Recreate remove button with index targeting
// Click event that toggles the read status innertext