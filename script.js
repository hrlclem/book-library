const library = document.querySelector('.library');
const modal = document.querySelector('.modal');
const div = document.createElement('div');


// List of books
let myLibrary = [];

// Create book function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

// Show/Hide modal to add new Book
function showModal() {
    if (modal.style.display == "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
};

// Add book to Library displayed
function submitBook() {
    addBookToLib();
    modal.style.display = "none";
}

// Add book to myLibrary
function addBookToLib() {
    const title = document.getElementById('titleInput').value;
    const author= document.getElementById('authorInput').value;
    const pages = document.getElementById('pagesInput').value;
    const read = document.getElementById('readInput').value;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayLastBook();
}

function displayLastBook() {
    let lastBook = myLibrary.length - 1;
    // Create bookDiv
    let newBookDiv = document.createElement('div');
    library.appendChild(newBookDiv);
    newBookDiv.className = 'bookDiv';

        // Add titleDiv in bookDiv 
        let newTitleDiv = document.createElement('div');
        newBookDiv.appendChild(newTitleDiv);
        newTitleDiv.className = 'titleDiv';
        newTitleDiv.textContent = myLibrary[lastBook].title;

        // Add authorDiv in bookDiv 
        let newAuthorDiv = document.createElement('div');
        newBookDiv.appendChild(newAuthorDiv);
        newAuthorDiv.className = 'authorDiv';
        newAuthorDiv.textContent = myLibrary[lastBook].author;

        // Add pagesDiv in bookDiv 
        let newPagesDiv = document.createElement('div');
        newBookDiv.appendChild(newPagesDiv);
        newPagesDiv.className = 'pagesDiv';
        newPagesDiv.textContent = myLibrary[lastBook].pages;

        // Add readDiv in bookDiv 
        let newReadDiv = document.createElement('div');
        newBookDiv.appendChild(newReadDiv);
        newReadDiv.className = 'readDiv';
        newReadDiv.textContent = myLibrary[lastBook].read;
};

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


// addBook("Yes Man", "Bob Dylan", 43, true);
// addBook("No Man", "Ron Dylan", 34, false);
// addBook("Maybe Man", "Dan Dylan", 73, true);
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