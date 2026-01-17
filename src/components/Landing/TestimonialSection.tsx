"use client";
import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const testimonials = [
    {
        name: "Tristrum Muhammed",
        role: "CEO",
        company: "Micro Statik LLC",
        feedback:
            "Good help is so hard to find! There's no words to define Mr. Favour & Team work ethics but it is 100/10! I HIGHLY RECOMMEND!"
    },
    {
        name: "Sajjad Syed",
        role: "CEO",
        company: "Urunner",
        feedback:
            "We are extremely satisfied with the work that Mickey and his team did for us. They followed each requirement to the minutest detail and created a stellar product. Our users love the new website and we have received such great positive feedback, They are always available to connect and communicate promptly. They are so easy to work with. We are already preparing the next task for Mickey. I would highly recommended connecting with Mickey for all your development needs! They will deliver outstanding results! Thanks Mickey!!",
    },
    {
        name: "GMX Trading",
        role: "Project Manager",
        company: "GMX Trading",
        feedback:
            "Working with Teque Hub was a breeze. They understood our vision from day one and delivered a high-quality product within the timeline.",
    },
    {
        name: "Umar",
        role: "CEO  ",
        company: "UFX",
        feedback:
            "WoW! impressive Communication Skills And Well Appreciated Work. He Helps me A lot to Find The Solutions and Complete a Complicated Project In Easy Way."


    },
];

const TestimonialSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 400 + 32; // card width + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="w-full py-20 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-[#1b1d20] text-4xl md:text-5xl lg:text-6xl font-bold font-['Clash Display'] mb-4">
                            What our clients say
                        </h2>
                        <p className="text-[#1b1d20]/70 font-['Sora'] text-lg max-w-[500px]">
                            Don't just take our word for it. Here is what some of our partners have to say about working with us.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-[#1b1d20]/20 flex items-center justify-center hover:bg-[#caef45] hover:border-[#caef45] transition-colors"
                            aria-label="Scroll left"
                        >
                            <GoArrowLeft className="text-xl text-[#1b1d20]" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-[#1b1d20]/20 flex items-center justify-center hover:bg-[#caef45] hover:border-[#caef45] transition-colors"
                            aria-label="Scroll right"
                        >
                            <GoArrowRight className="text-xl text-[#1b1d20]" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((t, index) => (
                        <div key={index} className="snap-center">
                            <TestimonialCard {...t} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
