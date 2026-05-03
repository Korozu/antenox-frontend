import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'glitch'
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const getAnimationClass = () => {
    const baseClasses = 'transition-all ease-out'

    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClasses} duration-[900ms] opacity-0 translate-y-12 blur-[1px]`
        case 'down':
          return `${baseClasses} duration-[900ms] opacity-0 -translate-y-12 blur-[1px]`
        case 'left':
          return `${baseClasses} duration-[900ms] opacity-0 translate-x-12 blur-[1px]`
        case 'right':
          return `${baseClasses} duration-[900ms] opacity-0 -translate-x-12 blur-[1px]`
        case 'fade':
          return `${baseClasses} duration-[800ms] opacity-0`
        case 'glitch':
          return `${baseClasses} duration-[700ms] opacity-0 translate-x-[-3px] translate-y-1`
        default:
          return `${baseClasses} duration-[900ms] opacity-0 translate-y-12 blur-[1px]`
      }
    }

    return `${baseClasses} duration-[900ms] opacity-100 translate-y-0 translate-x-0 blur-0`
  }

  const getGlitchOverlays = () => {
    if (direction !== 'glitch' || isVisible) return null

    return (
      <>
        <div className="absolute inset-0 opacity-40 translate-x-[2px] -translate-y-[1px] text-[#ff0000] pointer-events-none">
          {children}
        </div>
        <div className="absolute inset-0 opacity-30 -translate-x-[2px] translate-y-[1px] text-[#2D4B73] pointer-events-none">
          {children}
        </div>
      </>
    )
  }

  return (
    <div
      ref={ref}
      className={`relative ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {getGlitchOverlays()}
      {children}
    </div>
  )
}
