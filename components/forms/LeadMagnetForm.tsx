'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button, Input } from '@/components/ui'
import { CheckCircle2 } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function LeadMagnetForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-success/10 border border-success/30 rounded-xl">
        <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          Success!
        </h3>
        <p className="text-text-secondary">
          Check your email for the AI Automation Checklist. We've sent it to your inbox.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Name"
        placeholder="Your name"
        error={errors.name?.message}
        fullWidth
        {...register('name')}
      />
      <Input
        label="Email"
        type="email"
        placeholder="your@email.com"
        error={errors.email?.message}
        fullWidth
        {...register('email')}
      />
      <Input
        label="Company (optional)"
        placeholder="Your company name"
        error={errors.company?.message}
        fullWidth
        {...register('company')}
      />
      <Button type="submit" fullWidth isLoading={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Get the Free Checklist'}
      </Button>
    </form>
  )
}
