'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data: any) => {
    setShowSuccess(false);
    await new Promise((r) => setTimeout(r, 1200));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
    reset();
  };

  return (
    <section id="contact" className="section-spacing px-4 bg-[#f7f4ed]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-serif font-light mb-16 text-stone-800">Get In Touch</h2>
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8" aria-label="Contact form">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col gap-1 mb-2">
                <label htmlFor="name" className="mb-1">Name <span className="text-red-500">*</span></label>
                <input id="name" aria-required="true" aria-invalid={!!errors.name} aria-describedby="name-error" {...register('name', { required: 'Name is required' })} placeholder="Your full name" />
                {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>}
              </div>
              <div className="flex flex-col gap-1 mb-2">
                <label htmlFor="phone" className="mb-1">Phone <span className="text-red-500">*</span></label>
                <input id="phone" type="tel" aria-required="true" aria-invalid={!!errors.phone} aria-describedby="phone-error" {...register('phone', { required: 'Phone is required' })} placeholder="(555) 123-4567" />
                {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone.message as string}</p>}
              </div>
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label htmlFor="email" className="mb-1">Email <span className="text-red-500">*</span></label>
              <input id="email" type="email" aria-required="true" aria-invalid={!!errors.email} aria-describedby="email-error" {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Please enter a valid email' } })} placeholder="your.email@example.com" />
              {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label htmlFor="preferredTime" className="mb-1">Preferred time to reach you</label>
              <input id="preferredTime" {...register('preferredTime')} placeholder="e.g., Weekday mornings, evenings after 6pm" />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label htmlFor="message" className="mb-1">What brings you here? <span className="text-red-500">*</span></label>
              <textarea id="message" aria-required="true" aria-invalid={!!errors.message} aria-describedby="message-error" {...register('message', { required: 'Please tell us what brings you here' })} placeholder="Please share what you'd like to work on or any questions you have..." className="min-h-[120px]" />
              {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1">{errors.message.message as string}</p>}
            </div>
            <div className="flex items-start gap-3 mb-2">
              <input id="agreeToContact" type="checkbox" aria-required="true" aria-invalid={!!errors.agreeToContact} aria-describedby="agreeToContact-error" {...register('agreeToContact', { required: 'Please agree to be contacted' })} />
              <label htmlFor="agreeToContact" className="text-sm text-stone-700 leading-relaxed">I agree to be contacted by Dr. Blake regarding my inquiry <span className="text-red-500">*</span></label>
            </div>
            {errors.agreeToContact && <p id="agreeToContact-error" className="text-red-500 text-xs mb-2">{errors.agreeToContact.message as string}</p>}
            <div className="text-center">
              <button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-stone-700 hover:bg-stone-800 text-white px-8 md:px-12 py-4 rounded-full text-base md:text-sm font-medium tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 flex items-center justify-center gap-2">
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