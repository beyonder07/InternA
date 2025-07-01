'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    reset();
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[#f7f4ed]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-serif font-light mb-16 text-stone-800">Get In Touch</h2>
        <div className="bg-white p-12 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Name *</label>
                <input id="name" {...register('name', { required: 'Name is required' })} className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400 ${errors.name ? 'border-red-500' : 'border-stone-300'}`} placeholder="Your full name" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone *</label>
                <input id="phone" type="tel" {...register('phone', { required: 'Phone is required' })} className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400 ${errors.phone ? 'border-red-500' : 'border-stone-300'}`} placeholder="(555) 123-4567" />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email *</label>
              <input id="email" type="email" {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Please enter a valid email' } })} className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400 ${errors.email ? 'border-red-500' : 'border-stone-300'}`} placeholder="your.email@example.com" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
            </div>
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-stone-700 mb-2">Preferred time to reach you</label>
              <input id="preferredTime" {...register('preferredTime')} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400 border-stone-300" placeholder="e.g., Weekday mornings, evenings after 6pm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">What brings you here? *</label>
              <textarea id="message" {...register('message', { required: 'Please tell us what brings you here' })} className={`w-full min-h-[120px] border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400 ${errors.message ? 'border-red-500' : 'border-stone-300'}`} placeholder="Please share what you'd like to work on or any questions you have..." />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>}
            </div>
            <div className="flex items-start gap-3">
              <input id="agreeToContact" type="checkbox" {...register('agreeToContact', { required: 'Please agree to be contacted' })} className={`h-4 w-4 rounded border-stone-300 focus:ring-2 focus:ring-stone-400 ${errors.agreeToContact ? 'border-red-500' : ''}`} />
              <label htmlFor="agreeToContact" className="text-sm text-stone-700 leading-relaxed">I agree to be contacted by Dr. Blake regarding my inquiry *</label>
            </div>
            {errors.agreeToContact && <p className="text-red-500 text-sm">{errors.agreeToContact.message as string}</p>}
            <div className="text-center">
              <button type="submit" className="bg-stone-700 hover:bg-stone-800 text-white px-12 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2">Send Message</button>
            </div>
            {submitted && <div className="text-green-600 text-center font-medium mt-4">Thank you for your message! Dr. Blake will get back to you soon.</div>}
          </form>
        </div>
      </div>
    </section>
  );
} 