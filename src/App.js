import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Gallary from './components/pages/Gallary';
import Login from './components/login/Login';
import Cart from './components/cart/Cart';
import EmployeeLogin from './components/login/EmployeeLogin';
import Signup from './components/signup/Signup';

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
        <Route path="/employee-login" element={<EmployeeLogin />} /> 
        <Route path="/signup" element={<Signup />} /> 
       </Routes>
    </Router>
    </>
  );
}

export default App;
