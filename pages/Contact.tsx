
import React from 'react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-neutral-100 py-16 text-center">
        <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900">{title}</h1>
            <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const Contact: React.FC = () => {
    return (
        <div>
            <PageHeader title="Get in Touch" subtitle="Let's talk about how we can help your business grow. Reach out for a free consultation." />

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-5 gap-12">
                        {/* Contact Form */}
                        <div className="md:col-span-3 bg-white p-8 rounded-lg shadow-lg border">
                            <h2 className="text-2xl font-bold font-display text-neutral-900 mb-6">Send Us a Message</h2>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-neutral-700 mb-1">First Name</label>
                                        <input type="text" id="first-name" className="w-full p-3 border border-neutral-300 rounded-md focus:ring-primary-light focus:border-primary-light" />
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-neutral-700 mb-1">Last Name</label>
                                        <input type="text" id="last-name" className="w-full p-3 border border-neutral-300 rounded-md focus:ring-primary-light focus:border-primary-light" />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                                    <input type="email" id="email" className="w-full p-3 border border-neutral-300 rounded-md focus:ring-primary-light focus:border-primary-light" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                                    <textarea id="message" rows={5} className="w-full p-3 border border-neutral-300 rounded-md focus:ring-primary-light focus:border-primary-light"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary-light text-white py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors">
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>
                        {/* Contact Info */}
                        <div className="md:col-span-2">
                            <div className="bg-white p-8 rounded-lg shadow-lg border h-full">
                                <h2 className="text-2xl font-bold font-display text-neutral-900 mb-6">Contact Information</h2>
                                <div className="space-y-4 text-neutral-700">
                                    <p className="flex items-center"><PhoneIcon /> <a href="tel:+1234567890" className="ml-3 hover:text-primary-dark">(123) 456-7890</a></p>
                                    <p className="flex items-center"><EmailIcon /> <a href="mailto:contact@radaanalytics.com" className="ml-3 hover:text-primary-dark">contact@radaanalytics.com</a></p>
                                    <div className="flex items-start"><LocationIcon /><div className="ml-3">
                                        <p>123 Analytics Ave, Suite 100</p>
                                        <p>Data City, DC 12345</p>
                                    </div></div>
                                </div>
                                <div className="mt-8 rounded-lg overflow-hidden">
                                     <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.213506245318!2d-73.98824368459393!3d40.75797477932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6434227%3A0x1d32a13f6fbf45!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1633379555026!5m2!1sen!2sus"
                                        width="100%"
                                        height="250"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        title="Office Location"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Icons
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);


export default Contact;
