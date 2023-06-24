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
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false));
myLibrary.push(new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 423, true));
myLibrary.push(new Book('The Two Towers', 'J.R.R. Tolkien', 352, false));
myLibrary.push(new Book('The Return of the King', 'J.R.R. Tolkien', 416, true));

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
    const bookDiv = document.createElement('div');
    bookDiv.classList.add("book");
    bookDiv.setAttribute("data-index", index);
    book.isRead ? bookDiv.classList.add('read') : bookDiv.classList.add('not-read');

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");

    const deleteBtnContainer = document.createElement("div");
    deleteBtnContainer.classList.add("delete-btn-container");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtnContainer.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', (e) => {
        const book = e.target.parentElement.parentElement;
        const index = book.getAttribute('data-index');
        removeBook(index);
    });

    const bookTitle = document.createElement("h2");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = book.author
    const bookPages = document.createElement("p");
    bookPages.classList.add("book-pages");
    bookPages.textContent = `${book.pageNumber} pages`;
    const readBtn = document.createElement("button");
    readBtn.classList.add("read-button");
    readBtn.textContent = book.isRead ? "Read" : "Not Read";

    contentDiv.appendChild(bookTitle);
    contentDiv.appendChild(bookAuthor);
    contentDiv.appendChild(bookPages);
    contentDiv.appendChild(readBtn);

    bookDiv.appendChild(deleteBtnContainer);
    bookDiv.appendChild(contentDiv);

    return bookDiv;
}

function createAddBookBtn() {
    const addBookBtn = document.createElement("div");
    addBookBtn.innerHTML = 
    `<div class="create-book-container">
        <button class="create-book-btn">
            <svg width="48px" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>
        </button>
    </div>`

    return addBookBtn;
}

/**
 * Delete a book from the library
 */

displayBooks();

/** ------------------ */
/** Remove Book Script */
/** ------------------ */
function removeBook(index) {
    myLibrary.splice(index, 1); // Remove the book from the library
    displayBooks(); // Display the books
};


/** ------------------ */
/** Form Script */
/** ------------------ */
const createBookForm = document.getElementById("createBookForm");
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
});

/** ------------------ */
/** Popup Script */
/** ------------------ */
const popup = document.querySelector('.popup');
const createBookBtn = document.querySelector('.create-book-btn');
const closeBtn = document.querySelector('.close-btn');

// Button Script
createBookBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
}
);
// Popup Script
popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup')) {
        popup.classList.toggle('active');
    }
}
);
closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
}
);
