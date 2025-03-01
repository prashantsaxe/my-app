"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-emerald-400">What&apos;s Next?</h2>
            <h3 className="text-3xl md:text-4xl font-bold mt-2">Get In Touch</h3>
            <p className="mt-4 text-slate-300">
              Let&apos;s Chat! Whether you have a question, a project idea, or just want to connect, I&apos;m always
              happy to hear from you. Drop me a message, and I&apos;ll be in touch soon!
            </p>
          </div>

          <form className="space-y-6">
            <Input
              type="text"
              placeholder="Name"
              className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-400"
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-400"
            />
            <Textarea
              placeholder="Message"
              className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-400 min-h-[160px]"
            />
            <div className="text-right">
              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8">Say Hello</Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

