import { useEffect, useRef, useState } from 'react'

// Ativa a transição uma única vez, quando a secção entra no ecrã.
export function useRevealOnScroll<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}
