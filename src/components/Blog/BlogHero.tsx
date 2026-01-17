"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogHero = () => {
    return (
        <section className="relative w-full max-w-[1300px] mx-auto px-6 pt-32 pb-40 flex flex-col items-center">
            {/* Main Content */}
            <div className="flex flex-col items-center gap-6 text-center max-w-[800px] z-10">
                <h1 className="text-[#1b1d20] text-4xl md:text-6xl lg:text-[64px] font-bold font-['Clash Display'] leading-tight">
                    Have an amazing experience with our Blogs.
                </h1>
                <p className="text-[#1b1d20]/70 text-base md:text-lg font-['Sora'] leading-relaxed max-w-[600px]">
                    Teque provides you with diverse topics on Technology to properly
                    enlighten you on what’s best for your projects.
                </p>
                <Link href="/blog/catalogue">
                    <button className="px-8 py-3 bg-[#1b1d20] rounded-[100px] text-white text-base font-medium font-['Sora'] mt-4 hover:bg-black/80 transition-colors">
                        Check out our Blog
                    </button>
                </Link>
            </div>

            {/* Floating Images (Decorative) */}

            {/* Left Group */}
            <div className="hidden lg:block absolute bottom-10 left-[0%] w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg z-0">
                <Image
                    src="/images/blog/9fafd71fcaf807d27868bc021bfd2b706ca4a104.png"
                    alt="Reader"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="hidden lg:block absolute bottom-[25%] left-[5%] w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg z-0">
                <Image
                    src="/images/blog/Ellipse 256.png"
                    alt="Reader"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Center-Left Group */}
            <div className="hidden lg:block absolute top-[65%] left-[25%] w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg z-0">
                <Image
                    src="/images/blog/b73f7d3f3f97b55b8691134f55142949dcc75229.png"
                    alt="Reader"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Center-Bottom Group */}
            <div className="hidden lg:block absolute bottom-0 left-[38%] w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg z-0">
                <Image
                    src="/images/blog/Ellipse 257.png"
                    alt="Reader"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Center-Right Group */}
            <div className="hidden lg:block absolute top-[65%] right-[30%] w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg z-0">
                <Image
                    src="/images/blog/0c27648bdc88f3209ccfbcc5d9b9d169cf99426c.png"
                    alt="Reader"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="hidden lg:block absolute bottom-[20%] right-[22%] w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg z-0">
                <Image
                    src="/images/blog/e1510bf92e503b24bd6f16dfd4f7bd4643d7dff7.png"
                    alt="Reader"
                    fill
                    className="object-cover"
                />
            </div>


            {/* Far Right Group */}
            <div className="hidden lg:block absolute top-[60%] right-[5%] w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg z-0">
                <Image
                    src="/images/blog/Ellipse 259.png"
                    alt="Reader"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="hidden lg:block absolute bottom-[10%] right-[0%] w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg z-0">
                <Image
                    src="/images/blog/Ellipse 261.png"
                    alt="Reader"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    );
};

export default BlogHero;
