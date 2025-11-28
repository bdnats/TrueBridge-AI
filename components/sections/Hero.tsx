'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button, Section } from '@/components/ui'
import { scrollToSection } from '@/lib/utils'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const trustIndicators = [
  'Trusted by 15+ growing businesses',
  'Zapier Certified Partner',
  'Make.com Partner',
]

export default function Hero() {
  return (
    <Section
      background="mesh"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="text-center max-w-5xl mx-auto"
      >
        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-fluid-4xl md:text-fluid-5xl font-bold text-text-primary mb-6 leading-tight text-balance"
        >
          Your Team is Spending{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            20+ Hours/Week
          </span>{' '}
          on Tasks AI Can Handle in Minutes
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          className="text-fluid-lg md:text-fluid-xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          We build custom automation systems that save time, cut costs, and let
          you scale—without the technical complexity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('final-cta')}
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            Book Your Free AI Assessment
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection('how-it-works')}
          >
            See How It Works
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center text-text-secondary text-sm"
        >
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>{indicator}</span>
            </div>
          ))}
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary to-accent rounded-full blur-3xl -z-10"
        />
      </motion.div>
    </Section>
  )
}
