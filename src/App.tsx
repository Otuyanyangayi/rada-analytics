/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  FileText, 
  ShieldCheck, 
  TrendingUp, 
  Menu, 
  X, 
  ArrowRight, 
  Mail, 
  MapPin, 
  CheckCircle2,
  ChevronRight,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'services' | 'about' | 'why-us' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Why Choose Us', id: 'why-us' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            <span className="text-2xl font-bold tracking-tighter text-slate-900">
              RADA<span className="text-emerald-600">ANALYTICS</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  currentPage === item.id ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all"
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-600"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    setCurrentPage('contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-emerald-600 text-white px-4 py-3 rounded-xl font-medium"
                >
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => (
  <footer className="bg-slate-900 text-slate-300 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="text-2xl font-bold tracking-tighter text-white">
            RADA<span className="text-emerald-400">ANALYTICS</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Billing Precision. Retiering Expertise. Policy Clarity. Data That Works for You.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setCurrentPage('services')} className="hover:text-emerald-400 transition-colors">Services</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-emerald-400 transition-colors">About Us</button></li>
            <li><button onClick={() => setCurrentPage('why-us')} className="hover:text-emerald-400 transition-colors">Why Choose Us</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-emerald-400 transition-colors">Contact</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-emerald-400" />
              Federal Way, WA
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-emerald-400" />
              info@radaanalytics.com
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-800 text-xs text-center">
        &copy; {new Date().getFullYear()} RADA ANALYTICS. All rights reserved.
      </div>
    </div>
  </footer>
);

// --- Page Content ---

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => (
  <div className="space-y-24 pb-24">
    {/* Hero Section */}
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold tracking-widest uppercase mb-6">
              Washington State AFH Specialist
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              You Take Care of Your Residents. <span className="text-emerald-600">We Handle the MCO.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              RADA ANALYTICS helps Adult Family Home providers in Washington State navigate CBHS and IBSS billing, retiering, policy changes, and data — so you get paid accurately and stay ahead of what's coming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2"
              >
                Schedule a Free Consultation <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setCurrentPage('services')}
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent opacity-50" />
    </section>

    {/* Pillars Section */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Specialized Support for a Complex Program</h2>
        <p className="text-lg text-slate-600">
          CBHS launched in July 2024 and IBSS in January 2024. These programs are still evolving. AFH providers need a partner who knows this landscape deeply. That's what we do.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "MCO Billing",
            desc: "We handle the full CBHS and IBSS billing cycle—from eligibility to reconciliation. Clean claims, every time.",
            icon: <FileText className="text-emerald-600" size={32} />
          },
          {
            title: "Retiering Consulting",
            desc: "We review documentation and behavior logs to ensure your authorization reflects the support your resident actually needs.",
            icon: <TrendingUp className="text-emerald-600" size={32} />
          },
          {
            title: "Policy Research",
            desc: "We monitor HCA and MCO guidance updates and translate complex policy into clear, actionable guidance.",
            icon: <ShieldCheck className="text-emerald-600" size={32} />
          },
          {
            title: "Analytics",
            desc: "We bridge the gap between caregiving and data analysis, helping you understand what your numbers are telling you.",
            icon: <BarChart3 className="text-emerald-600" size={32} />
          }
        ].map((pillar, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="mb-6 bg-emerald-50 w-16 h-16 rounded-xl flex items-center justify-center">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Trusted by AFH Providers Across Washington</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "Before working with RADA Analytics, we had no idea some of our residents were authorized at the wrong tier. Ingabo reviewed our documentation, built the case for retiering, and got it done. The difference in reimbursement was significant.",
              author: "AFH Provider, King County"
            },
            {
              quote: "The CBHS billing spreadsheet process was overwhelming. RADA took it completely off our plate. Now our claims go out on time, we get paid faster, and we actually understand what's happening with our revenue.",
              author: "AFH Provider, Pierce County"
            },
            {
              quote: "Ingabo keeps us informed every time HCA updates its guidance. We don't have to worry about missing something important — she's already on it and tells us what it means for our home.",
              author: "AFH Provider, Snohomish County"
            }
          ].map((t, i) => (
            <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <Quote className="text-emerald-400 mb-6 opacity-50" size={32} />
              <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="text-emerald-400 font-semibold text-sm">— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-emerald-600 rounded-3xl p-12 md:p-20 text-white shadow-2xl shadow-emerald-200">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">The MCO Program Is Complicated. Your Support Doesn't Have to Be.</h2>
        <p className="text-xl text-emerald-50 mb-12 max-w-2xl mx-auto">
          Whether you're just getting started with CBHS or IBSS, struggling with denials, or simply trying to keep up with policy changes — RADA ANALYTICS is here to help you figure it out.
        </p>
        <button 
          onClick={() => setCurrentPage('contact')}
          className="bg-white text-emerald-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all"
        >
          Schedule a Free Consultation
        </button>
      </div>
    </section>
  </div>
);

const ServicesPage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => (
  <div className="pt-32 pb-24 space-y-24">
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Five Services. One Focus: AFH Providers in the MCO Program.</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Every service we offer is built around the specific realities of CBHS, IBSS, and Washington State's Apple Health managed care landscape. We don't serve general small businesses — we serve Adult Family Homes.
        </p>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-16">
      {[
        {
          title: "MCO Billing for CBHS & IBSS",
          intro: "Getting paid through the MCOs requires clean, timely, correctly formatted claims. We take billing entirely off your plate.",
          items: [
            "Eligibility and authorization verification in ProviderOne before billing",
            "CBHS billing spreadsheet preparation and secure submission to each MCO",
            "IBSS authorization requests and billing management",
            "Payment reconciliation and remittance review",
            "Denial identification, root cause analysis, and resubmission",
            "Transition support as the clearinghouse billing option comes online"
          ]
        },
        {
          title: "CBHS & IBSS Retiering Consulting",
          intro: "A resident's authorized tier determines how much your AFH is reimbursed. If that tier doesn't reflect the actual level of behavioral support, you're underpaid. We make sure the tier is right.",
          items: [
            "Review of the resident's current authorization and tier assignment",
            "Analysis of behavior logs, documentation, and care records",
            "Development of a clear, complete clinical narrative",
            "Preparation and submission of the Re-Tiering Request Form (HCA 13-0125)",
            "Follow-up through the review process until the new tier is confirmed"
          ],
          for: "Any AFH provider whose resident's behavior has escalated, whose documentation has improved, or who suspects the current tier doesn't reflect staff effort."
        },
        {
          title: "MCO Policy & Regulatory Research",
          intro: "Staying current is a real job. We do it so you don't have to. We monitor updates as recently as February 2025 to keep you compliant.",
          items: [
            "Regular review of HCA bulletins, MCO policy updates, and DSHS guidance",
            "Plain-language summaries of what changes mean for your home",
            "Proactive alerts when something requires action on your part",
            "Deep-dive research on specific questions or denial rationales",
            "Regulatory interpretation to support appeals or grievances"
          ]
        },
        {
          title: "Analytics & Data Support",
          intro: "Data is only useful if you understand it and trust it. We meet you where you are and help you set up the right tools.",
          items: [
            "Set up simple, practical reporting tailored to your AFH's operations",
            "Help you understand and act on your billing and revenue data",
            "Track key metrics: authorization utilization, payment timelines, denial rates",
            "Identify patterns in your data—trends, anomalies, and opportunities",
            "Translate data into decisions, not just reports"
          ],
          approach: "We don't hand you a dashboard and walk away. We walk you through what it means, why it matters, and what to do about it."
        },
        {
          title: "Business Package",
          intro: "Establishing a strong online presence is essential for modern business success. We help you set up and manage all aspects of your digital visibility.",
          items: [
            "Professional email setup with custom domain configuration",
            "Website creation or optimization for better visibility and user experience",
            "Social media account setup and branding across platforms",
            "Initial content creation and posting strategy",
            "Basic SEO optimization for improved search visibility",
            "Integration of contact forms and lead capture tools"
          ],
          for: "AFH providers looking to establish or strengthen their online presence and attract new residents and their families."
        }
      ].map((service, i) => (
        <div key={i} className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.intro}</p>
              {service.for && (
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 mb-8">
                  <h4 className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-2">Who This Is For</h4>
                  <p className="text-emerald-700 text-sm">{service.for}</p>
                </div>
              )}
              {service.approach && (
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="text-slate-800 font-bold text-sm uppercase tracking-wider mb-2">Our Approach</h4>
                  <p className="text-slate-700 text-sm">{service.approach}</p>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-600" size={20} /> What We Handle:
              </h4>
              <ul className="space-y-4">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-600">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>

    {/* Pricing */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Flexible Engagements. No One-Size-Fits-All Pricing.</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
          Every AFH has different needs, different resident populations, and different levels of MCO complexity. We offer custom pricing based on your specific situation.
        </p>
        <button onClick={() => setCurrentPage('contact')}
        className="text-emerald-400 font-bold flex items-center gap-2 mx-auto hover:text-emerald-300 transition-colors">
          Contact for Custom Quote <ArrowRight size={20} />
        </button>
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="pt-32 pb-24 space-y-24">
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">About RADA ANALYTICS</h1>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              RADA ANALYTICS was founded by Ingabo Khatasia, based in Federal Way, Washington, with one clear purpose: to give Adult Family Home providers the expert support they need to participate in Washington's MCO program with confidence.
            </p>
            <p>
              The CBHS and IBSS programs represent a real opportunity for AFH providers — but only if they're set up and managed correctly. The billing process is manual and detail-intensive. Resident tiers don't always reflect actual acuity.
            </p>
            <p>
              Ingabo built RADA ANALYTICS to close those gaps. By combining deep knowledge of the MCO program with a background in business analytics, she brings a level of precision and clarity to AFH administration that most providers have never had access to before.
            </p>
          </div>
        </div>
        <div className="bg-emerald-100 rounded-3xl aspect-[4/5] overflow-hidden relative">
          <img 
            src="public/1712317851393.jpeg" 
            alt="Ingabo Khatasia" 
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-8 left-8 right-8 bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900">Ingabo Khatasia</h3>
            <p className="text-emerald-600 font-medium">Founder & Lead Consultant</p>
          </div>
        </div>
      </div>
    </section>

    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Meet the Founder</h2>
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            Ingabo Khatasia holds dual Master's degrees in Business Analytics and International Development, and is a Certified Intuit Bookkeeper. He specializes in MCO billing, CBHS and IBSS retiering consulting, policy and regulatory research, and data analytics for Adult Family Home providers in Washington State.
          </p>
          <p>
            His approach is practical and provider-centered: he knows that AFH operators are dedicated caregivers first, and that the administrative complexity of the MCO program shouldn't get in the way of the care they're providing. He works alongside his clients, not just behind the scenes, so they understand what's happening with their billing, their authorizations, and their homes.
          </p>
        </div>
      </div>
    </section>

    {/* Placeholder section for Nyangayi Otuya */}
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Nyangayi Otuya</h2>
        <img 
          src="public/ChatGPT Image Apr 4, 2025, 09_07_51 AM.png" 
          alt="Nyangayi Otuya" 
          className="w-48 h-48 rounded-full mb-6"
        />
        <p className="text-slate-600 text-center">
          Nyangayi Otuya is the developer behind our Business Package, specializing in crafting online visibility solutions for Adult Family Home providers. With a background in web development and digital marketing, she builds professional email systems, user-friendly websites, and engaging social media profiles. Nyangayi combines technical expertise with a keen understanding of provider needs to deliver cohesive, high-impact digital presences that help homes attract residents and their families.
        </p>
      </div>
    </section>
  </div>
);

const WhyUsPage = () => (
  <div className="pt-32 pb-24 space-y-24">
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-16 text-center">Why AFH Providers Work With RADA ANALYTICS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "We Know CBHS and IBSS Specifically",
            desc: "We don't generalize. Our entire practice is built around the CBHS and IBSS programs and the AFH providers who participate in them. We know the MCOs, the documentation requirements, the retiering process, and the billing spreadsheet quirks."
          },
          {
            title: "We Do the Work, Not Just the Advice",
            desc: "Consulting that stops at recommendations isn't enough. When we take on your billing, we submit the claims. When we identify a retiering opportunity, we build the case and submit the form. You don't just get guidance — you get results."
          },
          {
            title: "We Translate Complexity Into Clarity",
            desc: "The MCO program involves ProviderOne, MCO portals, HCA guidance, and documentation standards that change regularly. We translate all of it into plain language and clear next steps so you're never left wondering what to do."
          },
          {
            title: "We Keep You Current",
            desc: "CBHS documentation guidance was updated as recently as February 2025. Clearinghouse billing is coming. We monitor these changes continuously and make sure you know what's changing and what it means for your home — before it becomes a problem."
          },
          {
            title: "We Make Data Accessible",
            desc: "You don't need to be a data analyst to benefit from your own billing data. We set up straightforward, useful reporting and walk you through what it means — so the information you're generating actually helps you make better decisions."
          }
        ].map((reason, i) => (
          <div key={i} className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm flex gap-6">
            <div className="text-4xl font-black text-emerald-100 flex-shrink-0">0{i+1}</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-2xl font-medium text-slate-900 italic leading-relaxed">
        "AFH providers are doing essential work. The MCO program is complex. RADA ANALYTICS exists to make sure that complexity never gets in the way of your residents getting the care they need — or your home getting paid for the care you provide."
      </p>
    </section>
  </div>
);

const ContactPage = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);

    const res = await fetch('https://formspree.io/f/xldpwppq', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });

    setStatus(res.ok ? 'success' : 'error');
  };

  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Let's Talk About Your Home</h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Whether you're new to CBHS or IBSS, dealing with denials, wondering if your residents are tiered correctly, or just trying to keep up with what HCA is changing next — we're here. Schedule a free consultation and let's figure out exactly where you need support.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">info@radaanalytics.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-slate-600">Federal Way, WA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input name="full_name" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">AFH Name</label>
                  <input name="afh_name" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Your Home Name" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input name="email" type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">How can we help?</label>
                <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Tell us about your billing or retiering needs..."></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-emerald-600 text-center font-medium">✅ Message sent! We'll be in touch soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center font-medium">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'services': return <ServicesPage />;
      case 'about': return <AboutPage />;
      case 'why-us': return <WhyUsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
