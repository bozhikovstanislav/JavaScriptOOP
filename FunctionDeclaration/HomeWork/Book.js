var books=[];
    book={};
    function addBook(book){
        book.ID = books.length + 1;
        books.push(book);
        return book;
    }

addBook(book);
console.log(books);