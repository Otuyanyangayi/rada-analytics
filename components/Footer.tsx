
import React from 'react';
import { Page } from '../types';
import { NAV_LINKS } from '../constants';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

// at the top of your file (once):
import { Facebook, Twitter, Linkedin, Github, Instagram, Globe } from "lucide-react";

// somewhere above your footer (or inline):
const socials = [
  { href: "https://x.com/yourhandle", label: "X (Twitter)", Icon: Twitter },
  { href: "https://www.linkedin.com/in/yourhandle", label: "LinkedIn", Icon: Linkedin },
  { href: "https://github.com/yourhandle", label: "GitHub", Icon: Github },
  { href: "https://www.instagram.com/yourhandle", label: "Instagram", Icon: Instagram },
  { href: "https://facebook.com/yourhandle", label: "Facebook", Icon: Facebook },
  { href: "https://rada-analytics.example", label: "Website", Icon: Globe },
];


const Logo: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div onClick={onClick} className="flex items-center cursor-pointer mb-4">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#1E40AF"/>
            <path d="M12 28V12H16.5C18.9853 12 21 14.0147 21 16.5C21 18.9853 18.9853 21 16.5 21H12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28 28V16L24 22L28 28Z" fill="white"/>
            <path d="M24 12V28" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <span className="ml-3 text-2xl font-display font-bold text-white">RADA ANALYTICS</span>
    </div>
);

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo onClick={() => setCurrentPage(Page.Home)} />
            <p className="max-w-md text-neutral-400">
              Balancing your books, unlocking the story your numbers tell to drive growth and inform decisions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} onClick={e => {e.preventDefault(); setCurrentPage(link.name)}} className="text-neutral-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="mailto:info@radanalytics.com" className="hover:text-white">info@radanalytics.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-white">(123) 456-7890</a></li>
              <li>123 Analytics Ave, Suite 100</li>
              <li>Data City, DC 12345</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">&copy; {year} RADA ANALYTICS. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
             {socials.map(({ href, label, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="p-2 rounded-full border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition"
      >
        <Icon className="size-5" aria-hidden="true" />
      </a>
    ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
