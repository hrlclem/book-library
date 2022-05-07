const library = document.querySelector('.library');
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modalBox');
const errorMessage = document.querySelector('.errorMessage');
const div = document.createElement('div');


// List of books
let myLibrary = [{title: "The Alchemist", author: "Paulo Coehlo", pages: 230, read: true}];

displayBooks();




            
// Create book function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

// Add book to myLibrary
function addBookToLib() {
    const titleValue = document.getElementById('titleInput').value;
    const authorValue = document.getElementById('authorInput').value;
    const pagesValue = document.getElementById('pagesInput').value;
    const readValue = document.getElementById('readInput').checked;

    let newBook = new Book(titleValue, authorValue, pagesValue, readValue);
    myLibrary.push(newBook);
    displayBooks();
};


// Submit book to Library displayed
function submitBook() {
    if (document.getElementById('titleInput').value == '' ||
        document.getElementById('authorInput').value == '' ||
        document.getElementById('pagesInput').value == '') {
            if (errorMessage.style.display == "block") {
                return;
            } else {
                showHideError();
                return;
            }
    } else {
        addBookToLib();
        resetInputValues();
        modal.style.display = "none";
        errorMessage.style.display = "none";
    }
}

// Display all myLibrary books
function displayBooks() {
    let newBookDiv = document.createElement('div');
    let newTitleDiv = document.createElement('div');
    let newAuthorDiv = document.createElement('div');
    let newPagesDiv = document.createElement('div');
    let newReadDiv = document.createElement('button');

    // for (let book of myLibrary) {
    // console.log(book)
    // }

    for (let book of myLibrary) {
        // Create bookDiv
        library.appendChild(newBookDiv);
        newBookDiv.className = 'bookDiv';

            // Add titleDiv in bookDiv 
            newBookDiv.appendChild(newTitleDiv);
            newTitleDiv.className = 'titleDiv';
            newTitleDiv.textContent = book.title;

            // Add authorDiv in bookDiv 
            newBookDiv.appendChild(newAuthorDiv);
            newAuthorDiv.className = 'authorDiv';
            newAuthorDiv.textContent = book.author;

            // Add pagesDiv in bookDiv 
            newBookDiv.appendChild(newPagesDiv);
            newPagesDiv.className = 'pagesDiv';
            newPagesDiv.textContent = book.pages + " pages";

            // Add readDiv in bookDiv 
            newBookDiv.appendChild(newReadDiv);
            newReadDiv.className = 'readDivBtn';

            // Update readBtn value
            let readDivBtn = document.querySelector('.readDivBtn');
            if (book.read) {
                readDivBtn.textContent = 'Read';
                newReadDiv.classList.add('trueReadBtn', 'readDivBtn');
              } else {
                readDivBtn.textContent = 'Not read';
                newReadDiv.classList.add('falseReadBtn', 'readDivBtn');
            }

            // Change Read status when clicked
              newReadDiv.addEventListener('click', event => {
                if (newReadDiv.classList.contains('trueReadBtn')) {
                    newReadDiv.classList.remove('trueReadBtn', 'readDivBtn');
                    newReadDiv.classList.add('falseReadBtn', 'readDivBtn');
                    book.read = false;
                    readDivBtn.textContent = 'Not read';
                } else {
                    newReadDiv.classList.remove('falseReadBtn', 'readDivBtn');
                    newReadDiv.classList.add('trueReadBtn', 'readDivBtn');
                    book.read = true;
                    readDivBtn.textContent = 'Read';
                }
            });
    }
};


// Show/Hide modal to add new Book
function showModal() {
    if (modal.style.display == "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
};

// Show/Hide error Message for empty fields
function showHideError(){
    if (errorMessage.style.display == "block") {
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
    }
};


// Reset form
function resetInputValues(){
    document.getElementById('titleInput').value = '';
    document.getElementById('authorInput').value = '';
    document.getElementById('pagesInput').value = '';
    document.getElementById('readInput').checked = false;
};




//PSEUDOCODE
// DISPLAY EXISTING BOOKS
// Go through MyLibrary----
// For each book, display it in grid with:----
//      Title
//      Author
//      Nbr of pages
//      Read TRUE or FALSE (with button to change)
//      Button to delete Book. If clicked, Booked is deleted and DISPLAY EXISTING BOOKS runs

// When AddBook btn is clicked, modal appears---
// Each field fills the BookConstructor----

// When Submit is clicked, all BookConstructor data is pushed to MyLibrary----
// Run DISPLAY EXISTING BOOKS----
//
// MAKE IT BEAUTIFUL