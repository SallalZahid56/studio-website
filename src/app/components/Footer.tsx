"use client";

import React, { useState } from "react";
import { Zap, ArrowUp } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Subscribed email:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const superpowers = [
    { name: "Brand Identity", href: "#" },
    { name: "Web Design", href: "#portfolio" },
    { name: "Mobile Apps", href: "#" },
    { name: "Digital Marketing", href: "#" },
    { name: "Design Systems", href: "#" },
    { name: "Strategy", href: "#about" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy", href: "#" },
  ];

  // Inline SVG definitions for brand icons to guarantee flawless TS compilation
  const socialLinks = [
    {
      href: "#",
      icon: (
        <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    {
      href: "#",
      icon: (
        <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      )
    },
    {
      href: "#",
      icon: (
        <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
    {
      href: "#",
      icon: (
        <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
          <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
          <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
        </svg>
      )
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-800 w-full overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        
        {/* Top Grid Area */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & Newsletter Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="text-3xl font-black tracking-tight">
              PIXEL<span className="text-brand">CRAFT</span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              The digital agency that <span className="text-brand font-bold">refuses to blend in</span>. We create impossible experiences that make brands unforgettable.
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="inline-flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-brand transition-all duration-300 rounded-full group outline-none focus:ring-2 focus:ring-brand"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter Card */}
            <div className="bg-gray-900 p-6 rounded-2xl max-w-md">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-brand" />
                <h4 className="font-black text-lg">GET INSIDER SECRETS</h4>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">
                Weekly insights on dominating digital markets
              </p>
              
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-brand focus:outline-none text-sm transition-all"
                  required
                />
                <button
                  type="submit"
                  className="bg-brand hover:bg-brand-light text-white px-6 py-2 rounded-lg font-bold text-sm tracking-wide transition-all"
                >
                  JOIN
                </button>
              </form>
              
              {subscribed && (
                <p className="text-xs text-green-400 font-bold mt-2 animate-fade-in">
                  Welcome to the revolution! Check your inbox soon.
                </p>
              )}
            </div>
          </div>

          {/* Superpowers Column */}
          <div className="space-y-6">
            <h4 className="font-black text-lg uppercase tracking-wide">SUPERPOWERS</h4>
            <nav className="flex flex-col space-y-3">
              {superpowers.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-gray-300 hover:text-brand transition-colors font-medium text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="font-black text-lg uppercase tracking-wide">COMPANY</h4>
            <nav className="flex flex-col space-y-3">
              {companyLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-gray-300 hover:text-brand transition-colors font-medium text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="space-y-3 pt-6 border-t border-gray-800">
              <div>
                <div className="text-white font-bold text-sm">Email</div>
                <div className="text-brand text-sm">hello@pixelcraft.studio</div>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Phone</div>
                <div className="text-gray-300 text-sm">+1 (555) 123-4567</div>
              </div>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="h-px w-full my-12 bg-gray-800"></div>

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} <span className="text-white font-bold">PixelCraft Studio</span>. All rights reserved.{" "}
            <span className="text-brand font-bold block sm:inline">Dominating digital since 2019.</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center bg-brand hover:bg-brand-light text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all group"
          >
            BACK TO TOP
            <ArrowUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}