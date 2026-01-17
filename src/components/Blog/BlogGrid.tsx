import React from "react";
import BlogCard from "./BlogCard";
import { BlogPost } from "./data";

interface BlogGridProps {
    posts: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
    return (
        <section className="w-full max-w-[1300px] mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
};

export default BlogGrid;
