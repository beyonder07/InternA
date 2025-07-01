import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission to your insurance company for potential reimbursement.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions are offered securely via Zoom with HIPAA-compliant technology to ensure your privacy and confidentiality.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "A 24-hour notice is required for all cancellations or rescheduling. Late cancellations or no-shows may be subject to the full session fee.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-serif font-light mb-16 text-stone-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-stone-200 pb-6">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className={`w-full text-left flex justify-between items-center py-4 transition-colors duration-300 rounded-md focus:outline-none ${open === idx ? 'bg-stone-100' : 'hover:bg-stone-50'}`}
              >
                <span className="text-xl font-semibold text-stone-800">{faq.question}</span>
                {open === idx ? (
                  <ChevronUp className="w-5 h-5 text-stone-700" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-stone-400" />
                )}
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${open === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} overflow-hidden`}
              >
                <div className="min-h-0">
                  <p className="text-stone-600 leading-relaxed pt-2">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 