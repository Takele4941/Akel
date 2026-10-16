import type { MenuItem } from '../data/menu'
import { useLanguage } from '../useLanguage'

export default function PriceList({ items }: { items: MenuItem[] }) {
  const { t } = useLanguage()
  return (
    <ul className="grid gap-x-14 gap-y-5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.name} className="flex items-baseline gap-3">
          <div className="min-w-0">
            <span className="font-display text-xl font-semibold leading-snug text-[#32190E]">{t(item.name)}</span>
            {item.badge && (
              <span className="ml-2 whitespace-nowrap text-xs font-semibold text-[#71594A]">
                {item.badge.emoji} {t(item.badge.label)}
              </span>
            )}
          </div>
          <span className="mx-1 flex-1 border-b border-dotted border-[#71594A]/50" />
          <span className="whitespace-nowrap text-lg font-bold text-[#C91F26]">
            {item.price} <span className="text-xs font-medium">{t('ETB')}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}
