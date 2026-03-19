'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Download, Mail, MapPin, Calendar, GraduationCap, Award, BookOpen, Users } from 'lucide-react'

const Section = ({ title, children, className = '' }: any) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`mb-8 ${className}`}
  >
    <h2 className="text-2xl font-semibold text-navy-900 mb-4 border-b border-gray-200 pb-2">{title}</h2>
    {children}
  </motion.section>
)

const TimelineItem = ({ period, title, subtitle, description, items }: any) => (
  <div className="flex gap-6 mb-6">
    <div className="flex flex-col items-center">
      <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
      <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
    </div>
    <div className="flex-1 pb-6">
      <div className="flex items-center gap-2 mb-2">
        <Calendar size={14} className="text-gray-500" />
        <span className="text-sm font-medium text-gray-700">{period}</span>
      </div>
      <h3 className="font-semibold text-lg text-gray-900 mb-1">{title}</h3>
      {subtitle && (
        <p className="text-gray-600 mb-2">{subtitle}</p>
      )}
      {description && (
        <p className="text-gray-700 text-sm leading-relaxed mb-3">{description}</p>
      )}
      {items && (
        <ul className="space-y-1">
          {items.map((item: string, index: number) => (
            <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
)

export default function CV() {
  const skills = {
    technical: [
      'Python (NumPy, Pandas, Scikit-learn)',
      'R Statistical Programming (GAMs, ROC Analysis)',
      'MATLAB for Scientific Computing',
      'LaTeX Typesetting',
      'Microsoft Office (PowerPoint, Word, Excel)'
    ],
    research: [
      'Climate Data Analysis',
      'Statistical Modeling',
      'Machine Learning Applications',
      'Atmospheric Modeling',
      'Data Visualization',
      'Scientific Writing'
    ],
    languages: [
      'Mandarin (Native)',
      'English (Proficient, IELTS 7.5)'
    ]
  }

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
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Curriculum Vitae</h1>
          <p className="text-lg text-gray-600 mb-6">
            Comprehensive academic and professional background
          </p>
          
          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
          >
            <Download size={18} />
            Download Full CV (PDF)
          </motion.button>
        </motion.div>

        {/* Contact Information */}
        <Section title="Contact Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-gray-500" />
              <div>
                <div className="text-sm text-gray-600">Email</div>
                <div className="text-gray-900">jiayin.zhang@helsinki.fi</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-gray-500" />
              <div>
                <div className="text-sm text-gray-600">Location</div>
                <div className="text-gray-900">Nanjing University, China</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <TimelineItem
            period="09/2023 - Present"
            title="Bachelor of Science in Atmospheric Science"
            subtitle="Nanjing University, Nanjing, China"
            description="CGPA: 4.6/5.0 | Ranking: 3/78"
            items={[
              'Core modules: Introduction to Atmospheric Science, Fluid Dynamics, Introduction to Environmental Science, Calculus I & II, Probability Theory and Mathematical Statistics, Ordinary Differential Equations, College Physics I & II, General Chemistry, Linear Algebra, Scientific Computing I',
              'Research Assistant: Nanjing University Climate Lab'
            ]}
          />
          
          <TimelineItem
            period="09/2025 - Present"
            title="Exchange Program"
            subtitle="Hong Kong University of Science and Technology"
            description="CGPA: 3.925/4.3"
            items={[
              'Core modules: Atmospheric Chemistry, Practical Artificial Intelligence in Science, Air Quality Control and Management, Urban Air Pollution'
            ]}
          />
        </Section>

        {/* Research Experience */}
        <Section title="Research Experience">
          <TimelineItem
            period="08/2025"
            title="Sino-Finnish Helsinki Atmospheric and Earth System Scientific Expedition"
            subtitle="Advisor: Prof. Chao Yan, Nanjing-Helsinki Institute in Atmospheric and Earth System Science, Nanjing University"
            description="Investigation on Global Multi-site Particle Number Size Distribution"
            items={[
              'Analyzed particle size distribution data from 16 long-term global stations (from ARM & EBAS database) using a nano-ranking approach to identify environmental variations',
              'Conducted preliminary growth rate (GR), formation rate (J), and GDE analyses'
            ]}
          />
          
          <TimelineItem
            period="11/2024 - 07/2025"
            title="College Student Innovation and Entrepreneurship Program (Provincial-level)"
            subtitle="Advisor: Prof. Anning Huang, School of Atmospheric Science, Nanjing University"
            description="Characterization of Summer Hourly Extreme Precipitation and Attribution of Anthropogenic Discharge in the Middle and Lower Yangtze River Basin"
            items={[
              'Investigated spatiotemporal characteristics of extreme hourly precipitation events in the Yangtze River',
              'Conducted attribution analysis using CMIP6 model data to quantifying the impact of anthropogenic emissions'
            ]}
          />
          
          <TimelineItem
            period="01/2025 - 02/2025"
            title="GEARS Program"
            subtitle="Advisor: Prof. Maricar Aguilos, Department of Forestry and Environmental Resources, North Carolina State University"
            description="Irreversible Impacts of Sea Level Rise and Prolonged Inundation on Carbon Fluxes and Tree Mortality: Drivers of Ghost Forest Formation"
            items={[
              'Applied Generalized Additive Models (GAMs), Mann-Kendall trend tests, and regression analyses in R to identify hydrological and carbon-flux drivers of tree mortality',
              'Used ROC analysis to establish early-warning thresholds and evaluate classification performance (AUC) for mortality risk prediction'
            ]}
          />
          
          <TimelineItem
            period="04/2024 - 10/2024"
            title="Early Research Training Program 'Golden Seed' Project"
            subtitle="Advisor: Prof. Yang Zhang, School of Atmospheric Science, Nanjing University"
            description="Effects of Thermal Anomalies Over the Tibetan Plateau on the Southern Hemisphere"
            items={[
              'Conducted data visualization of 2-meter temperature, geopotential height, and wind fields using MATLAB',
              'Applied linear regression and random forest models to analyze the relationships among key climate variables',
              'Achieved first place and an "Excellent" rating in the final evaluation'
            ]}
          />
        </Section>

        {/* Skills */}
        <Section title="Skills & Expertise">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900 flex items-center gap-2">
                <BookOpen size={18} />
                Technical Skills
              </h3>
              <ul className="space-y-2">
                {skills.technical.map((skill, index) => (
                  <li key={index} className="text-gray-700 text-sm">• {skill}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900 flex items-center gap-2">
                <Award size={18} />
                Research Methods
              </h3>
              <ul className="space-y-2">
                {skills.research.map((skill, index) => (
                  <li key={index} className="text-gray-700 text-sm">• {skill}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900 flex items-center gap-2">
                <Users size={18} />
                Languages
              </h3>
              <ul className="space-y-2">
                {skills.languages.map((language, index) => (
                  <li key={index} className="text-gray-700 text-sm">• {language}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Publications */}
        <Section title="Selected Publications">
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-900">Determining Early Warning Thresholds to Detect Tree Mortality Risk in a Southeastern U.S. Bottomland Hardwood Wetland</h3>
              <p className="text-sm text-gray-600">Aguilos, M., Zhang, J., Belgado, M. L., Sun, G., McNulty, S., & King, J. (2025). Forests, 16(8), 1255. https://doi.org/10.3390/f16081255</p>
            </div>
          </div>
        </Section>

        {/* Awards & Honors */}
        <Section title="Awards & Honors">
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Renmin Scholarship</h3>
                <p className="text-sm text-gray-600">Nanjing University</p>
              </div>
              <span className="text-sm text-gray-500">November 2025</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Yan Baoling Overseas Exchange Scholarship Excellence Award</h3>
                <p className="text-sm text-gray-600">Nanjing University</p>
              </div>
              <span className="text-sm text-gray-500">June 2025</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Nanjing University Outstanding Student</h3>
                <p className="text-sm text-gray-600">Nanjing University</p>
              </div>
              <span className="text-sm text-gray-500">November 2024, October 2025</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">National Scholarship</h3>
                <p className="text-sm text-gray-600">Ministry of Education, China</p>
              </div>
              <span className="text-sm text-gray-500">October 2024</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Outstanding Research Report</h3>
                <p className="text-sm text-gray-600">Nanjing University Summer Social Practice Program</p>
              </div>
              <span className="text-sm text-gray-500">September 2024</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Nanjing University Freshman College Outstanding Student</h3>
                <p className="text-sm text-gray-600">Nanjing University</p>
              </div>
              <span className="text-sm text-gray-500">May 2024</span>
            </div>
          </div>
        </Section>

        {/* Extracurricular Activities */}
        <Section title="Extracurricular Activities">
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Student Ambassador</h3>
                <p className="text-sm text-gray-600">Global Training Initiative of North Carolina State University</p>
              </div>
              <span className="text-sm text-gray-500">02/2025 - Present</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Standing Representative</h3>
                <p className="text-sm text-gray-600">Nanjing University Student Representative Congress</p>
              </div>
              <span className="text-sm text-gray-500">10/2024 - Present</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Guzheng Performer</h3>
                <p className="text-sm text-gray-600">Nanjing University Traditional Chinese Music Ensemble</p>
              </div>
              <span className="text-sm text-gray-500">10/2024 - Present</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Monitor</h3>
                <p className="text-sm text-gray-600">Nanjing-Helsinki Institute in Atmospheric and Earth System</p>
              </div>
              <span className="text-sm text-gray-500">09/2024 - Present</span>
            </div>
          </div>
        </Section>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 text-center mt-12"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">Complete Academic Profile</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Download the full PDF version of my curriculum vitae for detailed information including 
            complete publication list, conference presentations, teaching experience, and references.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
          >
            <Download size={18} />
            Download Full CV (PDF)
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}