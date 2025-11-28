'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Shield } from 'lucide-react'
import { Button, Section } from '@/components/ui'

const features = [
  { icon: <Shield className="w-4 h-4" />, text: 'Free' },
  { icon: <Clock className="w-4 h-4" />, text: '30 minutes' },
  { icon: <Calendar className="w-4 h-4" />, text: 'No obligation' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

export default function FinalCTA() {
  return (
    <Section
      id="final-cta"
      background="mesh"
      className="relative overflow-hidden"
    >
      <motion.div
        {...fadeInUp}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-text-primary mb-6">
          Ready to Stop Wasting Time on Manual Tasks?
        </h2>

        <p className="text-fluid-lg md:text-fluid-xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
          Book a free 30-minute strategy call. No pitch, no pressure—just a
          conversation about how AI could help your business.
        </p>

        <div className="mb-8">
          <Button
            size="lg"
            onClick={() => {
              // In production, this would open a calendar booking widget
              window.open('https://calendly.com', '_blank')
            }}
          >
            Book Your Free Call
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-text-secondary">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              {feature.icon}
              <span className="font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -z-0 opacity-30" />
    </Section>
  )
}
