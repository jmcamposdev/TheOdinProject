function Book(title, author, pageNumber, isRead) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.isRead = isRead;

    this.info = function() {
        return `${this.title} by ${this.author}, ${pageNumber} pages, ${this.isRead ? "is read" : "not read yet"}`;
    }
};

const book1 = new Book("Title", "Author", 122, true);
console.log(book1.info());