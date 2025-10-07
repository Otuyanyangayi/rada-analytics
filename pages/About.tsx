
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { TeamMember } from '../types';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-neutral-100 py-16 text-center">
        <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900">{title}</h1>
            <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const About: React.FC = () => {
    return (
        <div>
            <PageHeader title="About RADA ANALYTICS" subtitle="The people and passion behind your financial clarity." />

            {/* Company Story Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src="https://picsum.photos/seed/about/800/600" alt="Office meeting" className="rounded-lg shadow-xl" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">Our Story</h2>
                            <p className="text-lg text-neutral-500 mb-4">
                                RADA ANALYTICS was founded on a simple but powerful observation: most small businesses have their financial data, but few have the time or expertise to extract meaningful insights from it. Bookkeeping was seen as a chore for tax season, not a tool for growth.
                            </p>
                            <p className="text-lg text-neutral-500">
                                We set out to change that. By seamlessly integrating meticulous bookkeeping with insightful business analytics, we empower our clients to not only understand their past performance but to confidently shape their future. Our mission is to be the analytical engine that drives your strategic decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="bg-neutral-100 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900">Meet Our Experts</h2>
                        <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">A dedicated team of finance and data professionals committed to your success.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TEAM_MEMBERS.map((member: TeamMember) => (
                            <div key={member.name} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                                <h3 className="text-xl font-bold font-display text-neutral-900">{member.name}</h3>
                                <p className="text-primary-dark font-semibold mb-2">{member.role}</p>
                                <p className="text-neutral-500">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
