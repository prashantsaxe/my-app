"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }
  
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
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  }
  
  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.95 
    },
    submitted: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <section id="contact" className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -left-32 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
      
      <div className="max-w-2xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 140 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-4"
            />
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-semibold text-emerald-400"
            >
              What&apos;s Next?
            </motion.h2>
            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mt-2"
            >
              Get In Touch
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-slate-300"
            >
              Let&apos;s Chat! Whether you have a question, a project idea, or just want to connect, I&apos;m always
              happy to hear from you. Drop me a message, and I&apos;ll be in touch soon!
            </motion.p>
          </motion.div>

          <motion.form 
            variants={containerVariants}
            className="space-y-6 p-6 bg-zinc-900/30 backdrop-blur-sm rounded-xl border border-zinc-800 shadow-xl"
            onSubmit={handleSubmit}
          >
            <motion.div variants={itemVariants}>
              <Input
                type="text"
                placeholder="Name"
                className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-400 focus:border-emerald-500 transition-colors"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Input
                type="email"
                placeholder="Email"
                className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-400 focus:border-emerald-500 transition-colors"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Textarea
                placeholder="Message"
                className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-400 focus:border-emerald-500 transition-colors min-h-[160px]"
              />
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="text-right"
            >
              {isSubmitted ? (
                <motion.div
                  variants={buttonVariants}
                  animate="submitted"
                  className="inline-flex justify-center items-center gap-2 bg-green-600 text-white font-medium rounded-lg px-6 py-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message Sent!</span>
                </motion.div>
              ) : (
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-block"
                >
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white border-none px-8 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Say Hello</span>
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}