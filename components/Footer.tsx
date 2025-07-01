export default function Footer() {
  return (
    <footer className="bg-[#f7f4ed] text-stone-400 py-6 px-6 md:px-8 border-t border-stone-200 text-center text-xs font-light">
      <div className="max-w-[700px] mx-auto">
        <div className="mb-1 font-serif text-stone-700">Serena Blake, PsyD</div>
        <div className="mb-1">Clinical Psychologist</div>
        <div className="mb-1">1287 Maplewood Drive, Los Angeles, CA 90026</div>
        <div className="mb-1">(323) 555-0192 &nbsp;|&nbsp; <a href="mailto:serena@blakepsychology.com" className="underline transition-all duration-300 hover:text-stone-600 focus:text-stone-700">serena@blakepsychology.com</a></div>
        <div className="mt-2">© {new Date().getFullYear()} Serena Blake, PsyD. All rights reserved.</div>
      </div>
    </footer>
  );
} 