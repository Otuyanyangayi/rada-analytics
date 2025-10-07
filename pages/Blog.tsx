
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-neutral-100 py-16 text-center">
        <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900">{title}</h1>
            <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);


const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-6 flex-grow flex flex-col">
            <p className="text-sm font-semibold text-primary-dark mb-1">{post.category}</p>
            <h3 className="text-xl font-bold font-display text-neutral-900 mb-2 flex-grow">{post.title}</h3>
            <p className="text-neutral-500 mb-4">{post.excerpt}</p>
            <div className="mt-auto pt-4 border-t border-neutral-200 flex items-center text-sm text-neutral-500">
                <span>By {post.author}</span>
                <span className="mx-2">&bull;</span>
                <span>{post.date}</span>
            </div>
        </div>
    </div>
);

const Blog: React.FC = () => {
    return (
        <div>
            <PageHeader title="Resources & Insights" subtitle="Expert advice on bookkeeping, business growth, and financial strategy." />
            
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post, index) => (
                           <BlogCard key={index} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
