export default function Footer() {
  return (
    <footer className="bg-[#f7f4ed] text-stone-400 py-8 px-4 border-t border-stone-200 text-center text-sm font-light mt-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-2 font-serif text-stone-700">Serena Blake, PsyD</div>
        <div className="mb-2">Clinical Psychologist</div>
        <div className="mb-2">1287 Maplewood Drive, Los Angeles, CA 90026</div>
        <div className="mb-2">(323) 555-0192 &nbsp;|&nbsp; <a href="mailto:serena@blakepsychology.com" className="underline hover:text-stone-600">serena@blakepsychology.com</a></div>
        <div className="mt-4">© {new Date().getFullYear()} Serena Blake, PsyD. All rights reserved.</div>
      </div>
    </footer>
  );
} 