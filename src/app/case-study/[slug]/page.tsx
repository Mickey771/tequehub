import React from "react";
import { caseStudies } from "@/components/CaseStudy/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const study = caseStudies.find((s) => s.id === resolvedParams.slug);

    if (!study) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${study.title} Case Study | Teque Hub`,
        description: study.description,
    };
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.id,
    }));
}

const CaseStudyDetailsPage = async ({ params }: Props) => {
    const resolvedParams = await params;
    const study = caseStudies.find((s) => s.id === resolvedParams.slug);

    if (!study) {
        notFound();
    }

    return (
        <main className={`min-h-screen pb-20 pt-[100px] ${study.themeColor} bg-opacity-10`}>
            <div className="w-full max-w-[1240px] mx-auto px-6 xl:px-0">
                <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
                    <div className="flex-1">
                        <div className="mb-6">
                            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm">
                                {study.industry}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-sora text-[#1A1A1A] mb-6">
                            {study.title}
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            {study.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {study.platforms?.map((platform, i) => (
                                <span key={i} className="px-5 py-2 bg-[#161616] text-white rounded-xl text-sm font-medium">
                                    {platform}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className={`relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl ${study.themeColor}`}>
                            <Image
                                src={study.image}
                                alt={`${study.title} mockup`}
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
                    <div className="bg-white p-8 rounded-3xl shadow-sm">
                        <h3 className="text-xl font-bold mb-4">Challenge</h3>
                        <p className="text-gray-600">
                            Detailed analysis of the challenges faced during the {study.title} project.
                            (Content to be expanded)
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm">
                        <h3 className="text-xl font-bold mb-4">Solution</h3>
                        <p className="text-gray-600">
                            How Teque Hub approached and solved the problems using modern technology.
                            (Content to be expanded)
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm">
                        <h3 className="text-xl font-bold mb-4">Result</h3>
                        <p className="text-gray-600">
                            The impact and outcomes of the delivered solution.
                            (Content to be expanded)
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CaseStudyDetailsPage;
