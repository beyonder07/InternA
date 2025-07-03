"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';

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
      <Header />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <ContactHero />
      <Contact />
      <Footer />
    </div>
  )
}
