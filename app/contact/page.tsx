'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Mail, MapPin, Phone, Github, Linkedin, BookOpen, Download, User } from 'lucide-react'

const ContactCard = ({ icon: Icon, title, content, link, linkText }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
    </div>
    
    <div className="text-gray-700 mb-4">
      {content}
    </div>
    
    {link && (
      <Link 
        href={link}
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
      >
        {linkText}
      </Link>
    )}
  </motion.div>
)

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      content: 'jiayin.zhang@helsinki.fi',
      link: 'mailto:jiayin.zhang@helsinki.fi',
      linkText: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Nanjing University\nNanjing, Jiangsu, China',
      link: 'https://maps.google.com',
      linkText: 'View on Map'
    },
    {
      icon: Github,
      title: 'GitHub',
      content: 'Explore my research code and projects on GitHub',
      link: 'https://github.com/joy9163',
      linkText: 'Visit GitHub'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'Connect with me professionally on LinkedIn',
      link: 'https://www.linkedin.com/in/jiayin-zhang-6bb1963a0',
      linkText: 'Connect on LinkedIn'
    },
    {
      icon: User,
      title: 'ORCID',
      content: 'My unique researcher identifier for publications',
      link: 'https://orcid.org/my-orcid?orcid=0009-0003-6894-2678',
      linkText: 'View ORCID Profile'
    },
    {
      icon: BookOpen,
      title: 'Google Scholar',
      content: 'View my publications and research profile',
      link: '#',
      linkText: 'Coming Soon'
    },
    {
      icon: Download,
      title: 'CV Download',
      content: 'Download my complete curriculum vitae',
      link: '#',
      linkText: 'Download CV'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in discussing research opportunities, collaborations, 
            or answering questions about my work. Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <ContactCard key={index} {...method} />
            ))}
          </div>
        </motion.section>

        {/* Quick Links */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-6">Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/research" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Research
            </Link>
            <Link 
              href="/publications" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Publications
            </Link>
            <Link 
              href="/cv" 
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Download CV
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}