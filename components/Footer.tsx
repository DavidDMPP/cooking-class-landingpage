import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-6 py-10 border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 justify-center md:justify-start">
             <span className="material-symbols-outlined text-primary">local_pizza</span>
             <span className="font-serif font-bold text-lg">Napoli Elite</span>
          </div>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
            © {currentYear} Napoli Elite Masterclass. All Rights Reserved.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Terms</a>
          <a className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;