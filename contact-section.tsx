// First, make sure you've installed lucide-react
// Run in terminal: npm install lucide-react
// or: yarn add lucide-react

'use client' // Add this if using Next.js App Router

import { Github, Linkedin, Twitter, Instagram, BookText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center px-4 py-16 md:px-6 relative">
      {/* Social Links Sidebar */}
      <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors"
          aria-label="Github"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="https://twitter.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-6 h-6" />
        </a>
        <a 
          href="https://instagram.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a 
          href="https://yourblog.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors"
          aria-label="Blog"
        >
          <BookText className="w-6 h-6" />
        </a>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-emerald-400 text-xl mb-4 font-medium">What's Next?</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-200">Get In Touch</h1>
        <p className="text-slate-400 mb-12 text-lg max-w-prose">
          Let's chat! Whether you have a question, a project idea, or just want to connect, 
          I'm always happy to hear from you. Drop me a message, and I'll respond ASAP!
        </p>

        <form className="space-y-6" action="#" method="POST">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-400 focus:ring-emerald-500 focus:border-emerald-500"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-400 focus:ring-emerald-500 focus:border-emerald-500"
          />
          <Textarea
            name="message"
            placeholder="Message"
            required
            className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-400 focus:ring-emerald-500 focus:border-emerald-500 min-h-[160px]"
          />
          <div className="text-right">
            <Button 
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 transition-colors"
            >
              Say Hello
            </Button>
          </div>
        </form>

        <footer className="mt-24 text-center text-sm text-slate-400">
          Made with <span className="text-red-500">❤</span> by Darshan Bhuva
        </footer>
      </div>
    </section>
  )
}