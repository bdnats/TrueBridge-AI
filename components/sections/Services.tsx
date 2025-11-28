'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Zap, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react'
import { Button, Section } from '@/components/ui'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'AI Opportunity Audit',
    description:
      'Discover exactly where AI can save you the most time and money. We analyze your workflows and deliver a prioritized roadmap.',
    includes: [
      '2-hour discovery workshop',
      'Process audit',
      'AI opportunity report',
      'Implementation roadmap',
    ],
    price: 'Starting at $1,500',
    highlighted: false,
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Workflow Automation',
    description:
      'We build and implement custom automations that eliminate manual tasks and connect your tools seamlessly.',
    includes: [
      'Discovery session',
      '1-3 automation builds',
      'Documentation & training',
      '30-day support',
    ],
    price: 'Starting at $2,500',
    highlighted: true,
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'AI Training & Enablement',
    description:
      'Hands-on workshops that teach your team to use AI tools effectively—with custom prompts and templates for your specific needs.',
    includes: [
      'Half-day interactive workshop',
      'ChatGPT/Claude training',
      'Custom prompt templates',
      'Resource library',
    ],
    price: 'Starting at $2,500',
    highlighted: false,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

export default function Services() {
  return (
    <Section id="services" background="default">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-text-primary mb-4">
          How We Help
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={cn(
              'rounded-xl border bg-background-light p-8 transition-all duration-300',
              service.highlighted
                ? 'border-primary/30 bg-gradient-to-br from-background-light to-primary/5 shadow-xl shadow-primary/10 scale-105 lg:-mt-4'
                : 'border-text-secondary/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1'
            )}
          >
            {/* Icon */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-text-secondary mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Includes */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-text-primary mb-3">
                Includes:
              </p>
              <ul className="space-y-2">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <p className="text-xl font-bold text-primary mb-4">
              {service.price}
            </p>

            {/* CTA */}
            <Button
              variant={service.highlighted ? 'primary' : 'secondary'}
              fullWidth
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Learn More
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
