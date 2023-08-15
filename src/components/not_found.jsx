import { Link } from 'react-router-dom';

const logo = require('../assets/hero-image2.png');

export const NotFound = () => {
    return (
      <div className="container mx-auto py-16 text-center h-fit mb-3 bg-indigo-950 bg-opacity-50 rounded-lg">
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-5"><span className='text-red-400 font-mono'>404</span> Page Not Found</h2>
          <img src={logo} alt='logo' className='mx-auto'/>
          <p className="text-gray-900 md:text-2xl">
           Oops! The page you are looking for doesn't exist.<br/>
           goto <Link to='/' className='text-indigo-950 underline'>HomePage</Link>
          </p>
      </div>
    );
  };