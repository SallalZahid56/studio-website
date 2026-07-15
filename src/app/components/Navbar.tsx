"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["Home", "Services", "Portfolio", "About", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-black lg:bg-background/80 lg:backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tight text-white z-50">
          PIXEL<span className="text-brand">CRAFT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-brand transition-colors font-bold uppercase tracking-wide text-white"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button className="bg-brand hover:bg-brand-dark text-white font-bold px-6 py-2 rounded-full transition-all text-sm tracking-wide">
            LET&apos;S TALK
          </button>
        </div>

        {/* Mobile/Tablet Hamburger Icon */}
        <button
          className="lg:hidden text-white z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile/Tablet Fullscreen Menu */}
      {isOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 z-40 bg-black/95 px-6 lg:hidden"
          style={{ top: "5rem" }}
        >
          <div className="mx-auto flex h-full w-full max-w-sm flex-col items-center justify-evenly py-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg sm:text-2xl font-black uppercase text-white hover:text-brand transition-colors"
              >
                {item}
              </Link>
            ))}
            <button
              className="bg-brand text-white font-bold px-8 py-3 rounded-full text-base"
              onClick={() => setIsOpen(false)}
            >
              LET&apos;S TALK
            </button>
          </div>
        </div>
      )}
    </header>
  );
}