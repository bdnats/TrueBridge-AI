import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TrueBridge AI | AI Automation & Consulting for Growing Businesses',
  description:
    'Save 10-20 hours per week with custom AI automation. TrueBridge AI helps SMBs implement practical AI solutions that cut costs and scale operations. Book your free strategy call today.',
  keywords: [
    'AI automation',
    'AI consulting',
    'business automation',
    'workflow automation',
    'AI implementation',
    'SMB automation',
    'process automation',
  ],
  authors: [{ name: 'TrueBridge AI' }],
  creator: 'TrueBridge AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://truebridgeai.com',
    title: 'TrueBridge AI | AI Automation & Consulting for Growing Businesses',
    description:
      'Save 10-20 hours per week with custom AI automation. TrueBridge AI helps SMBs implement practical AI solutions that cut costs and scale operations.',
    siteName: 'TrueBridge AI',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TrueBridge AI - Bridging the gap between businesses and AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueBridge AI | AI Automation & Consulting for Growing Businesses',
    description:
      'Save 10-20 hours per week with custom AI automation. Practical AI solutions for growing businesses.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
