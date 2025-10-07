
import React from 'react';
import { Page, NavLink, TeamMember, Testimonial, Service, BlogPost, Differentiator } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: Page.Home, href: '#' },
  { name: Page.Services, href: '#' },
  { name: Page.About, href: '#' },
  { name: Page.WhyChooseUs, href: '#' },
  { name: Page.Blog, href: '#' },
  { name: Page.Contact, href: '#' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Jane Doe',
    role: 'Founder & Lead Analyst',
    bio: 'With over 15 years of experience in finance and analytics, Jane founded RADA to bridge the gap between raw data and actionable business strategy.',
    imageUrl: 'https://picsum.photos/seed/person1/400/400',
  },
  {
    name: 'John Smith',
    role: 'Head of Bookkeeping',
    bio: 'John is a certified public accountant with a passion for streamlining financial processes and ensuring immaculate records for our clients.',
    imageUrl: 'https://picsum.photos/seed/person2/400/400',
  },
  {
    name: 'Emily White',
    role: 'Data Scientist',
    bio: 'Emily specializes in financial modeling and predictive analytics, turning historical data into future insights that drive growth.',
    imageUrl: 'https://picsum.photos/seed/person3/400/400',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "RADA ANALYTICS transformed our financial chaos into clarity. Their insights are now at the core of every strategic decision we make.",
    author: 'Alex Johnson',
    company: 'CEO, Tech Innovators Inc.',
  },
  {
    quote: "The integrated bookkeeping and analytics approach is a game-changer. We're not just compliant; we're proactive and growing faster than ever.",
    author: 'Samantha Lee',
    company: 'Founder, Creative Co.',
  },
  {
    quote: "Their team is professional, responsive, and truly understands the challenges of a growing business. Highly recommended.",
    author: 'Michael Brown',
    company: 'Owner, Brownstone Restaurant Group',
  }
];

export const SERVICES_OVERVIEW: Service[] = [
  {
    icon: <BookOpenIcon />,
    title: 'Precision Bookkeeping',
    description: 'Accurate and timely bookkeeping services to ensure your financial records are always clean, compliant, and ready for analysis.',
  },
  {
    icon: <ChartBarIcon />,
    title: 'Business Analytics & Insights',
    description: 'We transform your financial data into actionable insights, helping you understand performance, identify trends, and forecast future growth.',
  },
  {
    icon: <ArrowsRightLeftIcon />,
    title: 'Integrated Financial Strategy',
    description: 'Our unique approach combines bookkeeping and analytics to provide a holistic view of your business health, guiding you to make smarter decisions.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
    {
      title: '5 KPIs Every Small Business Should Track',
      category: 'Business Growth',
      excerpt: 'Stop guessing and start measuring. Discover the five key performance indicators that provide a real-time pulse on your business health.',
      imageUrl: 'https://picsum.photos/seed/blog1/600/400',
      author: 'Jane Doe',
      date: 'Oct 12, 2023'
    },
    {
      title: 'Beyond the Spreadsheet: The Power of Financial Forecasting',
      category: 'Analytics',
      excerpt: 'Learn how moving beyond basic spreadsheets to robust financial forecasting can help you mitigate risks and seize opportunities.',
      imageUrl: 'https://picsum.photos/seed/blog2/600/400',
      author: 'Emily White',
      date: 'Sep 28, 2023'
    },
    {
      title: 'Common Bookkeeping Mistakes and How to Avoid Them',
      category: 'Bookkeeping Tips',
      excerpt: "Don't let simple errors derail your finances. We break down the most common mistakes we see and how you can prevent them.",
      imageUrl: 'https://picsum.photos/seed/blog3/600/400',
      author: 'John Smith',
      date: 'Sep 15, 2023'
    }
]

export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: <LightBulbIcon />,
    title: "Proactive Insights, Not Reactive Reports",
    description: "We don't just report on what happened last month. We analyze your data to help you understand trends and anticipate what's next, allowing you to be proactive in your strategy."
  },
  {
    icon: <CpuChipIcon />,
    title: "Technology-Driven Efficiency",
    description: "We leverage the latest in accounting and analytics software to streamline processes, ensuring accuracy and providing you with real-time access to your financial data."
  },
  {
    icon: <UserGroupIcon />,
    title: "A True Extension of Your Team",
    description: "We see ourselves as partners in your success. Our team is dedicated to understanding your unique business and providing tailored advice to help you achieve your goals."
  },
  {
    icon: <ScaleIcon />,
    title: "Unwavering Commitment to Accuracy",
    description: "From daily transactions to complex financial models, our commitment to precision and accuracy is the bedrock of our services, giving you confidence in your numbers."
  }
]

// Icon components (used in constants)
function BookOpenIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function ChartBarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function ArrowsRightLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}

function LightBulbIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-11.649m-1.5 11.649a6.01 6.01 0 01-1.5-11.649M12 18a6.008 6.008 0 01-4.437-1.954M12 18a6.008 6.008 0 004.437-1.954" />
    </svg>
  );
}
function CpuChipIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5M15.75 21v-1.5M12 4.5v-1.5M12 21v-1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 6.375a1.5 1.5 0 110-2.25 1.5 1.5 0 010 2.25zM18.75 6.375a1.5 1.5 0 110-2.25 1.5 1.5 0 010 2.25zM5.25 19.125a1.5 1.5 0 110-2.25 1.5 1.5 0 010 2.25zM18.75 19.125a1.5 1.5 0 110-2.25 1.5 1.5 0 010 2.25z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75h6v10.5H9z" />
    </svg>
  );
}
function UserGroupIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.284-2.72a3 3 0 00-4.682 2.72 9.094 9.094 0 003.741.479m-4.5-9.479a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
        </svg>
    );
}
function ScaleIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52a26.285 26.285 0 00-3-.52m-3-.52c-2.291 0-4.545.16-6.75.47m0 0c-1.01.143-2.01.317-3 .52m0 0a26.285 26.285 0 00-3-.52m6.75.47v.75m0-1.223c.334-.05.667-.1 1-.146M6.75 4.97a48.416 48.416 0 016-3.47m0 0a48.416 48.416 0 016 3.47" />
        </svg>
    );
}
