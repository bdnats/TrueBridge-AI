'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, Target } from 'lucide-react'
import { Section } from '@/components/ui'

const stats = [
  {
    icon: <Clock className="w-8 h-8" />,
    stat: '20+ Hours/Week',
    description: 'The average SMB wastes on automatable tasks',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    stat: '87%',
    description: 'Of marketing agencies now use AI—are you keeping up?',
  },
  {
    icon: <Target className="w-8 h-8" />,
    stat: '300-400% ROI',
    description: 'AI automation delivers within 12 months',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

export default function SocialProof() {
  return (
    <Section background="default">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-text-primary mb-4">
          The Numbers Don&apos;t Lie
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center p-8 rounded-xl border border-text-secondary/10 bg-background-light hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="flex justify-center mb-4 text-primary">
              {item.icon}
            </div>
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-3">
              {item.stat}
            </div>
            <p className="text-text-secondary leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
