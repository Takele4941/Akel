import { useRef } from 'react'
import type { MenuSection as MenuSectionType } from '../data/menu'
import MenuCard from './MenuCard'
import PriceList from './PriceList'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../useLanguage'

export default function MenuSection({
  section,
}: {
  section: MenuSectionType
}) {
  const { t } = useLanguage()
  const rowRef = useRef<HTMLDivElement>(null)
  const revealRef = useReveal<HTMLElement>()
  const scrollBy = (dir: 1 | -1) => {
    rowRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  return (
    <section
      id={section.id}
      ref={revealRef}
      className="reveal scroll-mt-24 pb-7 sm:pb-10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display mt-1 text-3xl font-semibold tracking-tight text-[#32190E] sm:text-4xl md:text-[2.75rem]">
              {t(section.title)}
            </h2>
            {section.note && (
              <p className="mt-2 text-sm italic text-[#71594A]">({t(section.note)})</p>
            )}
          </div>
          {section.layout === 'cards' && (
            <div className="hidden gap-2 sm:flex">
              <button
                onClick={() => scrollBy(-1)}
                aria-label={`${t('Scroll left')} ${t(section.title)}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5DDD2] bg-white text-[#32190E] transition-colors hover:border-[#C91F26] hover:bg-[#C91F26] hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label={`${t('Scroll right')} ${t(section.title)}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5DDD2] bg-white text-[#32190E] transition-colors hover:border-[#C91F26] hover:bg-[#C91F26] hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {section.layout === 'cards' ? (
        <div
          ref={rowRef}
          className="hide-scrollbar row-fade-right mx-auto mt-8 flex w-full max-w-6xl snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-4 pt-2 scroll-pl-4 sm:gap-5 sm:px-6 sm:scroll-pl-6"
        >
          {section.items.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
          <PriceList items={section.items} />
        </div>
      )}
    </section>
  )
}
