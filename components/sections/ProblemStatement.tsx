'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, Clock, TrendingDown } from 'lucide-react'
import { Card, Section } from '@/components/ui'

const painPoints = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Drowning in Repetitive Tasks',
    description:
      "Your team's day is consumed by data entry, follow-ups, and busywork that eat up valuable time.",
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: 'Overwhelmed by AI Options',
    description:
      'With countless AI tools available, you have no idea where to start or what will actually work for your business.',
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: 'Falling Behind Competitors',
    description:
      "You're watching competitors automate and scale while you're stuck in manual mode, losing ground.",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

export default function ProblemStatement() {
  return (
    <Section background="default">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-text-primary mb-4">
          Sound Familiar?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {painPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card
              variant="hover"
              icon={point.icon}
              title={point.title}
              description={point.description}
            />
          </motion.div>
        ))}
      </div>

      <motion.p
        {...fadeInUp}
        className="text-center text-fluid-lg text-text-secondary max-w-3xl mx-auto"
      >
        You didn&apos;t start your business to spend hours on data entry,
        follow-ups, and busywork.
      </motion.p>
    </Section>
  )
}
