// FIX: Import `ReactNode` type to resolve issues with JSX types in a .ts file.
import type { ReactNode } from 'react';

export enum Page {
  Home = 'Home',
  About = 'About',
  Services = 'Services',
  WhyChooseUs = 'Why Choose Us',
  Blog = 'Blog',
  Contact = 'Contact',
}

export interface NavLink {
  name: Page;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface Service {
  // FIX: Replaced JSX.Element with ReactNode, which is available via the import above, to fix "Cannot find namespace 'JSX'" error.
  icon: ReactNode;
  title: string;
  description: string;
}

export interface BlogPost {
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
}

export interface Differentiator {
  // FIX: Replaced JSX.Element with ReactNode, which is available via the import above, to fix "Cannot find namespace 'JSX'" error.
  icon: ReactNode;
  title: string;
  description: string;
}
