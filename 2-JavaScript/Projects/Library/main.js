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
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, true));
myLibrary.push(new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 423, true));
myLibrary.push(new Book('The Two Towers', 'J.R.R. Tolkien', 352, true));
myLibrary.push(new Book('The Return of the King', 'J.R.R. Tolkien', 416, true));


function addBookToLibrary(book) {
    myLibrary.push(book);
}




// Popup Script
const popup = document.querySelector('.popup');
const createBookBtn = document.querySelector('.create-book-btn');

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
