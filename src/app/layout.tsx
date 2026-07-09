import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const primaryFont = Inter({
  subsets: ["latin"],
  variable: "--font-primary", // This creates the CSS variable for Tailwind
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Digital Design Studio",
  description: "Portfolio and services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The className here applies your font variable and enables smooth scrolling for the # hash links
    <html lang="en" className={`${primaryFont.variable} antialiased scroll-smooth`}>
      
      {/* pt-20 adds 80px of padding to the top so your page content doesn't get stuck behind the fixed Navbar */}
      <body className="pt-20 min-h-screen flex flex-col bg-background text-foreground">
        
        {/* We place the Navbar here so it renders on every single page automatically */}
        <Navbar /> 
        <Hero />
        
        {/* The main tag holds the actual page content (like your Hero section) */}
        <main className="grow">
          {children}
        </main>
        
      </body>
    </html>
  );
}