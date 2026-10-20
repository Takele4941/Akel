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
  const revealRef = useReveal<HTMLElement>()

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
        </div>
      </div>

      {section.layout === 'cards' ? (
        <div
          className="mx-auto mt-5 grid w-full max-w-6xl grid-cols-2 gap-2 px-4 pb-4 sm:mt-8 sm:gap-4 sm:px-6 md:grid-cols-3 xl:grid-cols-4"
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
