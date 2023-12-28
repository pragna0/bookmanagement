let books = [];

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    if (title && author) {
        const book = { title, author };
        books.push(book);
        displayBooks();
        clearForm();
    } else {
        alert('Please enter both title and author.');
    }
}

function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `<strong>${book.title}</strong> by ${book.author} <button onclick="deleteBook(${index})">Delete</button>`;
        bookList.appendChild(bookItem);
    });
}

function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
}
