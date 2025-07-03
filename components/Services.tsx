import Image from 'next/image';

const services = [
  {
    title: "Therapy for Healthcare Providers and Students",
    image: "/images/pexels-tima-miroshnichenko-6011667.jpg",
    description:
      "The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you're in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may be facing in other areas of your life.",
  },
  {
    title: "Therapy for Trauma and Grief",
    image: "/images/pexels-raphael-brasileiro-1687007.jpg",
    description:
      "Life's challenges, whether a difficult childhood, a traumatic event or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning.",
  },
  {
    title: "Therapy for Second Generation Individuals In Immigrant Families",
    image: "/images/pexels-polina-tankilevitch-8202906.jpg",
    description:
      "Second generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique aspect of your identity.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f7f4ed] py-24 px-4">
      <div className="max-w-3xl mx-auto mb-12">
        <blockquote className="text-center text-xl md:text-2xl font-serif text-stone-700 mb-8 md:mb-12 leading-relaxed">
          Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
        </blockquote>
        <h2 className="text-center text-3xl md:text-4xl font-serif font-light mb-12 text-stone-900 tracking-tight">Areas of Focus</h2>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center border border-stone-100">
            <Image src={service.image} alt={service.title} width={112} height={112} className="w-28 h-28 object-cover rounded-full mb-6 shadow" />
            <h3 className="text-lg font-serif font-light mb-3 text-stone-900 leading-snug">{service.title}</h3>
            <p className="text-stone-700 font-light text-base leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 