import React,{useEffect, useState} from 'react'
import {useNavigate,useParams  } from 'react-router-dom';
import { getBookById } from '../services/Bookservices';
import {updateBook} from '../services/Bookservices';
function UpdateBook() {

    
    const[name,setName]=useState('');
    const[edition,setEdition]=useState('');
    const[price,setPrice]=useState('');

    
    const {id}=useParams();

    useEffect(()=>{
        if(id){
            getBookById(id).then((res)=>{
                // console.log(res.data);
                const r=res.data;
                setName(r.name);
                setEdition(r.edition);
                setPrice(r.price);
            }).catch((error)=>{
                console.log(error);
            })
        }
    },[id])

    
    const nav=useNavigate();
    const editBook=(e)=>{
    e.preventDefault();
    
    const books={name,edition,price}
    console.log(books);

    updateBook(id,books).then((res)=>{
        console.log(res.data);
        nav('/books');
    })

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
                    <h3 className='text-center'>Update Book</h3>
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
                                 <label className = "form-label"> Book Price :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter Book Price"
                                     name = "price"
                                     className = "form-control"
                                     value = {price}
                                     onChange = {(e) => setPrice(e.target.value)}
                                 >
                                 </input>
                             </div>

                             <button className = "btn btn-success" onClick = {(e) => editBook(e)}>Update Book </button>
                             {/* <Link to="/employees" className="btn btn-danger"> Cancel </Link> */}
                         </form>
                        
                     </div>
                 </div>
             </div>

        </div>

     </div>
 )
}
 

export default UpdateBook;
