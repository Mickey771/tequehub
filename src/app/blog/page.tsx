"use client";
import React from "react";
import BlogHero from "@/components/Blog/BlogHero";

const BlogPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <BlogHero />
            {/* The list of blogs has been moved to /blog/catalogue */}
        </div>
    );
};

export default BlogPage;
