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

let myLibrary = [];
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false));
myLibrary.push(new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 423, true));
myLibrary.push(new Book('The Two Towers', 'J.R.R. Tolkien', 352, false));
myLibrary.push(new Book('The Return of the King', 'J.R.R. Tolkien', 416, true));

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    const bookContainer = document.querySelector('.books-container');
    bookContainer.innerHTML = '';
    myLibrary.forEach((book, index) => {
        bookContainer.appendChild(createBookItem(book, index))
    });
}

function createBookItem(book, index) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add("book");
    bookDiv.setAttribute("data-index", index);
    book.isRead ? bookDiv.classList.add('read') : bookDiv.classList.add('not-read');

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");

    const bookTitle = document.createElement("h2");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = book.author
    const bookPages = document.createElement("p");
    bookPages.classList.add("book-pages");
    bookPages.textContent = book.pageNumber;
    const readBtn = document.createElement("button");
    readBtn.classList.add("read-button");
    readBtn.textContent = book.isRead ? "Read" : "Not Read";

    contentDiv.appendChild(bookTitle);
    contentDiv.appendChild(bookAuthor);
    contentDiv.appendChild(bookPages);
    contentDiv.appendChild(readBtn);

    bookDiv.appendChild(contentDiv);

    return bookDiv;


}

displayBooks();



// Popup Script
const popup = document.querySelector('.popup');
const createBookBtn = document.querySelector('.create-btn');
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
