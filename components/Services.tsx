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
    <section id="services" className="section-spacing px-4 bg-[#f7f4ed]">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-left text-2xl md:text-3xl font-serif font-light mb-10 text-stone-800">Areas of Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-center text-center">
              <Image src={service.image} alt={service.title} width={96} height={96} className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full mb-4 shadow-sm" />
              <h3 className="text-base font-serif font-light mb-2 text-stone-800">{service.title}</h3>
              <p className="text-stone-600 font-light text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 