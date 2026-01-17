"use client";
import React from "react";
import BlogGrid from "@/components/Blog/BlogGrid";
import { blogPosts } from "@/components/Blog/data";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";

const BlogCataloguePage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section in Catalogue */}
            <div className="w-full bg-[#f5f5f5] pt-32 pb-16 px-6">
                <div className="max-w-[1300px] mx-auto">
                    <Link href="/blog" className="flex items-center gap-2 text-[#1b1d20]/70 hover:text-[#black] transition-colors mb-6 font-['Sora']">
                        <GoArrowLeft className="text-xl" />
                        <span>Back</span>
                    </Link>
                    <h1 className="text-[#1b1d20] text-4xl md:text-5xl font-bold font-['Clash Display']">
                        Our Blog Catalogue
                    </h1>
                    <p className="text-[#1b1d20]/70 mt-4 max-w-[600px] font-['Sora']">
                        Explore our collection of articles on technology, design, and innovation.
                    </p>
                </div>
            </div>

            {/* The Grid */}
            <BlogGrid posts={blogPosts} />
        </div>
    );
};

export default BlogCataloguePage;
