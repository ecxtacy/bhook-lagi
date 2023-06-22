import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Gallary from './components/pages/Gallary';
import Login from './components/Login/Login';
import Cart from './components/cart/Cart';

function App() {
  return (
    <>
    <Router>
    <NavBar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/cart" element={<Cart />} /> 
       </Routes>
    </Router>
    </>
  );
}

export default App;
