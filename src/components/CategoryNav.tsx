import { useEffect, useRef, useState } from 'react'
import { SECTIONS } from '../data/menu'
import { useLanguage } from '../useLanguage'

export default function CategoryNav() {
  const { t } = useLanguage()
  const [active, setActive] = useState(SECTIONS[0].id)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // keep the active pill in view
  useEffect(() => {
    const list = listRef.current
    const pill = list?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`)
    if (list && pill) {
      const left = pill.offsetLeft - list.clientWidth / 2 + pill.clientWidth / 2
      list.scrollTo({ left, behavior: 'smooth' })
    }
  }, [active])

  return (
    <nav className="sticky top-0 z-40 border-b border-[#E5DDD2] bg-[#F5F0E8]/95 backdrop-blur-md">
      <div
        ref={listRef}
        className="hide-scrollbar row-fade mx-auto flex max-w-6xl snap-x snap-proximity gap-2 overflow-x-auto overscroll-x-contain px-3 py-3"
      >
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`flex min-h-[44px] shrink-0 snap-start items-center whitespace-nowrap rounded-full px-4 py-2 text-[15px] font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C91F26] ${
              active === s.id
                ? 'bg-[#C91F26] text-white shadow-[0_3px_10px_rgba(201,31,38,0.2)]'
                : 'bg-[#FFFFFF]/75 text-[#32190E] hover:bg-white'
            }`}
          >
            {t(s.title)}
          </a>
        ))}
      </div>
    </nav>
  )
}
