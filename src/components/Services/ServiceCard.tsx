"use client";
import type { ServicesData } from "@/utils/servicesData";
import { motion } from "framer-motion";
import React, { useState } from "react";
interface ServiceCardProps {
  service: ServicesData;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <motion.div
      className="font-inter relative w-full group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <div
        className="relative h-[400px] rounded-[50px] border border-white overflow-hidden"
        style={{
          boxShadow: `
            rgba(0, 0, 0, 0.1) 0px 0.8px 0.8px 0px,
            rgba(0, 0, 0, 0.09) 0px 1.6px 1.6px 0px,
            rgba(0, 0, 0, 0.05) 0px 4.2px 2.5px 0px
          `,
        }}
      >
        {/* Background Image */}
        <div className="p-2 absolute inset-0">
          <img
            src={service.backgroundImage}
            alt=""
            className="w-full h-full object-fill rounded-[50px]"
          />
        </div>

        {/* Content Block */}
        <div className=" -top-10 absolute inset-0 rounded-t-[44px] overflow-hidden">
          {/* <img
            src={service.contentImage}
            alt=""
            className=" w-full h-full object-cover rounded-t-[44px]"
          /> */}

          {/* Card Type 1: Growth Switcher */}
          {/* Card Type 1: Growth Switcher (only for first card) */}
          {index === 0 && (
            <div className="mx-auto left-18 max-w-[250px] bg-white p-3 rounded-full absolute top-28 ">
              {/* Outer wrapper */}
              <div
                className="bg-white rounded-full px-5 py-3"
                style={{
                  boxShadow: `
          rgba(60, 21, 1, 0.2) 0px 2px 4px 0px,
          rgba(60, 21, 1, 0.17) 0px 6px 6px 0px,
          rgba(60, 21, 1, 0.1) 0px 14px 9px 0px,
          rgba(60, 21, 1, 0.03) 0px 25px 10px 0px,
          rgba(60, 21, 1, 0) 0px 40px 11px 0px
        `,
                }}
              >
                <div className="flex items-center gap-4">
                  {/* Texts */}
                  <div className="text-xs">
                    <p className="font-normal text-black/50 text-sm">
                      Turn on{" "}
                      <span
                        className="font-medium text-lg"
                        style={{
                          background:
                            "linear-gradient(90deg, rgb(64, 29, 0) 0%, rgb(255, 94, 0) 100%)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        Growth
                      </span>
                    </p>
                  </div>

                  {/* Toggle */}
                  <div
                    onClick={() => setEnabled(!enabled)}
                    className="px-4 flex items-center relative w-[162px] h-[68px] rounded-full cursor-pointer transition"
                    style={{
                      background:
                        "radial-gradient(50% 50% at 50% 50%, rgb(255, 156, 76) 0%, rgb(255, 92, 0) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.07)",
                      boxShadow:
                        "rgba(240, 84, 0, 0.03) -3px 43px 17px 0px, rgba(240, 84, 0, 0.11) 0px 24px 15px 0px, rgba(240, 84, 0, 0.19) 0px 11px 11px 0px, rgba(240, 84, 0, 0.22) 0px 3px 6px 0px",
                    }}
                  >
                    <div
                      className={`flex items-center absolute top-2 w-[44px] h-[44px] rounded-full border border-white/10 transition-all duration-500`}
                      style={{
                        right: enabled ? "12px" : "auto",
                        left: enabled ? "auto" : "12px",
                        background:
                          "linear-gradient(185.616deg, rgb(255, 255, 255) 35.8768%, rgba(255, 237, 221, 0.69) 100%)",
                        borderRadius: "100%",
                        boxShadow: `
                rgba(255, 196, 148, 0.46) 0px 2px 3px 0px,
                rgba(255, 196, 148, 0.4) 0px 6px 6px 0px,
                rgba(255, 196, 148, 0.23) 0px 14px 9px 0px,
                rgba(255, 196, 148, 0.07) 0px 25px 10px 0px,
                rgba(255, 196, 148, 0.01) 0px 39px 11px 0px,
                rgba(255, 255, 255, 0.88) 0px -4px 4px 0px inset
              `,
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Card Type 2: Conversions */}
          {service.conversionsData && (
            <div className="-top-28 absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                {/* Large 200% text */}
                <div
                  className="text-[60px] font-bold text-white mb-4"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                    lineHeight: "1",
                  }}
                >
                  {service.conversionsData.percentage}
                </div>

                {/* Conversions Button */}
                <div
                  className="inline-block px-8 py-4 rounded-full"
                  style={{
                    background:
                      "radial-gradient(50% 50% at 50% 50%, rgb(255, 156, 76) 0%, rgb(255, 92, 0) 100%)",
                    boxShadow:
                      "rgba(92, 32, 0, 0.36) 0px 16px 16px 0px, rgba(92, 32, 0, 0.42) 0px 4px 9px 0px",
                  }}
                >
                  <span className="font-inter text-[24px] font-medium text-white tracking-[-0.02em]">
                    {service.conversionsData.label}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Card Type 3: Stats */}
          {service.statsData && (
            <div className="top-20 absolute inset-0">
              {/* Stats Title */}
              <div className="absolute  left-1/2 transform -translate-x-1/2">
                <p
                  className="text-[14px] font-medium text-center"
                  style={{ color: "rgba(152, 56, 0, 0.5)" }}
                >
                  {service.statsData.title}
                </p>
              </div>

              {/* Stats Buttons */}
              {/* Stats Buttons */}
              <div className="w-[300px] absolute top-8 left-1/2 transform -translate-x-1/2 space-y-4">
                {service.statsData.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="relative"
                    style={{
                      backgroundColor: "rgb(255, 92, 0)",
                      borderRadius: "100px",
                      boxShadow: `
          rgba(92, 32, 0, 0.03) -5px 65px 26px 0px,
          rgba(92, 32, 0, 0.1) -3px 37px 22px 0px,
          rgba(92, 32, 0, 0.18) 0px 16px 16px 0px,
          rgba(92, 32, 0, 0.21) 0px 4px 9px 0px
        `,
                    }}
                  >
                    {/* inside div */}
                    <div
                      className="w-9/12 rounded-full p-1 transition-all duration-500 group-hover:w-11/12"
                      style={{
                        background:
                          "radial-gradient(50% 50% at 50% 50%, rgb(255, 156, 76) 0%, rgb(255, 92, 0) 100%)",
                      }}
                    >
                      <div
                        className="px-6 py-3 rounded-full border border-[rgb(255,233,211)]"
                        style={{
                          background:
                            "linear-gradient(185.616deg, rgb(255, 255, 255) 35.8768%, rgba(255, 237, 221, 0.69) 100%)",
                          boxShadow: `
              rgba(255, 196, 148, 0.46) 0px 2px 3px 0px,
              rgba(255, 196, 148, 0.4) 0px 6px 6px 0px,
              rgba(255, 196, 148, 0.23) 0px 14px 9px 0px,
              rgba(255, 196, 148, 0.07) 0px 25px 10px 0px,
              rgba(255, 255, 255, 0.88) 0px -4px 4px 0px inset
            `,
                        }}
                      >
                        <p
                          className="text-[14px] font-medium whitespace-nowrap"
                          style={{
                            background:
                              "linear-gradient(90deg, rgb(63, 28, 0) 0%, rgb(255, 93, 0) 100%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          {item.label} {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Text Section */}
        <div
          className="absolute bottom-0 left-0 right-0 p-8 bg-white/95 backdrop-blur-sm 
        rounded-b-[50px]"
        >
          <h3 className="text-[20px] md:text-[24px] font-medium text-black mb-2 text-nowrap">
            {service.title}
          </h3>
          <p className="text-[14px] leading-[140%] text-[#00000099]">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
