import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'curriculum', 'instructor', 'register'];
      // Offset to trigger active state when the section is somewhat up the viewport
      // 100px allows for the header height plus some buffer
      const scrollPosition = window.scrollY + 100; 

      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
             current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Use scrollIntoView with smooth behavior. 
      // The sections have 'scroll-mt-24' (scroll-margin-top) class which handles the offset.
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinkClasses = (section: string, isMobile = false) => {
    const base = "text-sm font-medium transition-colors duration-200 cursor-pointer";
    const active = "text-primary font-bold";
    const inactive = "hover:text-primary dark:hover:text-primary text-text-light dark:text-text-dark";
    const mobileStyles = isMobile ? "block py-3 text-lg border-b border-border-light dark:border-border-dark last:border-0" : "";
    
    return `${base} ${activeSection === section ? active : inactive} ${mobileStyles}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-solid border-border-light dark:border-border-dark transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-4 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="size-8 text-primary transition-transform group-hover:scale-110 duration-300">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight font-serif text-text-light dark:text-text-dark">Napoli Elite</h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-8">
            <a className={navLinkClasses('about')} href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
            <a className={navLinkClasses('curriculum')} href="#curriculum" onClick={(e) => scrollToSection(e, 'curriculum')}>Curriculum</a>
            <a className={navLinkClasses('instructor')} href="#instructor" onClick={(e) => scrollToSection(e, 'instructor')}>Instructor</a>
          </nav>
          <a 
            href="#register" 
            onClick={(e) => scrollToSection(e, 'register')}
            className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary-hover hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <span className="truncate">Register Now</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-text-light dark:text-text-dark hover:text-primary transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-dark shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-2">
          <a className={navLinkClasses('about', true)} href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a className={navLinkClasses('curriculum', true)} href="#curriculum" onClick={(e) => scrollToSection(e, 'curriculum')}>Curriculum</a>
          <a className={navLinkClasses('instructor', true)} href="#instructor" onClick={(e) => scrollToSection(e, 'instructor')}>Instructor</a>
          <div className="pt-4">
             <a 
              href="#register" 
              onClick={(e) => scrollToSection(e, 'register')}
              className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-4 bg-primary text-white text-base font-bold hover:bg-primary-hover transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;