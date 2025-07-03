import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-serif font-light mb-8 text-stone-800">About Dr. Serena Blake, PsyD</h2>
          <div className="prose prose-stone max-w-none text-lg">
            <p><strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
            <p><strong>Contact:</strong></p>
            <ul className="ml-6 list-disc">
              <li>Phone: (323) 555-0192</li>
              <li>Email: <a href="mailto:serena@blakepsychology.com">serena@blakepsychology.com</a></li>
            </ul>
            <p><strong>Office Hours:</strong></p>
            <ul className="ml-6 list-disc">
              <li>In-person: Tue & Thu, 10 AM–6 PM</li>
              <li>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</li>
            </ul>
            <p><strong>Experience:</strong> 8 years of practice, 500+ sessions</p>
            <p>Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src="/images/image.webp" alt="Dr. Serena Blake" width={320} height={384} priority className="w-80 h-96 object-cover rounded-xl shadow-lg border border-stone-200" />
        </div>
      </div>
    </section>
  );
} 