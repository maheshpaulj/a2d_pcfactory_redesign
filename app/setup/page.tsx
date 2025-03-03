// pages/index.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Simple confetti function (replace with actual confetti library if desired)
const fireConfetti = () => {
  console.log("Confetti fired!");
  // Add confetti implementation here (e.g., canvas-confetti)
};

const Timeline: React.FC<{ callback: () => void }> = ({ callback }) => {
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  const isStep1InView = useInView(step1Ref, { once: true, margin: "-50px" });
  const isStep2InView = useInView(step2Ref, { once: true, margin: "-50px" });
  const isStep3InView = useInView(step3Ref, { once: true, margin: "-50px" });

  // Animation variants for the line
  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "6rem", transition: { duration: 0.5, ease: "easeInOut" } },
  };

  // Animation variants for circles and messages
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Trigger callback on first step and confetti on last
  if (isStep1InView) callback();
  if (isStep3InView) fireConfetti();

  return (
    <div className="wrapper space-y-8">
      <motion.div
        className="timeline mx-auto w-1 bg-black"
        variants={lineVariants}
        initial="hidden"
        animate={isStep1InView ? "visible" : "hidden"}
      />
      <div className="circleWrapper flex items-center justify-center gap-4" ref={step1Ref}>
        <motion.div
          className="circle flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xl font-bold"
          variants={itemVariants}
          initial="hidden"
          animate={isStep1InView ? "visible" : "hidden"}
        >
          1
        </motion.div>
        <motion.div
          className="message text-lg"
          variants={itemVariants}
          initial="hidden"
          animate={isStep1InView ? "visible" : "hidden"}
        >
          Step one
        </motion.div>
      </div>

      <motion.div
        className="timeline mx-auto w-1 bg-black"
        variants={lineVariants}
        initial="hidden"
        animate={isStep2InView ? "visible" : "hidden"}
      />
      <div className="circleWrapper flex items-center justify-center gap-4" ref={step2Ref}>
        <motion.div
          className="circle flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xl font-bold"
          variants={itemVariants}
          initial="hidden"
          animate={isStep2InView ? "visible" : "hidden"}
        >
          2
        </motion.div>
        <motion.div
          className="message text-lg"
          variants={itemVariants}
          initial="hidden"
          animate={isStep2InView ? "visible" : "hidden"}
        >
          Step two
        </motion.div>
      </div>

      <motion.div
        className="timeline mx-auto w-1 bg-black"
        variants={lineVariants}
        initial="hidden"
        animate={isStep3InView ? "visible" : "hidden"}
      />
      <div className="circleWrapper flex items-center justify-center gap-4" ref={step3Ref}>
        <motion.div
          className="circle flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xl font-bold"
          variants={itemVariants}
          initial="hidden"
          animate={isStep3InView ? "visible" : "hidden"}
        >
          3
        </motion.div>
        <motion.div
          className="message text-lg"
          variants={itemVariants}
          initial="hidden"
          animate={isStep3InView ? "visible" : "hidden"}
        >
          Finish
        </motion.div>
      </div>
    </div>
  );
};

export default function Home() {
  const [message, setMessage] = React.useState("");

  const onCallback = () => {
    console.log("awesome");
    setMessage("Timeline Started!");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl font-bold md:text-6xl">
          Scroll Animation with Framer
        </h1>
        <div className="stub1 mt-8 animate-bounce text-xl">
          ⬇️ scroll to start ⬇️
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-20 text-black">
        <div className="mx-auto max-w-md">
          <Timeline callback={onCallback} />
          <div className="stub2 mt-8 text-center text-gray-600">{message}</div>
        </div>
      </section>
    </main>
  );
}