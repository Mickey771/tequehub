import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Teque Hub",
    description: "Learn about Teque Hub, a catalyst for growth and innovation in the tech industry. We nurture talent and build custom software solutions.",
};

const AboutPage = () => {
    return (
        <main className="pt-[100px] pb-20 px-6 xl:px-0 w-full max-w-[1240px] mx-auto">
            <div className="flex flex-col gap-10">
                {/* Hero Section */}
                <section className="flex flex-col lg:flex-row gap-10 items-center">
                    <div className="flex-1">
                        <h1 className="text-[#161616] text-4xl md:text-5xl lg:text-6xl font-semibold font-['Poppins'] mb-6">
                            About Teque Hub
                        </h1>
                        <p className="text-[#333333] text-lg leading-relaxed font-['Poppins']">
                            Teque Hub is not just a service provider; they are also a catalyst for growth and
                            innovation in the tech industry. Recognizing the importance of nurturing new talent,
                            Teque Hub has established a robust recruitment and training program to identify,
                            attract, and develop aspiring developers. They actively seek out individuals with a
                            passion for technology and a desire to make a difference, providing them with the
                            tools, resources, and mentorship needed to succeed in the field.
                        </p>
                    </div>
                    <div className="flex-1 w-full relative h-[400px] rounded-2xl overflow-hidden bg-gray-100">
                        {/* Placeholder for About Us Image - User can replace later */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            <span className="text-xl">About Us Image</span>
                        </div>
                    </div>
                </section>

                {/* Mission/Vision Section */}
                <section className="flex flex-col lg:flex-row-reverse gap-10 items-center mt-10">
                    <div className="flex-1">
                        <h2 className="text-[#161616] text-3xl md:text-4xl font-semibold font-['Poppins'] mb-6">
                            Proactive Problem Solvers
                        </h2>
                        <p className="text-[#333333] text-lg leading-relaxed font-['Poppins']">
                            In a world where businesses face an ever-growing array of challenges, Teque Hub
                            stands out as a proactive problem-solver. They understand that off-the-shelf solutions
                            rarely meet the unique needs of every client, which is why they dedicate significant
                            resources to research and development. Teque Hub's team of creative thinkers and
                            experienced professionals continuously explores new technologies, methodologies, and
                            approaches to tackle the most pressing issues faced by businesses today.
                        </p>
                    </div>
                    <div className="flex-1 w-full relative h-[400px] rounded-2xl overflow-hidden bg-gray-100">
                        {/* Placeholder for Team/Innovation Image */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            <span className="text-xl">Innovation Image</span>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="mt-20 text-center bg-[#161616] text-white py-16 rounded-3xl">
                    <h2 className="text-3xl md:text-4xl font-semibold font-['Poppins'] mb-6">
                        Ready to innovate with us?
                    </h2>
                    <Link href="/meet-with-us">
                        <button className="px-8 py-4 bg-white text-[#161616] rounded-xl text-lg font-semibold hover:bg-gray-200 transition-colors">
                            Meet with Us
                        </button>
                    </Link>
                </section>
            </div>
        </main>
    );
};

export default AboutPage;
