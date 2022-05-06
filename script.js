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
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Add book to Library displayed
function addBooktoLib() {

}

// Display all myLibrary books
function displayBooks() {
    for (i = 0; i < myLibrary.length; i++){

        // Create bookDiv
        let newBookDiv = document.createElement('div');
        library.appendChild(newBookDiv);
        newBookDiv.className = 'bookDiv';

            // Add titleDiv in bookDiv 
            let newTitleDiv = document.createElement('div');
            newBookDiv.appendChild(newTitleDiv);
            newTitleDiv.className = 'titleDiv';
            newTitleDiv.textContent = myLibrary[i].title;

            // Add authorDiv in bookDiv 
            let newAuthorDiv = document.createElement('div');
            newBookDiv.appendChild(newAuthorDiv);
            newAuthorDiv.className = 'authorDiv';
            newAuthorDiv.textContent = myLibrary[i].author;

            // Add pagesDiv in bookDiv 
            let newPagesDiv = document.createElement('div');
            newBookDiv.appendChild(newPagesDiv);
            newPagesDiv.className = 'pagesDiv';
            newPagesDiv.textContent = myLibrary[i].pages;

            // Add readDiv in bookDiv 
            let newReadDiv = document.createElement('div');
            newBookDiv.appendChild(newReadDiv);
            newReadDiv.className = 'readDiv';
            newReadDiv.textContent = myLibrary[i].read;
    }
}


addBookToLibrary("Yes Man", "Bob Dylan", 43, true);
addBookToLibrary("No Man", "Ron Dylan", 34, false);
addBookToLibrary("Maybe Man", "Dan Dylan", 73, true);
displayBooks();








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