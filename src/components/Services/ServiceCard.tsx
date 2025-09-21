"use client";
import { motion } from "framer-motion";
import React from "react";
import { ServiceCardData } from "../utils/servicesData";

interface ServiceCardProps {
  service: ServiceCardData;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <div
        className="relative w-full h-[400px] rounded-[50px] border border-white overflow-hidden"
        style={{
          boxShadow: `
            rgba(0, 0, 0, 0.1) 0px 0.8px 0.8px 0px,
            rgba(0, 0, 0, 0.09) 0px 1.6px 1.6px 0px,
            rgba(0, 0, 0, 0.05) 0px 4.2px 2.5px 0px
          `,
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 rounded-[50px]">
          <img
            src={service.backgroundImage}
            alt=""
            className="w-full h-full object-fill rounded-[50px]"
          />
        </div>

        {/* Content Block */}
        <div className="absolute inset-0 rounded-t-[44px] overflow-hidden">
          <img
            src={service.contentImage}
            alt=""
            className="w-full h-full object-cover rounded-t-[44px]"
          />

          {/* Card Type 1: Growth Switcher */}
          {service.switcherData && (
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div
                className="bg-white rounded-full px-6 py-3"
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
                  <div className="text-sm">
                    <p className="text-[14px] font-medium text-[rgb(127,127,127)] mb-1">
                      {service.switcherData.label}
                    </p>
                    <p
                      className="text-[24px] font-medium"
                      style={{
                        background:
                          "linear-gradient(90deg, rgb(64, 29, 0) 0%, rgb(255, 94, 0) 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {service.switcherData.value}
                    </p>
                  </div>

                  {/* Toggle Switch */}
                  <div
                    className="relative w-[112px] h-[68px] bg-white rounded-full"
                    style={{
                      boxShadow:
                        "rgba(240, 84, 0, 0.03) -3px 43px 17px 0px, rgba(240, 84, 0, 0.11) 0px 24px 15px 0px, rgba(240, 84, 0, 0.19) 0px 11px 11px 0px, rgba(240, 84, 0, 0.22) 0px 3px 6px 0px",
                    }}
                  >
                    <div
                      className="absolute right-2 top-2 w-[60px] h-[52px] rounded-full border border-white/10"
                      style={{
                        background:
                          "radial-gradient(50% 50% at 50% 50%, rgb(255, 156, 76) 0%, rgb(255, 92, 0) 100%)",
                      }}
                    >
                      <div
                        className="w-full h-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(185.616deg, rgb(255, 255, 255) 35.8768%, rgba(255, 237, 221, 0.69) 100%)",
                          boxShadow: `
                            rgba(255, 196, 148, 0.46) 0px 2px 3px 0px,
                            rgba(255, 196, 148, 0.4) 0px 6px 6px 0px,
                            rgba(255, 196, 148, 0.23) 0px 14px 9px 0px,
                            rgba(255, 196, 148, 0.07) 0px 25px 10px 0px,
                            rgba(255, 196, 148, 0.01) 0px 39px 11px 0px,
                            rgba(255, 255, 255, 0.88) 0px -4px 4px 0px inset
                          `,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Card Type 2: Conversions */}
          {service.conversionsData && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                {/* Large 200% text */}
                <div
                  className="text-[120px] font-bold text-white mb-4"
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
                  <span className="text-[24px] font-medium text-white tracking-[-0.02em]">
                    {service.conversionsData.label}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Card Type 3: Stats */}
          {service.statsData && (
            <div className="absolute inset-0">
              {/* Stats Title */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <p
                  className="text-[14px] font-medium text-center"
                  style={{ color: "rgba(152, 56, 0, 0.5)" }}
                >
                  {service.statsData.title}
                </p>
              </div>

              {/* Stats Buttons */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 space-y-4">
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
                    <div
                      className="rounded-full p-1"
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
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/95 backdrop-blur-sm rounded-b-[50px]">
          <h3 className="text-[24px] font-medium text-black mb-2">
            {service.title}
          </h3>
          <p
            className="text-[14px] leading-[140%]"
            style={{ color: "rgba(0, 0, 0, 0.6)" }}
          >
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
