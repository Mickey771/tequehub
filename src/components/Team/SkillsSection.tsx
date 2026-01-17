import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { RxActivityLog } from "react-icons/rx"; // Placeholder for sparkle icon
import { Skill } from "./data";

interface SkillsSectionProps {
    skills?: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills = [] }) => {
    return (
        <section className="w-full py-20 px-6 overflow-hidden">
            <div className="w-full max-w-[1000px] mx-auto flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="text-[#1b1d20] text-3xl md:text-[40px] font-bold font-['Clash Display'] leading-tight flex items-start gap-2">
                        <RxActivityLog className="text-2xl mt-1 text-gray-400 rotate-45" />
                        <div>
                            Skills they have
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 max-w-[900px]">
                    {skills.length > 0 ? (
                        skills.map((skill, index) => (
                            <div
                                key={index}
                                className="px-6 py-3 bg-[#f5f5f5] rounded-lg flex items-center gap-3 hover:bg-[#e0e0e0] transition-colors cursor-default"
                            >
                                <skill.icon className="text-xl text-black" />
                                <span className="text-[#1b1d20] text-base font-medium font-['Sora']">
                                    {skill.name}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No specific skills listed.</p>
                    )}
                </div>

                <button className="h-[60px] px-8 py-4 bg-[#caef45] rounded-[100px] justify-center items-center gap-2.5 inline-flex pop-hover-btn mt-6">
                    <span className="text-[#1b1d20] text-base font-bold font-['Aeonik'] uppercase tracking-wider">
                        GET OUR SERVICES
                    </span>
                    <GoArrowUpRight className="text-black text-xl" />
                </button>
            </div>
        </section>
    );
};

export default SkillsSection;
