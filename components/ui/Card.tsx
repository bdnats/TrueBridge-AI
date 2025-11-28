import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'highlighted' | 'hover'
  icon?: React.ReactNode
  title?: string
  description?: string
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant = 'default', icon, title, description, children, ...props },
    ref
  ) => {
    const baseStyles =
      'rounded-xl border border-text-secondary/10 bg-background-light p-6 transition-all duration-300'

    const variants = {
      default: '',
      highlighted:
        'border-primary/30 bg-gradient-to-br from-background-light to-primary/5',
      hover:
        'hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer',
    }

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="mb-2 text-xl font-bold text-text-primary">{title}</h3>
        )}
        {description && (
          <p className="text-text-secondary leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
