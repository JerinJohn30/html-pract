import { useState } from "react";
import { getAllBooks,deleteBooks } from "./book-data";

export function BookList() {
    let [allBooks,setAllBooks]=useState(getAllBooks());
    let mappedAllBooks=allBooks.map((eachBook)=>{
        return(
            <tr key={eachBook.bookId}>
                <td>{eachBook.bookId}</td>
                <td><img src={eachBook.bookImageUrl} width="50" height="50" /></td>
                <td>{eachBook.bookTitle}</td>
                <td>{eachBook.bookAuthor}</td>
                <td>₹{eachBook.bookPrice}/-</td>
                <td>
                    <button type="button" className="btn btn-warning text-white">
                        <span className="material-symbols-outlined">
                            visibility
                        </span>
                    </button>
                </td>
                <td>
                    <button type="button" className="btn btn-primary">
                        <span className="material-symbols-outlined">
                            edit
                        </span>
                    </button>
                </td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={()=>deleteBook(eachBook.bookId)}>
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </td>
            </tr>
        );
    });

    let isBooksEmpty=allBooks.length==0;

    function deleteBook(bookId){
        console.log("Book deleted with id:"+bookId);
        //setAllBooks(allBooks.filter((eachBook)=>eachBook.bookId!=bookId))
        deleteBooks(bookId);
        setAllBooks(getAllBooks())
        if(allBooks.length==0){
            emptyBookList();
        }
    }
    function emptyBookList(){
        console.log("Empty List")
    }
    return (  
        <>
        <div className="container m-3">
            <button className="btn btn-success">Add New Book</button>
            <h2>LIST OF BOOKS</h2>
            {isBooksEmpty?(
            <div className="alert alert-danger">
                No books found!
            </div>
            )
            :
            (
            <>
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{mappedAllBooks}</tbody>
            </table>
            </>
            )
        }
        </div>
        </>
    );
}

