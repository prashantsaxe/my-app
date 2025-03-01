"use client"

import { motion } from "framer-motion"

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
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-slate-300">
              <p>
                I&apos;m a Computer Science student at IIIT Nagpur with a passion for building innovative web
                applications and solving complex problems.
              </p>
              <p>
                Currently maintaining a CGPA of 8.17, I combine strong academic foundations with practical development
                experience in modern web technologies.
              </p>
              <p>
                I specialize in full-stack development using the MERN stack and Next.js, with a focus on creating
                efficient, scalable, and user-friendly applications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-zinc-900/50 border border-zinc-800 rounded-full text-sm text-slate-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

