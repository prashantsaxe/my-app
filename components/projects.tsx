"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Import images
import invoSage from "@/public/invo.png"
import newsSage from "@/public/newzsage.png"
import chatChamber from "@/public/chat.png"
import StreamSage from "@/public/StreamSage.png"
import antra from "@/public/antra.png"

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  },
  hover: { 
    scale: 1.03,
    boxShadow: "0px 10px 30px rgba(0, 255, 162, 0.1)",
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  }
}

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 }
  }
}

const projects = [
  {
    title: "Invo-Sage",
    description: "A full-featured Invoice Management System with PDF generation and email integration.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "jsPDF", "NextAuth.js"],
    points: [
      "Facilitated PDF invoice generation using jsPDF, reducing manual invoicing efforts by 70%",
      "Integrated Mailtrap API to securely send 500+ invoices",
      "Engineered an interactive dashboard for real-time invoice tracking",
      "Strengthened system security with NextAuth.js authentication",
    ],
    image: invoSage,
    link: "#",
    github: "https://github.com/prashantsaxe/Invo-Sage",
  },
  // ... (other projects remain the same, just update their image imports)
  {
    title: "NewsSage",
    description: "A crowdsourced news platform empowering local publishers to share stories.",
    tech: ["React", "Node.js", "MongoDB", "Google Fact Check API", "Cloudinary"],
    points: [
      "Incorporated Google Fact Check API, increasing content credibility by 80%",
      "Optimized media upload functionality using Cloudinary",
      "Devised a scalable backend with Node.js and MongoDB",
      "Enhanced security with role-based access controls",
    ],
    image: newsSage,
    link: "https://newz-sage.vercel.app/",
    github: "https://github.com/prashantsaxe/newzSage",
  },
  {
    title: "ChatChamber",
    description: "High-performance real-time chat application using the MERN stack.",
    tech: ["React", "Socket.IO", "MongoDB", "Zustand", "Tailwind CSS"],
    points: [
      "Engineered chat system handling 10,000+ messages per day",
      "Introduced timestamped messages and file sharing",
      "Implemented media upload with Cloudinary",
      "Utilized Zustand for efficient state management",
    ],
    image: chatChamber,
    link: "https://chat-chamber.vercel.app/",
    github: "https://github.com/prashantsaxe/chatChamber",
  },
  {
    title: "StreamSage",
    description: "A ultimate watchlist platform for anime, web series, and K-dramas with detailed information.",
    tech: ["React", "Node.js", "MongoDB", "TMDB API", "Tailwind CSS"],
    points: [
      "Built a dynamic watchlist system supporting multiple content types",
      "Integrated TMDB API for real-time show information and metadata",
      "Designed responsive UI Trending and most popular shows",
      "Implemented user authentication and personalized recommendations",
    ],
    image: StreamSage,
    link: "https://stream-sage-oksh.vercel.app/",
    github: "https://github.com/prashantsaxe/StreamSage",
  },
  {
    title: "Antra",
    description: "A musical guessing game inspired by Antakshari with background music and scoring system.",
    tech: ["React", "Node.js", "Web Audio API", "Firebase", "Tailwind CSS"],
    points: [
      "Developed real-time song guessing with Web Audio API integration",
      "Implemented multi-genre support (Hindi, English) with dynamic scoring",
      "Created an interactive UI with synchronized audio-visual feedback",
      "Built leaderboard system using Firebase real-time database",
    ],
    image: antra,
    link: "https://t.co/yztSmbUhIz",
    github: "https://github.com/prashantsaxe/antra",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsPerView = 2

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + cardsPerView >= projects.length ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? projects.length - cardsPerView : prev - 1
    )
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <div className="flex gap-2">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="border-emerald-600 text-emerald-400 hover:bg-emerald-600/20 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="border-emerald-600 text-emerald-400 hover:bg-emerald-600/20 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / cardsPerView)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="min-w-[100%] md:min-w-[calc(50%-1.5rem)] bg-black border border-zinc-800 rounded-lg overflow-hidden"
                >
                  <motion.div 
                    className="relative h-48 overflow-hidden"
                    whileHover="hover"
                    variants={imageVariants}
                  >
                    <img
                      src={project.image.src}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <motion.div
                      className="absolute inset-0 bg-emerald-500/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                  <div className="p-6 space-y-4">
                    <motion.h3 
                      className="text-xl font-semibold text-white"
                      whileHover={{ x: 5, color: "#34d399" }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-slate-400">{project.description}</p>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.tech.map((tech) => (
                        <motion.span 
                          key={tech} 
                          className="text-xs px-2 py-1 bg-zinc-900 rounded-full text-slate-400"
                          whileHover={{ scale: 1.1, backgroundColor: "#27272a" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                    <ul className="space-y-2 text-sm text-slate-400">
                      {project.points.map((point, i) => (
                        <motion.li 
                          key={i} 
                          className="list-disc ml-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                        >
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div 
                      className="flex gap-4 pt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-emerald-600 text-emerald-400 hover:bg-emerald-600/20"
                      >
                        <motion.a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </motion.a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-emerald-600 text-emerald-400 hover:bg-emerald-600/20"
                      >
                        <motion.a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </motion.a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}