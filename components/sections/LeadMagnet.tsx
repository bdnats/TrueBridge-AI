'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, CheckCircle2 } from 'lucide-react'
import { Section } from '@/components/ui'
import LeadMagnetForm from '@/components/forms/LeadMagnetForm'

const benefits = [
  '25 tasks you can automate right now',
  'Time savings estimate for each task',
  'Difficulty rating and recommended tools',
  'Implementation priority framework',
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

export default function LeadMagnet() {
  return (
    <Section background="default">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                Free Resource
              </span>
            </div>

            <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-text-primary mb-4">
              The AI Automation Checklist
            </h2>

            <p className="text-fluid-lg text-text-secondary mb-6">
              25 Tasks Your Business Should Automate Today
            </p>

            <ul className="space-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            {...fadeInUp}
            className="bg-background-light border border-text-secondary/10 rounded-xl p-8"
          >
            <LeadMagnetForm />
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
