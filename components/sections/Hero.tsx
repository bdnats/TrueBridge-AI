'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { Button, Section } from '@/components/ui'
import { GradientMesh, GridPattern } from '@/components/effects'
import { scrollToSection } from '@/lib/utils'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
} as const

const trustIndicators = [
  { text: 'Trusted by growing businesses', icon: CheckCircle2 },
  { text: 'Zapier Certified', icon: CheckCircle2 },
  { text: 'Make.com Partner', icon: CheckCircle2 },
  { text: '4.9★ Rating', icon: Star },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-gradient-start via-bg-dark to-bg-gradient-end">
      {/* Animated gradient background */}
      <GradientMesh />

      {/* Grid pattern overlay */}
      <GridPattern />

      {/* Content */}
      <div className="relative z-10 w-full">
        <Section container className="!py-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto"
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-fluid-4xl md:text-fluid-5xl font-extrabold text-text-primary mb-6 leading-tight"
            >
              Your Team is Spending{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 blur-2xl opacity-50" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-500">
                  20+ Hours/Week
                </span>
              </span>{' '}
              on Tasks AI Can Handle in Minutes
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-fluid-lg md:text-fluid-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We build custom automation systems that save time, cut costs, and
              let you scale—without the technical complexity.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('final-cta')}
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Book Your Free AI Assessment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection('how-it-works')}
                className="relative group"
              >
                <span className="relative z-10">See How It Works</span>
                <div className="absolute inset-0 bg-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>

            {/* Trust Bar */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 justify-center items-center"
            >
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-text-secondary text-sm group"
                  >
                    <Icon className="w-4 h-4 text-primary-400 group-hover:text-primary-300 transition-colors" />
                    <span className="group-hover:text-text-primary transition-colors">
                      {indicator.text}
                    </span>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>
        </Section>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-border-subtle flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary-400 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
