'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, FileText, Calendar, Users } from 'lucide-react'

const ResearchCard = ({ project, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden"
  >
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.categories.map((category: string, idx: number) => (
          <span 
            key={idx}
            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
          >
            {category}
          </span>
        ))}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
      
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          {project.time}
        </div>
        <div className="flex items-center gap-1">
          <Users size={14} />
          {project.role}
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.keywords.map((keyword: string, idx: number) => (
          <span 
            key={idx}
            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
          >
            {keyword}
          </span>
        ))}
      </div>
      
      {project.links && (
        <div className="flex gap-3 pt-4 border-t border-gray-100">
          {project.links.paper && (
            <Link 
              href={project.links.paper}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
            >
              <FileText size={14} />
              Paper
            </Link>
          )}
          {project.links.poster && (
            <Link 
              href={project.links.poster}
              className="flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm"
            >
              <FileText size={14} />
              Poster
            </Link>
          )}
          {project.links.demo && (
            <Link 
              href={project.links.demo}
              className="flex items-center gap-1 text-green-600 hover:text-green-800 text-sm"
            >
              <ExternalLink size={14} />
              Demo
            </Link>
          )}
        </div>
      )}
    </div>
  </motion.div>
)

export default function Research() {
  const researchProjects = [
    {
      title: 'Investigation on Global Multi-site Particle Number Size Distribution',
      time: '08/2025',
      role: 'Research Assistant',
      categories: ['Atmospheric Chemistry', 'Field Research'],
      keywords: ['Particle Size Distribution', 'ARM Database', 'EBAS Database', 'Growth Rate Analysis'],
      description: 'Sino-Finnish Helsinki Atmospheric and Earth System Scientific Expedition. Analyzed particle size distribution data from 16 long-term global stations (from ARM & EBAS database) using a nano-ranking approach to identify environmental variations. Conducted preliminary growth rate (GR), formation rate (J), and GDE analyses.',
      links: {}
    },
    {
      title: 'Shanghai Urban Organic Aerosol Dynamics and Carbon Partitioning Analysis',
      time: '12/2025 - Present',
      role: 'Research Assistant',
      categories: ['Atmospheric Chemistry', 'Environmental Data Science', 'Machine Learning'],
      keywords: ['Organic Aerosol', 'PCA-GMM', 'POC/SOC Partitioning', 'Shanghai'],
      description: 'Applied PCA-GMM clustering and transition-matrix diagnostics to identify aerosol dynamic regimes. Quantified residence time, stationary distribution, and switching behavior across pollution episodes. Investigated primary organic carbon (POC) and secondary organic carbon (SOC) partitioning mechanisms in urban Shanghai.',
      links: {}
    },
    {
      title: 'Characterization of Summer Hourly Extreme Precipitation and Attribution of Anthropogenic Discharge',
      time: '11/2024 - 07/2025',
      role: 'Lead Researcher',
      categories: ['Climate Extremes', 'Environmental Data Science'],
      keywords: ['Extreme Precipitation', 'CMIP6', 'Attribution Analysis', 'Yangtze River Basin'],
      description: 'College Student Innovation and Entrepreneurship Program (Provincial-level). Investigated spatiotemporal characteristics of extreme hourly precipitation events in the Yangtze River. Conducted attribution analysis using CMIP6 model data to quantifying the impact of anthropogenic emissions.',
      links: {}
    },
    {
      title: 'Irreversible Impacts of Sea Level Rise and Prolonged Inundation on Carbon Fluxes and Tree Mortality',
      time: '01/2025 - 02/2025',
      role: 'Research Assistant',
      categories: ['Environmental Data Science', 'Machine Learning'],
      keywords: ['Ghost Forest', 'GAMs', 'ROC Analysis', 'Carbon Flux', 'Tree Mortality'],
      description: 'GEARS Program at North Carolina State University. Applied Generalized Additive Models (GAMs), Mann-Kendall trend tests, and regression analyses in R to identify hydrological and carbon-flux drivers of tree mortality. Used ROC analysis to establish early-warning thresholds and evaluate classification performance (AUC) for mortality risk prediction.',
      links: {
        paper: 'https://doi.org/10.3390/f16081255',
        poster: '/posters/ncsu.png'
      }
    },
    {
      title: 'Effects of Thermal Anomalies Over the Tibetan Plateau on the Southern Hemisphere',
      time: '04/2024 - 10/2024',
      role: 'Lead Researcher',
      categories: ['Climate Dynamics', 'Machine Learning'],
      keywords: ['Tibetan Plateau', 'MATLAB', 'Random Forest', 'Climate Variables'],
      description: 'Early Research Training Program "Golden Seed" Project. Conducted data visualization of 2-meter temperature, geopotential height, and wind fields using MATLAB. Applied linear regression and random forest models to analyze the relationships among key climate variables. Achieved first place and an "Excellent" rating in the final evaluation.',
      links: {
        poster: '/posters/金种子项目_海报（终稿）.pptx.pdf'
      }
    }
  ]

  const researchThemes = [
    {
      name: 'Atmospheric Chemistry',
      description: 'Investigating chemical processes in the atmosphere, particle size distributions, and their impacts on climate and air quality.',
      count: 2
    },
    {
      name: 'Climate Extremes', 
      description: 'Analyzing extreme weather and climate events, their causes, impacts, and future projections using CMIP6 models.',
      count: 1
    },
    {
      name: 'Environmental Data Science',
      description: 'Developing computational methods and analytical frameworks for environmental data analysis using R, Python, and MATLAB.',
      count: 3
    },
    {
      name: 'Machine Learning',
      description: 'Applying machine learning approaches including Random Forest and GAMs to atmospheric and climate research.',
      count: 3
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
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Research Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Interdisciplinary research at the intersection of atmospheric science, climate dynamics, 
            and computational methods. Each project combines rigorous scientific inquiry with innovative 
            analytical approaches.
          </p>
        </motion.div>

        {/* Research Themes */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-6">Research Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchThemes.map((theme, index) => (
              <motion.div
                key={theme.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-gray-900">{theme.name}</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {theme.count} project{theme.count > 1 ? 's' : ''}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{theme.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research Projects */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-6">Research Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <ResearchCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Research Approach */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">Research Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Methodological Framework</h3>
              <p className="text-gray-700 text-sm">
                My research combines traditional atmospheric science methods with modern computational approaches, 
                emphasizing reproducibility, transparency, and physical interpretability in all analyses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Collaborative Approach</h3>
              <p className="text-gray-700 text-sm">
                I actively seek interdisciplinary collaborations that bring together diverse expertise to address 
                complex environmental challenges from multiple perspectives.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}