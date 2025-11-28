'use client'

import React from 'react'
import { Linkedin, Mail } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'
import Image from 'next/image'

const quickLinks = [
  { label: 'Services', href: 'services' },
  { label: 'How It Works', href: 'how-it-works' },
  { label: 'FAQ', href: 'faq' },
]

export default function Footer() {
  return (
    <footer className="bg-background-light border-t border-text-secondary/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo-light.svg"
                  alt="TrueBridge AI"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-text-primary">
                TrueBridge AI
              </span>
            </div>
            <p className="text-text-secondary max-w-md">
              Bridging the gap between businesses and AI
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@truebridgeai.com"
                className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@truebridgeai.com</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-text-secondary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} TrueBridge AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-text-secondary hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="text-text-secondary hover:text-primary transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
