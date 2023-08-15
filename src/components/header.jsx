import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const logo = require('../assets/me.JPG');
const {FaBars, FaTimes} = require('react-icons/fa');

export const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [linkActive, setLinkActive] = useState(false);

  const navToggle = () => {
    setToggleMenu(!toggleMenu);
  }


  const handleLink = () => {
    setLinkActive(true);
    setToggleMenu(false);
    
  }

  useEffect(() => {
    if (linkActive !== false) {
      const timeout =  setTimeout(() => {
        setLinkActive(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [linkActive]);

  return (
    <header className="bg-indigo-950 bg-opacity-90 text-cyan-100 py-4 shadow-2xl rounded-md">
      <div className="container mx-auto md:flex items-center justify-between">
        <div className='mx-5 md:mx-0 flex items-center justify-between'>
        <div className='flex items-center gap-1 md:gap-3'>
        <img src={logo} alt='logo' className='w-12 h-12 md:w-18 md:h-18 rounded-lg' />
            <Link to="/"><h1 className="text-xl md:text-4xl pt-4 md:pt-2 font-sans font-bold md:font-extrabold"><b>Em<span className='text-sky-600'>Clickz</span></b></h1></Link>
            
        </div>
        
        <div className='md:hidden'>
          {
            toggleMenu ? (
              <FaTimes className='text-xl cursor-pointer transition-transform duration-300 transform hover:scale-100' onClick={navToggle} />
            ) : (
              <FaBars className='text-2xl cursor-pointer transition-transform duration-300 transform hover:scale-100' onClick={navToggle} />
            )
          }
        </div>
        </div>
        
        <nav className={`${toggleMenu ? 'block mt-4 h-60 absolute left-2/4 bg-[url("./assets/contact.jpg")] bg-cover p-6 shadow-xl': 'hidden'} md:flex mt-1 md:mt-0`}>
          <ul className="list-none md:flex space-x-4 font-bold font-serif text-2xl md:text-xl">
            <li className={`${ linkActive ? ' underline text-cyan-300' : ''} hover:bg-white rounded-sm hover:text-indigo-950 hover:font-extrabold focus:bg-white`}>
              <Link to="/" onClick={() => handleLink()}>Home</Link>
            </li>
            <li className={`${ linkActive ? 'underline  text-cyan-300' : ''} hover:bg-white rounded-sm hover:text-indigo-950 hover:font-extrabold focus:bg-white`}>
              <Link to="/features" onClick={() => handleLink()}>Features</Link>
            </li>
            <li className={`${ linkActive ? ' underline text-cyan-300' : ''} hover:bg-white rounded-sm hover:text-indigo-950 hover:font-extrabold focus:bg-white`}>
              <Link to="/testimonial" onClick={() => handleLink()}>Testimonials</Link>
            </li>
            <li className={`${ linkActive ? ' underline text-cyan-300' : ''} hover:bg-white rounded-sm hover:text-indigo-950 hover:font-extrabold focus:bg-white`}>
              <Link to="/about" onClick={() => handleLink()}>About Us</Link>
            </li>
            <li className={`${ linkActive ? ' underline text-cyan-300' : ''} hover:bg-white rounded-sm hover:text-indigo-950 hover:font-extrabold focus:bg-white`}>
              <Link to="/contact" onClick={() => handleLink()}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};