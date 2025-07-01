import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] bg-[#f7f4ed] flex flex-col justify-center items-start text-left px-4 md:px-16 overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        <Image src="/images/image%20(1).webp" alt="Calm clouds background" fill priority className="object-cover w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 w-full flex flex-col items-start justify-center h-full max-w-xl">
        <h1 className="text-3xl md:text-5xl font-serif font-light mb-6 text-white drop-shadow-lg leading-tight">Psychological Care for<br />Change, Insight, and Well-Being</h1>
        <h2 className="text-lg md:text-2xl font-light mb-10 text-white drop-shadow">Offering individual psychotherapy for adults in Los Angeles and online</h2>
        <a href="#contact" className="mt-2 px-8 py-4 bg-white text-stone-800 font-medium rounded-full shadow-lg text-base md:text-lg uppercase tracking-wider hover:bg-stone-100 transition-all focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2">Book a Free Consult</a>
      </div>
    </section>
  );
} 