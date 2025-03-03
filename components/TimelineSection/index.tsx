import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants for individual cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Assuming Timeline component accepts children, we'll wrap each item
const TimelineCard = ({ item } : {item: {
  title: string;
  content: React.JSX.Element;
}}) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.3 }} // Trigger when 30% of card is visible
  >
    <div>
      <motion.div 
        className="flex justify-center mb-6"
        variants={imageVariants}
      >
        <div className="relative h-40 md:h-60 w-full max-w-md">
          <Image
            src={item.content.props.children[0].props.children.props.children.props.src}
            alt={item.title}
            width={400}
            height={300}
            className="rounded-lg object-contain w-full h-full"
          />
        </div>
      </motion.div>
      <motion.p 
        className="text-neutral-800 dark:text-neutral-200 font-normal mb-4"
        variants={cardVariants}
      >
        {item.content.props.children[1].props.children}
      </motion.p>
    </div>
  </motion.div>
);

export function TimelineSection() {
  const data = [
    {
      title: "Building Customer Persona",
      content: (
        <div>
          <div className="flex justify-center mb-6">
            <div className="relative h-40 md:h-60 w-full max-w-md">
              <Image
                src="/customer-support.png"
                alt="Building Customer Persona"
                width={400}
                height={300}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-4">
            We craft detailed customer personas based on real data and insights from direct interactions. 
            This allows our sales team to deliver tailored PC solutions that perfectly match your needs, 
            preferences, and challenges.
          </p>
        </div>
      ),
    },
    {
      title: "Deep Technical Consulting",
      content: (
        <div>
          <div className="flex justify-center mb-6">
            <div className="relative h-40 md:h-60 w-full max-w-md">
              <Image
                src="/conversation.png"
                alt="Deep Technical Consulting"
                width={400}
                height={300}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-4">
            Our expert engineers provide in-depth support before your PC arrives, equipping you with the 
            knowledge and skills for optimal use. We're committed to empowering you every step of the way.
          </p>
        </div>
      ),
    },
    {
      title: "Pan-India Free Delivery",
      content: (
        <div>
          <div className="flex justify-center mb-6">
            <div className="relative h-40 md:h-60 w-full max-w-md">
              <Image
                src="/delivery-bike.png"
                alt="Pan-India Free Delivery"
                width={400}
                height={300}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-4">
            Enjoy seamless, complimentary delivery across India. We use premium packing materials 
            to ensure your purchase arrives safe and secure.
          </p>
        </div>
      ),
    },
    {
      title: "Ultra-Durable Packing",
      content: (
        <div>
          <div className="flex justify-center mb-6">
            <div className="relative h-40 md:h-60 w-full max-w-md">
              <Image
                src="/package.png"
                alt="Ultra-Durable Packing"
                width={400}
                height={300}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-4">
            Our three-layer protection system cushions against shocks, reinforces structural integrity, 
            and shields from environmental factors like moisture and dust—ensuring your PC arrives in 
            pristine condition.
          </p>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      <motion.h2 
        className="text-6xl font-bold text-center mb-12"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
      >
        How Things Work at{" "}
        <span className="text-transparent bg-gradient-to-b py-2 from-amber-500 via-amber-400 to-yellow-400 bg-clip-text inline-block">
          A2D PC Factory
        </span>
      </motion.h2>
      <Timeline 
        data={data.map(item => ({
          ...item,
          content: <TimelineCard item={item} />
        }))}
      />
    </div>
  );
}

export default TimelineSection;