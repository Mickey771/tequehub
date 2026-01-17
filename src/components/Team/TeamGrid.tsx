import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import TeamMemberCard from "./TeamMemberCard";
import { TeamMember } from "./data";

interface TeamGridProps {
  members: TeamMember[];
  onMemberSelect: (member: TeamMember) => void;
  activeMemberName: string;
}

const TeamGrid: React.FC<TeamGridProps> = ({ members, onMemberSelect, activeMemberName }) => {
  return (
    <section className="w-full max-w-[1300px] mx-auto px-6 lg:px-0 pb-20">
      <h2 className="text-[#1b1d20] text-3xl md:text-[40px] font-bold font-['Clash Display'] mb-10">
        Other Team Members
      </h2>

      <div className="flex overflow-x-auto gap-6 lg:gap-10 pb-10 hide-scrollbar snap-x snap-mandatory">
        {members.map((member, index) => (
          <div key={index} className="snap-center">
            <TeamMemberCard
              member={member}
              onClick={() => onMemberSelect(member)}
              isActive={member.name === activeMemberName}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="h-[60px] px-8 py-4 bg-[#1b1d20] rounded-[100px] justify-center items-center gap-2.5 inline-flex pop-hover-btn">
          <span className="text-white text-base font-normal font-['Aeonik'] uppercase tracking-wider">
            GET OUR SERVICES
          </span>
          <GoArrowUpRight className="text-white text-xl" />
        </button>
      </div>
    </section>
  );
};

export default TeamGrid;
