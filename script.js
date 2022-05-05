// List of books
let myLibrary = [];

// Create book function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add book to Library
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

}


addBookToLibrary("Yes Man", "Bob Dylan", 43, true);
addBookToLibrary("No Man", "Ron Dylan", 34, false);
addBookToLibrary("Maybe Man", "Dan Dylan", 73, true);
for (i = 0; i < 3; i++) {
    console.log(myLibrary[i]);
}