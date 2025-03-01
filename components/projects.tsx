"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { StaticImageData } from "next/image"

// Import images
import invoSage from "@/public/invo.png"
import newsSage from "@/public/newzsage.png"
import chatChamber from "@/public/chat.png"
import StreamSage from "@/public/StreamSage.png"
import antra from "@/public/antra.png"

// Define interface for project type
interface Project {
  title: string;
  description: string;
  tech: string[];
  points: string[];
  image: StaticImageData;
  link: string;
  github: string;
}

// Define interface for visible project with key
interface VisibleProject extends Project {
  key: string;
}

// Animation variants
const sectionVariants = {
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
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3
    }
  }
}

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.5 }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: "rgba(52, 211, 153, 0.15)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
}

const projects: Project[] = [
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
  const [isAnimating, setIsAnimating] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState<VisibleProject[]>([])
  
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 1;
    return window.innerWidth >= 768 ? 2 : 1;
  }
  
  useEffect(() => {
    updateVisibleProjects()
    
    const handleResize = () => {
      updateVisibleProjects()
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentIndex])
  
  const updateVisibleProjects = () => {
    const cardsPerView = getCardsPerView();
    const visibleCards: VisibleProject[] = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % projects.length
      visibleCards.push({
        ...projects[index],
        key: `${projects[index].title}-${index}`
      })
    }
    setVisibleProjects(visibleCards)
  }

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => 
      prev + 1 >= projects.length ? 0 : prev + 1
    )
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? projects.length - 1 : prev - 1
    )
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-zinc-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
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
      
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="space-y-12">
          <motion.div 
            className="flex justify-between items-center"
            variants={titleVariants}
          >
            <div className="space-y-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-emerald-400 to-blue-400"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
              <motion.p 
                className="text-slate-400 max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Explore my latest work showcasing my technical skills and problem-solving approach
              </motion.p>
            </div>
            
            <div className="flex gap-2">
              <motion.div 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="border-emerald-600 text-emerald-400 hover:bg-emerald-600/20 transition-colors h-10 w-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="border-emerald-600 text-emerald-400 hover:bg-emerald-600/20 transition-colors h-10 w-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <div className="relative overflow-hidden min-h-[700px] md:min-h-[650px]">
            {/* Project indicator */}
            <div className="flex justify-center gap-2 mb-6">
              {projects.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-emerald-500" : "w-2 bg-zinc-700"
                  }`}
                  animate={{
                    width: index === currentIndex ? 32 : 8,
                    backgroundColor: index === currentIndex ? "#10b981" : "#3f3f46"
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 relative">
              <AnimatePresence mode="wait">
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={project.key}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover="hover"
                    className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden shadow-lg relative"
                  >
                    {/* Badge */}
                    <motion.div 
                      className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-zinc-800 text-xs font-medium flex items-center gap-1 shadow-lg"
                      initial={{ opacity: 0, scale: 0.8, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <Code className="w-3 h-3 text-emerald-400" />
                      <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                        {project.title.includes("Sage") ? "Sage Series" : "Featured"}
                      </span>
                    </motion.div>
                    
                    {/* Image container */}
                    <motion.div 
                      className="relative h-52 overflow-hidden"
                      whileHover="hover"
                      variants={imageVariants}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 opacity-70" />
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <motion.h3 
                        className="text-xl font-semibold bg-gradient-to-r from-white to-white bg-clip-text text-transparent"
                        whileHover={{ x: 5, backgroundImage: "linear-gradient(to right, #34d399, #3b82f6)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      <p className="text-slate-400 text-sm">{project.description}</p>
                      
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.tech.map((tech, techIndex) => (
                          <motion.span 
                            key={tech} 
                            className="text-xs px-2 py-1 bg-black/50 border border-zinc-800 rounded-full text-slate-400"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.1, backgroundColor: "#18181b", color: "#d1d5db" }}
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
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                      
                      <motion.div 
                        className="flex gap-4 pt-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-emerald-600 text-emerald-400 hover:bg-emerald-600/20 rounded-lg"
                        >
                          <motion.a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(5, 150, 105, 0.1)" }}
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
                          className="border-emerald-600 text-emerald-400 hover:bg-emerald-600/20 rounded-lg"
                        >
                          <motion.a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(5, 150, 105, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </motion.a>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          
          {/* View all projects button */}
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white border-none rounded-lg px-8 py-2">
                <a href="#projects">View All Projects</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}