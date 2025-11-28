'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Section } from '@/components/ui'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'Do I need technical skills to use AI automation?',
    answer:
      "Not at all. We handle all the technical setup. You'll receive training on how to use and maintain your automations, but no coding is required.",
  },
  {
    question: 'How long until I see results?',
    answer:
      'Most clients see their first automation live within 2-3 weeks. ROI typically becomes clear within the first month of operation.',
  },
  {
    question: "What if I've tried AI tools before and they didn't work?",
    answer:
      'Many businesses struggle because they start with the wrong tools or lack a clear strategy. We begin with understanding YOUR specific needs, then recommend and implement only what will actually work for your situation.',
  },
  {
    question: 'What tools do you work with?',
    answer:
      "We're platform-agnostic and work with Zapier, Make.com, n8n, ChatGPT, Claude, Voiceflow, and dozens of other tools. We recommend what's best for your needs, not what's easiest for us.",
  },
  {
    question: 'What does the free strategy call include?',
    answer:
      "It's a 30-minute conversation where we learn about your business challenges and identify 2-3 quick wins you could implement. No pitch, no pressure—just value.",
  },
  {
    question: 'How is TrueBridge different from other AI consultants?',
    answer:
      "We focus on practical outcomes, not technical complexity. We lead with your business problems, not AI buzzwords. And we're transparent about pricing—you'll always know what to expect.",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-text-secondary/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between gap-4 text-left hover:text-primary transition-colors group"
      >
        <span className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
          {question}
        </span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-secondary leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section id="faq" background="gradient">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-text-primary mb-4">
          Common Questions
        </h2>
      </motion.div>

      <motion.div
        {...fadeInUp}
        className="max-w-3xl mx-auto bg-background-light rounded-xl p-8 border border-text-secondary/10"
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </motion.div>
    </Section>
  )
}
