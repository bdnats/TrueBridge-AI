import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'default' | 'gradient' | 'mesh'
  container?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { className, background = 'default', container = true, children, ...props },
    ref
  ) => {
    const backgrounds = {
      default: 'bg-background',
      gradient: 'gradient-radial',
      mesh: 'gradient-mesh',
    }

    const content = container ? (
      <div className="container-custom">{children}</div>
    ) : (
      children
    )

    return (
      <section
        ref={ref}
        className={cn('section-padding', backgrounds[background], className)}
        {...props}
      >
        {content}
      </section>
    )
  }
)

Section.displayName = 'Section'

export default Section
