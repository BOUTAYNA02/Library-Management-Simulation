function LibraryBooks() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            return response.json()
})
        .then(data => {
            books = [];
            bookstoborrow = [];
            for (let i = 0; i < data.length; i++) {
                books[books.length] = { title: data[i].title };
                bookstoborrow[bookstoborrow.length] = false; // Book is available initially
            }
        })
        .catch(error =>
            alert('The Errors  fetching the books library:'+ error.name));
}

function viewtheBooks() {
    let available_Books = [];
    for (let i = 0; i < books.length; i++) {
        if (!bookstoborrow[i]) {
            available_Books[available_Books.length] = books[i];
        }
    }
    console.log("Available Books:", available_Books);
}

function borrowBook(book) {
    if (!bookstoborrow[book]) {
        bookstoborrow[book] = true;
        console.log(`Borrowed: ${books[book].title}`);

    }
}

function returnBook(book) {
    if (bookstoborrow[book]) {
        bookstoborrow[book] = false;
        console.log(`Returned: ${books[book].title}`);
    } else {
        console.log("Book isn't borrowed.");
    }
}

function Library() {
    LibraryBooks();
    setTimeout(() => {
        viewtheBooks();
        borrowBook(0);
        viewtheBooks();
        returnBook(0);
        viewtheBooks();
    }, 1000); 
}

Library();
