
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/ListBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import SignUp from './pages/Signup';
import Login from './pages/login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Login />} />
         <Route path='/signup' element={<SignUp/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/books/create' element={<CreateBooks />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;