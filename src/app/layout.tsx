import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

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
    <html lang="en" className={`${primaryFont.variable} antialiased scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-background pt-20 text-foreground">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}