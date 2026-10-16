import { useEffect, useRef } from 'react'

/** Adds .is-visible when the element scrolls into view (works with .reveal CSS). */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const show = () => el.classList.add('is-visible')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { threshold: 0.08 },
    )
    observer.observe(el)
    // Fallback: never leave content hidden if the observer doesn't fire
    const fallback = window.setTimeout(show, 1500)
    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return ref
}
