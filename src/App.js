
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Components/Pages/Home';
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import Users from './Components/Pages/Users';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import PageNtFound from './Components/Pages/PageNtFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Components/Pages/Update';

function App() {
  return (
    <>
      
      <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/update' element={<Update></Update>}></Route>
        <Route path='*' element={<PageNtFound></PageNtFound>}></Route>




      </Routes>
      
      
      </BrowserRouter>
      <ToastContainer></ToastContainer>

      
      
    
    </>
  );
}

export default App;
