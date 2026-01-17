import React from "react";
import ServiceCard from "@/components/Services/ServiceCard";
import { servicesData } from "@/components/Services/data";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata = genMeta({
    title: "Software Development Services | Teque Hub",
    description: "Full-stack software engineering, AI automation, mobile app development, and IT consulting services. We build scalable solutions for startups and enterprises.",
    path: "/services",
});

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="py-20 md:py-32 px-6 bg-[#FAFAFA]">
                <div className="max-w-[1300px] mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-['Clash Display'] text-[#161616] mb-6">
                        Our Services
                    </h1>
                    <p className="max-w-[800px] mx-auto text-[#525252] text-lg md:text-xl font-['Sora'] leading-relaxed">
                        At Teque Hub, we take pride in offering a comprehensive suite of technology services
                        designed to cater to the diverse needs of businesses and startups in today&apos;s digital
                        landscape.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-[1300px] mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={<service.icon />}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
