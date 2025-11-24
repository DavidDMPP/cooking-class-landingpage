import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full @container py-10 px-4 md:px-0">
      <div 
        className="relative flex min-h-[70vh] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden items-center justify-center p-4 text-center shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLMHLpbvM4tSnUKUWfFw22J6RW8OtkrGWi-Ux1KxXe9OUmpuouXfP1HQctX3IP7k_KWGiPf2MKAmG_A6rJA-BKLS_0jimInDwlsmQSS8mv_xjOlQVxhsdv5CZw1naspyhTMQ9uW4VamY3xbUbY1DEmwHQ-G5FPzNIcICw3qnpKDtcgbiZXh_UMWroEYFxUeyevhc-XMLGRidbP7JQFVqubyWiNTlA_EDPJiVWQj2HBSYR_xFAyO9HVb4d7uzBZyJM2fJsFKsmLkO8y")`
        }}
      >
        <div className="flex flex-col gap-4 max-w-4xl z-10 px-4 animate-fade-in-up">
          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight font-serif drop-shadow-lg">
            The Napoli Elite Pizza Masterclass
          </h1>
          <h2 className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            An Exclusive Annual Culinary Journey in the Heart of Italy
          </h2>
        </div>
        <a 
          href="#register"
          className="z-10 flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary-hover hover:scale-105 transform transition-all duration-200 shadow-lg"
        >
          Reserve Your Spot
        </a>
      </div>
    </section>
  );
};

export default Hero;