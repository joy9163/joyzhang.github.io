'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Award,
  Globe,
  BookOpen 
} from 'lucide-react'

// Navigation component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold text-navy-900">
            Jiayin Zhang
          </Link>
          <div className="flex space-x-8">
            {['About', 'Research', 'Publications', 'Activities', 'CV', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto mb-6 relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/profile-photo.jpg"
                alt="Jiayin Zhang"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-4">
            Jiayin Zhang
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
            Undergraduate Student in Atmospheric Science<br />
            <span className="text-navy-700">Nanjing University</span>
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            My work lies at the intersection of atmospheric chemistry, climate extremes, and data-driven environmental research. 
            I am particularly interested in combining physical understanding with interpretable machine learning to study complex Earth system problems.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link 
            href="/research" 
            className="bg-navy-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-navy-800 transition-colors flex items-center gap-2"
          >
            View Research <ArrowRight size={18} />
          </Link>
          <Link 
            href="/cv" 
            className="border border-navy-900 text-navy-900 px-8 py-3 rounded-lg font-medium hover:bg-navy-50 transition-colors flex items-center gap-2"
          >
            Download CV <Download size={18} />
          </Link>
          <Link 
            href="/contact" 
            className="text-navy-900 px-8 py-3 rounded-lg font-medium hover:bg-navy-50 transition-colors flex items-center gap-2"
          >
            Contact Me <Mail size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Research Interests
const ResearchInterests = () => {
  const interests = [
    { name: 'Atmospheric Chemistry', icon: BookOpen },
    { name: 'Climate Extremes', icon: Globe },
    { name: 'Environmental Data Science', icon: Award },
    { name: 'Interpretable ML', icon: BookOpen },
    { name: 'Earth System Science', icon: Globe },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Research Interests</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interdisciplinary research spanning atmospheric science, climate dynamics, and computational methods
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <interest.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900">{interest.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Selected Highlights
const SelectedHighlights = () => {
  const highlights = [
    {
      title: 'Global Research Perspective',
      description: 'Academic exchanges across Hong Kong, Finland, USA, and Brazil, embracing diverse perspectives and collaborative opportunities',
      icon: Globe
    },
    {
      title: 'Interdisciplinary Research',
      description: 'Bridging atmospheric chemistry, climate extremes, and environmental data science with interpretable machine learning',
      icon: BookOpen
    },
    {
      title: 'Cross-Domain Integration',
      description: 'Synthesizing physical understanding with data-driven approaches to tackle complex Earth system challenges',
      icon: Award
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Selected Highlights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            International perspective combined with interdisciplinary research approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg border-2 border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                <highlight.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 text-center">{highlight.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Jiayin Zhang</h3>
            <p className="text-blue-200">Atmospheric Science Researcher</p>
          </div>
          
          <div className="flex space-x-6">
            <Link href="mailto:jiayin.zhang@helsinki.fi" className="hover:text-blue-300 transition-colors">
              <Mail size={20} />
            </Link>
            <Link href="https://github.com/joy9163" className="hover:text-blue-300 transition-colors">
              <Github size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/jiayin-zhang-6bb1963a0" className="hover:text-blue-300 transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>© 2024 Jiayin Zhang. Advancing understanding of Earth's complex systems through interdisciplinary research.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ResearchInterests />
      <SelectedHighlights />
      <Footer />
    </main>
  )
}