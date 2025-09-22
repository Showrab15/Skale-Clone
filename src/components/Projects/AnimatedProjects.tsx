"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Position {
  x: number;
  y: number;
}

interface CardProps {
  src: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  targets: Position[];
}

const cards = [
  { src: "/project1.avif" },
  { src: "/project2.avif" },
  { src: "/project3.avif" },
];

const STEP_IN = 0.3;
const STEP_OUT = 0.7;

const initialPositions: Position[] = [
  { x: -100, y: -40 },
  { x: 0, y: -40 },
  { x: 100, y: -40 },
];

const desktopTargets: Position[] = [
  { x: -400, y: 0 }, // left
  { x: 0, y: 0 }, // center
  { x: 400, y: 0 }, // right
];

function Card({ src, index, scrollYProgress, targets }: CardProps) {
  const x = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [
      initialPositions[index].x,
      initialPositions[index].x,
      targets[index].x,
      targets[index].x,
    ]
  );

  const y = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [
      initialPositions[index].y,
      initialPositions[index].y,
      targets[index].y,
      targets[index].y,
    ]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT],
    [1, 1, 0.97]
  );

  return (
    <>
      <motion.div
        style={{ x, y, scale }}
        className="absolute bg-white rounded-[44px] shadow-lg p-2"
      >
        <img
          src={src}
          alt={`card-${index}`}
          className="w-[320px] h-[320px] object-cover rounded-[40px]"
        />
      </motion.div>
    </>
  );
}

export default function AnimatedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className="xl:block hidden relative ">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {cards.map((card, i) => (
            <Card
              key={i}
              src={card.src}
              index={i}
              scrollYProgress={scrollYProgress}
              targets={desktopTargets}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
