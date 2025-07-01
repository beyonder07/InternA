export default function Hero() {
  return (
    <section className="relative h-screen bg-[#f7f4ed] flex flex-col justify-center items-center text-center px-4 overflow-hidden" id="hero">
      <img src="/images/image%20(1).webp" alt="Hero background" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 w-full flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 text-white drop-shadow-lg leading-tight">Psychological Care for<br />Change, Insight, and Well-Being</h1>
        <h2 className="text-2xl md:text-3xl font-light mb-12 text-white drop-shadow">Offering individual psychotherapy for adults in Los Angeles and online</h2>
        <a href="#contact" className="mt-4 px-8 py-4 bg-white text-stone-800 font-medium rounded-full shadow-lg text-lg uppercase tracking-wider hover:bg-stone-100 transition-all focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2">Book a Free Consult</a>
      </div>
    </section>
  );
} 