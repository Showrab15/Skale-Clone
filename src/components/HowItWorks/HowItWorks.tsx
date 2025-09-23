/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Define type for Step
interface Step {
  id: string;
  title: string;
  desc: string;
  color: string;
  pin: string;
  innerColor: string;
  img: string;
}

// A unique list of steps with new colors and titles
const steps: Step[] = [
  {
    id: "01",
    title: "Discovery",
    desc: "A detailed outline of our service tailored for your needs.",
    color: "bg-gradient-to-br from-orange-50 to-orange-100",
    pin: "bg-orange-500 shadow-orange-500/50",
    innerColor: "bg-white",
    img: "/howit1.avif",
  },
  {
    id: "02",
    title: "Wireframe",
    desc: "Ideation and wireframing to ensure the UX flow is perfect.",
    color: "bg-gradient-to-br from-blue-50 to-blue-100",
    pin: "bg-blue-500 shadow-blue-500/50",
    innerColor: "bg-white",
    img: "/howit2.avif",
  },
  {
    id: "03",
    title: "Design",
    desc: "Polished UI design with usability and aesthetics in mind.",
    color: "bg-gradient-to-br from-purple-50 to-purple-100",
    pin: "bg-purple-500 shadow-purple-500/50",
    innerColor: "bg-white",
    img: "/howit3.avif",
  },
  {
    id: "04",
    title: "Development",
    desc: "Bringing your design to life with clean, scalable code.",
    color: "bg-gradient-to-br from-green-50 to-green-100",
    pin: "bg-green-500 shadow-green-500/50",
    innerColor: "bg-white",
    img: "/howit4.avif",
  },
  {
    id: "05",
    title: "Deployment",
    desc: "Launching your product and making it available to the world.",
    color: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    pin: "bg-yellow-500 shadow-yellow-500/50",
    innerColor: "bg-white",
    img: "/howit5.avif",
  },
];

const HowItWorks: React.FC = () => {
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
    <div className="mt-10 bg-[#f0f0f0] rounded-t-[36px] xl:rounded-t-[100px] font-inter antialiased text-gray-800">
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
                className="bg-white rounded-full px-5 py-3 shadow-lg"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.07) 0px 5.37707px 9.14102px 0px",
                }}
              >
                <p className="text-xl leading-28px]  font-normal text-[#00000080] text-center">
                  How We Work
                </p>
              </div>
            </div>
            <h1 className="font-semibold xl:font-extrabold text-[#5e5e5e] text-4xl leading-[42px] md:text-[80px] md:leading-[96px] xl:text-[110px] xl:leading-[130px] bg-clip-text bg-[radial-gradient(43%_228.297%_at_50%_60.6452%,_#000000_0%,_#5e5e5e_100%)]">
              Our Process, <br /> Step by Step
            </h1>

            <p
              className="font-medium lg:text-[28px] lg:leading-[40px]
             text-[20px] leading-[28px] text-[#00000080]"
            >
              From the first step to the final product{" "}
              <br className="lg:block hidden" /> at your hand!
            </p>
          </div>
        </motion.div>
      </motion.div>

      <section
        className=" relative py-24 overflow-hidden bg-[url('/bg-line.avif')]
       bg-cover bg-center bg-no-repeat"
      >
        <div className="relative max-w-xl md:max-w-2xl mx-auto px-6">
          <div className="relative">
            {steps.map((step, i) => (
              <div key={step.id} className="flex flex-col items-center">
                <StepCard step={step} index={i} />
                {i < steps.length - 1 && (
                  <div
                    className={`flex-shrink-0 mt-14 ${
                      i % 2 === 0
                        ? "rotate-45 relative left-10"
                        : "-rotate-45 -left-10 relative"
                    }`}
                    aria-hidden="true"
                  >
                    <CurvedDottedConnector index={i} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/* Curved Dotted Connector Component */
const CurvedDottedConnector: React.FC<{ index: number }> = ({ index }) => {
  const curves = [
    "M0,0 C200,200 400,200 600,400", // curve right
    "M600,0 C400,200 200,200 0,400", // curve left
  ];

  const pathData = curves[index % 2];

  return (
    <svg
      viewBox="0 0 612 421"
      preserveAspectRatio="none"
      className="w-full h-[160px]"
    >
      <path
        d={pathData}
        fill="none"
        stroke="#D1D5DB"
        strokeWidth="2"
        strokeDasharray="6 4"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
};

/* Custom intersection observer hook */
function useIntersection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

/* Card pop-in with pushpin style */
const StepCard: React.FC<{ step: Step; index: number }> = ({ step, index }) => {
  const { ref, isVisible } = useIntersection();
  const isRight = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`relative flex w-full ${
        isRight
          ? "justify-end -rotate-[11deg] md:-left-15 left-8"
          : "md:justify-start justify-end rotate-[11deg] md:left-15 left-8"
      }`}
    >
      <div className="relative w-80">
        <Image
          src={step.img} // same as your previous src
          alt={step.title}
          width={250} // match w-[250px] (required for next/image)
          height={250} // approximate height; can adjust or use layout="responsive"
          className="w-[250px] md:w-full h-auto rounded-2xl shadow-xl"
        />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[168px] h-[217px]">
          <Image
            src="/3dpush.avif"
            alt="pushpin"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
