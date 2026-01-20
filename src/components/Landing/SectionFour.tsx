import Image from "next/image";
import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const SectionFour = () => {
  return (
    <section className="mt-24 px-6 lg:px-0 pb-24 w-full max-w-max mx-auto flex flex-col items-center">
      <h2 className="text-center text-[#333333] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Sora'] leading-[64px]">
        Production Deployments, Real Results
      </h2>
      <p className="text-center text-[#333333] text-base max-w-[286px] md:max-w-[632px] md:text-lg font-normal font-['Poppins'] leading-tight">
        Security audited platforms processing millions in daily transactions. Built for startups and enterprises that need systems that scale under real world load.
      </p>

      <div className="mt-11 overflow-x-scroll  w-full flex gap-3 pb-8">
        <div className="w-full max-w-[630px] bg-[#0077F9] rounded-[20px] md:rounded-[30px] p-7 sm:p-8 md:p-10 lg:p-[50px] pop-hover">
          <span className="inline-flex h-full max-h-[60px] w-full max-w-[186px]">
            <Image
              src={"/images/urunner.svg"}
              height={0}
              width={0}
              alt="urunner"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </span>

          <p className="w-[243px] md:w-[350px] lg:w-[530px] mt-5 mb-11 text-white text-base font-normal font-['Inter'] leading-7">
            Mobile fitness app that rewards users with cryptocurrency for exercise. Built with Flutter for iOS/Android, integrated with blockchain APIs, and scaled to 50K+ active users.
          </p>

          <span className="inline-flex w-full max-w-[530px]">
            <Image
              src={"/images/urunner.png"}
              height={0}
              width={0}
              alt="urunner"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </span>
        </div>
        <div className="w-full max-w-[630px] bg-[#057953] rounded-[20px] md:rounded-[30px] p-7 sm:p-8 md:p-10 lg:p-[50px] pop-hover">
          <span className="inline-flex h-full max-h-[60px] w-full max-w-[186px]">
            <Image
              src={"/images/vapzer.svg"}
              height={0}
              width={0}
              alt="vapzer"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </span>

          <p className="w-[243px] md:w-[350px] lg:w-[530px] mt-5 mb-11 text-white text-base font-normal font-['Inter'] leading-7">
            Real-time trading platform for forex, stocks, and futures. Built with Flutter and Node.js, featuring live market data, advanced charting, and secure payment processing.
          </p>

          <span className="inline-flex w-full max-w-[664px]">
            <Image
              src={"/images/vapzer.png"}
              height={0}
              width={0}
              alt="urunner"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              className="object-cover "
            />
          </span>
        </div>
        <div className="w-full max-w-[630px] bg-[#665824] rounded-[20px] md:rounded-[30px] p-7 sm:p-8 md:p-10 lg:p-[50px] pop-hover">
          <span className="inline-flex h-full max-h-[60px] w-full max-w-[186px]">
            <Image
              src={"/images/htradelogo.png"}
              height={0}
              width={0}
              alt="htrade"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </span>

          <p className="w-[243px] md:w-[350px] lg:w-[530px] mt-5 mb-11 text-white text-base font-normal font-['Inter'] leading-7">
            Web and Mobile application for online financial trading and tracking
            in Forex, Stocks, Shares, Futures, Bonds and so on.
          </p>

          <span className="inline-flex w-full max-w-[664px]">
            <Image
              src={"/images/htrade.png"}
              height={0}
              width={0}
              alt="urunner"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              className="object-cover "
            />
          </span>
        </div>
      </div>

      <Link href="/meet-with-us">
        <button className="h-[72px] w-fit mt-10 pl-12 pr-8 py-5 bg-[#161616] rounded-[36px] justify-start items-center gap-[20px] inline-flex pop-hover-btn">
          <span className=" text-white text-base font-normal font-['Inter'] uppercase leading-loose tracking-wider">
            Reach out to us
          </span>
          <span>
            <GoArrowUpRight color="white" size={22} />
          </span>
        </button>
      </Link>
    </section>
  );
};

export default SectionFour;
