import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
            <img src={require(top?'../images/odigo-Logo-white.svg':'../images/odigo-Logo-blue.svg').default} alt="" className='object-cover object-center' />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex-grow justify-end flex-wrap items-center hidden md:flex">
              <li>
                <Link to="#" className={`${top?'text-white':'text-blue-700'} font-medium hover:text-gray-900 px-8 py-3 flex items-center transition duration-150 ease-in-out`}>Articles</Link>
              </li>
              <li>
                <Link to="#" className={`${top?'text-white':'text-blue-700'} font-medium hover:text-gray-900 px-8 py-3 flex items-center transition duration-150 ease-in-out`}>Locations</Link>
              </li> 
              <li>
                <Link to="#" className={`${top?'text-white':'text-blue-700'} font-medium hover:text-gray-900 px-8 py-3 flex items-center transition duration-150 ease-in-out`}>Videos</Link>
              </li>
              <li>
                <Link to="#" className={`${top?'text-white':'text-blue-700'} font-medium hover:text-gray-900 px-8 py-3 flex items-center transition duration-150 ease-in-out`}>Sign in</Link>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
