import React from "react";
import BackButton from "@/components/Common/BackButton";

// This page replaces the dynamic blog post page to fix build errors.
// The original code is backed up in page.tsx.bak

export default function SingleBlogPage() {
    return (
        <div className="min-h-screen bg-white pt-20 px-6">
            <div className="max-w-[1300px] mx-auto text-center">
                <BackButton />
                <div className="flex flex-col items-center justify-center min-h-[50vh]">
                    <h1 className="text-4xl md:text-6xl font-bold font-['Clash Display'] text-[#161616] mb-6">
                        Work in Progress
                    </h1>
                    <p className="max-w-[800px] mx-auto text-[#525252] text-lg md:text-xl font-['Sora'] leading-relaxed">
                        This page is still in progress. We are working hard to bring you great content!
                    </p>
                </div>
            </div>
        </div>
    );
}
