import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    // <header> acts as our sticky container. The 'z-50' keeps it on top of all other content.
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      
      {/* max-w-7xl keeps the content centered and stops it from stretching too wide on massive monitors */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* 1. Logo Section */}
        <Link href="/" className="text-2xl font-black tracking-tight text-white">
          PIXEL<span className="text-[#fe0000]">CRAFT</span>
        </Link>

        {/* 2. Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#home" className="hover:text-[#fe0000] transition-colors font-bold uppercase tracking-wide text-white">Home</Link>
          <Link href="#services" className="hover:text-[#fe0000] transition-colors font-bold uppercase tracking-wide text-white">Services</Link>
          <Link href="#portfolio" className="hover:text-[#fe0000] transition-colors font-bold uppercase tracking-wide text-white">Portfolio</Link>
          <Link href="#about" className="hover:text-[#fe0000] transition-colors font-bold uppercase tracking-wide text-white">About</Link>
          <Link href="#contact" className="hover:text-[#fe0000] transition-colors font-bold uppercase tracking-wide text-white">Contact</Link>
        </nav>

        {/* 3. CTA Button (Desktop Only) */}
        <div className="hidden md:block">
          <button className="inline-flex items-center justify-center bg-[#fe0000] hover:bg-[#d80000] text-white font-bold px-6 py-2 rounded-full transition-all text-sm tracking-wide">
            LET&apos;S TALK
          </button>
        </div>

        {/* 4. Mobile Menu Icon */}
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
        
      </div>
    </header>
  );
}