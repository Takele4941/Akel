import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import type { MenuItem } from '../data/menu'
import { useLanguage } from '../useLanguage'

export default function MenuCard({ item }: { item: MenuItem }) {
  const { t } = useLanguage()
  const [isImageOpen, setIsImageOpen] = useState(false)
  const historyKey = `menuImageViewer${useId().replaceAll(':', '')}`
  const cardImage = item.image?.replace(
    /^\/images\/([^/]+)\.png$/i,
    '/images/optimized/$1.jpg',
  )

  useEffect(() => {
    if (!isImageOpen) return

    const currentState = window.history.state
    const nextState =
      currentState && typeof currentState === 'object' ? { ...currentState } : {}
    window.history.pushState(
      { ...nextState, [historyKey]: true },
      '',
      window.location.href,
    )

    const scrollY = window.scrollY
    const htmlStyle = document.documentElement.style
    const bodyStyle = document.body.style
    const previousStyles = {
      htmlOverflow: htmlStyle.overflow,
      htmlOverscrollBehavior: htmlStyle.overscrollBehavior,
      htmlScrollBehavior: htmlStyle.scrollBehavior,
      overflow: bodyStyle.overflow,
      overscrollBehavior: bodyStyle.overscrollBehavior,
    }

    htmlStyle.overflow = 'hidden'
    htmlStyle.overscrollBehavior = 'none'
    bodyStyle.overflow = 'hidden'
    bodyStyle.overscrollBehavior = 'none'

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') window.history.back()
    }
    const closeOnBack = () => setIsImageOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('popstate', closeOnBack)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('popstate', closeOnBack)
      htmlStyle.overflow = previousStyles.htmlOverflow
      htmlStyle.overscrollBehavior = previousStyles.htmlOverscrollBehavior
      bodyStyle.overflow = previousStyles.overflow
      bodyStyle.overscrollBehavior = previousStyles.overscrollBehavior
      htmlStyle.scrollBehavior = 'auto'
      window.scrollTo(0, scrollY)
      htmlStyle.scrollBehavior = previousStyles.htmlScrollBehavior
    }
  }, [historyKey, isImageOpen])

  const closeImage = () => {
    const currentState = window.history.state
    if (
      currentState &&
      typeof currentState === 'object' &&
      currentState[historyKey] === true
    ) {
      window.history.back()
    } else {
      setIsImageOpen(false)
    }
  }

  return (
    <article className="group min-w-0 overflow-hidden rounded-xl bg-white shadow-[0_3px_14px_rgba(50,25,14,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_22px_rgba(50,25,14,0.12)] sm:rounded-2xl">
      <button
        type="button"
        aria-label={`${t('View item details')} ${t(item.name)}`}
        onClick={() => setIsImageOpen(true)}
        className="block w-full text-left"
      >
        <div className="relative aspect-square w-full overflow-hidden">
          <img
            src={cardImage}
            alt={t(item.name)}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#32190E]/40 via-transparent to-transparent" />
          {item.badge && (
            <span className="pointer-events-none absolute left-1.5 top-1.5 max-w-[calc(100%-0.75rem)] truncate whitespace-nowrap rounded-full bg-[#FFFFFF] px-1.5 py-0.5 text-[9px] font-semibold leading-tight text-[#32190E] shadow-sm sm:left-2 sm:top-2 sm:px-2 sm:text-[11px]">
              {item.badge.emoji} {t(item.badge.label)}
            </span>
          )}
          <span className="pointer-events-none absolute bottom-1.5 right-1.5 rounded-full bg-[#C91F26] px-2 py-1 text-[11px] font-bold leading-tight text-white shadow-[0_3px_10px_rgba(201,31,38,0.24)] sm:bottom-2 sm:right-2 sm:px-2.5 sm:text-xs">
            {item.price} <span className="text-[0.7em] font-medium">{t('ETB')}</span>
          </span>
        </div>
        <div className="min-w-0 p-1.5 sm:p-2.5">
          <h3 className="font-display line-clamp-2 text-sm font-semibold leading-tight text-[#32190E] sm:text-base sm:leading-snug">
            {t(item.name)}
          </h3>
        </div>
      </button>
      {isImageOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${t(item.name)} ${t('Ingredients & details')}`}
            className="fixed inset-0 z-[100] flex touch-none items-center justify-center overscroll-none bg-black/75 p-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) closeImage()
            }}
          >
            <div className="relative max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
              <div className="relative aspect-[4/3] max-h-[55dvh] w-full overflow-hidden bg-[#F5F0E8]">
                <img src={cardImage} alt={t(item.name)} className="h-full w-full object-cover" />
                {item.badge && (
                  <span className="absolute left-3 top-3 max-w-[calc(100%-5rem)] truncate rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-[#32190E] shadow-sm">
                    {item.badge.emoji} {t(item.badge.label)}
                  </span>
                )}
                <span className="absolute bottom-3 right-3 rounded-full bg-[#C91F26] px-3.5 py-2 text-base font-bold text-white shadow-lg">
                  {item.price} <span className="text-xs font-medium">{t('ETB')}</span>
                </span>
                <button
                  type="button"
                  onClick={closeImage}
                  aria-label={t('Close details')}
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-2xl leading-none text-white hover:bg-black/70"
                >
                  ×
                </button>
              </div>
              <div className="p-5 text-left sm:p-7">
                <h2 className="font-display text-2xl font-semibold text-[#32190E] sm:text-3xl">
                  {t(item.name)}
                </h2>
                {item.desc && (
                  <div className="mt-4 border-t border-[#E5DDD2] pt-4">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#C91F26]">
                      {t('Ingredients & details')}
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#71594A]">{t(item.desc)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </article>
  )
}
