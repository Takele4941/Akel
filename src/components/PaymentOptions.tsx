import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../useLanguage'

const PAYMENT_DETAILS = [
  {
    name: 'Commercial Bank of Ethiopia',
    image: '/images/commercial_bank_of_Ethiopia.png',
    numbers: ['1000247173904'],
  },
  {
    name: 'Bank of Abyssinia',
    image: '/images/bank_of_abyssinia.png',
    numbers: ['266550324'],
  },
  {
    name: 'Telebirr',
    image: '/images/telebirr.png',
    numbers: ['0949416865', '0988366411'],
  },
]

export default function PaymentOptions() {
  const { t } = useLanguage()
  const [copyState, setCopyState] = useState<Record<string, string>>({})
  const copyTimers = useRef<Record<string, number>>({})

  useEffect(
    () => () => {
      Object.values(copyTimers.current).forEach(window.clearTimeout)
    },
    [],
  )

  const copyWithFallback = async (number: string) => {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(number)
        return
      } catch {
        // Fall through to the legacy clipboard command where permissions allow it.
      }
    }

    const input = document.createElement('textarea')
    input.value = number
    input.setAttribute('readonly', '')
    input.style.position = 'fixed'
    input.style.opacity = '0'
    document.body.appendChild(input)
    input.select()
    input.setSelectionRange(0, input.value.length)
    const copied = document.execCommand('copy')
    document.body.removeChild(input)

    if (!copied) {
      throw new Error('Could not copy number. Please select and copy it manually.')
    }
  }

  const copyNumber = async (number: string) => {
    try {
      await copyWithFallback(number)
      setCopyState((state) => ({ ...state, [number]: 'Copied' }))
      window.clearTimeout(copyTimers.current[number])
      copyTimers.current[number] = window.setTimeout(() => {
        setCopyState((state) => ({ ...state, [number]: '' }))
        delete copyTimers.current[number]
      }, 1600)
    } catch (error) {
      setCopyState((state) => ({
        ...state,
        [number]:
          error instanceof Error
            ? t(error.message)
            : t('Could not copy number. Please select and copy it manually.'),
      }))
    }
  }

  return (
    <section className="py-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[#32190E] sm:text-4xl md:text-[2.75rem]">
          {t('Payment Options')}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {PAYMENT_DETAILS.map((method) => (
            <div
              key={method.name}
              className="rounded-3xl bg-white p-4 shadow-[0_3px_14px_rgba(50,25,14,0.08)] sm:p-6"
            >
              <h3 className="font-display flex min-w-0 items-center gap-3 text-xl font-semibold text-[#32190E]">
                <img src={method.image} alt="" className="h-10 w-10 shrink-0 object-contain" />
                <span className="min-w-0 break-words">{t(method.name)}</span>
              </h3>
              <p className="mt-3 text-sm text-[#71594A]">
                {t('Account name')}: <span className="font-semibold text-[#32190E]">Takele Yirgu</span>
              </p>
              <ul className="mt-4 space-y-3">
                {method.numbers.map((number) => (
                  <li key={number}>
                    <div className="flex w-full items-center justify-between gap-3">
                      <span className="font-semibold tracking-wide">{number}</span>
                      <button
                        type="button"
                        onClick={() => void copyNumber(number)}
                        className="min-h-11 rounded-full bg-[#C91F26] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#C91F26]/90"
                        aria-label={`${t('Copy')} ${number}`}
                      >
                        {copyState[number] === 'Copied' ? t('Copied') : t('Copy')}
                      </button>
                    </div>
                    {copyState[number] && copyState[number] !== 'Copied' && (
                      <p role="status" className="mt-2 text-sm text-[#C91F26]">
                        {t(copyState[number])}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
