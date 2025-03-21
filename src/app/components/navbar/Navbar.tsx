'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png" // Replace with the correct path to your logo
            alt="Bakers Inn Logo"
            width={150} // Adjust the width as needed
            height={50} // Adjust the height as needed
            className="cursor-pointer"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/about" className="text-[#2d1a75] font-bold hover:text-blue-500">About Us</Link>
          <Link href="/products" className="text-[#2d1a75] font-bold hover:text-blue-500">Products</Link>
          <Link href="/recipe" className="text-[#2d1a75] font-bold hover:text-blue-500">Recipe</Link>
          <Link href="/kids-corner" className="text-[#2d1a75] font-bold hover:text-blue-500">Kids Corner</Link>
          <Link
            href="/contact"
            className="bg-[#b2904c] text-white font-bold px-9 py-3 rounded hover:bg-[#9a7c40] transition"
          >
            Contact Us
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 text-center">
          <Link href="/about" className="block text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/products" className="block text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/recipe" className="block text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Recipe</Link>
          <Link href="/games" className="block text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Kids Corner</Link>
          <Link
            href="/contact"
            className="bg-[#b2904c] text-white px-4 py-2 rounded-full hover:bg-[#9a7c40] transition block"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}