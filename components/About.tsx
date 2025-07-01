export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-serif font-light mb-8 text-stone-800">About Dr. Serena Blake</h2>
          <div className="prose prose-stone max-w-none text-lg">
            <p>Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.</p>
            <p>She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.</p>
            <p>Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.</p>
            <ul className="mt-8">
              <li><strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</li>
              <li><strong>Phone:</strong> (323) 555-0192</li>
              <li><strong>Email:</strong> serena@blakepsychology.com</li>
              <li><strong>Office Hours:</strong> In-person: Tue & Thu, 10 AM–6 PM; Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/images/image.webp" alt="Dr. Serena Blake" className="w-80 h-96 object-cover rounded-xl shadow-lg border border-stone-200" />
        </div>
      </div>
    </section>
  );
} 