import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f7f4ed] border-b border-stone-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-16 py-6">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif font-light text-stone-800">Serena Blake, PsyD</span>
          <span className="text-sm md:text-md font-light text-stone-700">Clinical Psychologist</span>
          <span className="text-xs md:text-sm text-stone-500">Psychological Services</span>
        </div>
        <nav className="hidden md:flex gap-8 text-stone-700 font-medium text-base md:text-lg">
          <Link href="#about" className="transition-all duration-300 hover:underline underline-offset-8 hover:text-stone-900 focus:text-stone-900 focus:underline">About</Link>
          <Link href="#services" className="transition-all duration-300 hover:underline underline-offset-8 hover:text-stone-900 focus:text-stone-900 focus:underline">Services</Link>
          <Link href="#faq" className="transition-all duration-300 hover:underline underline-offset-8 hover:text-stone-900 focus:text-stone-900 focus:underline">FAQ</Link>
          <Link href="#contact" className="transition-all duration-300 hover:underline underline-offset-8 hover:text-stone-900 focus:text-stone-900 focus:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
} 