'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Map, Rocket, HeadphonesIcon } from 'lucide-react'
import { Button, Section } from '@/components/ui'
import { scrollToSection } from '@/lib/utils'

const steps = [
  {
    number: 1,
    icon: <Search className="w-6 h-6" />,
    title: 'Discovery',
    description:
      'We learn about your business, workflows, and biggest time-wasters',
  },
  {
    number: 2,
    icon: <Map className="w-6 h-6" />,
    title: 'Roadmap',
    description: 'You receive a prioritized plan with clear ROI projections',
  },
  {
    number: 3,
    icon: <Rocket className="w-6 h-6" />,
    title: 'Implementation',
    description: 'We build and deploy your custom automation solutions',
  },
  {
    number: 4,
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: 'Support',
    description: 'Ongoing optimization to ensure lasting results',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

export default function HowItWorks() {
  return (
    <Section id="how-it-works" background="gradient">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-text-primary mb-4">
          The TrueBridge Method
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        {/* Desktop Timeline */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-primary/30 -z-10" />
              )}

              {/* Step */}
              <div className="flex flex-col items-center text-center">
                {/* Number Badge */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 border-2 border-primary text-primary font-bold text-xl">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-4"
            >
              {/* Number Badge */}
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 border-2 border-primary text-primary font-bold">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 pb-6 border-b border-text-secondary/10 last:border-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeInUp} className="text-center">
          <Button size="lg" onClick={() => scrollToSection('final-cta')}>
            Start With a Free Strategy Call
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
