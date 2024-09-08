"use client"; // Add this line to mark the component as a Client Component

import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="container mx-auto max-w-screen-md">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
          {/* Logo */}
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>

          {/* Navigation for larger screens */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#" className="text-sm text-white/70 hover:text-white transition">Features</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition">Developers</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition">Pricing</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition">Change Log</a>
          </nav>

          {/* Call-to-action button and Menu icon */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button>Join Waitlist</Button>

            {/* Menu icon for smaller screens */}
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
              <MenuIcon />
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col mt-4 space-y-2">
            <a href="#" className="text-sm hover:text-white transition">Features</a>
            <a href="#" className="text-sm hover:text-white transition">Developers</a>
            <a href="#" className="text-sm hover:text-white transition">Pricing</a>
            <a href="#" className="text-sm hover:text-white transition">Change Log</a>
          </nav>
        )}
      </div>
    </header>
  );
};
