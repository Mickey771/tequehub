import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialCardProps {
    name: string;
    role: string;
    company: string;
    feedback: string;
    image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    name,
    role,
    company,
    feedback,
    image,
}) => {
    return (
        <div className="group w-full md:w-[400px] flex-shrink-0 bg-[#F5F5F5] rounded-[24px] p-8 flex flex-col justify-between h-full min-h-[300px] hover:shadow-lg transition-shadow duration-300">
            <div>
                <FaQuoteLeft className="text-[#caef45] text-4xl mb-6" />
                <p className="text-[#1b1d20]/80 font-['Sora'] text-lg leading-relaxed mb-8 line-clamp-5 group-hover:line-clamp-none transition-all duration-300">
                    "{feedback}"
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                    {image ? (
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#1b1d20] text-white font-bold text-xl">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>
                <div>
                    <h4 className="text-[#1b1d20] font-bold font-['Clash Display'] text-lg">
                        {name}
                    </h4>
                    <p className="text-[#1b1d20]/60 text-sm font-['Sora']">
                        {role}, {company}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
