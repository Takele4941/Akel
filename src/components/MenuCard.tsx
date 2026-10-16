import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { MenuItem } from '../data/menu'
import { useLanguage } from '../useLanguage'

export default function MenuCard({ item }: { item: MenuItem }) {
  const { t } = useLanguage()
  const [isImageOpen, setIsImageOpen] = useState(false)
  const lastTouchRef = useRef(0)
  const historyKey = `menuImageViewer${useId().replaceAll(':', '')}`

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

  const handleTouchEnd = () => {
    const now = Date.now()
    if (now - lastTouchRef.current < 350) {
      setIsImageOpen(true)
      lastTouchRef.current = 0
      return
    }
    lastTouchRef.current = now
  }

  return (
    <article className="group flex w-[min(300px,calc(100vw-2rem))] shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-white shadow-[0_3px_14px_rgba(50,25,14,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_22px_rgba(50,25,14,0.12)] sm:w-[300px]">
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
        <button
          type="button"
          aria-label={`${t('Double-tap or press Enter to view')} ${t(item.name)} ${t('image')}`}
          onClick={(event) => {
            if (event.detail >= 2 || event.detail === 0) setIsImageOpen(true)
          }}
          onDoubleClick={() => setIsImageOpen(true)}
          onTouchEnd={handleTouchEnd}
          className="block h-full w-full"
        >
          <img
            src={item.image}
            alt={t(item.name)}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </button>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#32190E]/40 via-transparent to-transparent" />
        {item.badge && (
          <span className="pointer-events-none absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-full bg-[#FFFFFF] px-3 py-1 text-xs font-semibold text-[#32190E] shadow-sm">
            {item.badge.emoji} {t(item.badge.label)}
          </span>
        )}
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-[#C91F26] px-3.5 py-1.5 text-[15px] font-bold text-white shadow-[0_3px_10px_rgba(201,31,38,0.24)]">
          {item.price} <span className="text-[0.7em] font-medium">{t('ETB')}</span>
        </span>
      </div>
      <div className={`p-5 ${item.desc ? 'min-h-[11rem] flex-1' : ''}`}>
        <h3
          className={`font-display text-[1.35rem] font-semibold leading-snug text-[#32190E] sm:text-2xl ${
            item.desc ? 'min-h-[3.5rem]' : ''
          }`}
        >
          {t(item.name)}
        </h3>
        {item.desc && (
          <div className="mt-3 min-h-20 border-t border-[#E5DDD2] pt-3">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#C91F26]">
              {t('Ingredients & details')}
            </p>
            <p className="mt-1 text-base leading-6 text-[#71594A]">{t(item.desc)}</p>
          </div>
        )}
      </div>
      {isImageOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${t(item.name)} ${t('image')}`}
            className="fixed inset-0 z-[100] flex touch-none items-center justify-center overscroll-none bg-black/90 p-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) closeImage()
            }}
          >
            <button
              type="button"
              onClick={closeImage}
              aria-label={t('Close image')}
              className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-3xl leading-none text-white hover:bg-white/25"
            >
              ×
            </button>
            <img
              src={item.image}
              alt={t(item.name)}
              className="max-h-full max-w-full object-contain"
            />
          </div>,
          document.body,
        )}
    </article>
  )
}
