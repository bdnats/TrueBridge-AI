'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, Target } from 'lucide-react'
import { Section, AnimatedCounter } from '@/components/ui'

const stats = [
  {
    icon: <Clock className="w-8 h-8" />,
    number: 20,
    suffix: '+',
    label: 'Hours/Week',
    description: 'Average SMB time wasted on automatable tasks',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: 87,
    suffix: '%',
    label: '',
    description: 'Of marketing agencies now using AI',
  },
  {
    icon: <Target className="w-8 h-8" />,
    number: 300,
    suffix: '%',
    label: '',
    description: 'Average ROI within 12 months',
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
    <Section className="bg-bg-dark relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-text-primary mb-4">
            The Numbers Don&apos;t Lie
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Industry data shows the massive opportunity in AI automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative p-8 rounded-2xl border border-border-subtle bg-bg-card hover:border-primary-600/50 hover:bg-bg-card-hover transition-all duration-500">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-primary-600/0 group-hover:from-primary-600/10 group-hover:to-transparent rounded-2xl transition-all duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-3 rounded-xl bg-primary-600/10 text-primary-400 group-hover:bg-primary-600/20 group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Stat */}
                  <div className="text-center mb-4">
                    <div className="text-5xl md:text-6xl font-extrabold mb-1">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-accent-500">
                        <AnimatedCounter
                          target={item.number}
                          suffix={item.suffix}
                          duration={2000}
                        />
                      </span>
                      {item.label && (
                        <span className="text-2xl text-text-secondary ml-2">
                          {item.label}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
