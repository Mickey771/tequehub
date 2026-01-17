"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";

const BackButton = () => {
    const router = useRouter();
    return (
        <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#1b1d20]/70 hover:text-[#caef45] transition-colors mb-8 font-['Sora']"
        >
            <GoArrowLeft className="text-xl" />
            <span>Back to Blog</span>
        </button>
    );
};

export default BackButton;
