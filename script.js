const modal =           document.querySelector('.modal');
const modalBox =        document.querySelector('.modalBox');
const errorMessage =    document.querySelector('.errorMessage');
const div =             document.createElement('div');


// List of books
let myLibrary =   [ {title: "Harry Potter and the Philosopher’s Stone", author: "J.K. Rowling", pages: 223, read: true}, 
                    {title: "The Lord of the Rings", author: "J.R.R. Tolkien", pages: 1178, read: false},
                    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 208, read: false}, 
                    {title: "The Alchemist", author: "Paulo Coehlo", pages: 163, read: true},
                    {title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, read: true}, 
                    {title: "Les Misérables", author: "Victor Hugo", pages: 1232, read: false},
                    {title: "The Adventures of Huckleberry Finn", author: "Mark Twain", pages: 303, read: true}, 
                    {title: "A la recherche du temps perdu", author: "Marcel Proust", pages: 2400, read: false}];

let newBook;
displayBooks();

// Create book function
function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
};


// Submit book to Library displayed
function submitBook() {
    if (document.getElementById('titleInput').value == '' ||
        document.getElementById('authorInput').value == '' ||
        document.getElementById('pagesInput').value == '') {
            if (errorMessage.style.display == "block") {
                return;
            } 
            else 
            {
                showHideError();
                return;
            }
    } 
    else 
    {
        addBookToLib();
        formReset();
        showHideError();
        modal.style.display = "none";
        errorMessage.style.display = "none";
    }
};

// Reset Library Displayed
function resetLibDisplayed() {
    let library = document.querySelector('.library');
    library.innerHTML = '';
}



// Add book to myLibrary
function addBookToLib() {
    const titleValue =      document.getElementById('titleInput').value;
    const authorValue =     document.getElementById('authorInput').value;
    const pagesValue =      document.getElementById('pagesInput').value;
    const readValue =       document.getElementById('readInput').checked;

    newBook = new Book(titleValue, authorValue, pagesValue, readValue);
    myLibrary.push(newBook);
    resetLibDisplayed();
    displayBooks();
};

// Display all myLibrary books
function displayBooks() {
    for (i = 0; i < myLibrary.length; i++) {
        let library =       document.querySelector('.library');
        let newBookDiv =    document.createElement('div');
        let newTitleDiv =   document.createElement('div');
        let newAuthorDiv =  document.createElement('div');
        let newPagesDiv =   document.createElement('div');
        let newReadDiv =    document.createElement('button');
        let newRemoveDiv =  document.createElement('button');

        // Create bookDiv
        library.appendChild(newBookDiv);
        newBookDiv.className = 'bookDiv';
        newBookDiv.setAttribute('id', i);

            // Add titleDiv in bookDiv 
            newBookDiv.appendChild(newTitleDiv);
            newTitleDiv.className = 'titleDiv';
            newTitleDiv.setAttribute('id', i);
            newTitleDiv.textContent = myLibrary[i].title;

            // Add authorDiv in bookDiv 
            newBookDiv.appendChild(newAuthorDiv);
            newAuthorDiv.className = 'authorDiv';
            newAuthorDiv.setAttribute('id', i);
            newAuthorDiv.textContent = myLibrary[i].author;

            // Add pagesDiv in bookDiv 
            newBookDiv.appendChild(newPagesDiv);
            newPagesDiv.className = 'pagesDiv';
            newPagesDiv.setAttribute('id', i);
            newPagesDiv.textContent = myLibrary[i].pages + " pages";

            // Add readDiv in bookDiv 
            newBookDiv.appendChild(newReadDiv);
            newReadDiv.classList.add('readDivBtn');
            newReadDiv.setAttribute('id', i);

                // Update readBtn value
                let readDivBtn = document.querySelector('.readDivBtn');
                if (myLibrary[i].read === true) {
                    newReadDiv.textContent = 'Read';
                    newReadDiv.classList.add('trueReadBtn', 'readDivBtn');
                } 
                else 
                {
                    newReadDiv.textContent = 'Not read';
                    newReadDiv.classList.add('falseReadBtn', 'readDivBtn');
                }

                // Change Read status when clicked
                    newReadDiv.addEventListener('click', event => {
                        let buffer = event.target.id;
                    if (newReadDiv.classList.contains('trueReadBtn')) {
                        newReadDiv.classList.remove('trueReadBtn', 'readDivBtn');
                        newReadDiv.classList.add('falseReadBtn', 'readDivBtn');
                        myLibrary[buffer].read = false;
                        readDivBtn.textContent = 'Not read';
                        resetLibDisplayed();
                        displayBooks();
                    } 
                    else 
                    {
                        newReadDiv.classList.remove('falseReadBtn', 'readDivBtn');
                        newReadDiv.classList.add('trueReadBtn', 'readDivBtn');
                        myLibrary[buffer].read = true;
                        readDivBtn.textContent = 'Read';
                        resetLibDisplayed();
                        displayBooks();
                    }
                    });

            // Add removeDiv in bookDiv 
            newBookDiv.appendChild(newRemoveDiv);
            newRemoveDiv.classList.add('removeDivBtn');
            newRemoveDiv.setAttribute('id', i);
            newRemoveDiv.textContent = 'Remove';
            newRemoveDiv.addEventListener('click', event => {
                let buffer2 = event.target.id;
                myLibrary.splice(buffer2, 1);
                resetLibDisplayed();
                displayBooks();
            });   
    }
};

// Show/Hide modal to add new Book
function showModal() {
    if (modal.style.display == "block") {
        modal.style.display = "none";
    } 
    else 
    {
        modal.style.display = "block";
    }
};

// Cancel modal to add new Book
function cancelModal() {
    if (modal.style.display == "block") {
        modal.style.display = "none";
        errorMessage.style.display = "none";
    } 
    else 
    {
        modal.style.display = "block";
    }
};

// Show/Hide error Message for empty fields
function showHideError(){
    if (errorMessage.style.display == "block") {
        errorMessage.style.display = "none";
    } 
    else 
    {
        errorMessage.style.display = "block";
    } 
};


// Reset form
function formReset(){
    document.getElementById('titleInput').value = '';
    document.getElementById('authorInput').value = '';
    document.getElementById('pagesInput').value = '';
    document.getElementById('readInput').checked = false;
};