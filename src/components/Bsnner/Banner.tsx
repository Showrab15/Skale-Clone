/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

const Banner: React.FC = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as any },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center px-6
     md:px-16 py-20 bg-[#f9f9f9]"
    >
      {/* Hero Text */}
      <motion.div
        className="px-[24px] sm:px-[48px] py-[20px] lg:py-[56px] lg:px-[64px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="space-y-8 text-center">
            <div className="inline-flex mb-8">
              <div
                className=" cursor-pointer group group-hover:px-6 flex gap-2 items-center bg-white rounded-full px-5 py-3 shadow-lg"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.07) 0px 5.37707px 9.14102px 0px",
                }}
              >
                <div className="flex group-hover:gap-1">
                  <img className="w-11 h-11 " src="/person1.avif" alt="" />
                  <img
                    className="w-11 h-11 -left-2 relative bg-[#cddfff] rounded-full"
                    src="/person2.avif"
                    alt=""
                  />
                  <img
                    className="bg-[#d7d7d9] rounded-full w-11 h-11 -left-4  relative"
                    src="/person3.avif"
                    alt=""
                  />
                </div>
                <p className="text-xl leading-28px]  font-normal text-[#00000080] text-center">
                  60+ startups & founders chose skale.solutions
                </p>
              </div>
            </div>

            <h1
              className="font-semibold xl:font-bold text-[#5e5e5e] text-4xl leading-[42px]
             md:text-[80px] md:leading-[96px] xl:text-[100px] xl:leading-[120px] bg-clip-text bg-[radial-gradient(43%_228.297%_at_50%_60.6452%,_#000000_0%,_#5e5e5e_100%)]"
            >
              Premium Websites for SaaS & Startups
            </h1>

            <p
              className="font-medium lg:text-[28px] lg:leading-[40px]
             text-[20px] leading-[28px] text-[#00000080]"
            >
              Every business needs a website, and {`it's`} <br /> never been
              easier to get one.{" "}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* CTA Button */}
      <div className="cursor-pointer relative inline-flex items-center justify-center group px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 rounded-[22px] shadow-[0_35px_53px_rgba(244,77,4,0.16),0_7px_21px_rgba(244,77,4,0.32),0_2px_0_rgba(191,54,0,1)] hover:scale-105 transition-transform duration-300">
        <span className="text-white text-lg md:text-xl font-medium z-10">
          Book a 15-min call
        </span>

        {/* Decorative Inner Shadow Layer */}
        <div className="absolute inset-0 rounded-[18px] shadow-[inset_0_0.6px_0.6px_-1.25px_rgba(255,255,255,0.16),inset_0_2.29px_2.29px_-2.5px_rgba(255,255,255,0.14),inset_0_10px_10px_-3.75px_rgba(255,255,255,0.06),inset_0_0.6px_0.6px_-1.25px_rgba(255,255,255,0.58),inset_0_2.29px_2.29px_-2.5px_rgba(255,255,255,0.51),inset_0_10px_10px_-3.75px_rgba(255,255,255,0.2),inset_0_-0.8px_1.11px_-1.25px_rgba(255,47,10,0.96),inset_0_-2.41px_3.38px_-2.5px_rgba(255,47,10,0.88),inset_0_-6.38px_8.93px_-3.75px_rgba(255,47,10,0.68),inset_0_-20px_28px_-5px_rgba(255,47,10,0),inset_0_-0.71px_3.58px_-1.25px_rgba(255,255,255,0.24),inset_0_-2.17px_10.86px_-2.5px_rgba(255,255,255,0.22),inset_0_-5.74px_28.72px_-3.75px_rgba(255,255,255,0.17),inset_0_-18px_90px_-5px_rgba(255,255,255,0)] pointer-events-none"></div>

        {/* Small Images Around Button (Appear on Hover) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100
         transition-opacity duration-300"
        >
          <div className="absolute -top-6 -left-10 w-12 h-12 rotate-60">
            <Image
              src="https://framerusercontent.com/images/pVy2OU6js8wQJYuIG2rxGeBUY0.png"
              alt="Decor"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="absolute top-2 -left-11 w-12 h-12">
            <Image
              src="https://framerusercontent.com/images/wGNvpZimB5E38XLmq8tUvrsxxzY.png"
              alt="Decor"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="absolute top-6 rotate-180 -left-11 w-12 h-12">
            <Image
              src="https://framerusercontent.com/images/wGNvpZimB5E38XLmq8tUvrsxxzY.png"
              alt="Decor"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-12 h-12 rotate-12">
            <Image
              src="https://framerusercontent.com/images/pVy2OU6js8wQJYuIG2rxGeBUY0.png"
              alt="Decor"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="absolute -top-6 -right-11 w-12 h-12 -rotate-12">
            <Image
              src="https://framerusercontent.com/images/pVy2OU6js8wQJYuIG2rxGeBUY0.png"
              alt="Decor"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="absolute -bottom-8 -right-12 w-12 h-12 rotate-45">
            <Image
              src="https://framerusercontent.com/images/pVy2OU6js8wQJYuIG2rxGeBUY0.png"
              alt="Decor"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="absolute bottom-3 -right-12 w-12 h-12">
            <Image
              src="https://framerusercontent.com/images/wGNvpZimB5E38XLmq8tUvrsxxzY.png"
              alt="Decor"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="absolute -bottom-1 -right-12 w-12 h-12 rotate-180">
            <Image
              src="https://framerusercontent.com/images/wGNvpZimB5E38XLmq8tUvrsxxzY.png"
              alt="Decor"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
