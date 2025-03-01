"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import about from "@/public/about.png";

export default function Hero() {
  // Animation variants for text appearing character by character
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  // Function to handle smooth scrolling to the next section
  const handleScroll = () => {
    const nextSection = document.getElementById("projects"); // Adjust to your target section ID
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-8 lg:gap-12">
        {/* Content side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-left max-w-2xl space-y-8 lg:w-3/5"
        >
          {/* Animated name text */}
          <div className="overflow-hidden">
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-extrabold tracking-tighter"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              {"Hi, I'm ".split("").map((char, index) => (
                <motion.span key={index} variants={characterVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent inline-block ml-1"
              >
                Prashant
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="text-xl text-slate-300 leading-relaxed"
          >
            A passionate full-stack developer and Computer Science student at IIIT Nagpur, building digital experiences
            that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            className="flex gap-4"
          >
            <Button
              asChild
              className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg px-6 py-2 font-medium text-base"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-emerald-600 text-emerald-400 hover:bg-emerald-600/10 rounded-lg px-6 py-2 font-medium text-base"
            >
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="lg:w-2/5 relative"
        >
          <div className="relative">
            {/* Decorative elements */}
            <motion.div
              className="absolute -z-10 inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 blur-sm"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            {/* Image container */}
            <motion.div
              className="relative z-0 bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10"></div>
              <Image
                src={about}
                alt="Prashant"
                width={600} // Matches your placeholder size
                height={800}
                className="w-full h-full object-cover object-center"
              />

              {/* Floating coding elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center rotate-12 z-20"
                animate={{ y: [0, -10, 0], rotate: [12, 15, 12] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="text-emerald-400 text-xl font-mono">{`</>`}</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center -rotate-12 z-20"
                animate={{ y: [0, 10, 0], rotate: [-12, -8, -12] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <span className="text-blue-400 text-xl font-mono">{"{ }"}</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Arrow Down Button with Click Handler */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 z-10"
      >
        <motion.button
          onClick={handleScroll}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-zinc-900/70 p-2 rounded-full border border-zinc-800 cursor-pointer hover:bg-zinc-800/90 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-6 h-6 text-emerald-400" />
        </motion.button>
      </motion.div>
    </section>
  );
}