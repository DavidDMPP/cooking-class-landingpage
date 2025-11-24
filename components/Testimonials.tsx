import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="w-full px-4 py-20 bg-background-light dark:bg-background-dark relative">
       {/* Decorative background element */}
       <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
         <span className="material-symbols-outlined absolute -top-10 -left-10 text-[20rem]">format_quote</span>
         <span className="material-symbols-outlined absolute bottom-0 right-0 text-[20rem] rotate-180">format_quote</span>
       </div>

      <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight pb-12 text-center font-serif relative z-10">
        From Our Alumni
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="bg-card-light dark:bg-card-dark p-8 rounded-2xl shadow-md border border-border-light dark:border-border-dark hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <img 
                className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-primary/20" 
                alt={testimonial.name} 
                src={testimonial.image}
              />
              <div>
                <p className="font-bold text-lg font-serif">{testimonial.name}</p>
                <div className="flex text-accent gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px] fill-current">star</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-text-muted-light dark:text-text-muted-dark text-base italic leading-relaxed">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;