import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "./data";

interface RelatedPostsProps {
    posts: BlogPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-[#1b1d20] text-2xl font-bold font-['Clash Display']">
                Other Topics
            </h3>
            <div className="flex flex-col gap-6">
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col gap-3"
                    >
                        <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Tags Overlay */}
                            <div className="absolute top-3 left-3 flex gap-2">
                                {post.tags.slice(0, 1).map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-black/50 backdrop-blur-md rounded-full text-white text-[10px] font-medium font-['Sora']"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-[#1b1d20] text-lg font-bold font-['Clash Display'] leading-snug group-hover:text-[#caef45] transition-colors">
                                {post.title}
                            </h4>
                            <div className="flex items-center gap-2 text-[#1b1d20]/60 text-xs font-['Sora']">
                                <span>{post.date}</span>
                                <span className="w-1 h-1 rounded-full bg-current" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RelatedPosts;
