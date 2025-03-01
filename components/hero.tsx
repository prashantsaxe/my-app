"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Prashant</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300">
          A passionate full-stack developer and Computer Science student at IIIT Nagpur, building digital experiences
          that make a difference.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild className="bg-emerald-600 hover:bg-emerald-500">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button asChild variant="outline" className="border-emerald-600 text-emerald-400 hover:bg-emerald-600/10">
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

