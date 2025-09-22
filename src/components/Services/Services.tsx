/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { servicesData } from "@/utils/servicesData";
import { motion, Variants } from "framer-motion";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services: React.FC = () => {
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
    <section className="font-inter w-full  mx-auto ">
      <motion.div
        className="px-[24px] sm:px-[48px] py-[20px] lg:py-[6px] lg:px-[64px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <div className=" text-center">
            <div className="inline-flex mb-8">
              <div
                className="bg-white rounded-full px-5 py-3 shadow-lg"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.07) 0px 5.37707px 9.14102px 0px",
                }}
              >
                <p className="text-xl leading-28px]  font-normal text-[#00000080] text-center">
                  Our Services
                </p>
              </div>
            </div>
            <h1 className="mb-8 font-semibold xl:font-extrabold text-[#5e5e5e] text-4xl leading-[42px] md:text-[80px] md:leading-[96px] xl:text-[110px] xl:leading-[130px] bg-clip-text bg-[radial-gradient(43%_228.297%_at_50%_60.6452%,_#000000_0%,_#5e5e5e_100%)]">
              Designs That <br />
              Drive Results
            </h1>

            <p
              className="mb-8 font-medium lg:text-[28px] lg:leading-[40px]
             text-[20px] leading-[28px] text-[#00000080]"
            >
              What we can help you to achieve?
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="px-2  items-center grid grid-cols-1 xl:grid-cols-3 gap-4  sm:px-[48px] pb-20 lg:px-[64px]"
        variants={containerVariants}
      >
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
