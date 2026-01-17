"use client";
import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between gap-4 text-left group"
            >
                <h3 className="text-[#1b1d20] text-lg md:text-xl font-bold font-['Clash Display'] group-hover:text-[#caef45] transition-colors">
                    {title}
                </h3>
                <GoChevronDown
                    className={`text-2xl text-[#1b1d20] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="pb-6 text-[#1b1d20]/70 font-['Sora'] leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
