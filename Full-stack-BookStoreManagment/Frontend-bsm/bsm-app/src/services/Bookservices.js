
import axios from 'axios';
const REST_BASE_URL='http://localhost:8081/api/books';

export const listBooks=()=>{
    return axios.get(REST_BASE_URL);
}

export const createBook=(book)=>{
    return axios.post(REST_BASE_URL,book);
}

export const getBookById=(id)=>{
    return axios.get(REST_BASE_URL+'/'+id);
}

export const updateBook=(id,book)=>{
    return axios.put(REST_BASE_URL+'/'+id,book);
}

export const deleteBook=(id)=>{
    return axios.delete(REST_BASE_URL+'/'+id);
}