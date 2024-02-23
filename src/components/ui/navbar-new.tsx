'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaUserCircle, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
export default function NavbarNew() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link href="/" className="flex items-center py-1 px-2">
                  <Image src="/images/company-logo.png" alt="Logo" className="h-12 w-36 mr-2" height = {120} width= {360} />
                
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/destinations" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Destinations</Link>
              <Link href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About Us</Link>
              <Link href="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</Link>
            </div>
          </div>
          {/* Secondary Navbar Items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <Link href="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"><FaUserCircle /></Link>
            <Link href="/languages" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"><FaGlobe /></Link>
            <Link href="/book" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Book Now</Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="">
          <li className="active"><Link href="/destinations" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Destinations</Link></li>
          <li><Link href="/tours" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Tours</Link></li>
          <li><Link href="/about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About Us</Link></li>
          <li><Link href="/contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
