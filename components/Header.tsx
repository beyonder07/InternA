import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f7f4ed] border-b border-stone-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex flex-col">
          <span className="text-2xl font-serif font-light text-stone-800">Serena Blake, PsyD</span>
          <span className="text-md font-light text-stone-700">Clinical Psychologist</span>
          <span className="text-sm text-stone-500">Psychological Services</span>
        </div>
        <nav className="hidden md:flex gap-8 text-stone-700 font-medium text-lg">
          <Link href="#about" className="hover:underline underline-offset-8 transition-all">About</Link>
          <Link href="#services" className="hover:underline underline-offset-8 transition-all">Services</Link>
          <Link href="#faq" className="hover:underline underline-offset-8 transition-all">FAQ</Link>
          <Link href="#contact" className="hover:underline underline-offset-8 transition-all">Contact</Link>
        </nav>
      </div>
    </header>
  );
} 