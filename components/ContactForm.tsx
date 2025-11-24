import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="w-full px-4 py-24 text-center bg-card-light dark:bg-card-dark border-t border-border-light dark:border-border-dark scroll-mt-24" id="register">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight font-serif text-primary mb-4">
          Join the Elite. Reserve Your Place.
        </h2>
        <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-10 max-w-xl mx-auto">
          Enrollment is by application only to ensure a dedicated and passionate group. Spots are extremely limited.
        </p>
        
        {submitted ? (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-8 rounded-xl animate-fade-in">
            <span className="material-symbols-outlined text-5xl text-green-600 mb-4">check_circle</span>
            <h3 className="text-2xl font-serif font-bold text-green-800 dark:text-green-100 mb-2">Inquiry Received</h3>
            <p className="text-green-700 dark:text-green-300">Grazie! We have received your application. Our team will review your details and contact you shortly.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm font-bold text-green-800 hover:underline"
            >
              Send another inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2 text-left">
            <div className="space-y-1">
              <label htmlFor="firstName" className="sr-only">First Name</label>
              <input 
                id="firstName"
                required 
                className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" 
                placeholder="First Name" 
                type="text" 
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="lastName" className="sr-only">Last Name</label>
              <input 
                id="lastName"
                required 
                className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" 
                placeholder="Last Name" 
                type="text" 
              />
            </div>
            <div className="space-y-1 sm:col-span-2">
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input 
                id="email"
                required 
                className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" 
                placeholder="Email Address" 
                type="email" 
              />
            </div>
            <div className="space-y-1 sm:col-span-2">
              <label htmlFor="message" className="sr-only">Why do you want to join?</label>
              <textarea 
                id="message"
                className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none min-h-[120px]" 
                placeholder="Tell us why you want to join (optional)" 
                rows={4}
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="sm:col-span-2 w-full justify-center flex items-center rounded-lg h-14 px-6 bg-primary text-white text-lg font-bold tracking-wide hover:bg-primary-hover disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-md mt-2"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                  Sending...
                </span>
              ) : (
                "Submit Inquiry"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;