import React from 'react';

const Instructor: React.FC = () => {
  return (
    <section className="w-full px-4 py-20 max-w-6xl mx-auto scroll-mt-24" id="instructor">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight pb-12 text-center font-serif">
        Meet Your Instructor
      </h2>
      <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-border-light dark:border-border-dark">
        <div className="md:w-2/5 h-80 md:h-auto relative">
          <img 
            className="absolute inset-0 h-full w-full object-cover" 
            alt="Chef Gennaro Esposito" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXNvmGrbTq53nNeK95WCMLg_OtjTd-MD228rTc7zumqy_KitjiUBLXRSTV0lIN9AiDbh14sQyHukqO8fZRF2Port2JKGiEedoKzaQ7COfklNB2STr9hMmqQrWXK9-oreqz5DGvg2EQH8buinwSHloyEfUHzd6dT1FfTMM3dyxQH1WZhzkuagWMeegh6pmb3YF50Q9yiyM2PIFfVu9ytewTewCAKzI_eT5fJHkElSrbMPOd8hp3V0noMYg2FKhOjBI6HoTRDCb7UXd6"
          />
        </div>
        <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-primary"></span>
            <p className="uppercase tracking-widest text-xs text-primary font-bold">Master Pizzaiolo</p>
          </div>
          <h3 className="text-3xl leading-tight font-bold font-serif text-text-light dark:text-text-dark mb-6">
            Gennaro Esposito
          </h3>
          <p className="text-text-muted-light dark:text-text-muted-dark text-base leading-relaxed mb-6">
            Born and raised in the historic streets of Napoli, Gennaro inherited his passion from three generations of master pizzaiolos. With over 30 years of experience, he is a guardian of authentic Neapolitan tradition and a member of the prestigious 'Associazione Verace Pizza Napoletana'.
          </p>
          <p className="text-text-light dark:text-text-dark font-serif italic text-lg border-l-4 border-primary pl-4">
            "Pizza isn't just food; it's history, family, and art."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Instructor;