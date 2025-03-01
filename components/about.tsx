"use client"

import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import about from "@/public/about.png"
const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Python",
  "C/C++",
  "Java",
  "Git",
  "Docker",
  "REST APIs",
  "Tailwind CSS",
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Animated Name Header */}
          <motion.div 
            className="overflow-hidden mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              Your Name
            </motion.h1>
            <motion.div 
              className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile Picture with Animation */}
            <motion.div 
              className="order-2 md:order-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-purple-500"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, 0, -1, 0]
                  }} 
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="h-64 w-64 md:h-80 md:w-80 rounded-2xl overflow-hidden border-4 border-zinc-800 relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image 
                    src={about as StaticImageData}
                    alt="Your Profile" 
                    className="h-full w-full object-cover"
                  />
                  
                </motion.div>
                
                {/* Background pattern elements */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-blue-500/20 z-0"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-purple-500/20 z-0"
                  animate={{ 
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>
            </motion.div>
            
            {/* About Info with staggered text animation */}
            <div className="order-1 md:order-2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <motion.div 
                className="space-y-4 text-slate-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
              >
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  I&apos;m a Computer Science student at IIIT Nagpur with a passion for building innovative web
                  applications and solving complex problems.
                </motion.p>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Currently maintaining a CGPA of 8.17, I combine strong academic foundations with practical development
                  experience in modern web technologies.
                </motion.p>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  I specialize in full-stack development using the MERN stack and Next.js, with a focus on creating
                  efficient, scalable, and user-friendly applications.
                </motion.p>
              </motion.div>
            </div>
          </div>
          
          {/* Skills section with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(124, 58, 237, 0.2)" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-3 py-1 bg-zinc-900/50 border border-zinc-800 rounded-full text-sm text-slate-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}