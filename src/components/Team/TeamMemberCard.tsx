import React from "react";
import Image from "next/image";
import { TeamMember } from "./data";

interface TeamMemberCardProps {
    member: TeamMember;
    onClick?: () => void;
    isActive?: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, onClick, isActive }) => {
    return (
        <div
            onClick={onClick}
            className={`relative w-[300px] md:w-[350px] flex-shrink-0 h-[400px] md:h-[480px] rounded-[24px] overflow-hidden group cursor-pointer transition-all duration-300 ${isActive ? 'ring-4 ring-[#caef45]' : ''}`}
        >
            <Image
                src={member.image}
                alt={`${member.name} ${member.surname}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-[32px] font-bold font-['Clash Display'] leading-9 mb-1">
                    <span className="text-[#caef45]">{member.name}</span> <br />
                    <span className="text-white">{member.surname}.</span>
                </h3>
                <p className="text-white/80 text-base font-['Sora']">{member.role}</p>
            </div>
        </div>
    );
};

export default TeamMemberCard;
