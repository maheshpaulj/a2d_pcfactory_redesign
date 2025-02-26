// components/Footer.tsx
"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const Footer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    <div className=" relative h-[500px]" style={{clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)"}}>
        <div className="fixed h-[500px] w-full bottom-0">
            <footer className="bg-black text-white py-16 h-full flex items-end">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-4 gap-12"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    >
                    {/* Logo & About */}
                    <motion.div className="footer-section" variants={sectionVariants}>
                        <Link href="/" className="text-2xl font-bold text-amber-400 mb-4 flex flex-col items-center">
                            <Image src={"/logo.webp"} alt='logo' width={128} height={128} />
                            A2D PC Factory
                        </Link>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div className="footer-section" variants={sectionVariants}>
                        <h4 className="text-lg font-semibold text-amber-400 mb-4">Company</h4>
                        <nav className="space-y-3">
                        <Link href="/" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                            About Us
                        </Link>
                        <Link href="/terms" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                            Terms & Conditions
                        </Link>
                        <Link href="/setup" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                            PC Setup Guide
                        </Link>
                        </nav>
                    </motion.div>

                    {/* Contact */}
                    <motion.div className="footer-section" variants={sectionVariants}>
                        <h4 className="text-lg font-semibold text-amber-400 mb-4">Contact</h4>
                        <div className="space-y-3 text-sm">
                        <a className="flex items-center text-gray-300 hover:text-amber-400" href='tel:+91 94457 47768'>
                            <FaPhoneAlt className="mr-2 text-amber-400" /> +91 94457 47768
                        </a>
                        <a className="flex items-center text-gray-300 hover:text-amber-400" href='tel:+91 94457 47768'>
                            <FaPhoneAlt className="mr-2 text-amber-400" /> +91 90253 80083
                        </a>
                        <a className="flex items-center text-gray-300 hover:text-amber-400" href='mailto:support@a2dpcfactory.com'>
                            <FaEnvelope className="mr-2 text-amber-400" /> support@a2dpcfactory.com
                        </a>
                        </div>
                        <motion.div 
                        className="social-links flex space-x-4 mt-4"
                        variants={socialVariants}
                        >
                        <motion.a 
                            variants={iconVariants}
                            href="https://www.youtube.com/@A2DChannel" 
                            className="social-icon text-gray-300 hover:text-amber-400"
                        >
                            <FaYoutube size={24} />
                        </motion.a>
                        <motion.a 
                            variants={iconVariants}
                            href="https://www.instagram.com/a2dpcfactory/" 
                            className="social-icon text-gray-300 hover:text-amber-400"
                        >
                            <FaInstagram size={24} />
                        </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Hours */}
                    <motion.div className="footer-section" variants={sectionVariants}>
                        <h4 className="text-lg font-semibold text-amber-400 mb-4">Hours</h4>
                        <div className="space-y-3 text-sm">
                        <div>
                            <h5 className="text-gray-300 font-medium">Mon - Sat</h5>
                            <p className="text-gray-400">9:00 AM - 7:30 PM</p>
                        </div>
                        <div>
                            <h5 className="text-gray-300 font-medium">Sunday</h5>
                            <p className="text-gray-400">9:00 AM - 6:00 PM</p>
                        </div>
                        </div>
                    </motion.div>
                    </motion.div>

                    {/* Copyright */}
                    <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()}{' '}
                        <Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">
                        A2D PC Factory
                        </Link>
                        . All Rights Reserved. Crafted with precision.
                    </p>
                    </div>
                </div>
                </footer>
        </div>
    </div>
  );
};

export default Footer;