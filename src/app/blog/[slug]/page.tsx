import React from "react";
import Image from "next/image";
import { blogPosts } from "@/components/Blog/data";
import RelatedPosts from "@/components/Blog/RelatedPosts";
import { GoClock } from "react-icons/go";
import { FaFacebook, FaTwitter, FaLinkedin, FaLink } from "react-icons/fa";
import BackButton from "@/components/Common/BackButton";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }> | { slug: string };
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        }
    }
}

const SingleBlogPage = async ({ params }: Props) => {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3); // Show 3 related posts

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Post not found</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pt-10 pb-20 px-6">
            <div className="max-w-[1300px] mx-auto">

                {/* Back Button */}
                <BackButton />

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Main Content */}
                    <div className="flex-1 max-w-[800px]">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-black text-white text-xs font-medium font-['Sora']"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-[#1b1d20] text-3xl md:text-5xl font-bold font-['Clash Display'] leading-tight mb-4">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-4 text-[#1b1d20]/60 text-sm font-['Sora']">
                                <span>{post.date}</span>
                                <span className="w-1 h-1 rounded-full bg-current" />
                                <div className="flex items-center gap-1">
                                    <GoClock />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-10">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div
                            className="prose prose-lg max-w-none font-['Sora'] text-[#1b1d20]/80 prose-headings:font-['Clash Display'] prose-headings:text-[#1b1d20] prose-a:text-[#caef45]"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Share */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <p className="text-[#1b1d20] font-bold font-['Sora'] mb-4">Share with</p>
                            <div className="flex gap-4 text-xl text-[#1b1d20]">
                                <button className="hover:text-[#caef45] transition-colors"><FaFacebook /></button>
                                <button className="hover:text-[#caef45] transition-colors"><FaTwitter /></button>
                                <button className="hover:text-[#caef45] transition-colors"><FaLinkedin /></button>
                                <button className="hover:text-[#caef45] transition-colors"><FaLink /></button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[350px] flex-shrink-0">
                        <RelatedPosts posts={relatedPosts} />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default SingleBlogPage;
