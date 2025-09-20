/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { reviewsData } from "@/utils/reviewsData";
import { motion, Variants } from "framer-motion";
import React from "react";
import Button from "../ui/Button";
import TestimonialCard from "./TestimonialCard";

interface ReviewData {
  id: number;
  rating: number;
  description: string;
  icon: string;
  name: string;
  role: string;
  impression: string;
}

const Testimonial: React.FC = () => {
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
    <section className="font-inter w-full px-[24px] sm:px-[48px] py-[20px] lg:py-[56px] lg:px-[64px] mx-auto max-w-[1200px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Left side - Header */}
        <motion.div variants={itemVariants}>
          <div className="space-y-8 text-center">
            <h1 className="font-semibold xl:font-extrabold text-[#5e5e5e] text-4xl leading-[42px] md:text-[80px] md:leading-[96px] xl:text-[110px] xl:leading-[130px] bg-clip-text bg-[radial-gradient(43%_228.297%_at_50%_60.6452%,_#000000_0%,_#5e5e5e_100%)]">
              What Clients <br className="" /> Say About Us
            </h1>

            <p className="font-medium lg:text-[28px] lg:leading-[40px] text-[20px] leading-[28px] text-[#00000080]">
              Real feedback from real clients.{" "}
              <br className="lg:block hidden" /> See how our work drives
              results.
            </p>
            <div className="flex justify-center items-center ">
              <Button href="/30-min" className="max-w-fit" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Infinite Scroll Testimonials */}
      {/* Infinite Scroll Testimonials */}
      <div className="w-full overflow-hidden mt-12">
        <div
          className="relative"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 24%, rgb(0, 0, 0) 76%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 24%, rgb(0, 0, 0) 76%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <div className="flex animate-scroll-infinite gap-6 min-w-max">
            {[...reviewsData, ...reviewsData].map(
              (review: ReviewData, index: number) => (
                <TestimonialCard key={index} {...review} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
