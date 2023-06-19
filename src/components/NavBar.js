import React, {useState, useRef, useEffect} from 'react';
import './NavBar.css';
import Hamburger from 'hamburger-react'
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [showLinks, setShowLinks] = useState(false);
  
  return (
    <>
    <nav className='main-nav'>
    <div className='logo-container'>
      <h3 className='logo'>BhookLagi</h3>
    </div>

      <ul className={showLinks? 'menu-link-mobile':'menu-link'}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/gallary'>Gallery</Link></li>
      </ul>

    <div className='user-cart-container'>
      <ul className='user-cart'>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/cart'><BsCart2 size={30} /></Link></li>
      </ul>  

      <div className='hamburger'>
        <Hamburger color='white' onToggle={()=>setShowLinks(!showLinks) }/>
      </div>

    </div>
    </nav>
    </>
  );
};

export default NavBar;
