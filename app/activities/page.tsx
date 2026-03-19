'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, MapPin, Award, Users, Music, Globe, Trophy } from 'lucide-react'

const ActivityCard = ({ activity, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
  >
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="p-2 bg-blue-100 rounded-lg">
            <activity.icon className="w-5 h-5 text-blue-600" />
          </span>
          <h3 className="text-xl font-semibold text-gray-900">{activity.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-3">{activity.organization}</p>
        
        {activity.description && (
          <p className="text-gray-700 text-sm leading-relaxed mb-4">{activity.description}</p>
        )}
        
        {activity.achievements && (
          <ul className="space-y-2">
            {activity.achievements.map((achievement: string, idx: number) => (
              <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                {achievement}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="flex flex-col items-start md:items-end gap-2 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          {activity.period}
        </div>
        {activity.location && (
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            {activity.location}
          </div>
        )}
      </div>
    </div>
    
    {/* Activity Photos */}
    {activity.photos && activity.photos.length > 0 && (
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500 mb-3">Photos</p>
        {activity.photos.length === 1 ? (
          <div className="flex justify-center">
            <div className="relative w-1/2 aspect-video rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={activity.photos[0]}
                alt={`${activity.title} photo 1`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ) : activity.photos.length === 2 ? (
          <div className="flex justify-center gap-3">
            {activity.photos.map((photo: string, idx: number) => (
              <div key={idx} className="relative w-1/2 aspect-video rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={photo}
                  alt={`${activity.title} photo ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            {activity.photos.map((photo: string, idx: number) => (
              <div key={idx} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={photo}
                  alt={`${activity.title} photo ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    )}
  </motion.div>
)

const CompetitionCard = ({ competition, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-sm border border-blue-100 p-8"
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="p-3 bg-yellow-100 rounded-lg">
        <Trophy className="w-6 h-6 text-yellow-600" />
      </span>
      <div>
        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">
          {competition.status}
        </span>
      </div>
    </div>
    
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{competition.title}</h3>
    
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
      <div className="flex items-center gap-1">
        <Calendar size={14} />
        {competition.date}
      </div>
      <div className="flex items-center gap-1">
        <MapPin size={14} />
        {competition.location}
      </div>
    </div>
    
    <p className="text-gray-700 leading-relaxed mb-6">{competition.description}</p>
    
    {competition.highlights && (
      <div className="bg-white rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Project Highlights</h4>
        <ul className="space-y-2">
          {competition.highlights.map((highlight: string, idx: number) => (
            <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    )}
    
    {/* Competition Photos - 4 photos in 2x2 grid */}
    {competition.photos && competition.photos.length > 0 && (
      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-3 font-medium">Event Photos</p>
        <div className="grid grid-cols-2 gap-3">
          {competition.photos.map((photo: string, idx: number) => (
            <div key={idx} className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={photo}
                alt={`${competition.title} photo ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    )}
  </motion.div>
)

export default function Activities() {
  const extracurricularActivities = [
    {
      title: 'Student Ambassador',
      organization: 'Global Training Initiative of North Carolina State University',
      period: '02/2025 - Present',
      icon: Globe,
      description: 'Managed communication between faculty and students, fostering global connections.',
      achievements: [
        'Facilitated international academic exchanges',
        'Supported cross-cultural communication initiatives'
      ],
      photos: [
        '/activities/ncsu/photo1.jpg'
      ]
    },
    {
      title: 'Standing Representative',
      organization: 'Nanjing University Student Representative Congress',
      period: '10/2024 - Present',
      icon: Users,
      description: 'Advocated for student interests and contributed to initiatives aimed at improving campus environments.',
      achievements: [
        'Represented student voices in university governance',
        'Participated in policy discussions and campus improvements'
      ],
      photos: [
        '/activities/student-congress/photo1.jpg',
        '/activities/student-congress/photo2.jpg'
      ]
    },
    {
      title: 'Guzheng Performer',
      organization: 'Nanjing University Traditional Chinese Music Ensemble',
      period: '10/2024 - Present',
      icon: Music,
      description: 'Performed as a Guzheng player, contributing to the preservation and promotion of traditional Chinese music.',
      achievements: [
        'Participated in cultural performances and events',
        'Promoted traditional Chinese music heritage'
      ],
      photos: [
        '/activities/guzheng/photo1.jpg',
        '/activities/guzheng/photo2.jpg',
        '/activities/guzheng/photo3.jpg'
      ]
    },
    {
      title: 'Monitor',
      organization: 'Nanjing-Helsinki Institute in Atmospheric and Earth System',
      period: '09/2024 - Present',
      icon: Users,
      description: 'Organized over ten activities, including class reunions, sports competitions, and intercollegiate bonding events.',
      achievements: [
        'Coordinated class activities and events',
        'Strengthened community bonds among students'
      ],
      photos: [
        '/activities/class-monitor/photo1.jpg',
        '/activities/class-monitor/photo2.jpg'
      ]
    }
  ]

  const competitions = [
    {
      title: '2025 Asian Climate-SDG Technology Innovation Hackathon',
      status: 'Finalist',
      date: '2025',
      location: 'Hong Kong & Brazil (COP30)',
      description: 'Selected as a finalist and invited to showcase the project at a roadshow in Hong Kong, with the opportunity to participate in the UN Climate Change Conference (COP30) in Brazil.',
      highlights: [
        'Developed a novel urban digital twin platform designed to safeguard public health against climate-related risks',
        'Integrated hydrodynamic, epidemiological, and community intelligence data',
        'Created innovative solutions for flooding and epidemic prevention'
      ],
      photos: [
        '/activities/cop30/photo1.jpg',
        '/activities/cop30/photo2.jpg',
        '/activities/cop30/photo3.jpg',
        '/activities/cop30/photo4.jpg'
      ]
    }
  ]

  const volunteering = {
    hours: '200+',
    description: 'Active volunteer with over 200 hours of service, demonstrating commitment to community engagement and social responsibility.'
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
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Activities & Engagement</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Beyond research, I am actively engaged in student leadership, cultural activities, 
            and international competitions that reflect my commitment to global citizenship and interdisciplinary collaboration.
          </p>
        </motion.div>

        {/* Competitions Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-6 flex items-center gap-2">
            <Trophy className="w-6 h-6" />
            Competitions
          </h2>
          <div className="space-y-6">
            {competitions.map((competition, index) => (
              <CompetitionCard key={index} competition={competition} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Extracurricular Activities Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-6 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Extracurricular Activities
          </h2>
          <div className="space-y-6">
            {extracurricularActivities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Volunteering Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6" />
            Volunteering
          </h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl font-bold text-blue-600">{volunteering.hours}</div>
              <div className="text-gray-600">hours of service</div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">{volunteering.description}</p>
            

          </div>
        </motion.section>

        {/* Hobbies Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">Hobbies & Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Guzheng</h3>
              <p className="text-sm text-gray-600">Traditional Chinese music performance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Badminton</h3>
              <p className="text-sm text-gray-600">Regular sports activity</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Fitness</h3>
              <p className="text-sm text-gray-600">Gym and physical wellness</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
