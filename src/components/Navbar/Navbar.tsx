"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: -10, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=" fixed top-6 w-11/12 sm:w-10/12 xl:w-9/12 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div
        animate={{
          height: isOpen ? "auto" : "auto",
          minHeight: isOpen ? 250 : 56,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`flex justify-between  items-center lg:pr-[8px] pr-[4px] pl-[20px] py-[7px] 
        overflow-hidden
        ${scrolled ? "" : ""}`}
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-2 md:gap-4">
          <Image
            className="md:w-[36px] md:h-[36px] w-[32px] h-[32px]"
            src="/logo-left.avif"
            width={36}
            height={36}
            alt="logo"
          />
          {/* Company Name */}
          <Image
            className="md:w-[92px] md:h-[29px] w-[79px] h-[24px]"
            src="/skale.avif"
            width={92}
            height={29}
            alt="logo"
          />
        </div>

        {/* Center: Desktop Menu */}
        <ul className="ml-auto hidden text-[#000000b3] text-nowrap lg:flex items-center justify-center gap-[48px]">
          <Link
            href="#our-services"
            className="font-semibold  text-[16px] leading-[16px]"
          >
            Our Services
          </Link>

          <Link
            href="#pricing"
            className="font-semibold  text-[16px] leading-[16px]"
          >
            Pricing
          </Link>

          <Link
            href="#faq"
            className="font-semibold  text-[16px] leading-[16px]"
          >
            FAQ
          </Link>

          <Link
            href="#case-studies"
            className="font-semibold  text-[16px] leading-[16px]"
          >
            Case Studies
          </Link>
        </ul>

        {/* Right: Contact Button + Mobile Menu */}
        <button className="ml-auto relative flex items-center gap-3 md:px-6 md:py-4 px-4 py-2 bg-white rounded-2xl shadow-md overflow-hidden">
          <p className="text-sm md:text-[20px] font-medium text-black/70">
            Got an idea?
          </p>
          <Users className="md:w-6 md:h-6 w-4 h-4 text-gray-700" />

          {/* Animated gradient overlay */}
          <span
            aria-hidden
            className="absolute inset-0 rounded-2xl pointer-events-none gradient-anim"
          />
        </button>
      </motion.div>
    </motion.nav>
  );
}
