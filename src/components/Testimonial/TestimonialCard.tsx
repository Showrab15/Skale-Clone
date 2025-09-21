// TestimonialCard.tsx
"use client";

import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  rating: number;
  description: string;
  icon: string;
  name: string;
  impression: string;

  metric?: string; // For the bottom metric like "+15% in Session Duration"
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  description,
  icon,
  name,
  impression,
  metric,
}) => {
  return (
    <div
      className="flex-none  flex flex-col w-[340px] sm:w-[328px]  lg:w-[540px] snap-start p-6 sm:py-[20px] sm:px-[28px] xl:py-[38px] xl:px-[48px]"
      style={{
        flexShrink: 0,
        backdropFilter: "blur(2px)",
        background:
          "linear-gradient(rgb(255, 255, 255) 0%, rgb(234, 234, 234) 100%)",
        borderRadius: "40px",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 4px 2px 0px, rgba(0, 0, 0, 0.09) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 1px 0px",
        opacity: 1,
      }}
    >
      {/* card content */}
      <div className="flex flex-col gap-4 h-full justify- between">
        {/* Top Section - Profile + Name + Stars */}
        <div className="flex items-start gap-3 mb-4">
          {/* Profile Image */}
          <div
            className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
            style={{
              border: "1.82px solid rgb(251, 251, 248)",
              background:
                "linear-gradient(178.545deg, rgb(255, 232, 232) 0%, rgb(255, 181, 138) 100%)",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 4.82px 9.63px 0px, rgba(0, 0, 0, 0.09) 0px 19.27px 19.27px 0px, rgba(0, 0, 0, 0.05) 0px 38.53px 24.08px 0px, rgba(0, 0, 0, 0.02) 0px 72.25px 28.90px 0px",
            }}
          >
            <Image
              src={icon}
              alt={name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>

          {/* Name + Stars */}
          <div className="flex-1">
            <p
              className="text-xs font-medium mb-2"
              style={{
                fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                lineHeight: "161%",
                color: "rgb(0, 0, 0)",
              }}
            >
              {name}
            </p>

            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(rating)].map((_, i: number) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    boxShadow:
                      "rgba(255, 92, 0, 0.05) 0px 7px 4px 0px, rgba(255, 92, 0, 0.09) 0px 4px 4px 0px, rgba(255, 92, 0, 0.1) 0px 1px 2px 0px",
                  }}
                >
                  <Image
                    src="/star.avif"
                    alt="star"
                    width={12}
                    height={12}
                    className="w-3 h-3"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Description */}
        <p
          className="text-[13px] lg:text-lg leading-relaxed  xl:break-words"
          style={{
            lineHeight: "151%",
            color: "rgba(0, 0, 0, 0.69)",
            opacity: 0.9,
          }}
        >
          {description}
        </p>

        {/* Bottom Metric */}
        <div className="mt-auto">
          {impression && (
            <div
              className="text-[20px] lg:text-[32px] font-extrabold text-nowrap mt-auto"
              style={{
                fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                lineHeight: "151%",
                color: "rgb(194, 194, 194)",
                textShadow: "rgba(255, 255, 255, 0.5) 0px 2px 5px",
                opacity: 0.9,
              }}
            >
              <span
                style={{
                  backgroundImage:
                    "radial-gradient(108% 50%, rgba(0, 0, 0, 0.39) 0%, rgba(0, 0, 0, 0.35) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {impression}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
