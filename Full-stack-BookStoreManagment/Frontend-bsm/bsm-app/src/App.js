import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ListAllBooks from './allcomponents/ListAllBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadComp from './allcomponents/HeadComp';
import FootComp from './allcomponents/FootComp';
import CreateBook from './allcomponents/CreateBook';
import UpdateBook from './allcomponents/UpdateBookData';



function App() {
  return (
    <div >
  <BrowserRouter>
    <HeadComp/>
     <Routes>
        <Route path='/' element={<ListAllBooks/>}></Route>
        <Route path='/books' element={<ListAllBooks/>}></Route>
        <Route path='/add-book' element={<CreateBook/>}></Route>
        <Route path='/edit-book/:id' element={<UpdateBook/>}></Route>
        
     </Routes>
     <FootComp/>
  </BrowserRouter>

    </div>
      
  );
}

export default App;
