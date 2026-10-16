import Logo from './Logo'
import { useLanguage } from '../useLanguage'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="relative overflow-hidden">
      {/* decorative radial warmth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 80% at 50% 0%, rgba(201,31,38,0.06) 0%, rgba(245,240,232,0) 70%)',
        }}
      />
      <div
        className="absolute right-3 top-3 z-10 flex rounded-full border border-[#E5DDD2] bg-white/90 p-1 shadow-sm sm:right-6 sm:top-6"
        role="group"
        aria-label={language === 'am' ? 'የቋንቋ ምርጫ' : 'Language options'}
      >
        <button
          type="button"
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
          className={`min-h-10 rounded-full px-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C91F26] ${
          language === 'en' ? 'bg-[#C91F26] text-white' : 'text-[#32190E] hover:bg-[#F5F0E8]'
          }`}
        >
          English
        </button>
        <button
          type="button"
          onClick={() => setLanguage('am')}
          aria-pressed={language === 'am'}
          className={`min-h-10 rounded-full px-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C91F26] ${
          language === 'am' ? 'bg-[#C91F26] text-white' : 'text-[#32190E] hover:bg-[#F5F0E8]'
          }`}
        >
          አማርኛ
        </button>
      </div>
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-10 pt-16 text-center sm:px-6 sm:pt-20">
        <Logo size={84} />
        <h1 className="font-display mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
          {language === 'en' ? 'Akel cafe' : 'አኬል ካፌ'}
        </h1>
        <p className="mt-3 text-lg italic text-[#71594A] sm:text-xl">
          {t('Good food, warm coffee, and a seat that feels like home.')}
        </p>
        <div className="mt-6 flex items-center gap-3 text-[#C91F26]">
          <span className="h-px w-10 bg-current opacity-50" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em]">{t('Menu')}</span>
          <span className="h-px w-10 bg-current opacity-50" />
        </div>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-[#71594A]">
          {t("Browse at your own pace — when you're ready, just call your waiter and tell them what you'd love to have.")}
        </p>
      </div>
    </header>
  )
}
