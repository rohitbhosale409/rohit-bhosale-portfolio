import { ThemeProvider } from './context/ThemeContext'
import { motion } from "framer-motion"
import Header from './Components/Header'
import Navbar from './Components/Navbar'
// import Skills from "./Components/Skills"
// import Projects from "./Components/Projects"
// import AboutMe from "./Components/AboutMe"
// import MySocials from "./Components/MySocials"
// import ContactMe from "./Components/ContactMe"
// import Footer from "./Components/Footer"
// import Resume from "./Components/Resume"
// import ParticleBackground from './Components/ParticleBackground' // <--- IMPORT THIS
// import Education from './Components/Education'

import { Suspense, lazy } from 'react'
// Lazy load the rest
const Skills = lazy(() => import('./Components/Skills'));
const Projects = lazy(() => import('./Components/Projects'));
const AboutMe = lazy(() => import('./Components/AboutMe'));
const MySocials = lazy(() => import('./Components/MySocials'));
const ContactMe = lazy(() => import('./Components/ContactMe'));
const Footer = lazy(() => import('./Components/Footer'));
const Resume = lazy(() => import('./Components/Resume'));
const Education = lazy(() => import('./Components/Education'));
const ParticleBackground = lazy(() => import('./Components/ParticleBackground'));

import { Helmet } from 'react-helmet-async'

function App() {
  return (
    <ThemeProvider>

      {/* 1. SEO META TAGS */}
      <Helmet>
        <title>Rohit Bhosale | Frontend Developer</title>

        <meta
          name="description"
          content="Portfolio of Rohit Bhosale, a Frontend Developer specializing in React.js, Next.js, JavaScript, and modern web development."
        />

        <meta
          name="keywords"
          content="Rohit Bhosale, Frontend Developer, React Developer, Next.js Developer, JavaScript Developer, Web Developer Portfolio"
        />

        <meta name="author" content="Rohit Bhosale" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rohit Bhosale | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Explore my portfolio featuring React.js, Next.js, JavaScript, and modern web development projects."
        />

        {/* Replace with your deployed portfolio URL */}
        <meta
          property="og:image"
          content="https://your-portfolio-url.com/preview-image.png"
        />

        <meta
          property="og:url"
          content="https://your-portfolio-url.com"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rohit Bhosale | Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Frontend Developer specializing in React.js, Next.js, and JavaScript."
        />
        <meta
          name="twitter:image"
          content="https://your-portfolio-url.com/preview-image.png"
        />
      </Helmet>

      {/* GLOBAL WRAPPER */}
      <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300 overflow-x-hidden relative">

        {/* ==================== LAYER 0: BACKGROUND ==================== */}
        {/* z-0 ensures this stays BEHIND your text/buttons */}
        <div className="fixed inset-0 z-0">

          {/* 1. Blobs (Optional: Adds Color) */}
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>

          {/* 2. Particles (Geometric Constellation) */}
          <ParticleBackground />

          <div className="absolute bottom-[-20%] left-[20%] right-[20%] h-[500px] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-[120px] animate-pulse"></div>

        </div>

        {/* ==================== LAYER 1: CONTENT ==================== */}
        {/* z-10 ensures your buttons are clickable and text is sharp */}
        <div className="relative z-10">
          <Navbar />
          <div className="pt-16">
            <Header />

            {/* Wrap lazy components in Suspense */}
            <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
              <Skills />
              <Education />
              <Projects />
              <AboutMe />
              <Resume />
              <MySocials />
              <ContactMe />
              <ParticleBackground />
            </Suspense>
          </div>
          <Footer />
        </div>

      </div>
    </ThemeProvider>
  )
}

export default App