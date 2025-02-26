"use client";

import { Playwrite_IT_Moderna } from "next/font/google";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Tilt } from "@/components/ui/tilt"; // Import custom Tilt component
import { Spotlight } from "@/components/ui/spotlight"; // Import custom Spotlight component
import { motion } from "framer-motion"; // Import motion from framer-motion

const playfair = Playwrite_IT_Moderna({
  weight: ["400"],
});

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const glow1Ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(badgeRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
      .from(
        titleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.5"
      )
      .from(
        textRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.6"
      )
      .from(
        buttonRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.6"
      )
      .from( videoRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      })
      .from( glow1Ref.current, {
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      })
      .from(
        accentLineRef.current,
        {
          scaleX: 0,
          duration: 1,
          ease: "power4.inOut",
        },
        "-=1"
      );
  }, []);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  const sectionHeaderVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const leftToRightVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const rightToLeftVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center pb-36 bg-black pt-44"
      >
        <div
          ref={badgeRef}
          className="bg-white rounded-full px-3 py-1 shadow-lg flex items-center gap-2 z-10"
        >
          <Image src={"/logo.webp"} alt="logo" width={28} height={28} />
          <span className="text-black font-bold">HI SOLDIERS</span>
        </div>
        <div ref={glow1Ref} className="yellow__gradient -top-[20%] w-[40%] h-[25%] absolute z-0" />
        <div className="relative">
          <div className="text-center max-w-4xl mx-auto px-4 text-white z-10 flex flex-col items-center justify-center">
            <h1 ref={titleRef} className="text-6xl font-bold mb-6">
              We Build{" "}
              <span className={`${playfair.className} text-yellow-500`}>
                People
              </span>{" "}
              Before We Build PC
            </h1>
            <p ref={textRef} className="text-lg mb-8 lg:max-w-xl">
              Crafting Your Ultimate Gaming Experience - Unleash Your Power!{" "}
              Smart people work with Smart Systems. Customize your Dream PC
            </p>
            <div ref={buttonRef} className="relative group">
              <button
                className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-amber-600"
              >
                <span
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 via-cyan-500 to-black p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                ></span>
                <span className="relative z-10 block px-6 py-3 rounded-2xl bg-amber-500">
                  <div className="relative z-10 flex items-center space-x-3">
                    <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-black">
                      Build Now
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-black"
                    >
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
        <video ref={videoRef} src="/PC.mp4" muted autoPlay className="scale-[.80] z-10" loop />
        <div
          ref={accentLineRef}
          className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"
        />
      </section>

      {/* Features Section */}
      <section 
        ref={section1Ref} 
        className="py-16 bg-white text-black overflow-hidden"
      >
        <motion.div 
          className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              title: "Up to 1-Year On-Site Warranty",
              desc: "Comprehensive coverage with on-site support for peace of mind.",
            },
            {
              title: "48-Hour In-House Testing",
              desc: "Rigorous testing ensures peak performance before delivery.",
            },
            {
              title: "Performance Transparency",
              desc: "Know your system's capabilities before you order.",
            },
            {
              title: "Free Pan-India Delivery",
              desc: "Fast, reliable shipping at no extra cost, nationwide.",
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt
                rotationFactor={8}
                isRevese
                style={{ borderRadius: "12px" }}
                className="flex max-w-[270px] flex-col hover:shadow-md transition-shadow overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 group relative"
              >
                <Spotlight
                  className="z-10 from-white/50 via-white/20 to-white/10 blur-2xl"
                  size={248}
                  springOptions={{
                    stiffness: 26.7,
                    damping: 4.1,
                    mass: 0.2,
                  }}
                />
                <div className="p-4 flex flex-col justify-between h-48">
                  <div>
                    <h3 className="font-mono text-xl font-semibold mb-2 text-zinc-950 dark:text-zinc-50">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-700 dark:text-zinc-400">{feature.desc}</p>
                  </div>
                  <div className="mt-4 h-1 w-12 bg-yellow-500 mx-auto rounded-full" />
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How Things Work Section */}
      <section 
        ref={section2Ref} 
        className="py-16 bg-white text-black overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            How Things Work at <span className="text-yellow-500">A2D PC Factory</span>
          </motion.h2>

          {[
            {
              title: "Building Customer Persona",
              desc: "We craft detailed customer personas based on real data and insights from direct interactions. This allows our sales team to deliver tailored PC solutions that perfectly match your needs, preferences, and challenges.",
              img: "/customer-support.png",
            },
            {
              title: "Deep Technical Consulting",
              desc: "Our expert engineers provide in-depth support before your PC arrives, equipping you with the knowledge and skills for optimal use. We're committed to empowering you every step of the way.",
              img: "/conversation.png",
            },
            {
              title: "Pan-India Free Delivery",
              desc: "Enjoy seamless, complimentary delivery across India. We use premium packing materials to ensure your purchase arrives safe and secure.",
              img: "/delivery-bike.png",
            },
            {
              title: "Ultra-Durable Packing",
              desc: "Our three-layer protection system cushions against shocks, reinforces structural integrity, and shields from environmental factors like moisture and dust—ensuring your PC arrives in pristine condition.",
              img: "/package.png",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 mb-12`}
              variants={index % 2 === 0 ? leftToRightVariants : rightToLeftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="md:w-1/2 p-6">
                <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
              <Tilt
                rotationFactor={6}
                isRevese
                style={{ transformOrigin: "center center" }}
                springOptions={{
                  stiffness: 26.7,
                  damping: 4.1,
                  mass: 0.2,
                }}
                className="md:w-1/2 group relative rounded-lg"
              >
                <Spotlight
                  className="z-10 from-white/50 via-white/20 to-white/10 blur-2xl"
                  size={248}
                  springOptions={{
                    stiffness: 26.7,
                    damping: 4.1,
                    mass: 0.2,
                  }}
                />
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-80 w-full rounded-lg object-contain grayscale duration-700 group-hover:grayscale-0"
                />
              </Tilt>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16">
        <motion.div 
          className="max-w-6xl mx-auto text-center p-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl text-white relative overflow-hidden shadow-lg"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          <div className="bg-black max-w-6xl mx-auto text-center rounded-xl px-4 py-24">
            <h2 className="text-4xl font-bold mb-6">
              Get in <span className="text-yellow-500">Touch</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Have questions or ready to build your dream PC? Reach out to us—we&apos;re here to help you every step of the way!
            </p>
            <a
              href="mailto:support@a2dpcfactory.com"
              className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}