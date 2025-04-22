"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

// Define the content item interface
interface SetupContentItem {
  step: number;
  title: string;
  description: string;
  imageSrc: string;
}

// Optimized setupContent - removed repetitive Image components, just using src paths
const setupContent = [
  {
    step: 1,
    title: "Place Package",
    description: "Place the package on a stable surface.",
    imageSrc: "/setup/Tuto_Pic_1.jpg",
  },
  {
    step: 2,
    title: "Cut Package",
    description: "Use scissors/box cutter to cut the package.",
    imageSrc: "/setup/Tuto_Pic_2.jpg",
  },
  {
    step: 3,
    title: "Avoid Deep Cuts",
    description: "Avoid cutting too deeply to prevent damage.",
    imageSrc: "/setup/Tuto_Pic_3.jpg",
  },
  {
    step: 4,
    title: "After Removing Cover",
    description: "After removing packaging cover.",
    imageSrc: "/setup/Tuto_Pic_4.jpg",
  },
  {
    step: 5,
    title: "Lift Edge Boards",
    description: "Gently lift the edge boards from all sides.",
    imageSrc: "/setup/Tuto_Pic_5.jpg",
  },
  {
    step: 6,
    title: "Remove Edge Boards",
    description: "Carefully remove edge boards except bottom.",
    imageSrc: "/setup/Tuto_Pic_9.jpg",
  },
  {
    step: 7,
    title: "Remove Foam",
    description: "Slide out foam, support PC.",
    imageSrc: "/setup/Tuto_Pic_6.jpg",
  },
  {
    step: 8,
    title: "Cut Top",
    description: "Cut the top of the big box.",
    imageSrc: "/setup/Tuto_Pic_7.jpg",
  },
  {
    step: 9,
    title: "Fold Tabs",
    description: "Fold the cardboard box tabs out.",
    imageSrc: "/setup/Tuto_Pic_8.jpg",
  },
  {
    step: 10,
    title: "Turn Over",
    description: "Then turn it over and lift the box.",
    imageSrc: "/setup/Tuto_Pic_10.jpg",
  },
  {
    step: 11,
    title: "Flip Upside Down",
    description: "Carefully flip it upside down.",
    imageSrc: "/setup/Tuto_Pic_11.jpg",
  },
  {
    step: 12,
    title: "Lift Box",
    description: "Then you can easily lift off the box.",
    imageSrc: "/setup/Tuto_Pic_12.jpg",
  },
  {
    step: 13,
    title: "Place PC",
    description: "Hold the PC, place it on the surface.",
    imageSrc: "/setup/Tuto_Pic_13.jpg",
  },
  {
    step: 14,
    title: "Remove Bottom Protectors",
    description: "Remove polystyrene edge protectors on bottom.",
    imageSrc: "/setup/Tuto_Pic_14.jpg",
  },
  {
    step: 15,
    title: "Remove Top Protectors",
    description: "Remove polystyrene edge protectors on top.",
    imageSrc: "/setup/Tuto_Pic_15.jpg",
  },
  {
    step: 16,
    title: "Remove Bag",
    description: "Remove the protective bag covering the PC.",
    imageSrc: "/setup/Tuto_Pic_16.jpg",
  },
  {
    step: 17,
    title: "After Cover Removal",
    description: "After removing the protective cover.",
    imageSrc: "/setup/Tuto_Pic_17.jpg",
  },
  {
    step: 18,
    title: "Lay PC Down",
    description: "Lay down the PC with glass window facing up.",
    imageSrc: "/setup/Tuto_Pic_43.jpg",
  },
  {
    step: 19,
    title: "Remove Screw",
    description: "Remove the screw for opening the glass panel.",
    imageSrc: "/setup/Tuto_Pic_18.jpg",
  },
  {
    step: 20,
    title: "Open Panel",
    description: "Open the glass panel.",
    imageSrc: "/setup/Tuto_Pic_19.jpg",
  },
  {
    step: 21,
    title: "Check Inside",
    description: "Check for packaging foam or RT PACK inside.",
    imageSrc: "/setup/Tuto_Pic_20.jpg",
  },
  {
    step: 22,
    title: "Small PC Foam",
    description: "For smaller PCs, we'll use packaging foam.",
    imageSrc: "/setup/Tuto_Pic_21.jpg",
  },
  {
    step: 23,
    title: "Large PC RT Pack",
    description: "For larger PCs, we'll use RT pack.",
    imageSrc: "/setup/Tuto_Pic_42.jpg",
  },
  {
    step: 24,
    title: "Remove Small Foam",
    description: "Remove packaging foam from smaller PCs.",
    imageSrc: "/setup/Tuto_Pic_21.jpg",
  },
  {
    step: 25,
    title: "Remove RT Pack",
    description: "Remove RT pack from larger PCs.",
    imageSrc: "/setup/Tuto_Pic_41.jpg",
  },
  {
    step: 26,
    title: "Review Documents",
    description: "Review documents for setup and warranty.",
    imageSrc: "/setup/Tuto_Pic_44.jpg",
  },
  {
    step: 27,
    title: "Place on Table",
    description: "Place the PC on the table.",
    imageSrc: "/setup/Tuto_Pic_45.jpg",
  },
  {
    step: 28,
    title: "Plug SMPS",
    description: "Plug the power cable into SMPS socket.",
    imageSrc: "/setup/Tuto_Pic_22.jpg",
  },
  {
    step: 29,
    title: "Connect Power",
    description: "Connect power cable to power supply socket.",
    imageSrc: "/setup/Tuto_Pic_23.jpg",
  },
  {
    step: 30,
    title: "Connect HDMI",
    description: "Connect PC and monitor using HDMI cable.",
    imageSrc: "/setup/Tuto_Pic_27.jpg",
  },
  {
    step: 31,
    title: "GPU HDMI",
    description: "If PC has GPU, plug HDMI into GPU not motherboard.",
    imageSrc: "/setup/Tuto_Pic_25.jpg",
  },
  {
    step: 33,
    title: "GPU Power",
    description: "Plug the PC power supply to the GPU.",
    imageSrc: "/setup/Tuto_Pic_30.jpg",
  },
  {
    step: 34,
    title: "Connect Wi-Fi",
    description: "Connect the Wi-Fi antenna, if applicable.",
    imageSrc: "/setup/Tuto_Pic_31.jpg",
  },
  {
    step: 35,
    title: "Connect Peripherals",
    description: "Connect keyboard and mouse.",
    imageSrc: "/setup/Tuto_Pic_34.jpg",
  },
  {
    step: 36,
    title: "Switch Power",
    description: "Switch on the power supply.",
    imageSrc: "/setup/Tuto_Pic_46.jpg",
  },
  {
    step: 37,
    title: "SMPS On",
    description: "Set SMPS switch from '0' to '1' to turn on.",
    imageSrc: "/setup/Tuto_Pic_28.jpg",
  },
  {
    step: 38,
    title: "Power On",
    description: "Finally power on the PC.",
    imageSrc: "/setup/Tuto_Pic_35.jpg",
  },
  {
    step: 39,
    title: "Setup Complete",
    description: "Your PC is now setup successfully!",
    imageSrc: "/setup/Tuto_Pic_36.jpg",
  },
];

// StickyCardScroll Component - The main interactive scrolling component
interface StickyCardScrollProps {
  content: SetupContentItem[];
}

const StickyCardScroll: React.FC<StickyCardScrollProps> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasFiredConfetti, setHasFiredConfetti] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Function to trigger confetti
  const fireConfetti = () => {
    if (typeof window !== "undefined" && confetti) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  // Simple debounce function
  const debounce = (func: () => void, wait: number) => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(func, wait);
    };
  };

  useEffect(() => {
    // Ensure browser scroll restoration is enabled
    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "auto";
    }

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const { top, height } = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far we've scrolled through the container
      const scrollPosition = window.scrollY;
      const containerTop = scrollPosition + top;
      const containerHeight = height;

      // Total scrollable distance is container height minus viewport height
      const scrollableDistance = containerHeight - windowHeight;

      // Calculate scroll progress (0 to 1)
      const progress = Math.max(
        0,
        Math.min(1, (scrollPosition - containerTop) / scrollableDistance)
      );

      setScrollProgress(progress);

      // Calculate which card should be active based on progress
      const newIndex = Math.min(
        Math.floor(progress * content.length),
        content.length - 1
      );

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        // Trigger confetti when reaching the final step (Step 39)
        if (newIndex === content.length - 1 && !hasFiredConfetti) {
          fireConfetti();
          setHasFiredConfetti(true);
        }
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 50);

    window.addEventListener("scroll", debouncedHandleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [content.length, currentIndex, hasFiredConfetti]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        height: `${content.length * 100}vh`, // Make container tall enough to scroll through all items
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Left side: Text content that scrolls bottom to top */}
        <div className="w-full md:w-1/2 h-1/2 md:h-screen flex items-center justify-center relative overflow-hidden">
          <div className="relative w-full max-w-lg">
            {content.map((item, index) => {
              const isActive = index === currentIndex;
              const hasAppeared = index <= currentIndex;
              const offset = isActive ? 0 : hasAppeared ? -110 : 110;

              return (
                <div
                  key={index}
                  className="absolute w-full transition-all duration-400 p-6 bg-white"
                  style={{
                    transform: `translateY(${offset}%)`,
                    opacity: isActive ? 1 : 0,
                    zIndex: content.length - index,
                  }}
                >
                  <span className="inline-block bg-yellow-500 text-black text-sm px-3 py-1 rounded-full mb-4">
                    Step {item.step}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side: Images that scroll top to bottom */}
        <div className="w-full md:w-1/2 h-1/2 md:h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
          <div className="relative w-full h-full">
            {content.map((item, index) => {
              const isActive = index === currentIndex;
              const hasAppeared = index <= currentIndex;
              const offset = isActive ? 0 : hasAppeared ? 110 : -110;

              return (
                <div
                  key={index}
                  className="absolute w-full h-full transition-all duration-300 overflow-hidden"
                  style={{
                    transform: `translateY(${offset}%)`,
                    opacity: isActive ? 1 : 0,
                    zIndex: content.length - index,
                  }}
                >
                  <Image
                    src={item.imageSrc}
                    alt={`Step ${item.step}: ${item.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Center scroll indicator */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 z-10">
          <div
            className="bg-yellow-500 w-full transition-all duration-300"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>

      {/* Step indicator */}
      {scrollProgress > 0 && (
        <div className="fixed right-8 bottom-8 bg-gray-900 text-yellow-500 px-4 py-2 rounded-full shadow-lg z-50 font-medium">
          Step {currentIndex + 1} of {content.length}
        </div>
      )}
    </div>
  );
};

// Dark Themed Hero Section with Yellow Accent
const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Set Up Your Custom PC
            <span className="block text-yellow-400 mt-2">Like a Pro</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Thank you for choosing A2D PC FACTORY. Follow our interactive guide to
            unpack and set up your custom-built PC safely and efficiently.
          </p>
          <div>
            <Link
              href="/build"
              className="inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Build Now
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative">
            <video
              src="/PC.mp4"
              muted
              className="scale-[.80] z-10"
              loop
              autoPlay
              playsInline
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-4 rounded-lg shadow-lg hidden lg:block">
              <p className="font-bold text-lg text-gray-900">Easy Setup</p>
              <p className="text-gray-800">39 simple steps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Follow Our Guide?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Avoid Damage</h3>
            <p className="text-gray-600">
              Proper unboxing prevents accidental damage to sensitive components.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Quick Setup</h3>
            <p className="text-gray-600">
              Get your PC up and running faster with our streamlined process.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Maintain Warranty</h3>
            <p className="text-gray-600">
              Follow our guide to ensure your warranty remains valid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function SetupPage(): React.ReactNode {
  // Remove duplicate setupContent array and use the one defined at the top
  return (
    <div className="min-h-screen bg-white">
      {/* Dark Themed Hero Section with Yellow Accent */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Setup Guide Section with Sticky Card Scroll */}
      <section id="setup-guide" className="py-16">
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Step-by-Step Setup Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scroll through our interactive guide to unbox and set up your new
              PC safely. Watch as the steps reveal with an engaging animation.
            </p>
          </div>
        </div>

        {/* The sticky card scrolling component with centered indicator */}
        <StickyCardScroll content={setupContent} />
      </section>

      {/* Get in Touch Section */}
      <section className="py-16">
        <motion.div
          className="max-w-6xl mx-auto text-center p-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl text-white relative overflow-hidden shadow-lg"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          viewport={{ amount: 0.2 }}
        >
          <div className="bg-black max-w-6xl mx-auto text-center rounded-xl px-4 py-24">
            <h2 className="text-4xl font-bold mb-6">
              Get in <span className="text-yellow-500">Touch</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Have questions or ready to build your dream PC? Reach out to
              us—we&apos;re here to help you every step of the way!
            </p>
            <a
              href="mailto:support@a2dpcfactory.com"
              className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg Extension to display line numbers in code blocks-yellow-400 hover:scale-105 transition-all"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}