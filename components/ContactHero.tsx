import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative w-full h-[350px] md:h-[420px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/Screenshot 2025-07-03 213348.png"
        alt="Contact section hero background"
        fill
        priority
        className="object-cover object-center w-full h-full"
      />
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
} 