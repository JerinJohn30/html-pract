import { useState } from "react";

export function BookAdd(){
    let [newBook,setNewBook]=useState({
            bookId: 0,
            bookTitle: "",
            bookAuthor: "",
            bookPrice: 0,
            bookImageUrl:""
    })
    function handleAddFormSubmit(event){
        event.preventDefault();
        console.log(newBook);

    }
    function handleBTitle(event){
        setNewBook({
            ...newBook,
            bookTitle: event.target.value
        })
    }
    function handleBAuthor(event){
        setNewBook({
            ...newBook,
            bookAuthor: event.target.value
        })
    }
    function handleBPrice(event){
        setNewBook({
            ...newBook,
            bookPrice: event.target.value
        })
    }
    function handleBImg(event){
        setNewBook({
            ...newBook,
            bookImageUrl: event.target.value
        })
    }
    return (
        <>
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <form onSubmit={((event)=>handleAddFormSubmit(event))}>
                    <div className="card">
                        <div className="card-header bg-success text-light">
                            <h4>Add New Book</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-control-group">
                                <label htmlFor="bTitle">Book Title:</label>
                                <input 
                                type="text" 
                                    id="bTitle" 
                                    className="form-control" 
                                    placeholder="Enter Title"
                                    value={newBook.bookTitle}
                                    onChange={(event)=>handleBTitle(event)} />
                            </div>
                            <div>
                                <label htmlFor="bAuthor">Book Author:</label>
                                <input 
                                    type="text" 
                                    id="bAuthor" 
                                    className="form-control" 
                                    placeholder="Enter Book Author"
                                    value={newBook.bookAuthor}
                                    onChange={(event)=>handleBAuthor(event)} />
                            </div>
                            <div>
                                <label htmlFor="bPrice">Book Price:</label>
                                <input 
                                    type="text" 
                                    id="bPrice" 
                                    className="form-control" 
                                    placeholder="Enter Book Price"
                                    value={newBook.bookPrice}
                                    onChange={(event)=>handleBPrice(event)} />
                            </div>
                            <div>
                                <label htmlFor="bImage">Book Image:</label>
                                <input 
                                    type="text" 
                                    id="bImage" 
                                    className="form-control" 
                                    placeholder="Enter Book Image"
                                    value={newBook.bookImageUrl}
                                    onChange={(event)=>handleBImg(event)} />
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                            <button type="reset" className="btn btn-outline-danger">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-3"></div>
        </div>
        </>
    )
}