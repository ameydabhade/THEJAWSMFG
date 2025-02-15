import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav className="fixed top-0 h-20 w-full bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Jaws Logo" className="h-16 mt-2" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="px-2 rounded-sm font-medium text-gray-700 hover:text-[#2D2CB8] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/solutions"
              className="px-2 rounded-sm font-medium text-gray-700 hover:text-[#2D2CB8] transition-colors duration-300"
            >
              Solutions
            </Link>
            <Link
              to="/products"
              className="px-2 rounded-sm font-medium text-gray-700 hover:text-[#2D2CB8] transition-colors duration-300"
            >
              Products
            </Link>
            <Link
              to="/contact-us"
              className="border px-4 py-2 border-[#1842B6] hover:scale-105 rounded-md text-white bg-[#1842B6] font-medium transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg transition-all py-4 rounded-lg">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/solutions"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              to="/products"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/contact-us"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;