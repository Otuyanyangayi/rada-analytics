
import React from 'react';
import { Page, Service, Testimonial } from '../types';
import { SERVICES_OVERVIEW, TESTIMONIALS } from '../constants';

interface HomeProps {
    setCurrentPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-neutral-100">
                <div className="container mx-auto px-6 py-20 md:py-32 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-neutral-900 leading-tight">
                        Don't Just Balance Your Books.
                        <br />
                        <span className="text-primary-dark">Understand Your Business.</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-neutral-500 max-w-3xl mx-auto">
                        RADA ANALYTICS integrates precision bookkeeping with powerful business analytics to transform your financial data into a roadmap for growth.
                    </p>
                    <div className="mt-10 flex justify-center space-x-4">
                        <button onClick={() => setCurrentPage(Page.Services)} className="bg-primary-light text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-dark transition-transform hover:scale-105">
                            Our Services
                        </button>
                        <button onClick={() => setCurrentPage(Page.Contact)} className="bg-white text-primary-dark border border-primary-dark px-8 py-3 rounded-md font-semibold hover:bg-neutral-100 transition-transform hover:scale-105">
                            Get a Free Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900">The RADA Integrated Approach</h2>
                        <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">We combine foundational bookkeeping with forward-looking analytics to give you a complete financial picture.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {SERVICES_OVERVIEW.map((service: Service) => (
                            <div key={service.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-neutral-200">
                                <div className="text-primary-light mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold font-display text-neutral-900 mb-2">{service.title}</h3>
                                <p className="text-neutral-500">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="bg-neutral-100 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900">Trusted by Growing Businesses</h2>
                        <p className="mt-4 text-lg text-neutral-500">Here's what our clients have to say about our partnership.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial: Testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
                                <p className="text-neutral-700 italic text-lg mb-6 flex-grow">"{testimonial.quote}"</p>
                                <div>
                                    <p className="font-bold text-neutral-900">{testimonial.author}</p>
                                    <p className="text-neutral-500">{testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* CTA Section */}
            <section className="bg-primary-dark text-white">
                <div className="container mx-auto px-6 py-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold">Ready to See the Full Picture?</h2>
                    <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">Let RADA ANALYTICS show you the story behind your numbers. Schedule your free, no-obligation consultation today.</p>
                    <div className="mt-8">
                        <button onClick={() => setCurrentPage(Page.Contact)} className="bg-secondary text-neutral-900 px-8 py-3 rounded-md font-semibold hover:bg-amber-400 transition-transform hover:scale-105">
                            Schedule a Consultation
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
