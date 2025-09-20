"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  href = "/30-min",
  className = "",
}) => {
  return (
    <Link href={href} target="_blank" className={className}>
      <motion.div
        className="relative flex items-center gap-3 px-[20px] py-3 bg-gradient-to-b from-[#f9f9f9] to-[#e6e6e6] rounded-2xl cursor-pointer overflow-hidden"
        style={{
          boxShadow: `
            0px 21px 13px 0px rgba(0, 0, 0, 0.03),
            0px 9px 9px 0px rgba(0, 0, 0, 0.05),
            0px 2px 5px 0px rgba(0, 0, 0, 0.06)
          `,
        }}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        variants={{
          rest: { paddingLeft: "20px", paddingRight: "20px" },
          hover: { paddingLeft: "24px", paddingRight: "60px" }, // Expand padding on hover
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Profile Image */}
        <motion.div
          className="relative w-8 h-8 rounded-full overflow-hidden border border-[#fbfbf8] flex-shrink-0"
          style={{
            boxShadow: `
              0px 4.82px 9.63px 0px rgba(0, 0, 0, 0.1),
              0px 19.27px 19.27px 0px rgba(0, 0, 0, 0.09),
              0px 38.53px 24.08px 0px rgba(0, 0, 0, 0.05),
              0px 72.25px 28.90px 0px rgba(0, 0, 0, 0.02)
            `,
          }}
          variants={{
            rest: { x: 0 },
            hover: { x: -15 }, // Move image left on hover
          }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://framerusercontent.com/images/e7kCals91bpG4fiyr5MzIMnGmI.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hover Text - "+ YOU" - appears in the middle */}
        <motion.div
          className="absolute left-[80px] top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1"
          variants={{
            rest: {
              opacity: 0,
              scale: 0.8,
            },
            hover: {
              opacity: 1,
              scale: 1,
            },
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <span className="text-lg font-medium text-gray-600">+</span>

          <div className="ml-1 rounded-full p-1 flex items-center bg-white text-[12px] font-normal text-gray-600 ">
            YOU
          </div>
        </motion.div>

        {/* Main Text */}
        <motion.div
          className="flex-1"
          variants={{
            rest: { x: 0 },
            hover: { x: 50 }, // Move text right on hover
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-[20px] font-normal text-[#000000b3] whitespace-nowrap">
            Book a 15-min call
          </p>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Button;
