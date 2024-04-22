
import './App.css';
import Footer from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { HomePage } from './Pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Authors } from './Pages/Authors/Authors.jsx';
import { About } from './Pages/About/About.jsx';
import { Contact } from './Pages/Contact/Contact.jsx';
import { Book } from './Pages/Book/Book.jsx';
import { Cart } from './Pages/Cart/Cart.jsx';
import { Register } from './Pages/Forms/Register.jsx';
import { SignIn } from './Pages/Forms/SignIn.jsx';
import BookStoreContext from './Context/bookStorContext.js';
import { useContext } from 'react';






function App() {
const{bookSearch,setBookSearch}=useContext(BookStoreContext);

  
  return (
    
    <div className="App">

      <BrowserRouter>
        <Header  />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/authors' element={<Authors />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/book/:id' element={<Book />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
