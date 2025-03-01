"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, ChevronRight, Calendar } from "lucide-react"

const experiences = [
  {
    title: "SPC (Student Placement Cell)",
    role: "Placement Coordinator",
    period: "2023 - Present",
    description:
      "Conducted 50+ LinkedIn research sessions to identify potential recruiters, increasing student placement success by 30%",
    skills: ["Research", "Networking", "Communication", "Leadership"]
  },
  {
    title: "Abhivyakti (Cultural Fest of IIIT Nagpur)",
    role: "Event Manager",
    period: "2022 - 2023",
    description:
      "Managed 20+ guest speakers and artists, ensuring a 100% smooth event experience for an audience of 2,000+ attendees",
    skills: ["Event Management", "Team Coordination", "Problem Solving", "Time Management"]
  },
  {
    title: "TantraFiesta (Techfest of IIIT Nagpur)",
    role: "PR Coordinator",
    period: "2022 - 2023",
    description:
      "Handled public relations outreach, increasing event visibility by 40%, leading to a 20% rise in event participation",
    skills: ["Public Relations", "Marketing", "Social Media", "Outreach"]
  },
]

export default function Experience() {
  const [activeExp, setActiveExp] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  }
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      }
    },
    hover: {
      y: -5,
      boxShadow: "0px 10px 30px rgba(0, 255, 162, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }
  
  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1, ease: "easeInOut" }
    }
  }
  
  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 10,
        delay: 0.6
      }
    },
    active: {
      scale: 1.2,
      backgroundColor: "#10b981",
      boxShadow: "0 0 15px rgba(16, 185, 129, 0.7)",
      transition: { duration: 0.3 }
    }
  }
  
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }
  
  return (
    <section id="experience" className="py-20 px-4 md:px-6 relative overflow-hidden bg-zinc-950">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-40 -left-32 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div 
          className="absolute bottom-40 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div className="flex items-center gap-4" variants={titleVariants}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-emerald-400 to-blue-400"
            />
            <motion.h2 
              variants={titleVariants}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent"
              whileHover={{ backgroundImage: "linear-gradient(to right, #34d399, #3b82f6)" }}
            >
              Experience
            </motion.h2>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={cardVariants}
                whileHover="hover"
                className="relative"
                onHoverStart={() => setActiveExp(index)}
                onHoverEnd={() => setActiveExp(null)}
              >
                <div className="flex items-start">
                  {/* Timeline decoration */}
                  <div className="mr-6 relative flex flex-col items-center">
                    <motion.div 
                      className="h-full w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500 absolute top-0 left-1/2 -translate-x-1/2 origin-top"
                      variants={lineVariants}
                      custom={index}
                    />
                    <motion.div 
                      className={`w-5 h-5 rounded-full border-2 border-emerald-500 bg-zinc-900 z-10 ${activeExp === index ? 'bg-emerald-500' : ''}`}
                      variants={circleVariants}
                      animate={activeExp === index ? "active" : "visible"}
                    />
                    <motion.div 
                      className="h-full w-0.5 bg-zinc-700/50 absolute top-full left-1/2 -translate-x-1/2"
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-emerald-400" />
                            {exp.title}
                          </h3>
                          <p className="text-emerald-400 font-medium mt-1">{exp.role}</p>
                        </div>
                        <div className="flex items-center text-sm text-slate-400">
                          <Calendar className="w-4 h-4 mr-1 opacity-70" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <motion.p 
                        className="text-slate-300 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {exp.description}
                      </motion.p>
                      
                      <motion.div 
                        className="flex flex-wrap gap-2 mt-4"
                        variants={containerVariants}
                      >
                        {exp.skills.map((skill, i) => (
                          <motion.span 
                            key={skill}
                            variants={skillVariants}
                            className="text-xs px-2 py-1 bg-black/50 border border-zinc-800 rounded-full text-slate-400"
                            custom={i}
                            whileHover={{ 
                              scale: 1.1, 
                              backgroundColor: "rgba(16, 185, 129, 0.1)", 
                              borderColor: "rgba(16, 185, 129, 0.5)",
                              color: "#d1d5db" 
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                      
                      <motion.div
                        className="mt-4 text-emerald-400 text-sm font-medium flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeExp === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        View details
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}