"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface FollowerData {
  text: string;
}

const MouseFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const followerContentRef = useRef<HTMLSpanElement>(null);
  const followerBottomRef = useRef<HTMLDivElement>(null);
  const followerTopRef = useRef<HTMLDivElement>(null);
  const followerAnimRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (
      !followerRef.current ||
      !followerContentRef.current ||
      !followerBottomRef.current ||
      !followerTopRef.current
    ) {
      return;
    }

    // Set up GSAP quickTo for smooth mouse following
    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(followerRef.current, "x", {
      duration: 0.6,
      ease: "power3",
    });
    const yTo = gsap.quickTo(followerRef.current, "y", {
      duration: 0.6,
      ease: "power3",
    });

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    // Create follower animation timeline
    const followerAnim = gsap.timeline({ paused: true, overwrite: "auto" });
    followerAnim.to(
      followerBottomRef.current,
      {
        scale: 10,
        backgroundColor: "#F6EFEB",
        duration: 0.15,
      },
      0
    );
    followerAnim.to(
      followerTopRef.current,
      {
        backgroundColor: "#FF5555",
        scale: 10,
        opacity: 1,
        duration: 0.15,
      },
      0.2
    );
    followerAnim.to(followerContentRef.current, {
      height: "32px",
    });

    followerAnimRef.current = followerAnim;

    // Animation control function
    const animateFollower = (direction: "in" | "out" = "in") => {
      if (direction === "in") {
        followerAnim.invalidate();
        followerAnim.restart().timeScale(1);
      } else {
        followerAnim.timeScale(-2);
      }
    };

    // Set up event listeners for follower change elements
    const followerChangeElements = document.querySelectorAll<HTMLElement>(
      ".follower-change-test"
    );

    const handleMouseEnter = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const text = target.dataset.followerText || "Click";

      if (followerContentRef.current) {
        followerContentRef.current.innerHTML = text;
      }
      animateFollower("in");
    };

    const handleMouseLeave = () => {
      animateFollower("out");
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    followerChangeElements.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      followerChangeElements.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
      followerAnim.kill();
    };
  }, []);

  return (
    <>
      {/* Follower element */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 rounded-lg pointer-events-none w-32 h-32 flex items-center justify-center overflow-hidden z-50 hidden hover:block motion-reduce:hidden"
        style={{ transformOrigin: "center" }}
      >
        <div
          ref={followerBottomRef}
          className="absolute w-3 h-3 rounded-lg left-1/2 top-1/2 bg-red-500 opacity-100"
          style={{
            transform: "translate(-50%, -50%)",
            transformOrigin: "center",
          }}
        />
        <div
          ref={followerTopRef}
          className="absolute w-3 h-3 rounded-lg left-1/2 top-1/2 opacity-0"
          style={{
            transform: "translate(-50%, -50%)",
            backgroundColor: "beige",
            transformOrigin: "center",
          }}
        />
        <span
          ref={followerContentRef}
          className="text-white text-lg font-normal h-0 flex items-center overflow-hidden relative whitespace-nowrap"
          style={{ transformOrigin: "center" }}
        />
      </div>
    </>
  );
};

export default MouseFollower;
