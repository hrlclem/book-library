const library = document.querySelector('.library');
const div = document.createElement('div');

// List of books
let myLibrary = [];

// Create book function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add book to myLibrary
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Add book to Library displayed
function addBooktoLib() {
    const newElement = document.createElement('div');
    library.appendChild(newElement);
    newElement.className = 'book'
    console.log('yes');
}

addBookToLibrary("Yes Man", "Bob Dylan", 43, true);
addBookToLibrary("No Man", "Ron Dylan", 34, false);
addBookToLibrary("Maybe Man", "Dan Dylan", 73, true);








//PSEUDOCODE
// DISPLAY EXISTING BOOKS
// Go through MyLibrary
// For each book, display it in grid with:
//      Title
//      Author
//      Nbr of pages
//      Read TRUE or FALSE (with button to change)
//      Button to delete Book. If clicked, Booked is deleted and DISPLAY EXISTING BOOKS runs

// When AddBook btn is clicked, modal appears
// Each field fills the BookConstructor

// When Submit is clicked, all BookConstructor data is pushed to MyLibrary
// Run DISPLAY EXISTING BOOKS