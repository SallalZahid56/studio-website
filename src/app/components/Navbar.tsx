"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tight text-white z-50">
          PIXEL<span className="text-brand">CRAFT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand transition-colors font-bold uppercase tracking-wide text-white">
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="bg-brand hover:bg-brand-dark text-white font-bold px-6 py-2 rounded-full transition-all text-sm tracking-wide">
            LET&apos;S TALK
          </button>
        </div>

        {/* Mobile/Tablet Hamburger Icon */}
        <button className="md:hidden text-white z-50" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile/Tablet Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 md:hidden">
          {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black uppercase text-white hover:text-brand transition-colors"
            >
              {item}
            </Link>
          ))}
          <button className="bg-brand text-white font-bold px-10 py-4 rounded-full text-lg mt-8">
            LET&apos;S TALK
          </button>
        </div>
      )}
    </header>
  );
}