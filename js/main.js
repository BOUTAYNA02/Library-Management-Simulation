fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        return response.json();
    })
    .then(data => {
        let books = [];
        let bookstoborrow = [];

        for (let i = 0; i < data.length; i++) {
            books[books.length] = { title: data[i].title };
            bookstoborrow[bookstoborrow.length] = false; // Book is available initially
        }

        let available_Books = [];
        for (let i = 0; i < books.length; i++) {
            if (!bookstoborrow[i]) {
                available_Books[available_Books.length] = books[i];
            }
        }
        console.log("Available Books:", available_Books);

        let book = 0;
        if (!bookstoborrow[book]) {
            bookstoborrow[book] = true;
            console.log(`Borrowed: ${books[book].title}`);
        }

        available_Books = [];
        for (let i = 0; i < books.length; i++) {
            if (!bookstoborrow[i]) {
                available_Books[available_Books.length] = books[i];
            }
        }
        console.log("Available Books After Borrowing:", available_Books);

        if (bookstoborrow[book]) {
            bookstoborrow[book] = false;
            console.log(`Returned: ${books[book].title}`);
        } else {
            console.log("Book isn't borrowed.");
        }

        available_Books = [];
        for (let i = 0; i < books.length; i++) {
            if (!bookstoborrow[i]) {
                available_Books[available_Books.length] = books[i];
            }
        }
        console.log("Available Books After Returning:", available_Books);
    })
    .catch(error => {
        alert('The Errors fetching the books library:' + error.name);
    });
