'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data: any) => {
    setShowSuccess(false);
    await new Promise((r) => setTimeout(r, 1200)); // Simulate async
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
    reset();
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[#f7f4ed]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-serif font-light mb-16 text-stone-800">Get In Touch</h2>
        <div className="bg-white p-12 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" aria-label="Contact form">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Name *</label>
                <input id="name" aria-invalid={!!errors.name} aria-describedby="name-error" {...register('name', { required: 'Name is required' })} className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400 ${errors.name ? 'border-red-500' : 'border-stone-300'}`} placeholder="Your full name" />
                {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone *</label>
                <input id="phone" type="tel" aria-invalid={!!errors.phone} aria-describedby="phone-error" {...register('phone', { required: 'Phone is required' })} className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400 ${errors.phone ? 'border-red-500' : 'border-stone-300'}`} placeholder="(555) 123-4567" />
                {errors.phone && <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email *</label>
              <input id="email" type="email" aria-invalid={!!errors.email} aria-describedby="email-error" {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Please enter a valid email' } })} className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400 ${errors.email ? 'border-red-500' : 'border-stone-300'}`} placeholder="your.email@example.com" />
              {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
            </div>
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-stone-700 mb-2">Preferred time to reach you</label>
              <input id="preferredTime" {...register('preferredTime')} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400 border-stone-300" placeholder="e.g., Weekday mornings, evenings after 6pm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">What brings you here? *</label>
              <textarea id="message" aria-invalid={!!errors.message} aria-describedby="message-error" {...register('message', { required: 'Please tell us what brings you here' })} className={`w-full min-h-[120px] border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400 ${errors.message ? 'border-red-500' : 'border-stone-300'}`} placeholder="Please share what you'd like to work on or any questions you have..." />
              {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>}
            </div>
            <div className="flex items-start gap-3">
              <input id="agreeToContact" type="checkbox" aria-invalid={!!errors.agreeToContact} aria-describedby="agreeToContact-error" {...register('agreeToContact', { required: 'Please agree to be contacted' })} className={`h-4 w-4 rounded border-stone-300 focus:ring-2 focus:ring-stone-400 ${errors.agreeToContact ? 'border-red-500' : ''}`} />
              <label htmlFor="agreeToContact" className="text-sm text-stone-700 leading-relaxed">I agree to be contacted by Dr. Blake regarding my inquiry *</label>
            </div>
            {errors.agreeToContact && <p id="agreeToContact-error" className="text-red-500 text-sm">{errors.agreeToContact.message as string}</p>}
            <div className="text-center">
              <button type="submit" disabled={isSubmitting} className="bg-stone-700 hover:bg-stone-800 text-white px-12 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 flex items-center justify-center gap-2">
                {isSubmitting && <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {showSuccess && <div className="text-green-600 text-center font-medium mt-4 bg-green-50 border border-green-200 rounded-lg py-3 px-4 shadow">Thank you for your message! Dr. Blake will get back to you soon.</div>}
          </form>
        </div>
      </div>
    </section>
  );
} 