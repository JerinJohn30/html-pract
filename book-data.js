 let allBooks=[
            {
              bookId: 201,
              bookTitle: "Harry Potter and the Prisoner of Azkaben",
              bookAuthor: "JK Rowling",
              bookPrice: 300,
              bookImageUrl:
                "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              bookId: 202,
              bookTitle: "Attitude Everything",
              bookAuthor: "Jeff Killer",
              bookPrice: 350,
              bookImageUrl:
                "https://images.unsplash.com/photo-1734171740737-cabeb3417a92?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              bookId: 203,
              bookTitle: "The Thursday Murder Club",
              bookAuthor: "Richard Osman",
              bookPrice: 400,
              bookImageUrl:
                "https://images.unsplash.com/photo-1734082134123-2e0eec840768?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }
];

export function getAllBooks(){
    return allBooks;
}

export function getBookById(bookId){
    return allBooks.find((book)=>book.bookId==bookId);
}

export function addBooks(newBook){
    allBooks.push(newBook);
}

export function updateBooks(updatedBook){
    let index=allBooks.findIndex((book)=>book.bookId==updatedBook.bookId);
        allBooks[index]=updatedBook;
}

export function deleteBooks(bookId){
    let index=allBooks.findIndex((book)=>book.bookId==bookId);
    allBooks=allBooks.filter((book)=>book.bookId!=bookId);
}