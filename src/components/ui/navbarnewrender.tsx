'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-4 shadow fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link href="/" className="flex items-center py-1 px-2">
                <Image
                  src="/images/company-logo.png"
                  alt="Logo"
                  className="h-8 w-24 sm:h-10 sm:w-30 md:h-12 md:w-36 mr-2"
                  height={120}
                  width={360}
                />

              </Link>
            </div>

            {/* Displayed on larger screens */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/destinations" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Destinations
              </Link>
              <Link href="/#about-us" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About Us
              </Link>
              <Link href="/#contact-us" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact
              </Link>
            </div>
          </div>

          {/* Hamburger menu */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'} md:hidden`}>
            <Link href="/destinations" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white">Destinations
            </Link>
            <Link href="/#about-us" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white">About Us
            </Link>
            <Link href="/#contact-us" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white">Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;