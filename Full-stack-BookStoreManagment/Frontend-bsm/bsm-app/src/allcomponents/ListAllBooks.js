
import React, { useEffect, useState } from 'react'
import { deleteBook, listBooks } from '../services/Bookservices';
import {useNavigate, } from 'react-router-dom';

function ListAllBooks() {

    const[book,setBook]=useState([
        {
            "id":111,
            "name":"jerry",
            "edition":"2nd",
            "price":100
        },
        {   
            "id":222,
            "name":"Tom",
            "edition":"1st",
            "price":200
        }
    ])

    useEffect(()=>{
        getAllBooks();
    },[]);

    const getAllBooks=()=>{
        listBooks()
        .then((response)=>{
            console.log(response.data);
            setBook(response.data);
        }).catch(error=>{
            console.log(error)
        });
    }
    const nav=useNavigate();
    const addNewbook=()=>{
        nav('/add-book');
    }

    const updateBook=(id)=>{
        nav(`/edit-book/${id}`)
    }

    const RemoveBook=(id)=>{
       console.log(id);
       deleteBook(id).then((res)=>{
            getAllBooks();
       }).catch((error)=>{
        console.log(error);
       })
    }

    return (
        <div className='container'>
            <h3 className='text-center mt-4'>List Of All Books</h3>
            <button className='btn btn-primary mb-4 btn-lg' onClick={addNewbook}>Add Book</button>
            <table className='table table-striped table-bordered table-gray'>
                <thead>
                    <tr className='action'>
                        <th>Book Id</th>
                        <th>Book Name</th>
                        <th>Book Edition</th>
                        <th>Book Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    book.map(books=>(
                        <tr key={books.id} className='action'>
                            <td >{books.id}</td>
                            <td>{books.name}</td>
                            <td>{books.edition}</td>
                            <td>{books.price}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>updateBook(books.id)}>update</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className='btn btn-danger' onClick={()=>RemoveBook(books.id)}>delete</button>
                            </td> 
                        </tr>
                    ))
                  }
                </tbody>
            </table>
        </div>
    )
}

export default ListAllBooks
