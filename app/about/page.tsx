'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, GraduationCap, Globe } from 'lucide-react'

const TimelineItem = ({ year, title, description, institution, location, type }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex gap-6 mb-8"
  >
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
      <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
    </div>
    <div className="flex-1 pb-8">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
          {year}
        </span>
        <span className="text-sm text-gray-500">{type}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      {institution && (
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <GraduationCap size={16} />
          <span>{institution}</span>
        </div>
      )}
      {location && (
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      )}
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  </motion.div>
)

export default function About() {
  const timelineData = [
    {
      year: '2023-Present',
      title: 'Bachelor of Science in Atmospheric Science',
      institution: 'Nanjing University',
      location: 'Nanjing, China',
      type: 'Education',
      description: 'CGPA: 4.6/5.0 | Ranking: 3/78. Core modules include Atmospheric Science, Fluid Dynamics, Environmental Science, Calculus, Probability Theory, ODEs, Physics, Chemistry, and Scientific Computing.'
    },
    {
      year: '2025-Present',
      title: 'Exchange Program at HKUST',
      institution: 'Hong Kong University of Science and Technology',
      location: 'Hong Kong',
      type: 'Education',
      description: 'CGPA: 3.925/4.3. Studying Atmospheric Chemistry, Practical AI in Science, Air Quality Control, and Urban Air Pollution.'
    },
    {
      year: '2025',
      title: 'Sino-Finnish Helsinki Expedition',
      institution: 'Nanjing-Helsinki Institute',
      location: 'Helsinki, Finland',
      type: 'Research',
      description: 'Investigated global multi-site particle number size distribution using ARM & EBAS database from 16 long-term stations.'
    },
    {
      year: '2025',
      title: 'GEARS Program at NC State',
      institution: 'North Carolina State University',
      location: 'USA',
      type: 'Research',
      description: 'Studied ghost forest formation using GAMs, Mann-Kendall tests, and ROC analysis for tree mortality prediction.'
    },
    {
      year: '2024-2025',
      title: 'Extreme Precipitation Research',
      institution: 'Nanjing University Climate Lab',
      location: 'Nanjing, China',
      type: 'Research',
      description: 'Provincial-level innovation program investigating extreme precipitation in Yangtze River Basin using CMIP6 models.'
    },
    {
      year: '2024',
      title: 'Golden Seed Research Project',
      institution: 'Nanjing University',
      location: 'Nanjing, China',
      type: 'Research',
      description: 'Analyzed Tibetan Plateau thermal anomalies effects on Southern Hemisphere using MATLAB and random forest models. Achieved first place.'
    }
  ]

  const researchInterests = [
    {
      category: 'Atmospheric Science',
      topics: ['Atmospheric Chemistry', 'Particle Size Distribution', 'Air Quality', 'Aerosol Physics']
    },
    {
      category: 'Climate Research',
      topics: ['Extreme Precipitation', 'Climate Attribution', 'Tibetan Plateau', 'Regional Climate']
    },
    {
      category: 'Computational Methods',
      topics: ['Machine Learning', 'Random Forest', 'GAMs', 'ROC Analysis', 'MATLAB', 'R', 'Python']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
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
          <h1 className="text-4xl font-bold text-navy-900 mb-4">About Me</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            An undergraduate researcher passionate about understanding Earth's complex systems through 
            interdisciplinary approaches combining atmospheric science, climate research, and computational methods.
          </p>
        </motion.div>

        {/* Current Focus */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-6">Current Focus</h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              I am currently an undergraduate student in Atmospheric Science at Nanjing University (CGPA: 4.6/5.0, Ranking: 3/78) 
              and an exchange student at Hong Kong University of Science and Technology. My academic journey combines rigorous 
              theoretical training with hands-on research experience across international collaborations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My research interests lie at the intersection of atmospheric chemistry and machine learning. I have conducted 
              research on extreme precipitation attribution using CMIP6 models, particle size distribution analysis at 16 global 
              stations, and tree mortality prediction using GAMs and ROC analysis. These experiences have strengthened my 
              expertise in Python, R, and MATLAB for scientific computing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With research experience spanning China, Finland, Hong Kong, and the USA, I am passionate about addressing 
              global climate challenges through interdisciplinary approaches. I am also an active member of academic communities, 
              serving as a Student Ambassador for NC State and a Guzheng performer in the university ensemble.
            </p>
          </div>
        </motion.section>

        {/* Research Interests */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-6">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchInterests.map((interest, index) => (
              <motion.div
                key={interest.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="font-semibold text-lg mb-3 text-gray-900">{interest.category}</h3>
                <ul className="space-y-2">
                  {interest.topics.map((topic) => (
                    <li key={topic} className="text-gray-600 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Academic Journey */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-6">Academic Journey</h2>
          <div className="relative">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </motion.section>

        {/* Future Aspirations */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">Future Aspirations</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              I plan to pursue graduate studies focusing on the intersection of atmospheric science and 
              computational methods, with the goal of developing innovative approaches to understanding 
              climate change impacts and environmental challenges.
            </p>
            <p>
              My long-term vision is to contribute to the global scientific community by advancing our 
              understanding of Earth's complex systems and developing practical solutions for environmental 
              sustainability.
            </p>
            <p>
              I am particularly interested in international research collaborations that bring together 
              diverse perspectives and expertise to address pressing global climate issues.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}