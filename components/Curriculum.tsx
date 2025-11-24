import React, { useState } from 'react';
import { CURRICULUM_ITEMS } from '../constants';

const AccordionItem: React.FC<{ item: typeof CURRICULUM_ITEMS[0] }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-border-light dark:border-border-dark">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group focus:outline-none"
      >
        <p className={`text-lg font-medium leading-normal transition-colors ${isOpen ? 'text-primary' : 'text-text-light dark:text-text-dark'}`}>
          {item.title}
        </p>
        <div className={`text-text-light dark:text-text-dark transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-text-muted-light dark:text-text-muted-dark text-sm md:text-base font-normal leading-relaxed pb-6 pr-4 max-w-prose">
          {item.content}
        </p>
      </div>
    </div>
  );
};

const Curriculum: React.FC = () => {
  return (
    <section className="w-full px-4 py-20 bg-background-light/50 dark:bg-background-dark/50 scroll-mt-24" id="curriculum">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight pb-12 text-center font-serif text-text-light dark:text-text-dark">
          What You'll Learn
        </h2>
        <div className="flex flex-col bg-card-light dark:bg-card-dark rounded-2xl shadow-sm px-6 md:px-10 py-4">
          {CURRICULUM_ITEMS.map((item) => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;