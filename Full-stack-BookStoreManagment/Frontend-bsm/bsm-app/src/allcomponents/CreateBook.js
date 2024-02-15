import React, { useState } from 'react'
import {useNavigate,  } from 'react-router-dom';
import { createBook } from '../services/Bookservices';
function CreateBook() {

  
    const[name,setName]=useState();
    const[edition,setEdition]=useState();
    const[price,setPrice]=useState();

    const nav=useNavigate();

    const saveBook=(e)=>{
         e.preventDefault();
        
         const book={name,edition,price};
         console.log(book);

         createBook(book)
         .then((response) => {
            console.log(response.data);
            nav('/books')
            
         }).catch(error=>{
            console.log(error);
         });
    }
    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {/* {
                           pageTitle()
                       } */}
                       <h3 className='text-center'>Add Book</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Book Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Book name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label">Book Edition:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Book Edition"
                                        name = "edition"
                                        className = "form-control"
                                        value = {edition}
                                        onChange = {(e) => setEdition(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Book Fees :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Book Fees"
                                        name = "price"
                                        className = "form-control"
                                        value = {price}
                                        onChange = {(e) => setPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveBook(e)} >save Book </button>
                                {/* <Link to="/employees" className="btn btn-danger"> Cancel </Link> */}
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}
    

export default CreateBook
