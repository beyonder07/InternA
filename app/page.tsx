"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    preferredMethod: "",
    agreeToContact: false,
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.phone.trim()) errors.phone = "Phone is required"
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email"
    }
    if (!formData.message.trim()) errors.message = "Please tell us what brings you here"
    if (!formData.agreeToContact) errors.agreeToContact = "Please agree to be contacted"
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      alert("Thank you for your message! Dr. Blake will get back to you soon.")
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        preferredTime: "",
        preferredMethod: "",
        agreeToContact: false,
      })
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const faqData = [
    {
      question: "Do you accept insurance?",
      answer:
        "No, but a superbill is provided for self-submission to your insurance company for potential reimbursement.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes—all virtual sessions are offered securely via Zoom with HIPAA-compliant technology to ensure your privacy and confidentiality.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "A 24-hour notice is required for all cancellations or rescheduling. Late cancellations or no-shows may be subject to the full session fee.",
    },
  ]

  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Learn how to navigate daily stressors, manage overwhelm, and build emotional resilience through CBT and mindfulness-based strategies.",
    },
    {
      title: "Relationship Counseling",
      description:
        "Strengthen communication, rebuild trust, and deepen emotional connection — whether you're navigating challenges or simply seeking a stronger bond.",
    },
    {
      title: "Trauma Recovery",
      description:
        "Heal from past trauma in a safe, supportive environment. Dr. Blake uses proven techniques like EMDR and trauma-focused CBT to support your journey.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f7f4ed] text-stone-700 font-sans">
      {/* Header */}
      <header className="w-full py-8 flex flex-col items-start border-b border-stone-200 bg-[#f7f4ed] px-8">
        <div className="text-2xl font-serif font-light mb-2">Serena Blake, PsyD</div>
        <div className="text-md font-light">Clinical Psychologist</div>
        <div className="text-sm text-stone-500 mt-1">Psychological Services</div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-[#f7f4ed] text-center min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="/images/image%20(1).webp" alt="Hero background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 w-full">
          <h1 className="text-5xl md:text-7xl font-light font-serif mb-8 text-white drop-shadow-lg">Psychological Care for<br />Change, Insight, and Well-Being</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-12 text-white drop-shadow">Offering individual psychotherapy for adults in Los Angeles and online</h2>
          <button
            onClick={scrollToContact}
            className="bg-stone-700 hover:bg-stone-800 text-white px-10 py-4 rounded-full text-lg font-medium tracking-wider uppercase transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
          >
            Book a Free Consult
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-serif font-light mb-8">About Dr. Serena Blake</h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.
              </p>
              <p>
                She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p>
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
              <div className="mt-8 space-y-2">
                <div><span className="font-medium">Location:</span> 1287 Maplewood Drive, Los Angeles, CA 90026</div>
                <div><span className="font-medium">Phone:</span> (323) 555-0192</div>
                <div><span className="font-medium">Email:</span> serena@blakepsychology.com</div>
                <div><span className="font-medium">Office Hours:</span> In-person: Tue & Thu, 10 AM–6 PM; Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="/images/image.webp"
              alt="Dr. Serena Blake"
              className="w-80 h-96 object-cover rounded-lg shadow-md border border-stone-200"
            />
          </div>
        </div>
      </section>

      {/* Areas of Focus Section */}
      <section className="py-24 px-4 bg-[#f7f4ed]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-light font-serif mb-16">Areas of Focus</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Area 1 (was Area 2 image) */}
            <div className="flex flex-col items-center text-center">
              <div className="w-72 h-72 mb-8 rounded-full overflow-hidden flex items-center justify-center bg-stone-200">
                <img src="/images/pexels-tima-miroshnichenko-6011667.jpg" alt="Healthcare Providers and Students" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-serif font-light mb-4">Therapy for Healthcare Providers and Students</h3>
              <p className="text-stone-600 font-light">The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you're in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may be facing in other areas of your life.</p>
            </div>
            {/* Area 2 (was Area 3 image) */}
            <div className="flex flex-col items-center text-center">
              <div className="w-72 h-72 mb-8 rounded-full overflow-hidden flex items-center justify-center bg-stone-200">
                <img src="/images/pexels-raphael-brasileiro-1687007.jpg" alt="Trauma and Grief" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-serif font-light mb-4">Therapy for Trauma and Grief</h3>
              <p className="text-stone-600 font-light">Life's challenges, whether a difficult childhood, a traumatic event or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning.</p>
            </div>
            {/* Area 3 (was Area 1 image) */}
            <div className="flex flex-col items-center text-center">
              <div className="w-72 h-72 mb-8 rounded-full overflow-hidden flex items-center justify-center bg-stone-200">
                <img src="/images/pexels-polina-tankilevitch-8202906.jpg" alt="Second Generation Individuals In Immigrant Families" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-serif font-light mb-4">Therapy for Second Generation Individuals In Immigrant Families</h3>
              <p className="text-stone-600 font-light">Second generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique aspect of your identity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rates/Session Fees Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-light mb-8">Session Fees</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-12 mb-8">
            <div className="text-stone-700">
              <span className="text-3xl font-light">$200</span>
              <span className="text-lg font-light"> / individual session</span>
            </div>
            <div className="text-stone-700">
              <span className="text-3xl font-light">$240</span>
              <span className="text-lg font-light"> / couples session</span>
            </div>
          </div>
          <div className="text-stone-600 font-light">No insurance accepted, but a superbill is provided for self-submission.</div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-[#f7f4ed]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-serif font-light mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-stone-200 pb-6">
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full text-left flex justify-between items-center py-4 transition-colors duration-300 rounded-md
                    ${openFaq === index ? 'bg-stone-200 text-stone-900' : 'hover:bg-stone-100 text-stone-700'}`}
                  style={{ outline: 'none' }}
                >
                  <span className={`text-xl font-light transition-colors duration-300 ${openFaq === index ? 'text-stone-900' : 'text-stone-700'}`}>{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 transition-colors duration-300 text-stone-700" />
                  ) : (
                    <ChevronDown className="w-5 h-5 transition-colors duration-300 text-stone-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="pb-4 transition-all duration-300 ease-in-out">
                    <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-serif font-light mb-16">Get In Touch</h2>
          <div className="bg-[#f7f4ed] p-12 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-3">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`w-full border-stone-300 focus:border-stone-500 ${formErrors.name ? "border-red-500" : ""}`}
                    placeholder="Your full name"
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-2">{formErrors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-3">
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`w-full border-stone-300 focus:border-stone-500 ${formErrors.phone ? "border-red-500" : ""}`}
                    placeholder="(555) 123-4567"
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-2">{formErrors.phone}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-3">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full border-stone-300 focus:border-stone-500 ${formErrors.email ? "border-red-500" : ""}`}
                  placeholder="your.email@example.com"
                />
                {formErrors.email && <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>}
              </div>
              <div>
                <label htmlFor="preferredMethod" className="block text-sm font-medium text-stone-700 mb-3">
                  Preferred method to reach you
                </label>
                <select
                  id="preferredMethod"
                  value={formData.preferredMethod}
                  onChange={(e) => handleInputChange("preferredMethod", e.target.value)}
                  className="w-full border-stone-300 focus:border-stone-500 rounded-md px-3 py-2 bg-white"
                >
                  <option value="">Select preferred method</option>
                  <option value="phone">Phone call</option>
                  <option value="email">Email</option>
                  <option value="text">Text message</option>
                  <option value="either">Either phone or email</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-3">
                  What brings you here? *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={`w-full min-h-[120px] border-stone-300 focus:border-stone-500 ${formErrors.message ? "border-red-500" : ""}`}
                  placeholder="Please share what you'd like to work on or any questions you have..."
                />
                {formErrors.message && <p className="text-red-500 text-sm mt-2">{formErrors.message}</p>}
              </div>
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-stone-700 mb-3">
                  Preferred time to reach you
                </label>
                <Input
                  id="preferredTime"
                  type="text"
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                  className="w-full border-stone-300 focus:border-stone-500"
                  placeholder="e.g., Weekday mornings, evenings after 6pm"
                />
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="agreeToContact"
                  checked={formData.agreeToContact}
                  onCheckedChange={(checked) => handleInputChange("agreeToContact", checked as boolean)}
                  className={formErrors.agreeToContact ? "border-red-500" : ""}
                />
                <label htmlFor="agreeToContact" className="text-sm text-stone-700 leading-relaxed">
                  I agree to be contacted by Dr. Blake regarding my inquiry *
                </label>
              </div>
              {formErrors.agreeToContact && <p className="text-red-500 text-sm">{formErrors.agreeToContact}</p>}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-stone-700 hover:bg-stone-800 text-white px-12 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="mt-12 text-center text-stone-600 font-light">
              <div>1287 Maplewood Drive, Los Angeles, CA 90026</div>
              <div>(323) 555-0192 &nbsp;|&nbsp; serena@blakepsychology.com</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f7f4ed] text-stone-400 py-8 px-4 border-t border-stone-200 text-center text-sm font-light mt-12">
        © {new Date().getFullYear()} Serena Blake, PsyD. All rights reserved.
      </footer>
    </div>
  )
}
