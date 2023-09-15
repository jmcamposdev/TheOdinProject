/**
 * Book class
 * @param {string} title
 * @param {string} author
 * @param {number} pageNumber
 * @param {boolean} isRead
 * @returns Returns a book object
 */
class Book {
    constructor(title, author, pageNumber, isRead) {
        this.title = title;
        this.author = author;
        this.pageNumber = pageNumber;
        this.isRead = isRead;
    }
    info() {
        return `${this.title} by ${this.author}, ${this.pageNumber} pages, ${this.isRead ? 'read' : 'not read yet'}`;
    }
}

let myLibrary = []; // Create an empty array to store the books
const popup = document.querySelector('.popup');
const createBookForm = document.getElementById("createBookForm");
const closeBtn = document.querySelector('.close-btn');

/* ------------------------- */
/* Add Events Listeners */
/* ------------------------- */
popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup')) {
        togglePopup();
    }
}
);
closeBtn.addEventListener('click', togglePopup);
/**
 * Add Event Listener to the form
 * When the form is submitted, create a new book
 * and add it to the library
 */
createBookForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents the page from reloading
    // Get the values from the form
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pagesNumber = document.getElementById("pages").value;
    let isRead = document.getElementById("is-read").checked;
    // Create a new book object
    const newBook = new Book(title, author, pagesNumber, isRead);
    addBookToLibrary(newBook); // Add the book to the library
    togglePopup(); // Close the popup
    cleanForm(); // Clean the form
});

// Add some books to the library
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false));
myLibrary.push(new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 423, true));
myLibrary.push(new Book('The Two Towers', 'J.R.R. Tolkien', 352, false));
myLibrary.push(new Book('The Return of the King', 'J.R.R. Tolkien', 416, true));


/* ------------------------- */
/* Functions */
/* ------------------------- */

/**
 * Add a book to the library and display it to the DOM
 * @param {Book} book 
 */
function addBookToLibrary(book) {
    myLibrary.push(book); // Add the book to the library
    displayBooks(); // Display the books
}

/**
 * Display the books in the library to the DOM
 */
function displayBooks() {
    // Get the book container
    const bookContainer = document.querySelector('.books-container');
    bookContainer.innerHTML = ''; // Clear the book container
    myLibrary.forEach((book, index) => { // Loop through the books
        // Create a book item and append it to the book container
        bookContainer.appendChild(createBookItem(book, index)) 
    });
    // Append the add book button to the book container
    bookContainer.appendChild(createAddBookBtn());
}

/**
 * Create a book item and return it
 * @param {*} book 
 * @param {*} index 
 * @returns Returns a book item
 */
function createBookItem(book, index) {
    const bookContainerDiv = createBookContainerDiv(index, book.isRead);
    const contentDiv = createContentDiv(book.title, book.author, book.pageNumber);
    const deleteBtnContainer = createDeleteBtnContainer(index);
    const readBtn = createReadButton(book.isRead, index);
  
    contentDiv.appendChild(readBtn);
    bookContainerDiv.appendChild(deleteBtnContainer);
    bookContainerDiv.appendChild(contentDiv);
  
    return bookContainerDiv;
  }

  function createBookContainerDiv(index, isRead) {
    const bookContainerDiv = document.createElement('div');
    bookContainerDiv.classList.add('book');
    bookContainerDiv.setAttribute('data-index', index);
    bookContainerDiv.classList.add(isRead ? 'read' : 'not-read');
    return bookContainerDiv;
}

function createContentDiv(title, author, pageNumber) {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
  
    const bookTitle = document.createElement('h2');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = title;
  
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = author;
  
    const bookPages = document.createElement('p');
    bookPages.classList.add('book-pages');
    bookPages.textContent = `${pageNumber} pages`;
  
    contentDiv.appendChild(bookTitle);
    contentDiv.appendChild(bookAuthor);
    contentDiv.appendChild(bookPages);
  
    return contentDiv;
}

function createDeleteBtnContainer(index) {
    const deleteBtnContainer = document.createElement('div');
    deleteBtnContainer.classList.add('delete-btn-container');
  
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtnContainer.appendChild(deleteBtn);
  
    deleteBtn.addEventListener('click', () => {
      removeBook(index);
    });
  
    return deleteBtnContainer;
}

function createReadButton(isRead, index) {
    const readBtn = document.createElement('button');
    readBtn.classList.add('read-button');
    readBtn.textContent = isRead ? 'Read' : 'Not Read';
  
    readBtn.addEventListener('click', () => {
      toggleReadBook(index);
    });
  
    return readBtn;
}

displayBooks(); // Display the books and add the add book button

/**
 * Create the add book button and return it
 * @returns Returns the add book button
 */
function createAddBookBtn() {
    const addBookBtn = document.createElement("div");
    addBookBtn.classList.add("create-book-container");
    const createBookBtn = document.createElement("button");
    createBookBtn.classList.add("create-book-btn");
    createBookBtn.innerHTML = `<svg width="48px" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>`;
    createBookBtn.addEventListener('click', () => {
        popup.classList.toggle('active');
    });
    addBookBtn.appendChild(createBookBtn);
    return addBookBtn;
}

/**
 * Remove a book from the library using its index
 * and redisplay the books
 * @param {number} index 
 */
function removeBook(index) {
    myLibrary.splice(index, 1); // Remove the book from the library
    displayBooks(); // Display the books
};

/**
 * Toggle the isRead property of a book using its index
 * and redisplay the books
 * @param {number} index
*/
function toggleReadBook(index) {
    myLibrary[index].isRead = !myLibrary[index].isRead; // Toggle the isRead property
    displayBooks(); // Display the books
}

/**
 * Clean the form
 * Set the values of the form to empty
 */
function cleanForm() {
    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("pages").value = '';
    document.getElementById("is-read").checked = false;
}

/**
 * Toggle the popup
 * Open or close the popup
 */
function togglePopup() {
    popup.classList.toggle('active');
}

