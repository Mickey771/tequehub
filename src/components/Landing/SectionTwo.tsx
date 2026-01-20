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
            Production Ready Systems, Not Experiments
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
          text="Cross platform mobile apps built with Flutter and React Native. Deployed to production with 50K+ active users, handling real revenue and real transactions."
          heading="Mobile Development"
          icon="uiuxbig"
        />
      </div>
      <div className="flex flex-wrap gap-10 mt-10">
        <ItemCard
          text="Scalable web applications using Next.js, React, and Node.js. Built to handle millions of requests per day with 99.9% uptime guarantees."
          heading="Web Applications"
          icon="webbig"
        />
        <ItemCard
          text="Fintech platforms, DeFi protocols, and trading systems. Security audited code that processes $2M+ in daily volume with real time settlement."
          heading="Fintech & Web3"
          icon="itbig"
        />
        <ItemCard
          text="AI agents, workflow automation, and intelligent systems using GPT-4, LangChain, and n8n. Reduce operational costs by 80% while scaling capacity."
          heading="AI & Automation"
          icon="graphicsbig"
        />
      </div>
    </section>
  );
};

export default SectionTwo;
