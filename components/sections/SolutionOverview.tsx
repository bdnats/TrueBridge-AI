'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Clock, DollarSign, TrendingUp } from 'lucide-react'
import { Card, Section } from '@/components/ui'

const outcomes = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Save Time',
    description: 'Reclaim 10-20 hours per week by automating repetitive tasks',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Cut Costs',
    description: 'Reduce operational expenses without sacrificing quality',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Scale Smarter',
    description: 'Grow your capacity without growing your headcount',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

export default function SolutionOverview() {
  return (
    <Section background="gradient">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-text-primary mb-6">
          There&apos;s a Better Way
        </h2>
        <p className="text-fluid-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
          TrueBridge AI bridges the gap between your business and practical AI
          solutions. No jargon. No complexity. Just automation that works—so you
          can focus on what actually grows your business.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {outcomes.map((outcome, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card
              variant="highlighted"
              icon={outcome.icon}
              title={outcome.title}
              description={outcome.description}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
