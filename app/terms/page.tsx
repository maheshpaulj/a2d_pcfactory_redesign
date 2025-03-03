'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation variants
const heroContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      duration: 1.2,
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const TermsAndConditionsPage = () => {
  // Add smooth scrolling functionality
  useEffect(() => {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick as unknown as EventListener);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick as unknown as EventListener);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col justify-center items-center overflow-hidden">
      {/* Hero Section with fixed animation */}
      <section className="relative py-20 px-4 text-center w-screen h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-black to-gray-900">
        {/* Content with staggered animation */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Terms & Conditions
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-200"
            variants={itemVariants}
          >
            A2D PC Factory – Precision-Built Solutions for Your Business and Beyond
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Link 
              href="#terms" 
              className="mt-6 inline-block bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Review Terms
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-16 px-4 md:px-0" id="terms">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <p className="text-lg mb-8 text-gray-600">
            Thank you for choosing A2D PC FACTORY. We are dedicated to providing high-performance, custom-built PC solutions tailored to enhance your productivity and operational efficiency. By engaging with our website and services, you agree to adhere to the terms and conditions outlined below. Please review them thoroughly.
          </p>
        </motion.div>

        {/* Terms Sections */}
        {termsData.map((section, index) => (
          <motion.section
            key={index}
            className="mb-12"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b border-gray-300 pb-2">
              {section.title}
            </h2>
            {section.items.map((item, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-lg font-medium text-gray-700">
                  {item.subtitle}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </motion.section>
        ))}
      </main>

      {/* Footer Call-to-Action */}
      <motion.section
        className="bg-neutral-900 text-white mb-12 p-12 rounded-2xl text-center max-w-4xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Need Assistance?
        </h2>
        <p className="mb-6 text-gray-300">
          Reach out to our support team at{' '}
          <a href="mailto:support@a2dpcfactory.com" className="underline text-yellow-500 hover:text-yellow-600 transition">
            support@a2dpcfactory.com
          </a>{' '}
          or call <a href='tel:+919445747768' className="underline text-yellow-500 hover:text-yellow-600 transition">+91 94457 47768</a>
        </p>
        <Link 
          href="/" 
          className="inline-block bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
        >
          Return to Homepage
        </Link>
      </motion.section>
    </div>
  );
};

// Terms data (unchanged from previous version)
const termsData = [
  {
    title: "1. General Terms",
    items: [
      { subtitle: "1.1 Acceptance of Terms", content: "By accessing our website and purchasing our products, you agree to comply with and be bound by these terms and conditions." },
      { subtitle: "1.2 Modifications", content: "We reserve the right to change or modify these terms at any time. Your continued use of our website following any changes indicates your acceptance of the new terms." },
    ],
  },
  {
    title: "2. Products and Services",
    items: [
      { subtitle: "2.1 Product Description", content: "We strive to provide accurate descriptions and images of our products. However, we do not warrant that the product descriptions or other content on our website are error-free, complete, or current." },
      { subtitle: "2.2 Customization", content: "Our PCs are customizable to meet your specific needs. Please ensure that your customization choices are accurate, as we cannot be held responsible for errors in the configuration specified by you." },
    ],
  },
  {
    title: "3. Ordering and Payment",
    items: [
      { subtitle: "3.1 Order Process", content: "By placing an order, you agree to purchase a product according to these terms. All orders are subject to availability and acceptance." },
      { subtitle: "3.2 Payment", content: "Payment must be made in full before dispatching any products. We accept various payment methods, like UPI, Net Banking, etc. Further details will be provided during the order process." },
      { subtitle: "3.3 Order Confirmation", content: "To initiate an order placement, a minimum payment of 20% of the total cost is required. Once you place an order, you will receive an order confirmation via email. This does not mean that your order has been accepted. We reserve the sole discretion to decline or cancel any order at any time, should valid reasons arise." },
    ],
  },
  {
    title: "4. Building and Testing",
    items: [
      { subtitle: "4.1 Post-Order Confirmation", content: "Upon order placement, please anticipate a timeframe of approximately 3 to 7 working days for the completion of both the build and testing phases. This duration excludes packing and delivery times." },
      { subtitle: "4.2 Building Phase", content: "The build process commences once all necessary components are confirmed available. However, in the event of unforeseen circumstances causing delays in component arrival, the build will be temporarily halted, and the customer will be promptly notified of the situation." },
      { subtitle: "4.3 Testing Phase", content: "Following completion of the build, the PC undergoes a rigorous 48-hour testing phase to ensure quality standards are met. Only upon successful completion of the quality check will the PC proceed to the shipping stage. In the event of power disruptions causing delays during testing, the process will be temporarily paused, and customers will be duly informed of any such occurrences." },
    ],
  },
  {
    title: "5. Shipping and Delivery",
    items: [
      { subtitle: "5.1 Shipping Policy", content: "We offer various shipping options. Shipping costs and delivery times will be provided at checkout. Delivery times are estimated and not guaranteed." },
      { subtitle: "5.2 Order Tracking", content: "Once your order is shipped, you will receive a tracking number. You can use this number to track your order's progress." },
      { subtitle: "5.3 Risk of Loss", content: "All purchases are made pursuant to a shipment contract. This means that the risk of loss and title for such items passes to you upon our delivery to the carrier." },
    ],
  },
  {
    title: "6. Returns and Refunds",
    items: [
      { subtitle: "6.1 Return Policy", content: "We do not accept returns for a refund or exchange after delivery of the product." },
      { subtitle: "6.2 Refunds", content: "A refund option is only available for up to 24 hours from the time of the initial payment." },
    ],
  },
  {
    title: "7. Warranty and Support",
    items: [
      { subtitle: "7.1 Warranty", content: "While we do not offer a comprehensive warranty for our products, the brand's warranty will apply to all items. Details regarding the brand's warranty can be accessed on their official website. However, we do assist in facilitating the warranty claim process for products covered by the respective brand's warranty." },
      { subtitle: "7.2 Customer Support", content: "Our customer support team is available to assist you with any issues or questions you may have. Contact details and support hours are listed on our website." },
      { subtitle: "7.3 On-site Service", content: "Enjoy complimentary on-site service for three months with every A2D PC FACTORY-built computer." },
    ],
  },
  {
    title: "8. Limitation of Liability",
    items: [
      { subtitle: "8.1 Disclaimer of Warranties", content: "To the fullest extent permitted by law, A2D PC FACTORY disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose." },
      { subtitle: "8.2 Limitation of Liability", content: "A2D PC FACTORY shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our products or services. Our total liability to you for any damages shall not exceed the amount paid by you for the product or service in question." },
    ],
  },
  {
    title: "9. Intellectual Property",
    items: [
      { subtitle: "9.1 Ownership", content: "All content on our website, including text, graphics, logos, images, and software, is the property of A2D PC FACTORY or its content suppliers and is protected by intellectual property laws." },
      { subtitle: "9.2 Use of Content", content: "You may not use, reproduce, distribute, or display any content from our website without our prior written consent." },
    ],
  },
  {
    title: "10. Privacy",
    items: [
      { subtitle: "10.1 Privacy Policy", content: "We value your privacy and are committed to protecting your personal information. Our privacy policy, available on our website, outlines how we collect, use, and safeguard your data." },
    ],
  },
  {
    title: "11. Governing Law",
    items: [
      { subtitle: "11.1 Jurisdiction", content: "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which A2D PC FACTORY operates. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction." },
    ],
  },
  {
    title: "12. Contact Information",
    items: [
      { subtitle: "12.1 Customer Support", content: "For any questions or concerns regarding these terms and conditions, please contact our customer support team at support@a2dpcfactory.com or call us at +91 94457 47768, +91 90253 80083." },
    ],
  },
];

export default TermsAndConditionsPage;