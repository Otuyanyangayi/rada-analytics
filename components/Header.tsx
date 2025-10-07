
import React, { useState } from 'react';
import { Page, NavLink } from '../types';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Logo: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div onClick={onClick} className="flex items-center cursor-pointer">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#1E40AF"/>
            <path d="M12 28V12H16.5C18.9853 12 21 14.0147 21 16.5C21 18.9853 18.9853 21 16.5 21H12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28 28V16L24 22L28 28Z" fill="white"/>
            <path d="M24 12V28" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <span className="ml-3 text-2xl font-display font-bold text-neutral-900">RADA ANALYTICS</span>
    </div>
);


const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo onClick={() => setCurrentPage(Page.Home)} />
          
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(link.name);
                }}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.name
                    ? 'text-primary-dark font-semibold'
                    : 'text-neutral-500 hover:text-primary-light'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button onClick={() => setCurrentPage(Page.Contact)} className="bg-primary-light text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary-dark transition-colors">
              Free Consultation
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(link.name);
                  setIsMenuOpen(false);
                }}
                className={`text-lg font-medium transition-colors ${
                  currentPage === link.name ? 'text-primary-dark' : 'text-neutral-500 hover:text-primary-light'
                }`}
              >
                {link.name}
              </a>
            ))}
             <button onClick={() => { setCurrentPage(Page.Contact); setIsMenuOpen(false); }} className="bg-primary-light text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-primary-dark transition-colors w-11/12">
              Free Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
