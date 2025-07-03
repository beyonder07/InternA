import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#f7f4ed] border-b border-stone-200">
      <div className="w-full flex items-center justify-between px-2 md:px-6 py-3">
        <div className="flex flex-col leading-tight flex-shrink-0">
          <span className="text-base md:text-lg font-serif font-light text-stone-800">Serena Blake, PsyD</span>
          <span className="text-xs md:text-sm font-light text-stone-700">Clinical Psychologist</span>
        </div>
        <div className="flex-1" />
        <nav className="hidden md:flex gap-10 text-stone-700 font-medium text-sm md:text-base ml-auto">
          <Link href="#about" className="transition-all duration-300 hover:underline underline-offset-8 hover:text-stone-900 focus:text-stone-900 focus:underline">About</Link>
          <Link href="#services" className="transition-all duration-300 hover:underline underline-offset-8 hover:text-stone-900 focus:text-stone-900 focus:underline">Services</Link>
          <Link href="#faq" className="transition-all duration-300 hover:underline underline-offset-8 hover:text-stone-900 focus:text-stone-900 focus:underline">FAQ</Link>
          <Link href="#contact" className="transition-all duration-300 hover:underline underline-offset-8 hover:text-stone-900 focus:text-stone-900 focus:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
} 