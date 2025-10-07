
import React from 'react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-neutral-100 py-16 text-center">
        <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900">{title}</h1>
            <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const Services: React.FC = () => {
    return (
        <div>
            <PageHeader title="Our Services" subtitle="Tailored financial solutions to build your foundation and drive your growth." />
            
            <section className="py-20">
                <div className="container mx-auto px-6 space-y-16">
                    {/* Bookkeeping Services */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">Precision Bookkeeping Services</h2>
                            <p className="text-lg text-neutral-500 mb-6">A solid financial foundation is non-negotiable. Our bookkeeping services ensure your records are accurate, up-to-date, and compliant, freeing you to focus on running your business.</p>
                            <ul className="space-y-4">
                                <li className="flex items-start"><CheckIcon /><span>Accounts Payable & Receivable Management</span></li>
                                <li className="flex items-start"><CheckIcon /><span>Payroll Processing & Administration</span></li>
                                <li className="flex items-start"><CheckIcon /><span>Bank & Credit Card Reconciliation</span></li>
                                <li className="flex items-start"><CheckIcon /><span>Monthly Financial Statement Preparation (P&L, Balance Sheet, Cash Flow)</span></li>
                            </ul>
                        </div>
                        <img src="https://picsum.photos/seed/services1/800/600" alt="Bookkeeping" className="rounded-lg shadow-xl" />
                    </div>

                    {/* Business Analytics Services */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img src="https://picsum.photos/seed/services2/800/600" alt="Analytics" className="rounded-lg shadow-xl md:order-last" />
                        <div>
                            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">Actionable Business Analytics</h2>
                            <p className="text-lg text-neutral-500 mb-6">Data is just data until you make it meaningful. We dive deep into your financials to uncover trends, identify opportunities, and provide the insights you need to make informed, strategic decisions.</p>
                            <ul className="space-y-4">
                                <li className="flex items-start"><CheckIcon /><span>Cash Flow Analysis & Forecasting</span></li>
                                <li className="flex items-start"><CheckIcon /><span>Budgeting & Variance Analysis</span></li>
                                <li className="flex items-start"><CheckIcon /><span>Key Performance Indicator (KPI) Tracking & Dashboards</span></li>
                                <li className="flex items-start"><CheckIcon /><span>Profitability Analysis by Service/Product</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-neutral-100 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900">Service Packages</h2>
                        <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">Transparent pricing for businesses at every stage. We also offer custom packages.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Package 1 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-neutral-200">
                            <h3 className="text-2xl font-bold font-display text-neutral-900 mb-2">Essential Bookkeeping</h3>
                            <p className="text-neutral-500 mb-6">For startups and small businesses needing a solid financial foundation.</p>
                            <p className="text-4xl font-bold text-neutral-900 mb-6">$499<span className="text-lg font-normal text-neutral-500">/mo</span></p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex"><CheckIcon /><span>Core Bookkeeping Services</span></li>
                                <li className="flex"><CheckIcon /><span>Monthly Financial Reports</span></li>
                            </ul>
                            <button className="w-full bg-neutral-200 text-neutral-800 py-3 rounded-md font-semibold hover:bg-neutral-300 transition-colors">Get Started</button>
                        </div>
                        {/* Package 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary-dark transform scale-105">
                            <p className="text-center font-semibold bg-primary-dark text-white py-1 rounded-t-md -mt-8 mx-[-2rem] mb-8">Most Popular</p>
                            <h3 className="text-2xl font-bold font-display text-neutral-900 mb-2">Growth Partner</h3>
                            <p className="text-neutral-500 mb-6">For growing businesses that need both bookkeeping and regular insights.</p>
                            <p className="text-4xl font-bold text-neutral-900 mb-6">$999<span className="text-lg font-normal text-neutral-500">/mo</span></p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex"><CheckIcon /><span>All Essential Services</span></li>
                                <li className="flex"><CheckIcon /><span>Quarterly Analytics Review</span></li>
                                <li className="flex"><CheckIcon /><span>KPI Dashboard Access</span></li>
                            </ul>
                            <button className="w-full bg-primary-light text-white py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors">Get Started</button>
                        </div>
                        {/* Package 3 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-neutral-200">
                            <h3 className="text-2xl font-bold font-display text-neutral-900 mb-2">Strategic CFO</h3>
                            <p className="text-neutral-500 mb-6">For established businesses seeking high-level financial strategy.</p>
                             <p className="text-4xl font-bold text-neutral-900 mb-6">Custom<span className="text-lg font-normal text-neutral-500"></span></p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex"><CheckIcon /><span>All Growth Services</span></li>
                                <li className="flex"><CheckIcon /><span>Advanced Financial Modeling</span></li>
                                <li className="flex"><CheckIcon /><span>Strategic Planning & Forecasting</span></li>
                            </ul>
                            <button className="w-full bg-neutral-200 text-neutral-800 py-3 rounded-md font-semibold hover:bg-neutral-300 transition-colors">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
