"use client";
import { motion } from "framer-motion";
import React from "react";

interface PricingData {
  id: number;
  title: string;
  price: string;
  description: string;
  spotsAvailable: string;
  features: string[];
  isHighlighted: boolean;
}

interface StatusIndicatorProps {
  spotsCount: string;
}

interface PricingCardProps {
  plan: PricingData;
  index: number;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ spotsCount }) => {
  const count = parseInt(spotsCount.split(" ")[0]);
  const opacity = count === 3 ? 1 : count === 2 ? 0.7 : 0.4;

  return (
    <div className="mx-auto md:mx-0 md:ml-2 flex items-center gap-4 font-inter">
      <div className="relative w-3 h-3">
        {/* Outer rings */}
        <div
          className="absolute inset-0 rounded-full bg-orange-500 opacity-5"
          style={{ transform: "scale(3)" }}
        />
        <div
          className="absolute inset-0 rounded-full bg-orange-500 opacity-20"
          style={{ transform: "scale(2)" }}
        />
        <div
          className="absolute inset-0 rounded-full bg-orange-500 blur-sm opacity-20"
          style={{ transform: "scale(1.8)" }}
        />
        {/* Center dot */}
        <div
          className="absolute inset-0 rounded-full bg-orange-500"
          style={{ opacity }}
        />
      </div>
      <span className="text-[16px] md:text-[20px] leading-[30px] text-[#00000080]">
        {spotsCount}
      </span>
    </div>
  );
};

const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  return (
    <motion.div
      className="font-inter relative flex"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <div
        className={`relative rounded-[50px]  border border-white  md:max-w-[830px] mx-auto
          ${plan.isHighlighted ? "bg-white" : "bg-[#ffebe2]"} 
          backdrop-blur-lg`}
        style={{
          boxShadow: `
            rgba(255, 255, 255, 0.59) 0px 14px 13px -12px inset,
            rgba(255, 255, 255, 0.22) 0px 2px 5px inset,
            rgba(0, 0, 0, 0.1) 0px 1px 1px,
            rgba(0, 0, 0, 0.09) 0px 2px 2px,
            rgba(0, 0, 0, 0.05) 0px 4px 3px,
            rgba(0, 0, 0, 0.01) 0px 8px 4px
          `,
        }}
      >
        <div
          className="mx-auto flex flex-col pt-[72px] pb-[48px] mt-pt-0
           md:py-[48px] md:pl-[48px] pl-[20px]   
            md:flex-row "
        >
          {/* Background Preview */}

          {/* Title + Price + Description */}
          <div className="md:w-1/2 flex-col justify-center flex gap-[20px]">
            <h3 className="text-[28px] leading-[34px] font-normal text-black">
              {plan.title}
            </h3>
            <div className="text-[56px] md:text-[64px] leading-[76px] font-normal text-black">
              {plan.price}
              <span className="text-gray-500">+</span>
            </div>
            <div className="flex flex-col gap-[32px]">
              <p className="text-[16px] md:text-[20px] leading-[24px] text-black/50  w-8/12">
                {plan.description}
              </p>
              {/* CTA */}
              <div
                className="mx-auto md:mx-0 w-[243px]"
                style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
              >
                <motion.a
                  target="_blank"
                  className="block w-full"
                  style={{
                    background:
                      "linear-gradient(rgb(255, 116, 12) 0%, rgb(255, 75, 0) 100%)",
                    borderRadius: "18px",
                    boxShadow:
                      "rgba(244, 77, 4, 0.16) 0px 35px 53px 0px, rgba(244, 77, 4, 0.32) 0px 7px 21px 0px, rgb(191, 54, 0) 0px 2px 0px 0px",
                    willChange: "auto",
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: 1,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    style={{
                      backgroundColor: "rgb(255, 92, 0)",
                      borderRadius: "15px",
                      boxShadow: `
                    rgba(255, 255, 255, 0.16) 0px 0.602187px 0.602187px -1.25px inset,
                    rgba(255, 255, 255, 0.14) 0px 2.28853px 2.28853px -2.5px inset,
                    rgba(255, 255, 255, 0.06) 0px 10px 10px -3.75px inset,
                    rgba(255, 255, 255, 0.42) 0px 0.602187px 0.602187px -1.25px inset,
                    rgba(255, 255, 255, 0.37) 0px 2.28853px 2.28853px -2.5px inset,
                    rgba(255, 255, 255, 0.15) 0px 10px 10px -3.75px inset,
                    rgba(255, 47, 10, 0.96) 0px -0.796192px 1.11467px -1.25px inset,
                    rgba(255, 47, 10, 0.88) 0px -2.41451px 3.38031px -2.5px inset,
                    rgba(255, 47, 10, 0.68) 0px -6.38265px 8.93571px -3.75px inset,
                    rgba(255, 47, 10, 0) 0px -20px 28px -5px inset,
                    rgba(0, 0, 0, 0.05) 0px -0.716573px 3.58286px -1.25px inset,
                    rgba(0, 0, 0, 0.04) 0px -2.17306px 10.8653px -2.5px inset,
                    rgba(0, 0, 0, 0.03) 0px -5.74439px 28.7219px -3.75px inset,
                    rgba(0, 0, 0, 0) 0px -18px 90px -5px inset
                  `,
                      willChange: "auto",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: 1,
                    }}
                  >
                    <div
                      style={{
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: 0,
                        color: "rgb(255, 255, 255)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                        padding: "12px 4px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "24px",
                          lineHeight: "145%",
                          color: "rgb(255, 255, 255)",
                          margin: 0,
                          textAlign: "center",
                        }}
                      >
                        Book a 15-min call
                      </p>
                    </div>
                  </div>
                </motion.a>
              </div>

              {/* Availability */}
              <div className="flex justify-start">
                <StatusIndicator spotsCount={plan.spotsAvailable} />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-[52px]">
            {/* Divider */}
            <div className="hidden  md:block w-[2px] h-[374px] rounded-full bg-[#dadada]" />
            <div className="mt-10 md:hidden block h-[2px] w-[274px] rounded-full bg-[#dadada]" />

            {/* Features */}
            <div className="my-auto space-y-6">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-[11px]">
                  <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="/correcticon.webp"
                      alt="Feature"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className=" font-inter text-[20px] text-black/60">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
export type { PricingData };
