import { useState } from "react";
import { deleteProperty, getAllProperties } from "./property-data";

export function PropertyList(){
    let [allProperties,setAllProperties] =useState(getAllProperties());
    let mappedAllProperties =allProperties.map((eachProperty) =>{
        return(
            <div className="card col-sm-12 col-md-6 col-lg-4 m-2" style={{width:'400px'}} key={eachProperty.propertyId}>
                <img 
                    className="card-img-top" 
                    src={eachProperty.propertyImageUrl} 
                    alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">{eachProperty.propertyName}</h4>
                                    <h5 className="card-title">ID:{eachProperty.propertyId}</h5>
                                    <p className="card-text">Location:{eachProperty.propertyLocation}</p>
                                    <p className="card-text">Cost: ₹{eachProperty.propertyPrice}/-</p>
                                    <button type="button" className="btn btn-warning text-white">
                                        <span className="material-symbols-outlined">
                                            visibility
                                        </span>
                                    </button>
                                    <button type="button" className="btn btn-primary mx-2">
                                        <span className="material-symbols-outlined">
                                            edit
                                        </span>
                                    </button>
                                    <button type="button" className="btn btn-danger" onClick={()=>removeProperty(eachProperty.propertyId)}>
                                        <span className="material-symbols-outlined">
                                            delete
                                        </span>
                                    </button>
                                </div>
            </div>
        )
    })
    let isPropertiesEmpty=allProperties.length==0;
    
        function removeProperty(propertyId){
            console.log("Property deleted with id:"+propertyId);
            //setAllBooks(allBooks.filter((eachBook)=>eachBook.bookId!=bookId))
            deleteProperty(propertyId);
            setAllProperties(getAllProperties())
            if(allProperties.length==0){
                emptyPropertyList();
            }
        }
        function emptyPropertyList(){
            console.log("Empty List")
        }
    return(
        <div className="container m-3">
            {isPropertiesEmpty?(
                <div className="alert alert-danger">Property List is empty!</div>
            ):
            (
            <>
                <div className="row">
                    {mappedAllProperties}
                </div>
            </>
        )}
        </div>
    )
}