'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, FileText, Users, Calendar, Award } from 'lucide-react'

const PublicationItem = ({ publication, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6 hover:shadow-md transition-shadow"
  >
    <div className="flex justify-between items-start mb-3">
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{publication.title}</h3>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Users size={14} />
            {publication.authors}
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {publication.year}
          </div>
          {publication.status && (
            <span className={`px-2 py-1 rounded-full text-xs ${
              publication.status === 'Published' ? 'bg-green-100 text-green-800' :
              publication.status === 'Submitted' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {publication.status}
            </span>
          )}
        </div>
        
        <p className="text-gray-700 text-sm mb-3">{publication.venue}</p>
        
        {publication.abstract && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{publication.abstract}</p>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {publication.keywords.map((keyword: string, idx: number) => (
            <span 
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {keyword}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {publication.links.pdf && (
            <Link 
              href={publication.links.pdf}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
            >
              <FileText size={14} />
              PDF
            </Link>
          )}
          {publication.links.doi && (
            <Link 
              href={publication.links.doi}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm"
            >
              <ExternalLink size={14} />
              DOI
            </Link>
          )}
          {publication.links.arxiv && (
            <Link 
              href={publication.links.arxiv}
              className="flex items-center gap-1 text-orange-600 hover:text-orange-800 text-sm"
            >
              <FileText size={14} />
              arXiv
            </Link>
          )}
        </div>
      </div>
    </div>
  </motion.div>
)

const PresentationItem = ({ presentation, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6 hover:shadow-md transition-shadow"
  >
    <div className="flex justify-between items-start mb-3">
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{presentation.title}</h3>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {presentation.date}
          </div>
          <div className="flex items-center gap-1">
            <Award size={14} />
            {presentation.type}
          </div>
          {presentation.award && (
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
              {presentation.award}
            </span>
          )}
        </div>
        
        <p className="text-gray-700 text-sm mb-3">{presentation.event}</p>
        {presentation.location && (
          <p className="text-gray-600 text-sm mb-4">{presentation.location}</p>
        )}
        
        {presentation.description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{presentation.description}</p>
        )}
        
        <div className="flex gap-4">
          {presentation.links.slides && (
            <Link 
              href={presentation.links.slides}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
            >
              <FileText size={14} />
              Slides
            </Link>
          )}
          {presentation.links.poster && (
            <Link 
              href={presentation.links.poster}
              className="flex items-center gap-1 text-green-600 hover:text-green-800 text-sm"
            >
              <FileText size={14} />
              Poster
            </Link>
          )}
        </div>
      </div>
    </div>
    
    {/* Presentation Photos */}
    {presentation.photos && presentation.photos.length > 0 && (
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500 mb-3">Event Photos</p>
        <div className="flex justify-center">
          <div className="relative w-1/3 aspect-video rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={presentation.photos[0]}
              alt={`${presentation.title} photo`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    )}
  </motion.div>
)

export default function Publications() {
  const publications = [
    {
      title: 'Determining Early Warning Thresholds to Detect Tree Mortality Risk in a Southeastern U.S. Bottomland Hardwood Wetland',
      authors: 'Aguilos, M., Zhang, J., Belgado, M. L., Sun, G., McNulty, S., & King, J.',
      year: '2025',
      venue: 'Forests, 16(8), 1255',
      status: 'Published',
      abstract: 'This study establishes early warning thresholds for detecting tree mortality risk in southeastern U.S. bottomland hardwood wetlands using hydrological stress indicators and carbon flux measurements.',
      keywords: ['Tree Mortality', 'Ghost Forest', 'Wetland', 'Early Warning', 'ROC Analysis'],
      links: {
        doi: 'https://doi.org/10.3390/f16081255'
      }
    }
  ]

  const presentations = [
    {
      title: 'Characterization of Summer Hourly Extreme Precipitation and Attribution of Anthropogenic Discharge in the Middle and Lower Yangtze River Basin',
      date: 'May 2025',
      type: 'Oral Presentation',
      event: 'First Nanjing University Atmospheric Sciences Top Forum',
      location: 'Nanjing, China',
      description: 'Presented research on extreme precipitation characterization and anthropogenic attribution analysis using CMIP6 model data.',
      links: {},
      photos: [
        '/publications/nanjing-forum-2025/photo1.jpg',
        '/publications/nanjing-forum-2025/photo2.jpg',
        '/publications/nanjing-forum-2025/photo3.jpg'
      ]
    },
    {
      title: 'Linking Hydrological Stress to Ghost Forest Formation: Thresholds for Tree Mortality in Coastal Ecosystems',
      date: 'October 2025',
      type: 'Poster Presentation',
      event: 'AmeriFlux Annual Meeting',
      location: 'Tucson, USA',
      description: 'Co-authored presentation on establishing early-warning thresholds for tree mortality risk prediction in coastal wetland ecosystems.',
      links: {}
    },
    {
      title: 'Modeling Evapotranspiration Dynamics Across Southeastern U.S. Ecosystems Using Flux Data and Machine Learning',
      date: 'December 2025',
      type: 'Poster Presentation',
      event: 'AGU Annual Meeting',
      location: 'New Orleans, USA',
      description: 'Co-authored presentation on evapotranspiration modeling using machine learning approaches across diverse southeastern U.S. ecosystems.',
      links: {}
    }
  ]

  const manuscripts = [
    {
      title: 'Characterization of Summer Hourly Extreme Precipitation in the Yangtze River Basin',
      status: 'In Preparation',
      expected: '2025',
      description: 'Comprehensive analysis of extreme hourly precipitation events using observational data and CMIP6 model simulations for anthropogenic attribution.'
    },
    {
      title: 'Shanghai Urban Organic Aerosol Dynamics and Carbon Partitioning Analysis',
      status: 'In Preparation',
      expected: '2026',
      description: 'Dynamic Regime Transitions and POC/SOC Partitioning of Urban Organic Aerosols in Shanghai. Applied PCA-GMM clustering and transition-matrix diagnostics to identify aerosol dynamic regimes, quantify residence time, stationary distribution, and switching behavior across episodes.'
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
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Publications & Presentations</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Scholarly contributions including journal publications, conference presentations, 
            and ongoing research manuscripts in atmospheric science and environmental data analysis.
          </p>
        </motion.div>

        {/* Publications */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-6">Journal Publications</h2>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <PublicationItem key={index} publication={pub} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Conference Presentations */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-6">Conference Presentations</h2>
          <div className="space-y-4">
            {presentations.map((pres, index) => (
              <PresentationItem key={index} presentation={pres} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Manuscripts in Preparation */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-6">Manuscripts in Preparation</h2>
          <div className="grid grid-cols-1 gap-6">
            {manuscripts.map((manuscript, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-6"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-gray-900">{manuscript.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    manuscript.status === 'Advanced Draft' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {manuscript.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Expected: {manuscript.expected}</p>
                <p className="text-gray-700 text-sm">{manuscript.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Metrics Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-6">Research Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-sm text-gray-600">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">3</div>
              <div className="text-sm text-gray-600">Presentations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">3</div>
              <div className="text-sm text-gray-600">Manuscripts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
              <div className="text-sm text-gray-600">Awards</div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}