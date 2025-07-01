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
    <section id="services" className="py-24 px-4 bg-[#f7f4ed]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-serif font-light mb-16 text-stone-800">Areas of Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center scale-100 hover:scale-105 max-w-xs mx-auto md:max-w-none">
              <Image src={service.image} alt={service.title} width={128} height={128} className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mb-6 shadow" />
              <h3 className="text-lg md:text-xl font-serif font-light mb-4 text-stone-800">{service.title}</h3>
              <p className="text-stone-600 font-light text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 