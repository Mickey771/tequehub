"use client";
import React, { useState } from "react";
import FeaturedMember from "@/components/Team/FeaturedMember";
import SkillsSection from "@/components/Team/SkillsSection";
import TeamGrid from "@/components/Team/TeamGrid";
import { teamMembers, TeamMember } from "@/components/Team/data";

const TeamPage = () => {
    // Find Timothy for the initial featured section, or fallback to the first member
    const initialMember =
        teamMembers.find((member) => member.name === "Timothy") || teamMembers[0];

    const [activeMember, setActiveMember] = useState<TeamMember>(initialMember);
    const [isAutoRotating, setIsAutoRotating] = useState(true);

    // Auto-rotation effect
    React.useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isAutoRotating) {
            interval = setInterval(() => {
                setActiveMember((prev) => {
                    const currentIndex = teamMembers.findIndex((m) => m.name === prev.name);
                    const nextIndex = (currentIndex + 1) % teamMembers.length;
                    return teamMembers[nextIndex];
                });
            }, 5000); // Rotate every 5 seconds
        }

        return () => clearInterval(interval);
    }, [isAutoRotating]);

    const handleMemberSelect = (member: TeamMember) => {
        setActiveMember(member);
        setIsAutoRotating(false); // Stop auto-rotation when user manually selects
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navbar and Footer are provided by MainLayout in standard Next.js app directory structure if configured there. 
          The user requested to remove them if they duplicate. 
          Assuming layout.tsx wraps this page, we remove explicit Navbar and Footer components.
      */}
            <FeaturedMember member={activeMember} />
            <SkillsSection skills={activeMember.skills} />
            <TeamGrid
                members={teamMembers}
                onMemberSelect={handleMemberSelect}
                activeMemberName={activeMember.name}
            />
        </div>
    );
};

export default TeamPage;
