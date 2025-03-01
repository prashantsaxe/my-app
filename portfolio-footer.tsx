"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

const technologies = [
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express" },
  { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma" },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 md:px-6 relative overflow-hidden">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-8 gap-1">
          {Array.from({ length: 64 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
              }}
              className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 h-full w-full"
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>
            <div className="space-y-4">
              <motion.a
                href="mailto:prashantxhunter@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                whileHover={{ x: 10 }}
              >
                <Mail className="w-5 h-5" />
                prashantxhunter@gmail.com
              </motion.a>
              <motion.a
                href="tel:+919123142346"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                whileHover={{ x: 10 }}
              >
                <Phone className="w-5 h-5" />
                +91 9123142346
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/prashant-saxena-131473193"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                whileHover={{ x: 10 }}
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/prashantsaxe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                whileHover={{ x: 10 }}
              >
                <Github className="w-5 h-5" />
                GitHub
              </motion.a>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-4 text-slate-300">
              <div>
                <h3 className="font-semibold text-white">Indian Institute Of Information Technology, Nagpur</h3>
                <p>B.Tech in Computer Science and Engineering</p>
                <p>Current CGPA: 8.17 (2022 - 2026)</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Shivam School</h3>
                <p>Class XII - CBSE: 89.6% (2020 - 2022)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-lg bg-zinc-900/50 p-2 backdrop-blur-sm border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                  <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-xs text-slate-400">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Prashant Kumar Saxena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

