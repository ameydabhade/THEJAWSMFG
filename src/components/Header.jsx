import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="/" className="flex items-center">
            <img src="https://www.jawsindia.com/images/logo.png" alt="Jaws Logo" className="h-12" />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="px-2 rounded-sm font-medium text-black hover:text-[#2D2CB8] transition-colors duration-300">Home</a>
            
            <a href="/solutions" className="px-2 rounded-sm font-medium text-black hover:text-[#2D2CB8] transition-colors duration-300">Solutions</a>
            <a href="/products" className="px-2 rounded-sm font-medium text-black hover:text-[#2D2CB8] transition-colors duration-300">Products</a>

            <a href="/contact-us" className="border px-4 py-2 border-[#1842B6] bg-[#1842B6] hover:bg-[#153A99] rounded-md text-white font-medium transition-all duration-300">Get in Touch</a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-black focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md py-4">
            <a href="/" className="block px-4 py-2 text-black hover:bg-gray-200 transition duration-300">Home</a>
            <a href="/services" className="block px-4 py-2 text-black hover:bg-gray-200 transition duration-300">Services</a>
            <a href="/solutions" className="block px-4 py-2 text-black hover:bg-gray-200 transition duration-300">Solutions</a>
            <a href="/clients" className="block px-4 py-2 text-black hover:bg-gray-200 transition duration-300">Clients</a>
            <a href="/contact-us" className="block px-4 py-2 text-black hover:bg-gray-200 transition duration-300">Contact Us</a>
            <a href="/contact-us" className="block mx-4 my-2 px-4 py-2 border border-[#1842B6] bg-[#1842B6] text-white text-center rounded-md hover:bg-[#153A99] transition-all duration-300">Get in Touch</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
