"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex justify-center items-center py-5 bg-transparent relative z-50"> 
      {/* Added px-6 so it doesn't touch the screen edges on mobile */}
      <div className="max-w-[1192px] w-full px-6 md:px-8 lg:px-0 flex justify-between items-center">
        
        {/* Left Section: Logo & Links */}
        <div className="flex items-center gap-10">
          
          {/* Brand / Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
             <Image src="/footer-image/footer-logo.svg" alt="Footer Logo" width={32} height={32} />
            <span className="text-[#202430] text-[22px] font-bold tracking-wide">
              QuickHire
            </span>
          </div>

          {/* Nav Links (Hidden on small mobile, visible on tablet/desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-[#515B6F] text-[15px] font-medium hover:text-[#4640DE] transition-colors">
              Find Jobs
            </a>
            <a href="#" className="text-[#515B6F] text-[15px] font-medium hover:text-[#4640DE] transition-colors">
              Browse Companies
            </a>
          </div>
        </div>

        {/* Right Section: Auth Buttons & Mobile Menu */}
        <div className="flex items-center">
          
          {/* Desktop Auth Buttons (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-5 md:gap-6">
            <a href="#" className="text-[#4640DE] text-[15px] font-bold hover:text-[#3b36be] transition-colors">
              Login
            </a>
            
            {/* Vertical Divider */}
            <div className="hidden sm:block w-px h-[28px] bg-[#D6DDEB]"></div>
            
            <button className="bg-[#4640DE] hover:bg-[#3b36be] transition-colors text-white text-[15px] font-semibold py-2.5 px-6 rounded-none">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Menu (Visible only on mobile) */}
          <button 
            onClick={toggleMenu}
            className="md:hidden w-[46px] h-[46px] rounded-full border border-[#D6DDEB] flex items-center justify-center bg-transparent hover:bg-gray-50 transition-colors z-[60]"
          >
            {isOpen ? (
              <X className="text-[#25324B]" size={24} />
            ) : (
              /* Custom SVG replicating the exact staggered lines in your design */
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H16" stroke="#25324B" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M2 7H18" stroke="#25324B" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M2 12H10" stroke="#25324B" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[55] flex flex-col items-center justify-start pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center gap-8 w-full">
          <a onClick={() => setIsOpen(false)} href="#" className="text-[#25324B] text-xl font-semibold hover:text-[#4640DE] transition-colors">
            Find Jobs
          </a>
          <a onClick={() => setIsOpen(false)} href="#" className="text-[#25324B] text-xl font-semibold hover:text-[#4640DE] transition-colors">
            Browse Companies
          </a>
          
          <div className="w-full h-px bg-[#D6DDEB] my-2"></div>
          
          <a onClick={() => setIsOpen(false)} href="#" className="text-[#4640DE] text-xl font-bold hover:text-[#3b36be] transition-colors">
            Login
          </a>
          
          <button onClick={() => setIsOpen(false)} className="w-full bg-[#4640DE] hover:bg-[#3b36be] transition-colors text-white text-lg font-bold py-4 px-6 rounded-none shadow-lg">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
