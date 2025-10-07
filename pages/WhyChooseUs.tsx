
import React from 'react';
import { DIFFERENTIATORS } from '../constants';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-neutral-100 py-16 text-center">
        <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900">{title}</h1>
            <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const WhyChooseUs: React.FC = () => {
    return (
        <div>
            <PageHeader title="Why Choose RADA ANALYTICS?" subtitle="We're more than just number crunchers. We're your strategic financial partners." />

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {DIFFERENTIATORS.map((item, index) => (
                            <div key={index} className="flex items-start space-x-6">
                                <div className="flex-shrink-0 bg-primary-light text-white p-4 rounded-full">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-display text-neutral-900 mb-2">{item.title}</h3>
                                    <p className="text-neutral-500">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-primary-dark">
                <div className="container mx-auto px-6 py-20">
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <h2 className="text-3xl font-display font-bold mb-4">The Power of the Integrated Approach</h2>
                            <p className="text-lg text-blue-200 mb-4">
                                Separating bookkeeping from analysis is like having an engine without a steering wheel. You might be moving, but you don't know where you're going.
                            </p>
                            <p className="text-lg text-blue-200">
                                At RADA ANALYTICS, we believe clean books are the fuel, and sharp analysis is the GPS. By handling both, we ensure the data feeding your strategic decisions is flawless, and the insights we provide are grounded in the reality of your day-to-day operations. This synergy saves you time, reduces errors, and ultimately leads to smarter, faster growth.
                            </p>
                        </div>
                        <div>
                             <img src="https://picsum.photos/seed/why/800/600" alt="Integrated approach visualization" className="rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChooseUs;
