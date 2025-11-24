import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutGrid from './components/AboutGrid';
import Curriculum from './components/Curriculum';
import Instructor from './components/Instructor';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col w-full max-w-[1440px] flex-1">
            <Header />
            <main className="flex flex-col items-center w-full">
              <Hero />
              <AboutGrid />
              <Curriculum />
              <Instructor />
              <Testimonials />
              <ContactForm />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;