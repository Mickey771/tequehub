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
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const itemRefs = React.useRef<Map<string, HTMLDivElement>>(new Map());

  React.useEffect(() => {
    if (activeMemberName && itemRefs.current && scrollContainerRef.current) {
      const activeElement = itemRefs.current.get(activeMemberName);
      if (activeElement) {
        // Calculate position to center the element
        const container = scrollContainerRef.current;
        const elementLeft = activeElement.offsetLeft;
        const elementWidth = activeElement.offsetWidth;
        const containerWidth = container.offsetWidth;

        const scrollTo = elementLeft - (containerWidth / 2) + (elementWidth / 2);

        container.scrollTo({
          left: scrollTo,
          behavior: "smooth",
        });
      }
    }
  }, [activeMemberName]);

  return (
    <section className="w-full max-w-[1300px] mx-auto px-6 lg:px-0 pb-20">
      <h2 className="text-[#1b1d20] text-3xl md:text-[40px] font-bold font-['Clash Display'] mb-10">
        Other Team Members
      </h2>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 lg:gap-10 pb-10 hide-scrollbar snap-x snap-mandatory"
      >
        {members.map((member, index) => (
          <div
            key={index}
            className="snap-center"
            ref={(el) => {
              if (el) {
                itemRefs.current?.set(member.name, el);
              } else {
                itemRefs.current?.delete(member.name);
              }
            }}
          >
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
