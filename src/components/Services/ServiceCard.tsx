"use client";
import React, { useState } from "react";
import { IconType } from "react-icons";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 150;
    const shouldTruncate = description.length > maxLength;

    const displayContent = isExpanded || !shouldTruncate
        ? description
        : `${description.slice(0, maxLength)}...`;

    return (
        <div className="bg-[#FAFAFA] rounded-[24px] p-8 border border-transparent hover:border-[#161616] transition-all duration-300">
            <div className="w-14 h-14 bg-[#161616] rounded-full flex items-center justify-center mb-6 text-white text-2xl">
                {icon}
            </div>
            <h3 className="text-2xl font-bold font-['Clash Display'] mb-4 text-[#161616]">
                {title}
            </h3>
            <p className="text-[#525252] font-['Sora'] leading-relaxed mb-4">
                {displayContent}
            </p>
            {shouldTruncate && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[#161616] font-bold font-['Sora'] hover:underline"
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            )}
        </div>
    );
};

export default ServiceCard;
