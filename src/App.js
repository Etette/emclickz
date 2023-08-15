import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
const {Header} = require('./components/header');
const {Home} = require('./components/home');
const {Feature} = require('./components/Feature');
const {Testimonial} = require('./components/testimonial');
const {About} = require('./components/about');
const {Contact} = require('./components/contact');
const {NotFound} = require('./components/not_found');
const {Footer} = require('./components/footer');

// const icons = require('react-icons/bi');
// console.log(icons)

const App = () => {
  const [isHeaderFixed, setIsHeaderfixed] = useState(false);

  const handleScroll =  () => {
    const scrollThreshold = 100;
    if (window.scrollY > scrollThreshold){
      setIsHeaderfixed(true);
    } else {
      setIsHeaderfixed(false);
    };
  };

  useEffect(() => {
    const asyncHandleScroll =  () => {
       handleScroll();
    };
    window.addEventListener('scroll', asyncHandleScroll);

    return () => {
      window.removeEventListener('scroll', asyncHandleScroll); // clean up event listener when component unmounts
    };
  }, []);

  const fixedHeader = isHeaderFixed ? 'fixed top-0 w-full' : '';
  return (
    
    <Router>
      <div className={`bg-gray-200 `}>
        <div className={`${fixedHeader}`}>
        <Header/>
        </div>
        <hr className='border-white h-1 mb-1'/>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/features" element={<Feature/>} />
          <Route path="/testimonial" element={<Testimonial/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* Error Route */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
        {/* <hr className='border-blue-200 h-1 mb-2'/> */}
        <hr className='border-white h-1 mb-1'/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
