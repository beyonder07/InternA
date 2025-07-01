import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#f7f4ed] px-6 md:px-8 py-20 flex flex-col items-start justify-center min-h-[60vh]" id="hero">
      <div className="absolute inset-0 z-0">
        <Image src="/images/image%20(1).webp" alt="Calm clouds background" fill priority className="object-cover w-full h-full opacity-60" />
      </div>
      <div className="absolute inset-0 bg-[#f7f4ed]/80 z-10" />
      <div className="relative z-20 max-w-[700px] flex flex-col items-start justify-center">
        <h1 className="text-2xl md:text-4xl font-serif font-light mb-4 text-stone-900 leading-tight">Psychological Care for<br />Change, Insight, and Well-Being</h1>
        <h2 className="text-base md:text-xl font-light mb-8 text-stone-700 leading-snug">Offering individual psychotherapy for adults in Los Angeles and online</h2>
        <a href="#contact" className="px-6 py-3 border border-stone-300 bg-white text-stone-900 font-medium rounded-full text-sm md:text-base uppercase tracking-wide hover:bg-stone-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2">Book a Free Consult</a>
      </div>
    </section>
  );
} 