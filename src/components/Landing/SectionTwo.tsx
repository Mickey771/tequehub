import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import ItemCard from "./ItemCard";

const SectionTwo = () => {
  return (
    <section className="w-full max-w-max mx-auto px-6 xl:px-0 pb-24">
      <div className="flex flex-wrap gap-10">
        <div className="bg-[#000000] min-h-[307px] flex flex-col justify-between w-full max-w-[760px] py-[48px] px-8 sm:px-10 md:px-12 lg:px-14 rounded-[22px] shadow-[0px_13px_100px_0px_rgba(199,199,199,0.25)] pop-hover">
          <h2 className="lg:w-[634px] text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-['Sora'] leading-[64px]">
            Full-Stack Software Engineering & AI Solutions
          </h2>
          <Link href="/meet-with-us">
            <button className="h-[72px] mt-10 pl-12 pr-8 py-5 w-fit bg-[#caef45] rounded-[36px] justify-start items-center gap-[0px] inline-flex pop-hover-btn">
              <span className="w-[159px] text-black text-base font-normal font-['Inter'] uppercase leading-loose tracking-wider">
                Work with Us
              </span>
              <span>
                <GoArrowUpRight size={22} />
              </span>
            </button>
          </Link>
        </div>
        <ItemCard
          text="User centered design systems that convert visitors into customers. We craft intuitive interfaces backed by behavioral psychology and A/B testing."
          heading="UI/UX Design"
          icon="uiuxbig"
        />
      </div>
      <div className="flex flex-wrap gap-10 mt-10">
        <ItemCard
          text="Scalable web applications built with Next.js, React, and Node.js. We architect systems that handle millions of users without breaking."
          heading="Web Development"
          icon="webbig"
        />
        <ItemCard
          text="Strategic technology consulting from senior engineers. We optimize your stack and build roadmaps aligned with business goals."
          heading="IT Consultancy"
          icon="itbig"
        />
        <ItemCard
          text="Custom AI agents and workflow automation using n8n and GPT-4. Reduce manual work by 80% and scale without hiring."
          heading="AI & Automation"
          icon="graphicsbig"
        />
      </div>
    </section>
  );
};

export default SectionTwo;
