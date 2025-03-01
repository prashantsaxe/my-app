"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "SPC (Student Placement Cell)",
    description:
      "Conducted 50+ LinkedIn research sessions to identify potential recruiters, increasing student placement success by 30%",
  },
  {
    title: "Abhivyakti (Cultural Fest of IIIT Nagpur)",
    description:
      "Managed 20+ guest speakers and artists, ensuring a 100% smooth event experience for an audience of 2,000+ attendees",
  },
  {
    title: "TantraFiesta (Techfest of IIIT Nagpur)",
    description:
      "Handled public relations outreach, increasing event visibility by 40%, leading to a 20% rise in event participation",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-emerald-500 before:to-blue-500"
              >
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-slate-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

