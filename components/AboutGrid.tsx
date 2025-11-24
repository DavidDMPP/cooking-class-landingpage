import React from 'react';
import { FEATURES } from '../constants';

const AboutGrid: React.FC = () => {
  return (
    <section className="w-full px-4 py-20 max-w-6xl mx-auto scroll-mt-24" id="about">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-1 gap-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-8 flex-col text-center items-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-3 rounded-full bg-background-light dark:bg-background-dark">
              <span className="material-symbols-outlined text-4xl text-primary">{feature.icon}</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold leading-tight font-serif text-text-light dark:text-text-dark">{feature.title}</h2>
              <p className="text-base font-normal leading-relaxed text-text-muted-light dark:text-text-muted-dark">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutGrid;