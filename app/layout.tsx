import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jiayin Zhang | Atmospheric Science Researcher',
  description: 'Undergraduate student in Atmospheric Science at Nanjing University. Research interests in atmospheric chemistry, climate extremes, and environmental data science.',
  keywords: 'atmospheric science, climate research, environmental data science, machine learning, academic research',
  authors: [{ name: 'Jiayin Zhang' }],
  creator: 'Jiayin Zhang',
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}