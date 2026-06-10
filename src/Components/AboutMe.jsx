import { motion } from 'framer-motion'
import React from 'react'

function AboutMe() {
  return (
    <section id="about" className="w-full py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // viewport={{ once: true }}
          // Glassmorphism classes: backdrop-blur, semi-transparent bg, border
          className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-slate-700 shadow-xl"
        >
          <div className="text-center mb-8">
            <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Introduction</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">About Me</h2>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              👋 <span className="font-semibold text-gray-900 dark:text-white">Hi there!</span> I am a Rohit Bhosale a <span className="text-blue-500 font-bold"> Frontend Developer</span>, passionate about building modern and responsive web applications using React.js, Next.js, JavaScript, HTML, and CSS..
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I enjoy creating clean, user-friendly interfaces and turning ideas into real-world digital solutions. I'm continuously learning new technologies and improving my skills to build scalable and high-performance applications.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
              {["Frontend Developer", "React.js", " Next.js", "Problem Solve", "Continuous Learner"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium">
                  # {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe