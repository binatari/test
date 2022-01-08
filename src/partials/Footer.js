import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='pt-20'>
      <div className='h-48 md:h-80'>
      <img src={require('../images/Video.jpg').default} alt="" className='w-full h-full z-10 object-cover object-center' />
      </div>
      <div className="mx-auto px-4 sm:px-6 bg-footer">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 ">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-6 lg:flex lg:items-center lg:justify-center">
            <div className="mb-2">
              {/* Logo */}
              <img src={require('../images/odigo-Logo.svg').default} alt="" className='w-40 z-10 object-cover object-center' />
            </div>
           
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a className="text-white hover:text-blue-700 transition duration-150 ease-in-out">About</a>
              </li>
              <li className="mb-2">
                <a className="text-white hover:text-blue-700 transition duration-150 ease-in-out">Team</a>
              </li>
              <li className="mb-2">
                <a className="text-white hover:text-blue-700 transition duration-150 ease-in-out">Careers</a>
              </li>
              <li className="mb-2">
                <a className="text-white hover:text-blue-700 transition duration-150 ease-in-out">Privacy Policy</a>
              </li>                    
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-medium mb-2">Locations</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a className="text-white hover:text-blue-700 transition duration-150 ease-in-out">Tokyo</a>
              </li>
              <li className="mb-2">
                <a className="text-white hover:text-blue-700 transition duration-150 ease-in-out">Kyoto</a>
              </li>
              <li className="mb-2">
                <a className="text-white hover:text-blue-700 transition duration-150 ease-in-out">Osaka</a>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-white hover:text-blue-700 transition duration-150 ease-in-out">Hokkaido</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-medium mb-2">Social Media</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-white hover:text-blue-700 transition duration-150 ease-in-out">Facebook</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-white hover:text-blue-700 transition duration-150 ease-in-out">Twitter</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-white hover:text-blue-700 transition duration-150 ease-in-out">Instagram</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-white hover:text-blue-700 transition duration-150 ease-in-out">Youtube</Link>
              </li>
            </ul>
          </div>      

        </div>

      </div>
    </footer>
  );
}

export default Footer;
