import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-[#f7f4ed] border-b border-stone-200">
      <div className="w-full flex items-center justify-between px-2 md:px-6 py-3">
        <div className="flex flex-col leading-tight flex-shrink-0">
          <span className="text-base md:text-lg font-serif font-light text-stone-800">Serena Blake, PsyD</span>
          <span className="text-xs md:text-sm font-light text-stone-700">Clinical Psychologist</span>
        </div>
        <div className="flex-1" />
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-stone-700 font-medium text-sm md:text-base ml-auto">
          <Link href="#about" className="transition-all duration-300 hover:underline underline-offset-8 hover:text-stone-900 focus:text-stone-900 focus:underline">About</Link>
          <Link href="#services" className="transition-all duration-300 hover:underline underline-offset-8 hover:text-stone-900 focus:text-stone-900 focus:underline">Services</Link>
          <Link href="#faq" className="transition-all duration-300 hover:underline underline-offset-8 hover:text-stone-900 focus:text-stone-900 focus:underline">FAQ</Link>
          <Link href="#contact" className="transition-all duration-300 hover:underline underline-offset-8 hover:text-stone-900 focus:text-stone-900 focus:underline">Contact</Link>
        </nav>
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-stone-400"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-stone-800 mb-1" />
          <span className="block w-6 h-0.5 bg-stone-800 mb-1" />
          <span className="block w-6 h-0.5 bg-stone-800" />
        </button>
        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full right-2 mt-2 w-44 bg-white border border-stone-200 rounded-lg shadow-lg flex flex-col z-50 md:hidden animate-fade-in">
            <Link href="#about" className="px-5 py-3 text-stone-800 hover:bg-stone-100 transition" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="#services" className="px-5 py-3 text-stone-800 hover:bg-stone-100 transition" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="#faq" className="px-5 py-3 text-stone-800 hover:bg-stone-100 transition" onClick={() => setMenuOpen(false)}>FAQ</Link>
            <Link href="#contact" className="px-5 py-3 text-stone-800 hover:bg-stone-100 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
} 