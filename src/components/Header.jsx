import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center"> {/* Change 'a' to 'Link' */}
            <img src="https://www.jawsindia.com/images/logo.png" alt="Jaws Logo" className="h-12" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="px-2 rounded-sm font-medium text-black hover:text-[#2D2CB8] transition-colors duration-300">Home</Link> {/* Change 'a' to 'Link' */}
            
            <Link to="/solutions" className="px-2 rounded-sm font-medium text-black hover:text-[#2D2CB8] transition-colors duration-300">Solutions</Link> {/* Change 'a' to 'Link' */}
            <Link to="/products" className="px-2 rounded-sm font-medium text-black hover:text-[#2D2CB8] transition-colors duration-300">Products</Link> {/* Change 'a' to 'Link' */}

            <Link to="/contact-us" className="border px-4 py-2 border-[#1842B6] hover:scale-105 rounded-md text-white bg-[#1842B6]  font-medium transition-all duration-300">Get in Touch</Link> {/* Change 'a' to 'Link' */}
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-black focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden  shadow-lg transition-all py-4 rounded-lg">
            <Link to="/" className="block px-4 py-2 text-black hover:bg-gray-200 transition duration-300">Home</Link> {/* Change 'a' to 'Link' */}
            <Link to="/solutions" className="block px-4 py-2 text-black hover:bg-gray-200 transition duration-300">Solutions</Link> {/* Change 'a' to 'Link' */}
    
            <Link to="/products" className="block px-4 py-2 text-white hover:bg-gray-200 transition duration-300">Products</Link> {/* Change 'a' to 'Link' */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
