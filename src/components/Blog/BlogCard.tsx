import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "./data";
import { GoClock } from "react-icons/go";

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <Link href={`/blog/${post.slug}`} className="group cursor-pointer">
            <div className="flex flex-col gap-4">
                {/* Image Container */}
                <div className="relative w-full h-[250px] rounded-2xl overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Tags Overlay */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        {post.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-white text-xs font-medium font-['Sora']"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-[#1b1d20] text-2xl font-bold font-['Clash Display'] leading-tight group-hover:text-[#caef45] transition-colors">
                        {post.title}
                    </h3>
                    {/* Metadata */}
                    <div className="flex items-center gap-3 text-[#1b1d20]/60 text-sm font-['Sora']">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-current" />
                        <div className="flex items-center gap-1">
                            <GoClock />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                    <p className="text-[#1b1d20]/70 text-base font-['Sora'] line-clamp-3">
                        {post.excerpt}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
