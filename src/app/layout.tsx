import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";

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
    // THE FIX IS HERE: We must pass primaryFont.variable into the HTML class
    <html lang="en" className={`${primaryFont.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}