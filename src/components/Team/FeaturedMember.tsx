import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { TeamMember } from "./data";

interface FeaturedMemberProps {
    member: TeamMember;
}

const FeaturedMember: React.FC<FeaturedMemberProps> = ({ member }) => {
    return (
        <div className="w-full max-w-[1300px] mx-auto px-6 lg:px-0 pt-10 md:pt-20">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[134px] items-center">
                {/* Image Card */}
                <div className="relative w-full lg:w-[650px] h-[400px] sm:h-[500px] md:h-[600px] rounded-[32px] overflow-hidden bg-[#1B1D20]">
                    <Image
                        src={member.image}
                        alt={`${member.name} ${member.surname}`}
                        fill
                        className="object-cover object-top"
                    />
                    <div className="absolute top-10 left-10 z-10">
                        <h2 className="text-[#caef45] text-[32px] font-bold font-['Clash Display'] leading-9">
                            {member.name}
                            <br />
                            <span className="text-white">{member.surname}</span>
                        </h2>
                        <p className="text-white text-base font-normal font-['Sora'] mt-2">
                            {member.role}
                        </p>
                    </div>
                    <div className="absolute bottom-10 left-10">
                        <div className="w-[60px] h-[60px] bg-[#caef45] rounded-full flex items-center justify-center">
                            <GoArrowUpRight className="text-black text-3xl" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-6 lg:w-[480px]">
                    <h1 className="text-[#1b1d20] text-[40px] sm:text-[50px] md:text-[64px] font-bold font-['Clash Display'] leading-[1.1]">
                        Meet {member.name}
                        <span className="text-[#caef45]">.</span>
                    </h1>
                    <p className="text-[#212121] text-lg sm:text-xl font-normal font-['Sora'] leading-[30px] sm:leading-[33.60px]">
                        {member.description}
                    </p>
                    <button className="h-[60px] px-8 py-4 bg-[#1b1d20] rounded-[100px] border justify-center items-center gap-2.5 inline-flex w-fit pop-hover-btn">
                        <span className="text-white text-base font-normal font-['Aeonik'] uppercase tracking-wider">
                            JOIN OUR TEAM
                        </span>
                        <GoArrowUpRight className="text-white text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedMember;
