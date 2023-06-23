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
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        book.isRead ? bookDiv.classList.add('read') : bookDiv.classList.add('not-read');
        bookDiv.setAttribute('data-index', index);
        bookDiv.innerHTML = `
        <div class="content">
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author}</div>
            <div class="book-pages">${book.pageNumber} pages</div>
            <button class="read-button">Not Read</button>
        </div>
        `;
        bookContainer.appendChild(bookDiv);
    });
}

displayBooks();



// Popup Script
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
