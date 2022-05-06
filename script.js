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
    let currentLibSize = myLibrary.length;
    for (i = currentLibSize - 1; i < myLibrary.length; i++){

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
            let newReadDiv = document.createElement('button');
            newBookDiv.appendChild(newReadDiv);
            newReadDiv.className = 'readDivBtn';
            newReadDiv.textContent = myLibrary[i].read;

            let readDivBtn = document.querySelector('.readDivBtn')
            if (myLibrary[i].read == true) {
                readDivBtn.classList.add('trueReadBtn')
                console.log(myLibrary[i].read + 2)
            } else {
                readDivBtn.classList.add('falseReadBtn')
                console.log(myLibrary[i].read)
            }
    }
}





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

function resetInputValues(){
    document.getElementById('titleInput').value = '';
    document.getElementById('authorInput').value = '';
    document.getElementById('pagesInput').value = '';
    document.getElementById('readInput').checked = false;
}












// addBook("Yes Man", "Bob Dylan", 43, true);
// addBook("No Man", "Ron Dylan", 34, false);
// addBook("Maybe Man", "Dan Dylan", 73, true);


// Display last book
// function displayLastBook() {
//     let lastBook = myLibrary.length - 1;

//     // Create bookDiv
//     let newBookDiv = document.createElement('div');
//     library.appendChild(newBookDiv);
//     newBookDiv.className = 'bookDiv';

//         // Add titleDiv in bookDiv 
//         let newTitleDiv = document.createElement('div');
//         newBookDiv.appendChild(newTitleDiv);
//         newTitleDiv.className = 'titleDiv';
//         newTitleDiv.textContent = myLibrary[lastBook].title;

//         // Add authorDiv in bookDiv 
//         let newAuthorDiv = document.createElement('div');
//         newBookDiv.appendChild(newAuthorDiv);
//         newAuthorDiv.className = 'authorDiv';
//         newAuthorDiv.textContent = myLibrary[lastBook].author;

//         // Add pagesDiv in bookDiv 
//         let newPagesDiv = document.createElement('div');
//         newBookDiv.appendChild(newPagesDiv);
//         newPagesDiv.className = 'pagesDiv';
//         newPagesDiv.textContent = myLibrary[lastBook].pages;

//         // Add readDiv in bookDiv 
//         let newReadDiv = document.createElement('button');
//         newBookDiv.appendChild(newReadDiv);
//         newReadDiv.className = 'readDivBtn';
//         newReadDiv.textContent = myLibrary[lastBook].read;

//         let readDivBtn = document.querySelector('.readDivBtn')
//         if (myLibrary[i].read == true) {
//             readDivBtn.classList.add('trueReadBtn')
//             console.log(myLibrary[i].read + 2)
//         } else {
//             readDivBtn.classList.add('falseReadBtn')
//             console.log(myLibrary[i].read)
//         }
// };





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