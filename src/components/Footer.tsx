import { CONTACTS } from '../data/menu'
import Logo from './Logo'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../useLanguage'

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function TiktokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

export default function Footer() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLElement>()
  return (
    <footer ref={ref} className="reveal bg-[#32190E] text-[#F5F0E8]">
      <div className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 sm:py-20">
        <div className="mx-auto w-fit rounded-full bg-[#F5F0E8]/10 p-3">
          <Logo size={56} />
        </div>
        <h2 className="font-display mt-6 text-3xl font-semibold sm:text-4xl">
          {t('Thank you for dining with us')}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#F5F0E8]/80">
          {t('Every plate and every cup at Akel Cafe is made with care. We hope to see you again soon — come hungry, leave happy.')}
        </p>

        <div className="mx-auto mt-10 flex max-w-lg flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {CONTACTS.phones.map((p) => (
            <a
              key={p}
              href={`tel:${p.replace(/\s/g, '')}`}
              className="flex min-h-[48px] items-center justify-center gap-2.5 rounded-full border border-[#F5F0E8]/30 px-5 py-3 text-sm font-semibold transition-colors hover:border-[#C91F26] hover:bg-[#C91F26]"
            >
              <PhoneIcon /> {p}
            </a>
          ))}
          <a
            href={`mailto:${CONTACTS.email}`}
            className="flex min-h-[48px] items-center justify-center gap-2.5 rounded-full border border-[#F5F0E8]/30 px-5 py-3 text-sm font-semibold transition-colors hover:border-[#C91F26] hover:bg-[#C91F26]"
          >
            <MailIcon /> <span className="min-w-0 break-all">{CONTACTS.email}</span>
          </a>
          {/* TODO: replace href="" with the cafe's Instagram profile link */}
          <a
            href={CONTACTS.instagram || '#'}
            target="_blank"
            rel="noreferrer"
            aria-label={t('Akel Cafe on Instagram')}
            className="flex min-h-[48px] items-center justify-center gap-2.5 rounded-full border border-[#F5F0E8]/30 px-5 py-3 text-sm font-semibold transition-colors hover:border-[#C91F26] hover:bg-[#C91F26]"
          >
            <InstagramIcon /> {t('Instagram')}
          </a>
          {/* TODO: replace href="" with the cafe's TikTok profile link */}
          <a
            href={CONTACTS.tiktok || '#'}
            target="_blank"
            rel="noreferrer"
            aria-label={t('Akel Cafe on TikTok')}
            className="flex min-h-[48px] items-center justify-center gap-2.5 rounded-full border border-[#F5F0E8]/30 px-5 py-3 text-sm font-semibold transition-colors hover:border-[#C91F26] hover:bg-[#C91F26]"
          >
            <TiktokIcon /> {t('TikTok')}
          </a>
        </div>

        <p className="mt-12 border-t border-[#F5F0E8]/20 pt-6 text-xs text-[#F5F0E8]/70">
          {t('All listed prices include 15% VAT · Akel Cafe')}
        </p>
      </div>
    </footer>
  )
}
