"use client";
import React from "react";
import Button from "../ui/Button";
import { pricingData } from "./../../utils/pricingData";
import PricingCard from "./PricingCard"; // Adjust the import path as needed

const PricingSection: React.FC = () => {
  return (
    <section
      className="font-inter w-full pt-[72px] px-[64px] pb-[100px]  min-h-screen rounded-[100px]"
      style={{
        background:
          "radial-gradient(62.4157% 80.1102% at 52.5481% 31.5073%, #ff9255 5.54%, #ff7537 48.2%, #ff5c00 78.5%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Pricing Badge */}
          <div className="inline-flex mb-8">
            <div
              className="bg-white rounded-full px-8 py-3 shadow-lg"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.07) 0px 5.37707px 9.14102px 0px",
              }}
            >
              <p className="text-xl text-black/50 text-center">Pricing</p>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center pb-12"
            style={{
              backgroundImage:
                "radial-gradient(43% 228.297% at 50% 60.6452%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.6) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Simple, Transparent Pricing for Startups
          </h1>

          {/* CTA Button */}
          <div className="mb-8">
            <Button className="max-w-fit mx-auto" />
          </div>

          {/* Contact Info */}
          <p className="text-lg text-white/80">
            or reach me out on{" "}
            <a href="#" className="underline hover:text-white">
              WhatsApp
            </a>
            {" / "}
            <a href="#" className="underline hover:text-white">
              Telegram
            </a>{" "}
            :3
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1  gap-[48px]  mx-auto">
          {pricingData.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
