// components/Footer.tsx
"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useTransitionRouter } from 'next-view-transitions';

const Footer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const router = useTransitionRouter();
  
    function slideInOut() {
      document.documentElement.animate(
        [
          {
            opacity: 1,
            scale: 1,
            transform: "translateY(0)",
          },
          {
            opacity: 0.2,
            scale: 0.9,
            transform: "translateY(-35%)",
          },
        ],
        {
          duration: 1500,
          easing: "cubic-bezier(0.87, 0, 0.13, 1)",
          fill: "forwards",
          pseudoElement: "::view-transition-old(root)",
        }
      );
  
      document.documentElement.animate(
        [
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          },
        ],
        {
          duration: 1500,
          easing: "cubic-bezier(0.87, 0, 0.13, 1)",
          fill: "forwards",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
        staggerChildren: 0.1
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <footer className="bg-black text-white py-8 sm:py-12 lg:py-16 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Logo & About */}
          <motion.div className="footer-section" variants={sectionVariants}>
            <Link href="/" onClick={(e) => { e.preventDefault(); router.push("/", { onTransitionReady: slideInOut });}} className="text-xl sm:text-2xl font-bold text-amber-400 mb-4 flex flex-col items-center sm:items-start">
              <Image src={"/logo.webp"} alt='logo' width={100} height={100} className="mb-2" />
              A2D PC Factory
            </Link>
          </motion.div>

          {/* Company Links */}
          <motion.div className="footer-section" variants={sectionVariants}>
            <h4 className="text-lg font-semibold text-amber-400 mb-4 text-center sm:text-left">Company</h4>
            <nav className="space-y-3 flex flex-col items-center sm:items-start">
              <Link href="/" onClick={(e) => { e.preventDefault(); router.push("/", { onTransitionReady: slideInOut });}} className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/terms" onClick={(e) => { e.preventDefault(); router.push("/terms", { onTransitionReady: slideInOut });}} className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                Terms & Conditions
              </Link>
              <Link href="/setup" onClick={(e) => { e.preventDefault(); router.push("/setup", { onTransitionReady: slideInOut });}} className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                PC Setup Guide
              </Link>
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div className="footer-section" variants={sectionVariants}>
            <h4 className="text-lg font-semibold text-amber-400 mb-4 text-center sm:text-left">Contact</h4>
            <div className="space-y-3 text-sm flex flex-col items-center sm:items-start">
              <a className="flex items-center text-gray-300 hover:text-amber-400 transition-colors" href='tel:+91 94457 47768'>
                <FaPhoneAlt className="mr-2 text-amber-400" /> +91 94457 47768
              </a>
              <a className="flex items-center text-gray-300 hover:text-amber-400 transition-colors" href='tel:+91 90253 80083'>
                <FaPhoneAlt className="mr-2 text-amber-400" /> +91 90253 80083
              </a>
              <a className="flex items-center text-gray-300 hover:text-amber-400 transition-colors" href='mailto:support@a2dpcfactory.com'>
                <FaEnvelope className="mr-2 text-amber-400" /> support@a2dpcfactory.com
              </a>
            </div>
            <motion.div 
              className="social-links flex space-x-4 mt-4 justify-center sm:justify-start"
              variants={socialVariants}
            >
              <motion.a 
                variants={iconVariants}
                href="https://www.youtube.com/@A2DChannel" 
                className="social-icon text-gray-300 hover:text-red-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={24} />
              </motion.a>
              <motion.a 
                variants={iconVariants}
                href="https://www.instagram.com/a2dpcfactory/" 
                className="social-icon text-gray-300 hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hours */}
          <motion.div className="footer-section" variants={sectionVariants}>
            <h4 className="text-lg font-semibold text-amber-400 mb-4 text-center sm:text-left">Hours</h4>
            <div className="space-y-3 text-sm flex flex-col items-center sm:items-start">
              <div className="text-center sm:text-left">
                <h5 className="text-gray-300 font-medium">Mon - Sat</h5>
                <p className="text-gray-400">9:00 AM - 7:30 PM</p>
              </div>
              <div className="text-center sm:text-left">
                <h5 className="text-gray-300 font-medium">Sunday</h5>
                <p className="text-gray-400">9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()}{' '}
            <Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">
              A2D PC Factory
            </Link>
            . All Rights Reserved. Designed by <Link href={"https://maheshpaul.is-a.dev/"} target='_blank' className='hover:text-emerald-600 transition-all'>Mahesh Paul</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;