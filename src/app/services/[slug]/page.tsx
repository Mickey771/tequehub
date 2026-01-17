import React from "react";
import { servicesData } from "@/components/Services/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const service = servicesData.find((s) => s.slug === resolvedParams.slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | Teque Hub Services`,
        description: service.description,
    };
}

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

const ServiceDetailsPage = async ({ params }: Props) => {
    const resolvedParams = await params;
    const service = servicesData.find((s) => s.slug === resolvedParams.slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <main className="pt-[100px] pb-20 px-6 xl:px-0 w-full max-w-[1240px] mx-auto min-h-screen">
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6">
                    <div className="p-4 bg-gray-100 rounded-2xl">
                        <Icon className="text-4xl text-[#161616]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-['Poppins'] text-[#161616]">
                        {service.title}
                    </h1>
                </div>

                <div className="prose max-w-none">
                    <p className="text-[#333333] text-lg md:text-xl leading-relaxed font-['Poppins']">
                        {service.description}
                    </p>

                    <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                        <h2 className="text-2xl font-semibold mb-4 text-[#161616]">Why Choose Teque Hub for {service.title}?</h2>
                        <p className="text-gray-600 mb-6">
                            We bring years of expertise and a dedicated team to deliver top-tier {service.title.toLowerCase()} solutions.
                            Our approach ensures scalability, security, and performance tailored to your specific business needs.
                        </p>
                        <button className="px-6 py-3 bg-[#161616] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">
                            Get Started with {service.title}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ServiceDetailsPage;
